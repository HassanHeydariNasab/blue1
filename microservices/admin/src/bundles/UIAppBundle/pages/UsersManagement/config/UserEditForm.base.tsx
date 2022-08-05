/** @overridable */
import { XRouter, use, IComponents, QueryBodyType } from "@bluelibs/x-ui";
import { XForm } from "@bluelibs/x-ui-admin";
import { Service, Inject } from "@bluelibs/core";
import { SmileOutlined } from "@ant-design/icons";
import { Routes } from "@bundles/UIAppBundle";
import * as Ant from "antd";
import { User, UsersCollection } from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class UserEditForm extends XForm {
  @Inject(() => UsersCollection)
  collection: UsersCollection;

  build() {
    const { UIComponents } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "roles",
        label: t("management.users.fields.roles"),
        name: ["roles"],
        required: true,
        initialValue: [],
        render: (props) => {
          const options = [
            { value: "ADMIN", label: "Admin" },
            { value: "SALES", label: "Sales" },
            { value: "MANAGER", label: "Manager" },
            { value: "END_CUSTOMER", label: "End Customer" },
          ];
          return (
            <Ant.Form.Item {...props}>
              <Ant.Select
                mode="multiple"
                placeholder={t("management.users.fields.roles")}
              >
                {options.map((option) => (
                  <Ant.Select.Option value={option.value} key={option.value}>
                    {t(
                      `management.users.fields.roles_enums.${option.label.toLowerCase()}`
                    )
                      ? t(
                          `management.users.fields.roles_enums.${option.label.toLowerCase()}`
                        )
                      : option.label}
                  </Ant.Select.Option>
                ))}
              </Ant.Select>
            </Ant.Form.Item>
          );
        },
      },

      {
        id: "isEnabled",
        label: t("management.users.fields.isEnabled"),
        name: ["isEnabled"],
        required: true,
        render: (props) => (
          <Ant.Form.Item {...props}>
            <Ant.Radio.Group>
              <Ant.Radio value={false} key={0}>
                No
              </Ant.Radio>
              <Ant.Radio value={true} key={1}>
                Yes
              </Ant.Radio>
            </Ant.Radio.Group>
          </Ant.Form.Item>
        ),
      },

      {
        id: "profile",
        label: t("management.users.fields.profile"),
        name: ["profile"],
        required: true,
        nest: [
          {
            id: "firstName",
            label: t("management.users.fields.profile.firstName"),
            name: ["profile", "firstName"],
            required: true,
            component: Ant.Input,
          },

          {
            id: "lastName",
            label: t("management.users.fields.profile.lastName"),
            name: ["profile", "lastName"],
            required: true,
            component: Ant.Input,
          },
        ],
      },
    ]);
  }

  static getRequestBody(): QueryBodyType<User> {
    return {
      _id: 1,
      roles: 1,
      isEnabled: 1,
      profile: {
        firstName: 1,
        lastName: 1,
      },
    };
  }

  onSubmit(_id, values: Partial<User>): Promise<void> {
    const { t } = this.i18n;

    return this.collection
      .updateOne(_id, { $set: values })
      .then(({ _id }) => {
        Ant.notification.success({
          message: t("generics.success"),
          description: t("management.users.edit_confirmation"),
          icon: <SmileOutlined />,
        });
      })
      .catch((err) => {
        Ant.notification.warn({
          message: t("generics.error"),
          description: t("generics.error_message"),
        });
      });
  }
}

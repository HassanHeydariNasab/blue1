/** @overridable */
import { notification } from "antd";
import { XFormElementType, XList, XForm } from "@bluelibs/x-ui-admin";
import { Service } from "@bluelibs/core";
import { IComponents, XRouter, use } from "@bluelibs/x-ui";
import * as Ant from "antd";
import { User, UsersCollection } from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class UserListFiltersForm extends XForm {
  build() {
    const { UIComponents } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "roles",
        label: t("management.users.fields.roles"),
        name: ["roles"],
        render: (props) => (
          <Ant.Form.Item {...props}>
            <Ant.Select
              mode="multiple"
              placeholder={t("management.users.fields.roles")}
            >
              <Ant.Select.Option value="ADMIN" key="ADMIN">
                Admin
              </Ant.Select.Option>
              <Ant.Select.Option value="SALES" key="SALES">
                Sales
              </Ant.Select.Option>
              <Ant.Select.Option value="MANAGER" key="MANAGER">
                Manager
              </Ant.Select.Option>
              <Ant.Select.Option value="END_CUSTOMER" key="END_CUSTOMER">
                End Customer
              </Ant.Select.Option>
            </Ant.Select>
          </Ant.Form.Item>
        ),
      },

      {
        id: "updatedAt",
        label: t("management.users.fields.updatedAt"),
        name: ["updatedAt"],
        tooltip: t("management.users.fields.updatedAt_description"),
        render: (props) => (
          <Ant.Form.Item {...props}>
            <Ant.DatePicker.RangePicker />
          </Ant.Form.Item>
        ),
      },

      {
        id: "createdAt",
        label: t("management.users.fields.createdAt"),
        name: ["createdAt"],
        tooltip: t("management.users.fields.createdAt_description"),
        render: (props) => (
          <Ant.Form.Item {...props}>
            <Ant.DatePicker.RangePicker />
          </Ant.Form.Item>
        ),
      },

      {
        id: "isEnabled",
        label: t("management.users.fields.isEnabled"),
        name: ["isEnabled"],
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
        columns: true,
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

      {
        id: "createdById",
        label: t("management.users.fields.createdBy"),
        name: ["createdById"],
        tooltip: t("management.users.fields.createdBy_description"),
        render: (props) => (
          <Ant.Form.Item {...props}>
            <UIComponents.RemoteSelect
              collectionClass={UsersCollection}
              field="fullName"
              placeholder="Please select an option"
              mode="multiple"
            />
          </Ant.Form.Item>
        ),
      },

      {
        id: "updatedById",
        label: t("management.users.fields.updatedBy"),
        name: ["updatedById"],
        tooltip: t("management.users.fields.updatedBy_description"),
        render: (props) => (
          <Ant.Form.Item {...props}>
            <UIComponents.RemoteSelect
              collectionClass={UsersCollection}
              field="fullName"
              placeholder="Please select an option"
              mode="multiple"
            />
          </Ant.Form.Item>
        ),
      },
    ]);
  }
}

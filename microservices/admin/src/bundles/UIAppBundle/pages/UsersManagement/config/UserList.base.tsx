/** @overridable */
import { notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { XFormElementType, XList, XForm } from "@bluelibs/x-ui-admin";
import { Routes } from "@bundles/UIAppBundle";
import { Service } from "@bluelibs/core";
import { IComponents, XRouter, use, QueryBodyType } from "@bluelibs/x-ui";
import * as Ant from "antd";
import { User, UsersCollection } from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class UserList extends XList<User> {
  build() {
    const { UIComponents, router } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "email",
        title: t("management.users.fields.email"),
        key: "management.users.fields.email",
        dataIndex: ["email"],
        sorter: true,
        render: (value, model) => {
          const props = {
            type: "string",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "fullName",
        title: t("management.users.fields.fullName"),
        key: "management.users.fields.fullName",
        dataIndex: ["fullName"],
        sorter: true,
        render: (value, model) => {
          const props = {
            type: "string",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "roles",
        title: t("management.users.fields.roles"),
        key: "management.users.fields.roles",
        dataIndex: ["roles"],
        sorter: true,
        render: (value, model) => {
          return (
            <>
              {value &&
                value.map((value: any, idx: number) => {
                  const props = {
                    type: "enum",
                    value,
                    labelify: true,
                  };
                  return (
                    <UIComponents.AdminListItemRenderer {...props} key={idx} />
                  );
                })}
            </>
          );
        },
      },
      {
        id: "updatedAt",
        title: t("management.users.fields.updatedAt"),
        key: "management.users.fields.updatedAt",
        dataIndex: ["updatedAt"],
        sorter: true,
        render: (value, model) => {
          const props = {
            type: "date",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "createdAt",
        title: t("management.users.fields.createdAt"),
        key: "management.users.fields.createdAt",
        dataIndex: ["createdAt"],
        sorter: true,
        render: (value, model) => {
          const props = {
            type: "date",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "isEnabled",
        title: t("management.users.fields.isEnabled"),
        key: "management.users.fields.isEnabled",
        dataIndex: ["isEnabled"],
        sorter: true,
        render: (value, model) => {
          const props = {
            type: "boolean",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "profile.firstName",
        title: t("management.users.fields.profile.firstName"),
        key: "management.users.fields.profile.firstName",
        dataIndex: ["profile", "firstName"],
        sorter: true,
        render: (value, model) => {
          const props = {
            type: "string",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "profile.lastName",
        title: t("management.users.fields.profile.lastName"),
        key: "management.users.fields.profile.lastName",
        dataIndex: ["profile", "lastName"],
        sorter: true,
        render: (value, model) => {
          const props = {
            type: "string",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "createdBy",
        title: t("management.users.fields.createdBy"),
        key: "management.users.fields.createdBy",
        dataIndex: ["createdBy"],
        sorter: true,
        render: (value, model) => {
          const props = {
            type: "relation",
            value,
            relation: {
              path: router.path(Routes.USERS_VIEW, {
                params: {
                  id: value?._id,
                },
              }),
              dataIndex: "fullName",
            },
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "updatedBy",
        title: t("management.users.fields.updatedBy"),
        key: "management.users.fields.updatedBy",
        dataIndex: ["updatedBy"],
        sorter: true,
        render: (value, model) => {
          const props = {
            type: "relation",
            value,
            relation: {
              path: router.path(Routes.USERS_VIEW, {
                params: {
                  id: value?._id,
                },
              }),
              dataIndex: "fullName",
            },
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
    ]);
  }

  static getSortMap() {
    return {
      createdBy: "createdBy.fullName",
      updatedBy: "updatedBy.fullName",
    };
  }

  static getRequestBody(): QueryBodyType<User> {
    return {
      _id: 1,
      email: 1,
      fullName: 1,
      roles: 1,
      updatedAt: 1,
      createdAt: 1,
      isEnabled: 1,
      profile: {
        firstName: 1,
        lastName: 1,
      },
      createdBy: {
        _id: 1,
        fullName: 1,
      },
      createdById: 1,
      updatedBy: {
        _id: 1,
        fullName: 1,
      },
      updatedById: 1,
    };
  }
}

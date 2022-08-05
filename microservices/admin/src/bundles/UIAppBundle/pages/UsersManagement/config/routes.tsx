/** @overridable */
import { IRoute } from "@bluelibs/x-ui";
import * as React from "react";
import { UsersList } from "../components/List/UsersList";
import { UsersCreate } from "../components/Create/UsersCreate";
import { UsersEdit } from "../components/Edit/UsersEdit";
import { UsersView } from "../components/View/UsersView";

import { SettingFilled } from "@ant-design/icons";

export const USERS_LIST: IRoute = {
  path: "/admin/users",
  component: UsersList,
  menu: {
    key: "USERS_LIST",
    label: "management.users.menu.title",
    icon: SettingFilled,
  },
};

export const USERS_CREATE: IRoute = {
  path: "/admin/users/create",
  component: UsersCreate,
};

export const USERS_EDIT: IRoute<{ id: string }> = {
  path: "/admin/users/:id/edit",
  component: UsersEdit,
};

export const USERS_VIEW: IRoute<{ id: string }> = {
  path: "/admin/users/:id/view",
  component: UsersView,
};

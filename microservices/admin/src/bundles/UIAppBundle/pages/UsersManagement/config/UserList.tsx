import { Service } from "@bluelibs/core";
import { QueryBodyType } from "@bluelibs/x-ui";
import { User } from "@bundles/UIAppBundle/collections";
import { UserList as BaseUserList } from "./UserList.base";

@Service({ transient: true })
export class UserList extends BaseUserList {
  build() {
    super.build();
    // Perform additional modifications such as updating how a list item renders or add additional ones
  }

  static getRequestBody(): QueryBodyType<User> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}

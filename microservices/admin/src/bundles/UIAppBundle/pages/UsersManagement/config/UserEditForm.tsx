import { Service } from "@bluelibs/core";
import { UserEditForm as BaseUserEditForm } from "./UserEditForm.base";
import { QueryBodyType } from "@bluelibs/x-ui";
import { User } from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class UserEditForm extends BaseUserEditForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }

  static getRequestBody(): QueryBodyType<User> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}

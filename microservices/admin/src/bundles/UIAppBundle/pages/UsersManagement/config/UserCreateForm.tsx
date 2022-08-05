import { Service } from "@bluelibs/core";
import { UserCreateForm as BaseUserCreateForm } from "./UserCreateForm.base";

@Service({ transient: true })
export class UserCreateForm extends BaseUserCreateForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }
}

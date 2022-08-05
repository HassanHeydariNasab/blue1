import { Service } from "@bluelibs/core";
import { UserListFiltersForm as BaseUserListFiltersForm } from "./UserListFiltersForm.base";

@Service({ transient: true })
export class UserListFiltersForm extends BaseUserListFiltersForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }
}

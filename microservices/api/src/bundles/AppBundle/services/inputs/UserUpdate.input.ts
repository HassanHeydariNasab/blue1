import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { UserUpdateInput as BaseUserUpdateInput } from "./UserUpdate.input.base";

@Schema()
export class UserUpdateInput extends BaseUserUpdateInput {
  // You can extend the base here
}

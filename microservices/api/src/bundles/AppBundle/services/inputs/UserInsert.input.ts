import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { UserInsertInput as BaseUserInsertInput } from "./UserInsert.input.base";

@Schema()
export class UserInsertInput extends BaseUserInsertInput {
  // You can extend the base here
}

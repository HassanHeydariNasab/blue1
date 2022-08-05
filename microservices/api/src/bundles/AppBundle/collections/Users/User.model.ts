export * from "./User.model.base";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { User as BaseUser } from "./User.model.base";
export { UserProfile } from "./User.model.base";
export { UserRole } from "./enums/UserRole.enum";

@Schema()
export class User extends BaseUser {
  // You can extend the base here
}

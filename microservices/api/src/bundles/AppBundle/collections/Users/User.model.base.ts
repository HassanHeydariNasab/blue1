/** @overridable */
import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { IPasswordAuthenticationStrategy } from "@bluelibs/password-bundle";
import { UserRole } from "./enums/UserRole.enum";
export { UserRole };

@Schema()
export class UserProfile {
  @Is(a.string().required())
  firstName: string;

  @Is(a.string().required())
  lastName: string;
}

@Schema()
export class User {
  @Is(an.objectId())
  _id?: ObjectId;

  /**
   * @description Represents the date when this object was created
   */
  @Is(a.date().required())
  createdAt: Date;

  /**
   * @description Represents the user who has created this object
   */
  createdBy?: User;

  /**
   * @description Represents the user's id who has created this object
   */
  @Is(an.objectId().nullable())
  createdById?: ObjectId;

  email: string;

  fullName: string;

  /**
   * @description This field is used to identify if this object has been soft-deleted
   */
  @Is(a.boolean().nullable())
  isDeleted?: boolean;

  @Is(a.boolean().required())
  isEnabled: boolean;

  /**
   * @description This is the model that stores password authentication data such as emails, hashed password, salt and other security related data
   */
  password: IPasswordAuthenticationStrategy;

  @Is(() => Schema.from(UserProfile))
  profile: UserProfile;

  @Is(
    an
      .array()
      .of(a.string().oneOf(Object.values(UserRole).concat(null)))
      .required()
  )
  roles: UserRole[];

  /**
   * @description Represents the last time when the object was updated
   */
  @Is(a.date().required())
  updatedAt: Date;

  /**
   * @description Represents the user who has made the latest update on this object
   */
  updatedBy?: User;

  /**
   * @description Represents the user's id who has made the latest update on this object
   */
  @Is(an.objectId().nullable())
  updatedById?: ObjectId;
}

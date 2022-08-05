/** @overridable */
import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";

@Schema()
export class AddressInput {
  @Is(a.string().required())
  city: string;

  @Is(a.string().required())
  country: string;
}

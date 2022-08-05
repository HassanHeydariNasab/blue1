import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";

@Schema()
export class Address {
  @Is(a.string().required())
  city: string;

  @Is(a.string().required())
  country: string;
}

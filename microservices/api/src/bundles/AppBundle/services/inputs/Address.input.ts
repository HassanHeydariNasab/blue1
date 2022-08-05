import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { AddressInput as BaseAddressInput } from "./Address.input.base";

@Schema()
export class AddressInput extends BaseAddressInput {
  // You can extend the base here
}

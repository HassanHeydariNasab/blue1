import { BaseBundle } from "@bluelibs/x-bundle";
import * as listeners from "./listeners";
import * as collections from "./collections";
import * as validators from "./validators";
import * as fixtures from "./fixtures";

import graphqlModule from "./graphql";

export class AppBundle extends BaseBundle<any> {
  async prepare() {
    this.setupBundle({
      listeners,
      collections,
      validators,
      fixtures,
      graphqlModule,
    });
  }
}

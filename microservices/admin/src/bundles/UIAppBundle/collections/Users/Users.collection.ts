import {
  Collection,
  CollectionLinkConfig,
  CollectionTransformMap,
} from "@bluelibs/x-ui";
import { User } from "@root/api.types";
import {} from "@bundles/UIAppBundle/collections";
import { ObjectId } from "@bluelibs/ejson";

export type { User };

export class UsersCollection extends Collection<User> {
  getName() {
    return "Users";
  }

  getInputs() {
    return {
      insert: "UserInsertInput!",
      update: "UserUpdateInput!",
    };
  }

  // Return here the relations with other configs
  getLinks(): CollectionLinkConfig<User>[] {
    return [
      {
        collection: () => UsersCollection,
        name: "createdBy",
        field: "createdById",
      },
      {
        collection: () => UsersCollection,
        name: "updatedBy",
        field: "updatedById",
      },
    ];
  }

  // Return here how you want to transform certain fields
  getTransformMap(): CollectionTransformMap<User> {
    return {
      updatedAt: (v) => (v && new Date(v) ? new Date(v) : v),
      createdAt: (v) => (v && new Date(v) ? new Date(v) : v),
    };
  }
}

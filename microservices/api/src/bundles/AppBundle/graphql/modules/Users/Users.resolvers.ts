import * as X from "@bluelibs/x-bundle";
import { IResolverMap } from "@bluelibs/graphql-bundle";
import { UserInsertInput, UserUpdateInput } from "../../../services/inputs";
import { UsersCollection } from "../../../collections/Users/Users.collection";

true;
export default {
  Query: [
    [],
    {
      UsersFindOne: [X.ToNovaOne(UsersCollection)],
      UsersFind: [X.ToNova(UsersCollection)],
      UsersCount: [X.ToCollectionCount(UsersCollection)],
    },
  ],
  Mutation: [
    [],
    {
      UsersInsertOne: [
        X.ToModel(UserInsertInput, { field: "document" }),
        X.Validate({ field: "document" }),
        X.ToDocumentInsert(UsersCollection),
        X.ToNovaByResultID(UsersCollection),
      ],
      UsersUpdateOne: [
        X.ToModel(UserUpdateInput, { field: "document" }),
        X.Validate({ field: "document" }),
        X.CheckDocumentExists(UsersCollection),
        X.ToDocumentUpdateByID(UsersCollection, null, ({ document }) => ({
          $set: document,
        })),
        X.ToNovaByResultID(UsersCollection),
      ],
      UsersDeleteOne: [
        X.CheckDocumentExists(UsersCollection),
        X.ToDocumentDeleteByID(UsersCollection),
      ],
    },
  ],
  Subscription: {
    UsersSubscription: {
      resolve: (payload) => payload,
      subscribe: [X.ToSubscription(UsersCollection)],
    },
    UsersSubscriptionCount: {
      resolve: (payload) => payload,
      subscribe: [X.ToSubscriptionCount(UsersCollection)],
    },
  },
} as IResolverMap;

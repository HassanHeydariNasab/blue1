import { Collection, Behaviors } from "@bluelibs/mongo-bundle";
import { Behaviors as XBehaviors } from "@bluelibs/x-bundle";
import * as links from "./Users.links";
import * as reducers from "./Users.reducers";
import { User } from "./User.model";
import { UsersCollection as BaseCollection } from "@bluelibs/security-mongo-bundle";

export class UsersCollection extends BaseCollection<User> {
  static collectionName = "users";
  static model = User;

  static links = links;
  static reducers = reducers;

  static behaviors = [
    Behaviors.Timestampable(),

    Behaviors.Blameable(),

    Behaviors.Softdeletable(),

    XBehaviors.Live(),
  ];

  // Create an array of indexes
  static indexes = [
    { key: { isDeleted: 1 } },
    { key: { createdAt: 1 } },
    { key: { createdBy: 1 } },
  ];
}

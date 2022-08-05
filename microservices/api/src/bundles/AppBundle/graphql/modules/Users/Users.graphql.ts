export default /* GraphQL */ `
  type Query {
    UsersFindOne(query: QueryInput): User
    UsersFind(query: QueryInput): [User]!
    UsersCount(query: QueryInput): Int!
  }

  type Mutation {
    UsersInsertOne(document: UserInsertInput!): User
    UsersUpdateOne(_id: ObjectId!, document: UserUpdateInput!): User!
    UsersDeleteOne(_id: ObjectId!): Boolean
  }

  type Subscription {
    UsersSubscription(body: EJSON): SubscriptionEvent
    UsersSubscriptionCount(filters: EJSON): SubscriptionCountEvent
  }
`;

export default /* GraphQL */ `
  input UserInsertInput {
    isEnabled: Boolean!
    profile: UserProfileInput!
    roles: [UserRole]!
  }

  input UserProfileInput {
    firstName: String!
    lastName: String!
  }
`;

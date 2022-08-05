export default /* GraphQL */ `
  input UserUpdateInput {
    isEnabled: Boolean
    profile: UserProfileInput
    roles: [UserRole]
  }

  input UserProfileInput {
    firstName: String!
    lastName: String!
  }
`;

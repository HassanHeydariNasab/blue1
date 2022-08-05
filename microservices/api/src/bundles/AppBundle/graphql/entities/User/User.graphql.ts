export default /* GraphQL */ `
  type User {
    _id: ObjectId

    """
    Represents the date when this object was created
    """
    createdAt: Date!

    """
    Represents the user who has created this object
    """
    createdBy: User

    """
    Represents the user's id who has created this object
    """
    createdById: ObjectId
    email: String!
    fullName: String!
    isEnabled: Boolean!
    profile: UserProfile!
    roles: [UserRole]!

    """
    Represents the last time when the object was updated
    """
    updatedAt: Date!

    """
    Represents the user who has made the latest update on this object
    """
    updatedBy: User

    """
    Represents the user's id who has made the latest update on this object
    """
    updatedById: ObjectId
  }

  type UserProfile {
    firstName: String!
    lastName: String!
  }

  enum UserRole {
    ADMIN
    SALES
    MANAGER
    END_CUSTOMER
  }
`;

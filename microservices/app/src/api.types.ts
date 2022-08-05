export type Maybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date Custom scalar type */
  Date: any;
  /** The `EJSON` scalar type represents EJSON values as specified by [Meteor EJSON](https://docs.meteor.com/api/ejson.html). */
  EJSON: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
  /** ObjectId custom scalar type */
  ObjectId: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Address = {
  __typename?: 'Address';
  city: Scalars['String'];
  country: Scalars['String'];
};

export type AddressInput = {
  city: Scalars['String'];
  country: Scalars['String'];
};

export type AppFile = {
  __typename?: 'AppFile';
  _id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  path: Scalars['String'];
  downloadUrl: Scalars['String'];
  size: Scalars['Int'];
  mimeType: Scalars['String'];
  thumbs: Array<Maybe<AppFileThumb>>;
  resourceType?: Maybe<Scalars['String']>;
  resourceId?: Maybe<Scalars['String']>;
  uploadedById?: Maybe<Scalars['String']>;
  uploadedBy?: Maybe<User>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
};


export type AppFilethumbsArgs = {
  ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AppFileGroup = {
  __typename?: 'AppFileGroup';
  _id: Scalars['ObjectId'];
  name?: Maybe<Scalars['String']>;
  files: Array<Maybe<AppFile>>;
  filesIds: Array<Maybe<Scalars['ObjectId']>>;
};

export type AppFileThumb = {
  __typename?: 'AppFileThumb';
  /** @deprecated Use 'type' instead, due to cache mismatch with Apollo */
  id: Scalars['String'];
  type: Scalars['String'];
  path: Scalars['String'];
  downloadUrl: Scalars['String'];
};

export type ChangePasswordInput = {
  oldPassword: Scalars['String'];
  newPassword: Scalars['String'];
};


export type DocumentUpdateInput = {
  _id: Scalars['ObjectId'];
  modifier: Scalars['EJSON'];
};


export type ForgotPasswordInput = {
  email: Scalars['String'];
};



export type LoginInput = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  token?: Maybe<Scalars['String']>;
  redirectUrl?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** This mutation is used to create a new token based on the existing one. Your previous token will no longer be usable. */
  reissueToken: Scalars['String'];
  AppFileGroupsInsertOne?: Maybe<AppFileGroup>;
  AppFilesDeleteOne?: Maybe<Scalars['Boolean']>;
  AppFileGroupsDeleteOne?: Maybe<Scalars['Boolean']>;
  AppFileUploadToGroup?: Maybe<AppFile>;
  AppFileUpload?: Maybe<AppFile>;
  UsersInsertOne?: Maybe<User>;
  UsersUpdateOne: User;
  UsersDeleteOne?: Maybe<Scalars['Boolean']>;
  register: RegistrationResponse;
  changePassword?: Maybe<Scalars['Boolean']>;
  login: LoginResponse;
  logout?: Maybe<Scalars['Boolean']>;
  resetPassword: ResetPasswordResponse;
  forgotPassword?: Maybe<Scalars['Boolean']>;
  verifyEmail: VerifyEmailResponse;
  requestLoginLink: RequestLoginLinkInputResponse;
  verifyMagicCode: VerifyMagicLinkResponse;
};


export type MutationreissueTokenArgs = {
  token: Scalars['String'];
};


export type MutationAppFileGroupsInsertOneArgs = {
  document: Scalars['EJSON'];
};


export type MutationAppFilesDeleteOneArgs = {
  _id: Scalars['ObjectId'];
};


export type MutationAppFileGroupsDeleteOneArgs = {
  _id: Scalars['ObjectId'];
};


export type MutationAppFileUploadToGroupArgs = {
  groupId: Scalars['ObjectId'];
  upload: Scalars['Upload'];
  context?: Maybe<Scalars['String']>;
};


export type MutationAppFileUploadArgs = {
  upload: Scalars['Upload'];
  context?: Maybe<Scalars['String']>;
};


export type MutationUsersInsertOneArgs = {
  document: UserInsertInput;
};


export type MutationUsersUpdateOneArgs = {
  _id: Scalars['ObjectId'];
  document: UserUpdateInput;
};


export type MutationUsersDeleteOneArgs = {
  _id: Scalars['ObjectId'];
};


export type MutationregisterArgs = {
  input: RegistrationInput;
};


export type MutationchangePasswordArgs = {
  input: ChangePasswordInput;
};


export type MutationloginArgs = {
  input: LoginInput;
};


export type MutationresetPasswordArgs = {
  input: ResetPasswordInput;
};


export type MutationforgotPasswordArgs = {
  input: ForgotPasswordInput;
};


export type MutationverifyEmailArgs = {
  input: VerifyEmailInput;
};


export type MutationrequestLoginLinkArgs = {
  input: RequestLoginLinkInput;
};


export type MutationverifyMagicCodeArgs = {
  input: VerifyMagicLinkInput;
};


export type Query = {
  __typename?: 'Query';
  AppFilesFindOne?: Maybe<AppFile>;
  AppFilesFind?: Maybe<Array<Maybe<AppFile>>>;
  AppFileGroupsFindOne?: Maybe<AppFileGroup>;
  AppFileGroupsFind?: Maybe<Array<Maybe<AppFileGroup>>>;
  UsersFindOne?: Maybe<User>;
  UsersFind: Array<Maybe<User>>;
  UsersCount: Scalars['Int'];
  me: User;
  framework?: Maybe<Scalars['String']>;
};


export type QueryAppFilesFindOneArgs = {
  query: QueryInput;
};


export type QueryAppFilesFindArgs = {
  query: QueryInput;
};


export type QueryAppFileGroupsFindOneArgs = {
  query: QueryInput;
};


export type QueryAppFileGroupsFindArgs = {
  query: QueryInput;
};


export type QueryUsersFindOneArgs = {
  query?: Maybe<QueryInput>;
};


export type QueryUsersFindArgs = {
  query?: Maybe<QueryInput>;
};


export type QueryUsersCountArgs = {
  query?: Maybe<QueryInput>;
};

export type QueryInput = {
  filters?: Maybe<Scalars['EJSON']>;
  options?: Maybe<QueryOptionsInput>;
};

export type QueryOptionsInput = {
  sort?: Maybe<Scalars['JSON']>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  /** This is the Nova body that will get merged deeply with your request body. Useful for passing arguments. */
  sideBody?: Maybe<Scalars['EJSON']>;
};

export type RegistrationInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type RegistrationResponse = {
  __typename?: 'RegistrationResponse';
  /** Please not that if the user is required to validate his email for logging in, token will be null */
  token?: Maybe<Scalars['String']>;
};

export type RequestLoginLinkInput = {
  username?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type RequestLoginLinkInputResponse = {
  __typename?: 'RequestLoginLinkInputResponse';
  magicCodeSent: Scalars['Boolean'];
  userId: Scalars['String'];
  method?: Maybe<Scalars['String']>;
  confirmationFormat?: Maybe<Scalars['String']>;
};

export type ResetPasswordInput = {
  username: Scalars['String'];
  token: Scalars['String'];
  newPassword: Scalars['String'];
};

export type ResetPasswordResponse = {
  __typename?: 'ResetPasswordResponse';
  token: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  UsersSubscription?: Maybe<SubscriptionEvent>;
  UsersSubscriptionCount?: Maybe<SubscriptionCountEvent>;
};


export type SubscriptionUsersSubscriptionArgs = {
  body?: Maybe<Scalars['EJSON']>;
};


export type SubscriptionUsersSubscriptionCountArgs = {
  filters?: Maybe<Scalars['EJSON']>;
};

export type SubscriptionCountEvent = {
  __typename?: 'SubscriptionCountEvent';
  count?: Maybe<Scalars['Int']>;
};

export type SubscriptionEvent = {
  __typename?: 'SubscriptionEvent';
  event: SubscriptionEventType;
  document?: Maybe<Scalars['EJSON']>;
};

export enum SubscriptionEventType {
  added = 'added',
  changed = 'changed',
  removed = 'removed',
  ready = 'ready'
}


export type User = {
  __typename?: 'User';
  _id?: Maybe<Scalars['ObjectId']>;
  /** Represents the date when this object was created */
  createdAt: Scalars['Date'];
  /** Represents the user who has created this object */
  createdBy?: Maybe<User>;
  /** Represents the user's id who has created this object */
  createdById?: Maybe<Scalars['ObjectId']>;
  email: Scalars['String'];
  fullName: Scalars['String'];
  isEnabled: Scalars['Boolean'];
  profile: UserProfile;
  roles: Array<Maybe<UserRole>>;
  /** Represents the last time when the object was updated */
  updatedAt: Scalars['Date'];
  /** Represents the user who has made the latest update on this object */
  updatedBy?: Maybe<User>;
  /** Represents the user's id who has made the latest update on this object */
  updatedById?: Maybe<Scalars['ObjectId']>;
};

export type UserInsertInput = {
  isEnabled: Scalars['Boolean'];
  profile: UserProfileInput;
  roles: Array<Maybe<UserRole>>;
};

export type UserProfile = {
  __typename?: 'UserProfile';
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type UserProfileInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export enum UserRole {
  ADMIN = 'ADMIN',
  SALES = 'SALES',
  MANAGER = 'MANAGER',
  END_CUSTOMER = 'END_CUSTOMER'
}

export type UserUpdateInput = {
  isEnabled?: Maybe<Scalars['Boolean']>;
  profile?: Maybe<UserProfileInput>;
  roles?: Maybe<Array<Maybe<UserRole>>>;
};

export type VerifyEmailInput = {
  username?: Maybe<Scalars['String']>;
  token: Scalars['String'];
};

export type VerifyEmailResponse = {
  __typename?: 'VerifyEmailResponse';
  token: Scalars['String'];
};

export type VerifyMagicLinkInput = {
  userId: Scalars['String'];
  magicCode: Scalars['String'];
};

export type VerifyMagicLinkResponse = {
  __typename?: 'VerifyMagicLinkResponse';
  token?: Maybe<Scalars['String']>;
  redirectUrl?: Maybe<Scalars['String']>;
};

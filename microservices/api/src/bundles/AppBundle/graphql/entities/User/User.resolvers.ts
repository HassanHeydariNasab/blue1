export default {
  resolvers: {
    User: {},
    UserProfile: {},
    UserRole: {
      ADMIN: "ADMIN",
      SALES: "SALES",
      MANAGER: "MANAGER",
      END_CUSTOMER: "END_CUSTOMER",
    },
  },
};

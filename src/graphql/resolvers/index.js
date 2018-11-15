export const defaults = {
  user: {},
};

export const resolvers = {
  Query: {
    getUser: (obj, args, ctx, info) => {
      console.info(obj, args, ctx, info);
      return ctx.cache.readFragment({ user });
    },
  },
};

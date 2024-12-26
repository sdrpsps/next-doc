import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { paginationOptsValidator } from "convex/server";

export const get = query({
  args: { paginationOpts: paginationOptsValidator },
  handler: async (ctx,args) => {
    return await ctx.db.query("document").paginate(args.paginationOpts);
  },
});

export const create = mutation({
  args: { title: v.optional(v.string()), initialContent: v.optional(v.string()) },
  handler: async (ctx, args) => {
    const user = await ctx.auth.getUserIdentity()

    if (!user) {
      throw new ConvexError('Unauthorized')
    }

    return await ctx.db.insert('document', {
      title: args.title ?? 'Untitled Document',
      ownerId: user.subject,
      initialContent: args.initialContent
    })
  }
})
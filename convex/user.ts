import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const CreateNewUser = mutation({
    args: {
        name: v.string(),
        email: v.string(),
        imageUrl: v.string(),
    },
    handler: async (ctx, args) => {
        // Query the database to see if a user with this email already exists
        const user = await ctx.db
            .query("UserTable")
            .filter((q) => q.eq(q.field("email"), args.email))
            .collect();

        // If the user doesn't exist, create a new one
        if (user.length === 0) {
            const userData = {
                name: args.name,
                email: args.email,
                imageUrl: args.imageUrl,
                subscription: "free"
            };
            
            const result = await ctx.db.insert("UserTable", userData);
            return userData;
        }

        // Return the existing user
        return user[0];
    }
});
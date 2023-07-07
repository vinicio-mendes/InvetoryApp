"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/pages/api/category.ts
var category_exports = {};
__export(category_exports, {
  default: () => category_default
});
module.exports = __toCommonJS(category_exports);

// src/config/prisma.ts
var import_client = require("@prisma/client");
var prisma = global.prisma || new import_client.PrismaClient({
  log: ["query"]
});
if (process.env.NODE_ENV !== "production")
  global.prisma = prisma;

// src/pages/api/auth/[...nextauth].ts
var import_next_auth = __toESM(require("next-auth"));
var import_google = __toESM(require("next-auth/providers/google"));
var import_prisma_adapter = require("@next-auth/prisma-adapter");
var authOptions = {
  adapter: (0, import_prisma_adapter.PrismaAdapter)(prisma),
  providers: [
    (0, import_google.default)({
      clientId: process.env.GOOGLE_CLIENT_ID ? process.env.GOOGLE_CLIENT_ID : "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ? process.env.GOOGLE_CLIENT_SECRET : ""
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    // Use JSON Web Tokens for session instead of database sessions.
    // This option can be used with or without a database for users/accounts.
    // Note: `strategy` should be set to 'jwt' if no database is used.
    strategy: "database",
    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 30 * 24 * 60 * 60,
    // 30 days
    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    updateAge: 24 * 60 * 60
    // 24 hours
  },
  useSecureCookies: process.env.NODE_ENV === "production",
  jwt: {
    // A secret to use for key generation (you should set this explicitly)
    secret: process.env.SECRET
    // Set to true to use encryption (default: false)
    // encryption: true,
    // You can define your own encode/decode functions for signing and encryption
    // if you want to override the default behaviour.
    // encode: async ({ secret, token, maxAge }) => {},
    // decode: async ({ secret, token, maxAge }) => {},
  },
  // You can define custom pages to override the built-in ones. These will be regular Next.js pages
  // so ensure that they are placed outside of the '/api' folder, e.g. signIn: '/auth/mycustom-signin'
  // The routes shown here are the default URLs that will be used when a custom
  // pages is not specified for that route.
  // https://next-auth.js.org/configuration/pages
  pages: {
    signIn: "/auth/signin"
    // Displays signin buttons
    //signOut: '/auth/signout', // Displays form with sign out button
    //error: "/auth/signin", // Error code passed in query string as ?error=
    //verifyRequest: '/auth/verify-request', // Used for check email page
    // newUser: null // If set, new users will be directed here on first sign in
  },
  // Callbacks are asynchronous functions you can use to control what happens
  // when an action is performed.
  // https://next-auth.js.org/configuration/callbacks
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, token, user }) {
      if (session?.user) {
        session.user.id = user.id;
      }
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    }
  },
  // Events are useful for logging
  events: {},
  // Enable debug messages in the console if you are having problems
  debug: false
};
var nextauth_default = (0, import_next_auth.default)(authOptions);

// src/pages/api/category.ts
var import_next = require("next-auth/next");

// src/types/postCategory.ts
var import_zod = require("zod");
var PostCategorySchema = import_zod.z.object({
  name: import_zod.z.string().min(2, { message: "Name should have at least 2 letters" })
});

// src/pages/api/category.ts
var category_default = async (req, res) => {
  const session = await (0, import_next.unstable_getServerSession)(req, res, authOptions);
  if (session) {
    if (req.method === "POST") {
      const { name } = req.body;
      const response = PostCategorySchema.safeParse(req.body);
      if (!response.success)
        return res.status(400).json(response.error.issues);
      try {
        const category = await prisma.category.create({
          data: {
            name,
            userId: session?.user?.id
          }
        });
        res.status(201).json(category);
      } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Something went wrong" });
      }
    } else if (req.method === "DELETE") {
      const { id } = req.query;
      if (!id)
        return res.status(400).json({ message: "No id provided" });
      try {
        const category = await prisma.category.deleteMany({
          where: {
            userId: session.user?.id,
            id: id.toString()
          }
        });
        res.status(201).json(category);
      } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Something went wrong" });
      }
    } else if (req.method === "PATCH") {
      const { id, name } = req.body;
      if (!id || !name)
        return res.status(400).json({ message: "No id  or name provided" });
      try {
        const category = await prisma.category.updateMany({
          where: {
            userId: session.user?.id,
            id: id.toString()
          },
          data: {
            name
          }
        });
        res.status(201).json(category);
      } catch {
        return res.status(500).json({ message: "Something went wrong" });
      }
    } else {
      res.status(400).json({ message: "Method not allowed" });
    }
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
  res.end();
};

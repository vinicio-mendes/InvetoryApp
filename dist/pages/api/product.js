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

// src/pages/api/product.ts
var product_exports = {};
__export(product_exports, {
  default: () => product_default
});
module.exports = __toCommonJS(product_exports);

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

// src/pages/api/product.ts
var import_next = require("next-auth/next");

// src/types/postProduct.ts
var import_zod = require("zod");
var postProductSchema = import_zod.z.object({
  name: import_zod.z.string().min(1, { message: "Name is required" }),
  price: import_zod.z.number().min(0, { message: "Price must be greater than 0" }),
  description: import_zod.z.string().min(1, { message: "Description is required" }),
  categoryId: import_zod.z.string().min(1, { message: "Category is required" })
});

// src/types/patchProduct.ts
var import_zod2 = require("zod");
var patchProductSchema = import_zod2.z.object({
  id: import_zod2.z.string().min(1, { message: "Id should have at least 1 letter" }),
  name: import_zod2.z.string().min(1, { message: "Name is required" }).optional(),
  description: import_zod2.z.string().min(1, { message: "Description is required" }).optional(),
  price: import_zod2.z.number().min(0, { message: "Price should be greater than 0" }).optional(),
  Date: import_zod2.z.object({
    date: import_zod2.z.date().optional(),
    stock: import_zod2.z.number().optional()
  }).optional(),
  categoryId: import_zod2.z.string().min(0, { message: "ID is required" }).optional()
});

// src/pages/api/product.ts
var product_default = async (req, res) => {
  const session = await (0, import_next.unstable_getServerSession)(req, res, authOptions);
  if (session) {
    if (req.method === "POST") {
      const { name, price, description, categoryId } = req.body;
      const response = postProductSchema.safeParse(req.body);
      if (!response.success) {
        return res.status(400).json(response.error.issues);
      }
      try {
        const product = await prisma.product.create({
          data: {
            name,
            price: parseFloat(price.toFixed(2)),
            description,
            category: {
              connect: {
                id: categoryId
              }
            },
            user: {
              connect: {
                id: session.user?.id
              }
            },
            date: {
              create: {
                date: /* @__PURE__ */ new Date(),
                stock: 0
              }
            }
          }
        });
        return res.status(200).json(product);
      } catch (e) {
        console.log(e);
        return res.status(500).json({ message: "Something went wrong" });
      }
    }
    if (req.method === "DELETE") {
      const { id } = req.query;
      if (!id) {
        return res.status(400).json({ message: "id is required" });
      }
      try {
        const product = await prisma.product.deleteMany({
          where: {
            userId: session.user?.id,
            id: id.toString()
          }
        });
        return res.status(200).json(product);
      } catch (e) {
        return res.status(500).json({ message: "Something went wrong" });
      }
    }
    if (req.method === "PATCH") {
      const { id, name, price, description, categoryId } = req.body;
      console.log(id, name, price, description, categoryId);
      const response = patchProductSchema.safeParse(req.body);
      if (!response.success) {
        return res.status(400).json(response.error.issues);
      }
      try {
        const product = await prisma.product.updateMany({
          where: {
            id: id.toString(),
            userId: session.user?.id
          },
          data: {
            name: name ? name : void 0,
            price: price ? parseFloat(price.toFixed(2)) : void 0,
            description: description ? description : void 0,
            categoryId: categoryId ? categoryId : void 0,
            lastUpdated: /* @__PURE__ */ new Date()
          }
        });
        return res.status(200).json(product);
      } catch (e) {
        return res.status(500).json({ message: "Something went wrong" });
      }
    }
  } else {
    return res.status(401).end();
  }
};

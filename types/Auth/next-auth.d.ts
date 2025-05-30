import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface User extends DefaultUser {
    googleLoginResponse?: any; 
  }

  interface Session {
    user: {
      id: string;
      type: Object;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
    googleData?: any; 
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    googleData?: any; 
  }
}


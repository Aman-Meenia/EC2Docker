import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        name: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any): Promise<any> {
        console.log(credentials);
        // await dbConnect();
        console.log("Working !!!!!!");
        try {
          const userName = "Aman";
          const password = "123123";

          const user = {
            name: userName,
            password: password,
          };

          return user;
        } catch (error: any) {
          throw new Error(error);
          // return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXT_AUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // token._id = user._id?.toString();
        // token.isVerified = user.isVerified;
        token.username = user.username;
        // token.email = user.email;
        // token.image = user?.image;
      }
      // console.log(token);
      return token;
    },
    async session({ session, token }) {
      if (token) {
        // session.user._id = token._id;
        // session.user.isVerified = token.isVerified;
        session.user.username = token.username;
        // session.user.email = token.email;
        // session.user.image = token.image;
      }
      return session;
    },

    // async session({ session }) {
    //   return session;
    // },
    // async jwt({ token }) {
    //   return token;
    // },
  },
};

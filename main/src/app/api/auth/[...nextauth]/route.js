// import NextAuth from "next-auth"
// import GithubProvider from "next-auth/providers/github"
// import GoogleProvider from 'next-auth/providers/google';

// const handler = NextAuth(
//   {
//     // Configure one or more authentication providers
//     providers: [
//       GithubProvider({
//         clientId: process.env.GITHUB_ID,
//         clientSecret: process.env.GITHUB_SECRET,
//       }),
//       GoogleProvider({
//         clientId: process.env.GOOGLE_CLIENT_ID,
//         clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       }),    ],
//   }
// ) 

// export {handler as GET, handler as POST}
import NextAuth from "next-auth/next"
import {authOptions} from "../../../../lib/auth"

export const GET = NextAuth(authOptions);
export const POST = NextAuth(authOptions);



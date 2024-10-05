// import NextAuth from "next-auth/next"
// import {authOptions} from "../../../../lib/auth"



// export default NextAuth(authOptions)
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  // Add any other configuration options here
});
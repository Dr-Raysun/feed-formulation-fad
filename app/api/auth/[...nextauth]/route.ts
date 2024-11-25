import NextAuth, { getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  // secret: process.env.NEXTAUTH_SECRET,
    // callbacks: {
    //   session: ({ session, token }) => ({
    //     ...session,
    //     user: {
    //       ...session.user,
    //       id: token.sub,
    //     },
    //   }),
    // },
  //end of the callback
});

export { handler as GET, handler as POST };

// to enable getServerssion() to show id the below code does that
// we have to pass in the handler in getServerSession function to get access to the user id
// passsing the handlder direct like this [const getNextServerSession = () => getServerSession(handler);] did not work

// export const getNextServerSession = () =>
//   getServerSession({
//     providers: [
//       GoogleProvider({
//         clientId: process.env.GOOGLE_CLIENT_ID as string,
//         clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
//       }),
//     ],
//     // secret: process.env.NEXTAUTH_SECRET,
//     callbacks: {
//       session: ({ session, token }) => ({
//         ...session,
//         user: {
//           ...session.user,
//           id: token.sub,
//         },
//       }),
//     },
//     //end of the callback
//   });

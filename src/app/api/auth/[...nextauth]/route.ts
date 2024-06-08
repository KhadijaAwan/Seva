import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: AuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "Enter Email" },
                password: { label: "Password", type: "password", placeholder: "Enter Password" },
            },
            async authorize(credentials) {
                const response = await fetch(`${process.env.NEXTAUTH_URL}/api/login`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: credentials?.email,
                        password: credentials?.password,
                    }),
                });
                const user = await response.json();

                if (user) {
                    return user;
                } else {
                    return null;
                }
            },
        }),
    ],
    pages: {
        signIn: "/",
    },
    callbacks: {
        async jwt({ token, user }) {
            console.log({ token, user });
            return { ...token, ...user };
        },
        async session({ session, user, token }) {
            session.user = token as any;
            return session;
        },
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
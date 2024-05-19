import mongoClientPromise from '@/lib/database/mongoClientPromise';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import NodemailerProvider from 'next-auth/providers/nodemailer';

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [
    Google,
    NodemailerProvider({
      server: {
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      },
      from: process.env.SMTP_FROM,
    }),
  ],
  adapter: MongoDBAdapter(mongoClientPromise, {
    databaseName: process.env.ENVIRONMENT,
  }),
  pages: {
    signIn: '/auth',
    signOut: '/auth',
  },
});

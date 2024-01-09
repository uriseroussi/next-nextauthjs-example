declare namespace NodeJS {
  interface ProcessEnv {
    ENVIRONMENT: 'development' | 'production';
    AUTH_SECRET: string;
    AUTH_GOOGLE_CLIENT_ID: string;
    AUTH_GOOGLE_CLIENT_SECRET: string;
    SMTP_USER: string;
    SMTP_PASSWORD: string;
    SMTP_HOST: string;
    SMTP_PORT: string;
    SMTP_FROM: string;
    MONGODB_CONNECTION_STRING: string;
  }
}

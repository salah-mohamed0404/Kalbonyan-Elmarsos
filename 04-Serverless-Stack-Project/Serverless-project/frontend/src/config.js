const config = {
  SENTRY_DSN:
    "https://d41beee31d694365bf7b19ca7f29345a@o1423826.ingest.sentry.io/6771573",
  STRIPE_KEY:
    "pk_test_51LknyNHLuzYOPezyj0TGz1tV90B0RQnryaHz0YtOSwYzfmWBYNyE762v0ed7CMaTNkbjztmkiyQkiIBQINuhOQrX00GeMvz0ED",
  MAX_ATTACHMENT_SIZE: 5000000,
  // Backend config
  s3: {
    REGION: process.env.REACT_APP_REGION,
    BUCKET: process.env.REACT_APP_BUCKET,
  },
  apiGateway: {
    REGION: process.env.REACT_APP_REGION,
    URL: process.env.REACT_APP_API_URL,
  },
  cognito: {
    REGION: process.env.REACT_APP_REGION,
    USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
    APP_CLIENT_ID: process.env.REACT_APP_USER_POOL_CLIENT_ID,
    IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID,
  },
};

export default config;

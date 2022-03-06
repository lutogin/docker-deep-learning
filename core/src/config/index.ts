export enum ENV_ENUM {
  LOCAL = 'local',
  DEV = 'dev',
  QA = 'qa',
  PROD = 'prod',
}

const {
  PORT,
  AUTH_HOST,
  MONGO_HOST,
  MONGO_DATABASE,
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_URI_SCHEME,
  NODE_ENV = ENV_ENUM.LOCAL,
} = process.env;

const buildInternalServiceUrl = (env, service) => {
  switch (env) {
    case ENV_ENUM.PROD:
    case ENV_ENUM.QA:
    case ENV_ENUM.DEV:
      return service;
    case ENV_ENUM.LOCAL:
    default:
      return `http://${service}:3000`;
  }
};

export default () => ({
  NODE_ENV,
  PORT,
  AUTH: buildInternalServiceUrl(NODE_ENV, AUTH_HOST),
  MONGO_HOST,
  MONGO_DATABASE,
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_URI_SCHEME,
});

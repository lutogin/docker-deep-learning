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
  NODE_ENV,
  TASKS_HOST,
} = process.env;

const buildInternalServiceUrl = (service) => {
  switch (process.env.NODE_ENV) {
    case ENV_ENUM.PROD:
    case ENV_ENUM.QA:
    case ENV_ENUM.DEV:
    case ENV_ENUM.LOCAL:
      return `http://${service}:3000`;
    default:
      return `http://${service}:3000`;
  }
};

export default () => ({
  NODE_ENV,
  PORT,
  AUTH_INTERNAL_HOST: buildInternalServiceUrl(AUTH_HOST),
  MONGO_HOST,
  MONGO_DATABASE,
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_URI_SCHEME,
  TASKS_INTERNAL_HOST: buildInternalServiceUrl(TASKS_HOST),
});

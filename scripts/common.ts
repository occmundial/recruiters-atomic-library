import { linksAccountEnv } from '../components/organisms/headerOrg/config/links';

export interface IEnviroments {
  local?: boolean;
  dev?: boolean;
  prod?: boolean;
}

export const getCreateAccountUrl = (envs: IEnviroments) =>
  envs.prod
    ? linksAccountEnv.prod
    : envs.dev
    ? linksAccountEnv.dev
    : linksAccountEnv.local;

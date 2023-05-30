import {ZkrCoreLoginModel} from "./zkr-core-login.model";
import {ZkrCoreProgressBar} from "./zkr-core-progress-bar.model";
import {InjectionToken} from "@angular/core";

export const constants= new InjectionToken<ZkrCoreModel>('constants');
export interface ZkrCoreModel {
  DEV_URL: string,
  QA_URL: string,
  PROD_URL: string,
  TOKEN: string,
  i18nPath: string,
  PROGRESS_BAR_CONFIG: ZkrCoreProgressBar,
  loginFormConstants: ZkrCoreLoginModel
}

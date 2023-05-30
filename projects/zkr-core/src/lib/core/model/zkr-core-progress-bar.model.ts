import {NgProgressConfig} from "ngx-progressbar";
import {ProgressRouterConfig} from "ngx-progressbar/router";
import {InjectionToken} from "@angular/core";

export interface ZkrCoreProgressBar {
  PROGRESS_BAR_CONFIG: NgProgressConfig,
  PROGRESS_BAR_ROUTER_CONFIG: ProgressRouterConfig,
}

export const ZKR_PROGRESS_CONFIG = new InjectionToken<ZkrCoreProgressBar>('zkrCoreProgressBar');


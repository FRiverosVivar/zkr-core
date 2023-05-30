import {ModuleWithProviders, NgModule} from "@angular/core";
import {NgProgressModule} from "ngx-progressbar";
import {NgProgressHttpModule} from "ngx-progressbar/http";
import {NgProgressRouterModule} from "ngx-progressbar/router";
import {ZkrProgressBarComponent} from "./component/zkr-progress-bar.component";
import {ZKR_PROGRESS_CONFIG, ZkrCoreProgressBar} from "../model/zkr-core-progress-bar.model";
@NgModule({
  declarations: [
    ZkrProgressBarComponent
  ],
  imports: [
    NgProgressModule,
    NgProgressHttpModule,
    NgProgressRouterModule],
  exports: [
    ZkrProgressBarComponent
  ]
})
export class ProgressBarWrapperModule {

  static withConfig(conf: ZkrCoreProgressBar): ModuleWithProviders<NgProgressModule> {
    return {
      ngModule: ProgressBarWrapperModule,
      providers: [
        {provide: ZKR_PROGRESS_CONFIG, useValue: conf},
        {
          provide: NgProgressModule,
          useValue: NgProgressModule.withConfig(conf.PROGRESS_BAR_CONFIG)
        },
        {
          provide: NgProgressRouterModule,
          useValue: NgProgressRouterModule.withConfig(conf.PROGRESS_BAR_ROUTER_CONFIG)
        }
      ]
    }
  }
}

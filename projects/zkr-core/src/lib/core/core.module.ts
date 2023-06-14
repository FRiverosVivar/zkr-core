import { ModuleWithProviders, NgModule } from '@angular/core';
import { FilterObjectArrayByKeysPipe } from "./utils/pipes/filterObjectArrayByKeys.pipe";
import { HttpClientModule} from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { FileUploadModule } from "@iplab/ngx-file-upload";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ZkrCoreModel } from "./model/zkr-core.model";
import {ProgressBarWrapperModule} from "./ngx-progressbar-wrapper/progress-bar-wrapper.module";
import {ZkrProgressBarComponent} from "./ngx-progressbar-wrapper/component/zkr-progress-bar.component";

@NgModule({
  declarations: [
    FilterObjectArrayByKeysPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FileUploadModule,
    BrowserAnimationsModule,
    ProgressBarWrapperModule,
  ],
  providers: [],
  bootstrap: [],
  exports: [
    FilterObjectArrayByKeysPipe,
    ZkrProgressBarComponent,
  ]
})
export class CoreModule {

  static forRoot(conf: ZkrCoreModel): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        {
          provide: ProgressBarWrapperModule.withConfig(conf.PROGRESS_BAR_CONFIG),
          useValue: conf.PROGRESS_BAR_CONFIG,
        }
      ]
    };
  }
}

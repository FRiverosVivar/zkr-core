import {inject, ModuleWithProviders, NgModule} from '@angular/core';
import {CoreModule} from "./core/core.module";
import {FilterObjectArrayByKeysPipe} from "./core/utils/pipes/filterObjectArrayByKeys.pipe";
import {TranslateModule} from "@ngx-translate/core";
import {constants, ZkrCoreModel} from "./core/model/zkr-core.model";
import {ZkrProgressBarComponent} from "./core/ngx-progressbar-wrapper/component/zkr-progress-bar.component";
import {AuthService} from "./core/services/auth/auth.service";
import {HttpBaseService} from "./core/services/http/http-base.service";
import {HttpAuthService} from "./core/services/http-auth/http-auth.service";
import {HttpClient} from "@angular/common/http";
import {LocalStorageService} from "./core/services/local-storage/local-storage.service";

@NgModule({
  declarations: [],
  imports: [CoreModule],
  providers: [
    TranslateModule,
    AuthService,
    HttpBaseService,
    HttpAuthService,
  ],
  exports: [
    FilterObjectArrayByKeysPipe,
    ZkrProgressBarComponent,
  ]
})
export class ZkrCoreModule {
  static forRoot(conf: ZkrCoreModel): ModuleWithProviders<ZkrCoreModule> {
    return {
      ngModule: ZkrCoreModule,
      providers: [
        {
          provide: constants,
          useValue: conf
        },
        {
          provide: CoreModule.forRoot(conf),
          useClass: CoreModule
        },
        {
          provide: HttpBaseService,
          useFactory: (http: HttpClient, httpAuthService: HttpAuthService) => new HttpBaseService(inject(constants), http, httpAuthService),
          deps: [HttpClient,HttpAuthService]
        },
        {
          provide: HttpAuthService,
          useFactory: (localStorage: LocalStorageService) => new HttpAuthService(inject(constants), localStorage),
          deps: [LocalStorageService]
        },
        {
          provide: AuthService,
          useFactory: (http: HttpBaseService) => new AuthService(inject(constants), http),
          deps: [HttpBaseService]
        },
      ]
    };
  }
}

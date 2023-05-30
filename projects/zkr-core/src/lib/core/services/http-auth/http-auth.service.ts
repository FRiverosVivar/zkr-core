import {Inject, Injectable, Injector} from "@angular/core";
import {LocalStorageService} from "../local-storage/local-storage.service";
import {ZkrCoreModel} from "../../model/zkr-core.model";
@Injectable({
  providedIn: 'root'
})
export class HttpAuthService {
  private currentAuthToken: string = '';
  constructor(

    @Inject('constants') private constants: ZkrCoreModel,
    private localStorageService: LocalStorageService,
  ) {
  }

  getToken(): string {
    const currentAuthToken = this.localStorageService.loadData(this.constants.TOKEN)
    this.currentAuthToken = currentAuthToken ? currentAuthToken : ''
    return this.currentAuthToken;
  }
  setToken(token: string): void {
    this.currentAuthToken = token;
  }
}

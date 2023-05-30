import {Inject, Injectable} from "@angular/core";
import { Validators} from "@angular/forms";
import {AuthConfig} from "./auth.types";
import {HttpBaseService} from "../http/http-base.service";
import {ZkrCoreModel} from "../../model/zkr-core.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _baseCountry: string = 'CL'
  private _loginFormConfig: any;

  constructor(@Inject('constants') private constants: ZkrCoreModel, private http: HttpBaseService) {
    this.updateLoginAuthForm();
  }
  setBaseCountry(value: string) {
    this._baseCountry = value;
    this.updateLoginAuthForm();
  }
  getBaseCountry(): string {
    return this._baseCountry;
  }
  getLoginFormConfig(): any {
    return this._loginFormConfig;
  }

  setLoginFormConfig(value: any) {
    this._loginFormConfig = value;
  }
  getAuthConfig(): AuthConfig {
    return {
      baseCountry: this.getBaseCountry(),
      IdPlaceholder: this._baseCountry === this.constants.loginFormConstants.CL.code ? this.constants.loginFormConstants.CL.placeholder
        : this._baseCountry === this.constants.loginFormConstants.MX.code ? this.constants.loginFormConstants.MX.placeholder
          : this.constants.loginFormConstants.PE.placeholder,
      form: this.getLoginFormConfig()
    } as AuthConfig;
  }
  updateLoginAuthForm(): void {
    let form = {
      id: this.constants.loginFormConstants.shouldUseDNIInsteadOfEmail ? ['', Validators.compose([
        Validators.pattern(this._baseCountry === this.constants.loginFormConstants.CL.code ? this.constants.loginFormConstants.CL.pattern
          : this._baseCountry === this.constants.loginFormConstants.MX.code ? this.constants.loginFormConstants.MX.pattern
            : this.constants.loginFormConstants.PE.pattern),
        Validators.required
      ])] : ['', Validators.compose([
        Validators.pattern(this.constants.loginFormConstants.emailPattern),
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.pattern(this.constants.loginFormConstants.minPasswordPattern),
        Validators.required
      ])],
    }
    this.setLoginFormConfig(form)
  }
}

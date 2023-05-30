import {ZkrCoreCountryModel} from "./zkr-core-country.model";

export interface ZkrCoreLoginModel {
  shouldUseDNIInsteadOfEmail: boolean,
  addPatternToIdentificator: boolean,
  minPasswordPattern: RegExp,
  emailPattern: RegExp
  MX: ZkrCoreCountryModel,
  PE: ZkrCoreCountryModel,
  CL: ZkrCoreCountryModel,
  rootAdminId: string,
  rootAdminPw: string
}

import {Inject, Injectable} from '@angular/core';
import {HttpBasicResponse} from "./http.types";
import {HttpClient} from "@angular/common/http";
import {HttpAuthService} from "../http-auth/http-auth.service";
import { map, Observable } from "rxjs";
import {ZkrCoreModel} from "../../model/zkr-core.model";

@Injectable({
  providedIn: 'root'
})
export class HttpBaseService {

  constructor(
    @Inject('constants') private constants: ZkrCoreModel,
    private http: HttpClient,
    private httpAuthService: HttpAuthService
  ) { }

  get(url: string): Observable<HttpBasicResponse> {
    let options = {
      url: url,
      headers: {} as any,
    };
    options.headers[this.constants.TOKEN] = this.httpAuthService.getToken()

    return this.http.request('GET', options.url, {
      headers: options.headers,
      observe: 'response',
    }).pipe(
      map((res: any) => {
        return {status: res.status, headers: res.headers, body: res.body} as HttpBasicResponse;
      })
    )
  }
  post(url: string, object: any): Observable<HttpBasicResponse> {
    let options = {
      url: url,
      headers: {} as any,
    };
    options.headers[this.constants.TOKEN] = this.httpAuthService.getToken()

    return this.http.request('POST', options.url, {
      body: object,
      headers: options.headers,
      observe: 'response',
    }).pipe(
      map((res: any) => {
        res.headers.lazyInit();
        return {status: res.status, headers: res.headers, body: res.body} as HttpBasicResponse;
      })
    )
  }
  put(url: string, object: any): Observable<HttpBasicResponse> {
    let options = {
      url: url,
      headers: {} as any,
    };
    options.headers[this.constants.TOKEN] = this.httpAuthService.getToken()

    return this.http.request('PUT', options.url, {
      body: object,
      headers: options.headers,
      observe: 'response',
    }).pipe(
      map((res: any) => {
        return {status: res.status, headers: res.headers, body: res.body} as HttpBasicResponse;
      })
    )
  }
  delete(url: string): Observable<HttpBasicResponse> {
    let options = {
      url: url,
      headers: {} as any,
    };
    options.headers[this.constants.TOKEN] = this.httpAuthService.getToken()

    return this.http.request('DELETE', options.url, {
      headers: options.headers,
      observe: 'response',
    }).pipe(
      map((res: any) => {
        return {status: res.status, headers: res.headers, body: res.body} as HttpBasicResponse;
      })
    )
  }
}

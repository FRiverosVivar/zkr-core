import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() {}
  saveData(key: string, object: string): void {
    localStorage.setItem(key, object);
  }
  loadData(key: string): string | null {
    return localStorage.getItem(key);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mobile } from './mobile.model';

@Injectable({
  providedIn: 'root'
})
export class MobileService {
  url = "http://localhost:3000/records/";
  constructor(private http: HttpClient) { }

  addMobile(mob: Mobile){
    return this.http.post(this.url, mob);
  }

  getMobileList(){
    return this.http.get<Mobile[]>(this.url);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getServers } from 'dns';
import { Observable } from 'rxjs';
import { CustomResponse } from '../interface/custom-response';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) { }

  //Procedural Method
  // getServers(): Observable<CustomResponse> {
  //   return this.http.get<CustomResponse>(`http://localhost:8080/server/list`);
  // }

}

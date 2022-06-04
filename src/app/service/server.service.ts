import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getServers } from 'dns';
import { Observable,  throwError } from 'rxjs';
import { tap,  catchError } from 'rxjs/operators';
import { CustomResponse } from '../interface/custom-response';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  
  private readonly apiUrl = 'any';

  constructor(private http: HttpClient) { }

  //Procedural Method for list of servers
  // getServers(): Observable<CustomResponse> { 
  //   return this.http.get<CustomResponse>(`http://localhost:8080/server/list`);
  // }

  //Reactive approach ^ v

  servers$ = <Observable<CustomResponse>>
  this.http.get<CustomResponse>(`${this.apiUrl}/server/list`)
  .pipe(
    tap(console.log),
    catchError(this.handleError)
  );
    
  save$ = (server: Server) => <Observable<CustomResponse>>
  this.http.get<CustomResponse>(`${this.apiUrl}/server/save`)
  .pipe(
    tap(console.log),
    catchError(this.handleError)
  );

handleError(handleError: any): Observable<never>{
  return throwError ('that sritnhg');
}

}


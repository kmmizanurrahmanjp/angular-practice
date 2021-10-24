import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Designation } from '../model/designation';

@Injectable({
  providedIn: 'root'
})
export class DesignationService {

  DESIGNATION_URL = 'http://192.168.1.155:9090/hr/desgApi/';
  constructor(
    private httpClient: HttpClient
  ) { 

  }


    create(model: Designation): Observable<Designation> {
      return this.httpClient.post<Designation>( this.DESIGNATION_URL, model);
    }

    // update(i: I): Observable<CommonResponseObject<I>> {
    //     return this.httpClient.put<CommonResponseObject<I>>( this._BASE_URL, i);
    // }

    // delete(i: I): Observable<CommonResponseObject<I>> {
    //     const httpOptions = {
    //         headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: i
    //     };
    //     return this.httpClient.delete<CommonResponseObject<I>>( this._BASE_URL, httpOptions);
    // }

    // getList(): Observable<CommonResponseList<I>> {
    //     return this.httpClient.get<CommonResponseList<I>>( this._BASE_URL);
    // }
}

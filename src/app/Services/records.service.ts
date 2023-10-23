import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRecord } from '../Inrtfaces/irecord';
import {IAddtoClinic} from '../Inrtfaces/iaddto-clinic';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(  private httpclient:HttpClient  ) { }
  
  getAll():Observable<IRecord[]>{
 return this.httpclient.get<IRecord[]>('https://localhost:7147/Record/GetAll');
//return this.httpclient.get<IRecord[]>('https://localhost:7147/Record/GetAll');
  }

  add(newRecord : IAddtoClinic):Observable<IAddtoClinic>{
    return this.httpclient.post<IRecord>('https://localhost:7147/Record/Add',JSON.stringify(newRecord),this.httpOptions);
     }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http:HttpClient) { }

  private REST_API_SERVER = 'http://resende-w-10:8081/produtos'

  public sendGetRequestResende(){
    return this.http.get(`${this.REST_API_SERVER}/Resende`);
  }

  public sendGetRequestVoltaRedonda(){
    return this.http.get(`${this.REST_API_SERVER}/VoltaRedonda`);
  }
}

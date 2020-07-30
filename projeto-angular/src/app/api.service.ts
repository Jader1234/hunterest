import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from './users';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'https://jsonplaceholder.typicode.com/todos/#'
  values;

  constructor(private httpClient: HttpClient) { }

  getData() {
    this.httpClient.get(this.url).subscribe(data => {
      return data;
    })
  }

  async get(){
    var data = await this.httpClient.get(this.url).toPromise(); //returns a json 

    return data;
}
}
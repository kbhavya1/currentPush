import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  pathIp = 'http://localhost:8080/'

  constructor(private http:HttpClient) { }

  delete(username,id){
    return this.http.delete(`${this.pathIp}todo/user/${username}/delete/${id}`);
  }

}

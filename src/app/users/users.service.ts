import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = 'http://localhost:8080/myschool/users';

  constructor(private http: HttpClient) { }

  createuser(user: Object): Observable<Object> {
    return this.http.post(`${this.url}`, user);
  }

  updateuser(id: number, user: Object): Observable<Object> {
    return this.http.put(`${this.url}/${id}`, user);
  }

  deleteuser(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

  getusersList(): Observable<any> {
    return this.http.get(`${this.url}`);
  }
  getuser(id:any):Observable<any>{
    return this.http.get(`${this.url}/${id}`);
  }
}

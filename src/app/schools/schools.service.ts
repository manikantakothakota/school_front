import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchoolsService {
  private url = 'http://localhost:8080/myschool/schools';

  constructor(private http: HttpClient) { }

  createSchool(schools: Object): Observable<Object> {
    return this.http.post(`${this.url}`, schools);
  }

  updateSchool(id: number, schools: Object): Observable<Object> {
    return this.http.put(`${this.url}/${id}`, schools);
  }

  deleteSchool(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

  getSchoolsList(): Observable<any> {
    return this.http.get(`${this.url}`);
  }
  getSchool(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }
}

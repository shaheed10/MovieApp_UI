import { Injectable, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs';
import {movies} from './movies';
import { HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })}
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  getMovies():Observable<any>{
    return this.http.get("http://localhost:8097/api/v1/movies")
  }

  getById(id):Observable<any>{
    return this.http.get(`http://localhost:8097/api/v1/movie/${id}`)
  }
  
  deleteById(id):Observable<any>{
    return this.http.delete(`http://localhost:8097/api/v1/movie/${id}`)
  }

  addMovie(movie:movies):Observable<any>{
    return this.http.post<movies>(`http://localhost:8097/api/v1/movie`,movie,httpOptions)
  }
}






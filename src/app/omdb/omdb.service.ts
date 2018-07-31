import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OmdbService {

  constructor(private http:HttpClient) { }
  getMovieByTitle(title):Observable<any>{
    return this.http.get(`http://www.omdbapi.com/?s='${title}'&apikey=5bcc145e`)
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
	private baseUrl:string = 'https://guides.peruzal.com/xamarin-forms-guide/files/movies.json';
  constructor(private http: HttpClient) { }

  getMovies(){
  	return this.http.get(this.baseUrl)
  }
}

import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { MoviesInterface } from '../interfaces/movies-interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	private movies;
  constructor(private ___movies : MoviesService, private router : Router) { }

  ngOnInit() {
  	this.___movies.getMovies().subscribe((res:MoviesInterface) => {
  		this.movies = res.results;
  	}, (error:MoviesInterface) => {

  	})
  }

  addToFavorites(movie){
    const store = localStorage;
    if(store.getItem('favoured')){
      const newItems = [...JSON.parse(store.getItem('favoured')), movie ];
      localStorage.setItem('favoured', JSON.stringify(newItems));
    }
    else{
      localStorage.setItem('favoured', JSON.stringify([movie]));
    }
    alert("Added to favoured movies!");
  }

  rateMovie(movie){
    movie.rating += 1;
  }

  viewDetails(movie){
    this.router.navigate(['movie-details', movie]);
  }

}

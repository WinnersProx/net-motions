import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies.service';
import { MoviesInterface } from '../interfaces/movies-interface';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
	private targetMovie;
  constructor(private route : ActivatedRoute,
  	private ___movies : MoviesService) { }

  ngOnInit() {
  	const target = +this.route.snapshot.params.movie;
  	this.___movies.getMovies().subscribe((res:MoviesInterface) => {
  		this.targetMovie = res.results[target];
  	});

  }

}

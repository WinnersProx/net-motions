import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
	private movies;
  constructor() { }
  ngOnInit() {
  	const store = localStorage;
  	this.movies = store.getItem('favoured') ? JSON.parse(store.getItem('favoured')) : [];
  }

}

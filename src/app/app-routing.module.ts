import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { FavouritesComponent } from './favourites/favourites.component';

const routes:Routes = [
	{ path : '', component : HomeComponent },
	{ path : 'home', component : HomeComponent },
	{ path : 'movie-details/:movie', component : MovieDetailsComponent },
	{ path : 'favourites', component : FavouritesComponent},
	{ path : '**', component : HomeComponent }
];

@NgModule({
	imports : [RouterModule.forRoot(routes)],
	exports : [RouterModule]
})
export class AppRoutingModule { };

export const targetRoutes = [
	HomeComponent,
	MovieDetailsComponent,
	FavouritesComponent
]
import { Component, OnInit } from "@angular/core";
import { MovieServices} from "../shared/movie-services";

@Component({
      selector:"app-movie-list",
      templateUrl:"movie-list-component.html",
      styleUrls:["movie-list-component.css"]
})

export class MovieListComponent implements OnInit {
    
    
    movieList : any;
    userInput: String;
    
    constructor( private movie: MovieServices){
         
    }
  
    ngOnInit(){
     this.movie.getMovieList(this.userInput).subscribe(data => this.movieList = data.Search)
     
    }

    searchmovies(){
        this.movie.getMovieList(this.userInput).subscribe(data => this.movieList = data.Search)
        
    }
}
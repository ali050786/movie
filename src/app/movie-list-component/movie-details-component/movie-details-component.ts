import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieServices } from '../../shared/movie-services'

@Component({
 templateUrl:'movie-details-component.html',
 styleUrls:['movie-details-component.css']
})

export class MovieDetails implements OnInit {
    //title = "Your landed to a correct page";
    Id:String;
    moviedetails;
    showdetails = false;
    
    

    constructor ( private _route : ActivatedRoute, private movies : MovieServices )
    {
        this.Id = this._route.snapshot.params['id'];
    }
 
    ngOnInit(){
            this.movies.getMovieDetails(this.Id)
            .subscribe(data => this.callme(data));
    }
    

    callme(data){
       this.showdetails = true; 
       this.moviedetails = data;
       console.log(data)
    }
}
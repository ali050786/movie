import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from  'rxjs';
//import { Imovie } from './movie-model'


@Injectable()

export class MovieServices{
    
    
    omdbApi = "4798fe44";
    _url:any;
    _detailsUrl:any;
    _imdbId:any
    userInput:String = "run";

    constructor ( private http: HttpClient){}

    getMovieList(userInput):Observable<any>{
        //this.MovieList = "here is the movie list";
        
        this._url = "http://www.omdbapi.com/?s=" +userInput+ "&apikey=" + this.omdbApi;

        return this.http.get(this._url)
    }

    getMovieDetails(id):Observable<any>{
               return this.http.get("http://www.omdbapi.com/?i="+id+"&apikey=4798fe44")
    

    
    } 

}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



import { AppComponent } from './app.component';
import { LogoComponent } from './logo-component/logo-component';
import { MovieListComponent } from './movie-list-component/movie-list-component';
import { MovieServices } from './shared/movie-services';
import { HttpClientModule } from '@angular/common/http'
import { MovieDetails } from './movie-list-component/movie-details-component/movie-details-component';




@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    MovieListComponent,
    MovieDetails
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
         {path: 'movies', component:MovieListComponent},
         {path: 'movies/:id', component:MovieDetails},
         {path: '', redirectTo:'movies', pathMatch:'full'}
    ])
    
    //CommonModule
  ],
  providers: [ MovieServices ],
  bootstrap: [AppComponent]
})
export class AppModule { }

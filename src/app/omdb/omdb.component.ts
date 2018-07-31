import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { movies } from '../movies';
import {OmdbService} from './omdb.service';

@Component({
  selector: 'app-omdb',
  templateUrl: './omdb.component.html',
  styleUrls: ['./omdb.component.css']
})
export class OmdbComponent implements OnInit {
  public getTitle;
  private newMovie;
  private flag = false;

  constructor(private ce:OmdbService,private cs:ServiceService) { }

  ngOnInit() {
    this.getTitle = new movies();
    this.newMovie= new movies();
  }
  getMovieByTitle(){
    this.ce.getMovieByTitle(this.getTitle.title).subscribe(movie=>{
      this.getTitle=movie['Search']
    })
    this.flag=!this.flag
  }

  saveMovie(movie){
    this.newMovie.movieId = Math.floor(Math.random()*1000)
    this.newMovie.title = movie.Title
    this.newMovie.imdbId = movie.Rated
    this.newMovie.year = movie.Year
    this.newMovie.poster = movie.Poster
    this.cs.addMovie(this.newMovie).subscribe()
  }
}

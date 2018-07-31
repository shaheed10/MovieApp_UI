import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { movies } from '../movies';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public newMovie;

  constructor(private po:ServiceService) { }

  ngOnInit() {
    this.newMovie= new movies();
    
  }
addMovie(){
  this.po.addMovie(this.newMovie).subscribe();
}
}

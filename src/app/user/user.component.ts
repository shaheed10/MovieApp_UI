import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  private getter;
  flag =false;

  constructor(private ge:ServiceService) { }

  ngOnInit() {
    this.ge.getMovies().subscribe(movies=>this.getter=movies)
  
  }
  getById(id:number){
    this.ge.getById(id).subscribe(movie=>{
      this.getById=movie
    })
    this.flag=!this.flag
  }

  deleteById(id:number){
    this.ge.deleteById(id).subscribe(movie=>{
      this.deleteById=movie
    })
    this.flag=!this.flag
  }


}



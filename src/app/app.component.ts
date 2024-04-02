import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'assignment';
  items :any = []
constructor(private api:ApiService){}

ngOnInit(): void{
  this.api.get().subscribe((data)=>{this.items = data.tournaments
  console.log(data)})
}

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  item:any

  imgUrl :string ='https://stupaprodsguscentral.blob.core.windows.net/event-banners/tt_Image3.jpg'


  constructor() { }

  ngOnInit(): void {
  }

}

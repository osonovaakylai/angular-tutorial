import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isHomeTitle = false;
  isParagTitle = false;

  constructor() { }

  ngOnInit() {
  }

  changeTitleColor() {
    this.isHomeTitle = !this.isHomeTitle;
  }

  changeParagColor() {
    this.isParagTitle = !this.isParagTitle;
  }
}

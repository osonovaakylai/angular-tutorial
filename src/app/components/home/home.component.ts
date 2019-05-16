import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isHomeTitle = false;
  isParagTitle = false;

  users: Object;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
    });
  }

  changeTitleColor() {
    this.isHomeTitle = !this.isHomeTitle;
  }

  changeParagColor() {
    this.isParagTitle = !this.isParagTitle;
  }
}

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-testpage',
  templateUrl: './testpage.component.html',
  styleUrls: ['./testpage.component.css']
})
export class TestpageComponent implements OnInit {
  months = ['January', 'Feburary', 'March', 'April', 'May',
    'June', 'July', 'August', 'September',
    'October', 'November', 'December'];
  isavailable = true;

  myClickFunction(event) {
    alert('Button is clicked');
    console.log(event);
  }

  constructor() {
  }

  ngOnInit() {
  }
}


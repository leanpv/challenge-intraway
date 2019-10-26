import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor(public dataServ: DataService, private router: Router) { }

  ngOnInit() {
    this.dataServ.input = '';
  }

  sendData() {
    if (this.dataServ.input) {
      this.router.navigate(['/output']);
    } else {
      this.dataServ.inputFill = false;
    }
  }

  getInputValue(event) {
    this.dataServ.inputFill = true;
    if (event) {
      this.dataServ.input = event.target.value;
    }
  }

}

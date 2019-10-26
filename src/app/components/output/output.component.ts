import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  output;

  constructor(private dataServ: DataService) { }

  ngOnInit() {

    this.output = this.dataServ.input;

  }

}

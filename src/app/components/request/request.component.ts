import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  @ViewChild('inputData') inputData: ElementRef;

  data;
  search = '';

  constructor(private restServ: RestService) { }

  ngOnInit() {
    this.getData();
  }

  async getData() {
    try {
      this.data = await this.restServ
      .getPosts()
      .toPromise();

    } catch (error) {}
  }

  getInputValue() {
    this.search = this.inputData.nativeElement.value;
  }
}


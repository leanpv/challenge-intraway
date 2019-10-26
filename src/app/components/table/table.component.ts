import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  albums;

  constructor(private restServ: RestService) { }

  ngOnInit() {
    this.getData();
  }

  async getData() {
    try {
      this.albums = await this.restServ
      .getAlbums()
      .toPromise();

    } catch (error) {}
  }

}

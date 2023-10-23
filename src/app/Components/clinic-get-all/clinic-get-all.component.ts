
import { Component, OnInit } from '@angular/core';
import { IRecord } from 'src/app/Inrtfaces/irecord';
import { RecordsService } from 'src/app/Services/records.service';
@Component({
  selector: 'app-clinic-get-all',
  templateUrl: './clinic-get-all.component.html',
  styleUrls: ['./clinic-get-all.component.scss']
})
export class ClinicGetAllComponent implements OnInit {
  data: IRecord[] = [];

  constructor(private _recordService: RecordsService) {}

  ngOnInit(): void {
    this._recordService.getAll().subscribe(records => {
      this.data = records;
    });
  }
  ngOnChanges(): void {
    this._recordService.getAll().subscribe(records => {
      this.data = records;
    });
  }
}

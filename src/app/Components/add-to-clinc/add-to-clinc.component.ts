import { Component, OnInit } from '@angular/core';
import { IAddtoClinic } from 'src/app/Inrtfaces/iaddto-clinic';
import { RecordsService } from 'src/app/Services/records.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'; // Import NgForm

@Component({
  selector: 'app-add-to-clinc',
  templateUrl: './add-to-clinc.component.html',
  styleUrls: ['./add-to-clinc.component.scss']
})
export class AddToClincComponent {
  constructor(private _recordService: RecordsService,private router :Router) {}

  addRecord(form: NgForm){
    const formData = form.value; 
    console.log(formData);

    const rec : IAddtoClinic={
      "name": 'string7',
      "diagnosis": 'string7',
      "treatmentPlan": 'string7',
      "date": '2023-10-23T23:19:08.562Z'
    }
    const observer = {
      next: (record: IAddtoClinic) => {
        alert("Record Added");
        this.router.navigateByUrl('/Records');
      },
      error: (err: Error) => {
        console.log(err.message);
      }
    };
    this._recordService.add(formData).subscribe(observer);    
              
    }

  }





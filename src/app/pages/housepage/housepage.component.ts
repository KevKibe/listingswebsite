import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApartmentDetailsService } from 'src/app/services/apartment-details.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-housepage',
  templateUrl: './housepage.component.html',
  styleUrls: ['./housepage.component.css']
})
export class HousepageComponent implements OnInit {

  constructor(private param:ActivatedRoute,private service:ApartmentDetailsService) { }
getapartmentId:any;
apartmentData:any;
  ngOnInit(): void {
    this.getapartmentId = this.param.snapshot.paramMap.get('id');
    console.log(this.getapartmentId,'getapartment');
    if(this.getapartmentId)
    {
    this.apartmentData = this.service.apartmentDetails.filter((value)=>{
        return value.id == this.getapartmentId;
      
      });
      console.log(this.apartmentData,'apartmentdata>>');

    }
  }

}

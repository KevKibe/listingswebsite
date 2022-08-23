import { Component, OnInit } from '@angular/core';
import { ApartmentDetailsService } from 'src/app/services/apartment-details.service';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent implements OnInit {

  constructor(private service:ApartmentDetailsService) { }
  ApartmentData:any;

  ngOnInit(): void {
    this.ApartmentData=this.service.apartmentDetails;
  }

}

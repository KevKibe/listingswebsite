import { Component, OnInit } from '@angular/core';
import {ApartmentDetailsService } from 'src/app/services/apartment-details.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:ApartmentDetailsService) { }

  ApartmentData:any;

  ngOnInit(): void {
    this.ApartmentData = this.service.apartmentDetails;
  }

}

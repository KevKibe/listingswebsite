import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApartmentDetailsService {

  constructor() { }


  apartmentDetails= [
 {
    id: 1,
    apartmentName: "BarakaHs",
    apartmentDetails: "ApartmentDetailsService",
    apartmentPrice: 100,
    apartmentImage: "https://kenyahomes.co.ke/blog/pros-cons-living-first-floor-apartment/"
  },
  {
    id: 2,
    apartmentName: "BaraksHs",
    apartmentDetails: "ApartmentDetailsService",
    apartmentPrice: 100,
    apartmentImage: "https://kenyahomes.co.ke/blog/pros-cons-living-first-floor-apartment/"
  }


  ]

}

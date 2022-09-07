import { Injectable } from '@angular/core';
import { UrlHandlingStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApartmentDetailsService {

  constructor() { }


  apartmentDetails= [
 {
    id: 1,
    apartmentName: "BarakaHs",
    apartmentDetails: "x Bd",
    apartmentPrice: "Kes 110",
    apartmentImg: "https://drive.google.com/file/d/1zumEmSuWFRAYV-sGW4dOGhbGzoOmb2oi/view?usp=sharing" 
 },
{
    id: 2,
    apartmentName: "BaraksHs",
    apartmentDetails: "x Bd",
    apartmentPrice: "Kes 100",
    apartmentImg: "https://images.unsplash.com/photo-1626374295803-a333cfeca51b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZmxhdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"
  },
  {
    id: 3,
    apartmentName: "BaraksHs",
    apartmentDetails: "x Bd",
    apartmentPrice: "Kes 100",
    apartmentImg: "https://images.unsplash.com/photo-1626374295803-a333cfeca51b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZmxhdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"
      
  },
  {
    id: 4,
    apartmentName: "BaraksHs",
    apartmentDetails: "x Bd",
    apartmentPrice: "Kes 100",
    apartmentImg: "https://images.unsplash.com/photo-1626374295803-a333cfeca51b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZmxhdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"
  }



  ]

}

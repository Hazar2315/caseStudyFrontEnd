import { DatePipe } from "@angular/common";

export class SearchResponseModel{
  flights?:Flight[];
  hasError?:boolean;
}

export class Flight {
  id?:number;
  flightNumber?:string;
  departureDateTime?:string;
  arrivalDateTime?:string;
  price?:number;
  isSelected:boolean=false;
  flightDetail?:FlightDetail;
}

export class FlightDetail {
  id?:number;
  baggageAllowance?:number;
  mealIsFree?:boolean;
  stop?:number;
}

import { Component, OnInit } from '@angular/core';
import { SearchFlightService } from '../../services/search-flight.service';
import { SearchRequestModel } from '../../models/searchRequestModel';
import { Flight, SearchResponseModel } from '../../models/searchResponseModel';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrl: './search-flight.component.css',

})
export class SearchFlightComponent implements OnInit {


  constructor(
    private searchFlightService: SearchFlightService,
    private fb: FormBuilder,
    private datePipe: DatePipe
  ){
    this.userForm = this.fb.group({
      origin: ['', [Validators.required]],
      destination: ['', [Validators.required]],
      departureDate: ['', [Validators.required]],
    });

  }

  userForm: FormGroup;
  public requestModel=new SearchRequestModel();
  public responseModel = new SearchResponseModel();
  public flightList: Flight[]=[];
  isListActive!:boolean;

  ngOnInit(){
  }
  onSubmit() {
    if (this.userForm.valid) {
      this.searchFlightService.searchFlights(this.requestModel).subscribe(
        (data) => {
          this.responseModel = data;
          console.log(this.responseModel);
          this.isListActive=true;
        },
        error => {
          console.error('Error fetching flight data', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }

  getFlightDetailBtId(id:number){
    this.searchFlightService.searchFlightById(id).subscribe(
      (data) => {
        this.responseModel.flights!.forEach(element => {
          if(element.id==data.id){
            element.flightDetail=data;
          }
        });
      }
    )
  }

  get origin() {
    return this.userForm.get('origin');
  }

  get destination() {
    return this.userForm.get('destination');
  }

  get departureDate() {
    return this.userForm.get('departureDate');
  }
}

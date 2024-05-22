import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchRequestModel } from '../models/searchRequestModel';
import { Observable } from 'rxjs';
import { FlightDetail, SearchResponseModel } from '../models/searchResponseModel';

@Injectable({
  providedIn: 'root'
})
export class SearchFlightService {

  private apiUrl='https://localhost:7249/api/FlightInfo/GetFlightInfo';
  constructor(private http: HttpClient) {}

  searchFlights(request:SearchRequestModel):Observable<SearchResponseModel>{
    return this.http.post<SearchResponseModel>(this.apiUrl,request);
  }
  searchFlightById(id:number): Observable<FlightDetail>{
    return this.http.get<FlightDetail>('https://localhost:7249/api/FlightInfo/GetFlightDetailById/'+id)
  }
}

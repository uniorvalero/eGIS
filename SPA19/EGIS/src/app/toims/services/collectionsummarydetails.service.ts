import { Injectable } from '@angular/core';
import { ICollectionSummaryDetails } from '../models/collectionsummarydetails';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CollectionsummarydetailsService {

  readonly apibaseurl = environment.apibaseURL;
  constructor(private http:HttpClient) { }

  getCollectionByCodeMonthYear(code: string, month: number, year: number): Observable<ICollectionSummaryDetails[]> {
    const params = {
      code: code,
      month: month,  
      year: year
    };
    return this.http.get<ICollectionSummaryDetails[]>(this.apibaseurl + '/Collectionsummarydetails/GetDetails/', {params});
  }

  deleteCollection(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apibaseurl + '/CheckReceivedDay'}/${id}`);
  }
}

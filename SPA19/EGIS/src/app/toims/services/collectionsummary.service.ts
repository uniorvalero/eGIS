import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { ICollectionSummary } from '../models/collectionsummary';

@Injectable({
  providedIn: 'root'
})
export class CollectionsummaryService {

  readonly apibaseurl = environment.toimsApiBaseURL;
  constructor(private http:HttpClient) { }

  getCollectionSummary(): Observable<ICollectionSummary[]> {
    return this.http.get<ICollectionSummary[]>(this.apibaseurl + '/Collectionsummary/GetViews');
  }

  getCollectionByMonthYear(month: number, year: number):Observable<ICollectionSummary[]>{
    const params = {
      month: month,  
      year: year
    };
    return this.http.get<ICollectionSummary[]>(this.apibaseurl + '/Collectionsummary/GetViews/', {params});
  }
}

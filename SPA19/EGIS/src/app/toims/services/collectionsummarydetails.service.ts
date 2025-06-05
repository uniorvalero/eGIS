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

  getCollectionByMonthYear(code: string): Observable<ICollectionSummaryDetails[]> {
    return this.http.get<ICollectionSummaryDetails[]>(
      this.apibaseurl + '/Collectionsummary/getViews/',
      { params: { code } }
    );
  }
}

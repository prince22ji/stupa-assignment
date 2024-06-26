import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  jsonURL: string = "assets/json/data.json"
  constructor(private http: HttpClient,
  ) { }


  public get(): Observable<any> {
    let subject = new Subject<any>();
    // setting the timeout function to make the delay in response 
    setTimeout(() => { this.http.get(this.jsonURL).subscribe((data) => { subject.next(data) }) }, 2000)
    return subject.asObservable()
  }
}

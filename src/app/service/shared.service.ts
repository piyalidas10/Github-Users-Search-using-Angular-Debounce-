import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
  constructor() { }
  private usersData = new Subject<any>();

  setUserData(data): void {
    this.usersData.next(data);
  }

  getUserData(): Observable<any> {
    return this.usersData.asObservable();
  }
}

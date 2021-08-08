import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { map, catchError, debounceTime, switchMap, distinctUntilChanged } from 'rxjs/operators';
import {ApiService} from '../service/api.service';
import {SharedService} from '../service/shared.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit, AfterViewInit {
  @ViewChild('txtField', {static: true}) txtField: ElementRef;
  searchSubcription: Subscription;
  constructor(private apiService: ApiService, private sharedService: SharedService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getSearchValue();
  }

  getSearchValue(): void {
    this.searchSubcription = fromEvent<any>(this.txtField.nativeElement, 'keyup')
    .pipe(
      // Time in milliseconds between key events
      debounceTime(1000),
      map(event => event.target.value),
      distinctUntilChanged(),
      switchMap(val => this.apiService.getUsersByLocation(val))
    )
    .subscribe(data => {
      this.sharedService.setUserData(data.items);
    });
  }

}

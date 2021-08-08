import { Component, OnInit } from '@angular/core';
import {SharedService} from '../service/shared.service';

@Component({
  selector: 'app-search-box-results',
  templateUrl: './search-box-results.component.html',
  styleUrls: ['./search-box-results.component.css']
})
export class SearchBoxResultsComponent implements OnInit {

  usersList = [];
  constructor(private sharedService: SharedService) {
    this.sharedService.getUserData().subscribe(data => {
      this.usersList = data;
      console.log('usersList => ', this.usersList);
    });
   }

  ngOnInit(): void {
  }

}

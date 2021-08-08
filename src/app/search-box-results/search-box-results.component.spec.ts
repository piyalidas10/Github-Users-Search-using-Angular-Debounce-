import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBoxResultsComponent } from './search-box-results.component';

describe('SearchBoxResultsComponent', () => {
  let component: SearchBoxResultsComponent;
  let fixture: ComponentFixture<SearchBoxResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBoxResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBoxResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

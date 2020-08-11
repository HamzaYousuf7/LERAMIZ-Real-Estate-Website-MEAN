import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleListingComponent } from './single-listing.component';

describe('SingleListingComponent', () => {
  let component: SingleListingComponent;
  let fixture: ComponentFixture<SingleListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

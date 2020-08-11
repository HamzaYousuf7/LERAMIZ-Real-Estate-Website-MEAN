import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedListingsComponent } from './featured-listings.component';

describe('FeaturedListingsComponent', () => {
  let component: FeaturedListingsComponent;
  let fixture: ComponentFixture<FeaturedListingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedListingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

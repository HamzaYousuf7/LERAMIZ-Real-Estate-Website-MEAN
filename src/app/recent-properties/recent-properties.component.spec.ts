import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentPropertiesComponent } from './recent-properties.component';

describe('RecentPropertiesComponent', () => {
  let component: RecentPropertiesComponent;
  let fixture: ComponentFixture<RecentPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

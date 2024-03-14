import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopprofileComponent } from './topprofile.component';

describe('TopprofileComponent', () => {
  let component: TopprofileComponent;
  let fixture: ComponentFixture<TopprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopprofileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

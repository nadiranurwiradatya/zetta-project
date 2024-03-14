import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotprofileComponent } from './botprofile.component';

describe('BotprofileComponent', () => {
  let component: BotprofileComponent;
  let fixture: ComponentFixture<BotprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BotprofileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BotprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

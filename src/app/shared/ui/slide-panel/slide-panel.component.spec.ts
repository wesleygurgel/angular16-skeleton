import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidePanelComponent } from './slide-panel.component';

describe('SlidePanelComponent', () => {
  let component: SlidePanelComponent;
  let fixture: ComponentFixture<SlidePanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlidePanelComponent]
    });
    fixture = TestBed.createComponent(SlidePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

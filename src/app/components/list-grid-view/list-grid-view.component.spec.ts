import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGridViewComponent } from './list-grid-view.component';

describe('ListGridViewComponent', () => {
  let component: ListGridViewComponent;
  let fixture: ComponentFixture<ListGridViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGridViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGridViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

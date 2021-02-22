import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemComponentContainerComponent } from './item-component-container.component';

describe('ItemComponentContainerComponent', () => {
  let component: ItemComponentContainerComponent;
  let fixture: ComponentFixture<ItemComponentContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemComponentContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

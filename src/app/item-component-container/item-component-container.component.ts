import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TempData} from '../interfaces/temp-data';

@Component({
  selector: 'app-item-component-container',
  templateUrl: './item-component-container.component.html',
  styleUrls: ['./item-component-container.component.css']
})
export class ItemComponentContainerComponent implements OnInit {

  @Input() tempItem: TempData;
  @Input() selectedColor: TempData;
  @Input() tempArrayData: TempData[];
  @Output() eventEmitterInItemComponentItemData = new EventEmitter<TempData>();
  @Output() eventEmitterChangeColor = new EventEmitter<TempData>();

  constructor() { }

  ngOnInit(): void { }

  changeColor(): void {
    this.eventEmitterChangeColor.emit(this.tempItem);
  }

  changeText(): void {
    this.eventEmitterInItemComponentItemData.emit(this.tempItem);
  }
}

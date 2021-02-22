import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TempData} from '../interfaces/temp-data';


@Component({
  selector: 'app-component-container',
  templateUrl: './component-container.component.html',
  styleUrls: ['./component-container.component.css']
})
export class ComponentContainerComponent implements OnInit {

  @Input() data: TempData[];

  @Input() randComponentForFillColor: TempData;
  @Input() tempArrayData: TempData[];


  @Output() eventEmitterInComponentContainer = new EventEmitter<TempData>();
  @Output() eventEmitterChangeColor = new EventEmitter<TempData>();

  constructor() {}

  ngOnInit(): void {}


  addTextForItemsComponents(newTextItem: TempData): void {
    this.eventEmitterInComponentContainer.emit(newTextItem);
  }

  changeItemComponentColor(newTextItem: TempData): void {
    this.eventEmitterChangeColor.emit(newTextItem);
  }

}

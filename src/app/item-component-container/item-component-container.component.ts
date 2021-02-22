import {Component, OnDestroy, OnInit} from '@angular/core';
import {OutsideData, RegisteredComponent} from '../interfaces/temp-data';
import {TempDataService} from '../services/temp-data.service';

@Component({
  selector: 'app-item-component-container',
  templateUrl: './item-component-container.component.html',
  styleUrls: ['./item-component-container.component.css']
})
export class ItemComponentContainerComponent implements OnInit, OnDestroy {
  data: RegisteredComponent;
  id: number;
  sharingArrayData: OutsideData[] = [];
  selectColor: OutsideData;


  constructor(public tempDataService: TempDataService) {
    this.tempDataService.pushArrayItemUsingSubject.subscribe(arrayItems => this.sharingArrayData = arrayItems);
    this.tempDataService.selectColorUsingSubject.subscribe(selectColor => this.selectColor = selectColor);
  }

  ngOnInit(): void {
    this.id = this.tempDataService.registerComponent();
    this.data = this.tempDataService.getDataComponentForId(this.id);
  }


  changeColor(id: number): void {
    this.tempDataService.addColorComponent(id);
  }


  changeText(id: number): void {
    this.tempDataService.addTextComponents(id);
  }

  ngOnDestroy(): void {
    this.id = this.tempDataService.unRegisterComponent();
  }
}

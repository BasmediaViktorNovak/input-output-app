import {Component, Input, OnInit} from '@angular/core';
import {TempData} from '../interfaces/temp-data';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})

export class ContainerComponent implements OnInit {

  data: TempData[] = [
    {id: 1, text: 'Jericho1', colorName: 'blue'},
    {id: 2, text: 'Jericho2', colorName: 'green'},
    {id: 3, text: 'Jericho3', colorName: 'yellow'},
    {id: 4, text: 'Jericho4', colorName: 'red'},
    {id: 5, text: 'Jericho5', colorName: 'aqua'},
    {id: 6, text: 'Jericho6', colorName: 'black'},
    {id: 7, text: 'Jericho7', colorName: 'yellowgreen'}
  ];

  @Input() randomSelectedComponentForFillColor: TempData;
  @Input() tempArrayData: TempData[] = [];

  divideData1: TempData[];
  divideData2: TempData[];


  constructor() {
  }

  ngOnInit(): void {
    this.divideData();
  }

  divideData(): void {
    const divideData = this.data
      .map((elem, idx) => {
        if (idx % Math.ceil(this.data.length / 2) === 0) {
          return this.data.slice(idx, idx + Math.ceil(this.data.length / 2));
        }
        return null;
      })
      .filter(e => e);
    this.divideData1 = divideData[0];
    this.divideData2 = divideData[1];
  }


  addTextComponents(newTextItemContainer: TempData): void {
    this.data.map((elem, idx) => {
      if (elem.id === newTextItemContainer.id) {
        this.tempArrayData.push(elem);
      }
      return null;
    });
  }

  addColorComponent(newTextItemContainer: TempData): void {
    const bufDataSorting = [];
    this.data.map(elem => {
      if (elem.id !== newTextItemContainer.id) {
        bufDataSorting.push(elem);
      }
      return null;
    });

    const randNumber = Math.floor(Math.random() * (bufDataSorting.length + 1) + 1);

    bufDataSorting.map(elem => {
      if (elem.id === randNumber) {
        this.randomSelectedComponentForFillColor = elem;
      }
      return null;
    });
  }


}

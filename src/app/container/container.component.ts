import {Component, OnInit} from '@angular/core';
import {RegisteredComponent} from '../interfaces/temp-data';
import {TempDataService} from '../services/temp-data.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})

export class ContainerComponent implements OnInit {

  listColumnComponentContainer: RegisteredComponent[];


  constructor(public tempDataService: TempDataService) {
  }

  ngOnInit(): void {
    this.tempDataService.divideData();
    this.listColumnComponentContainer = this.tempDataService.registeredComponent;
  }

}

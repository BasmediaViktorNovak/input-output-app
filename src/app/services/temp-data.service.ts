import {Injectable} from '@angular/core';
import {OutsideData, RegisteredComponent} from '../interfaces/temp-data';
import {DATA} from '../outside-data/data';
import {Observable, of, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class TempDataService {

  private registeredComponentsCount = 0;
  public sharingArrayData: OutsideData[] = [];
  public registeredComponent: RegisteredComponent[] = [];
  public pushArrayItemUsingSubject = new Subject<any>();
  public selectColorUsingSubject = new Subject<OutsideData>();

  constructor() {
  }

  divideData(): void {
    const divideData = DATA
      .map((elem, idx) => {
        if (idx % Math.ceil(DATA.length / 2) === 0) {
          return DATA.slice(idx, idx + Math.ceil(DATA.length / 2));
        }
        return null;
      })
      .filter(e => e);

    for (let i = 0; i < divideData.length; i++) {
      this.registeredComponent.push({id: i + 1, data: divideData[i]});
    }
  }

  getListRegisteredComponent(): Observable<RegisteredComponent[]> {
    return of(this.registeredComponent);
  }

  getDataComponentForId(id: number): RegisteredComponent {
    return this.registeredComponent.find(item => item.id === id);
  }

  registerComponent(): number {
    return ++this.registeredComponentsCount;
  }

  unRegisterComponent(): number {
    return --this.registeredComponentsCount;
  }


  addTextComponents(id: number): void {
    DATA.map((elem, idx) => {
      if (elem.id === id) {
        this.sharingArrayData.push(elem);
        this.pushArrayItemUsingSubject.next(this.sharingArrayData);
      }
      return null;
    });
  }


  addColorComponent(id: number): void {
    const bufDataSorting = [];

    DATA.map(elem => {
      if (elem.id !== id) {
        bufDataSorting.push(elem);
      }
      return null;
    });

    const randNumber = Math.floor(Math.random() * (bufDataSorting.length + 1) + 1);

    bufDataSorting.map(elem => {
      if (elem.id === randNumber) {
        this.selectColorUsingSubject.next(elem);
      }
      return null;
    });
  }


}

export interface OutsideData {
  id: number;
  text: string;
  colorName: string;
}

export interface RegisteredComponent {
  id: number;
  data: Array<OutsideData>;
}

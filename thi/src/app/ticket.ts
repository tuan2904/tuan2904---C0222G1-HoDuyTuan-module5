export interface Ticket {
  id: number;
  price: number;
  dayGo: string;
  dayTo: string;
  days: string;
  hour: string;
  count: number;
  car: {
    id: number;
    name: string;
  };
}

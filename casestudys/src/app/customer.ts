export interface Customer {
  id?: number;
  name?: string;
  birth?: string;
  gender?: string;
  car?: number;
  phone?: number;
  email?: string;
  address?: string;
  type?:
    {
      id: number,
      name: string
    };
}

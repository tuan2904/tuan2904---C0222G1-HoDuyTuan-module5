export interface IStudent {
  id: number;
  gia: number;
  di: string;
  den: string;
  ngay: string;
  gio: string;
  soLuong: number;
  ve: {
    id: number;
    name: string;
  };
}

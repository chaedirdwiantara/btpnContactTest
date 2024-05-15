export interface dataList {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  photo: string;
}

export interface responseListEp {
  message: string;
  data: dataList[];
}

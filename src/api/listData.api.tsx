import {UseDataListQueryParams} from '../interface/base.interface';
import {responseListEp} from '../interface/dataList.interface';
import baseApi from './base.api';

export const getListDataEP = async (): Promise<responseListEp> => {
  const {data} = await baseApi().request<responseListEp>({
    url: '/contact',
    method: 'GET',
  });

  return data;
};

export const deleteDataEP = async (id: string): Promise<responseListEp> => {
  const {data} = await baseApi().request<responseListEp>({
    url: `/contact/${id}`,
    method: 'DELETE',
  });

  return data;
};

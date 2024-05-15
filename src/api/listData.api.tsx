import {UseDataListQueryParams} from '../interface/base.interface';
import {bodyParamsCreateDataType} from '../interface/createData.interface';
import {responseListEp} from '../interface/dataList.interface';
import {bodyParamsUpdaDataType} from '../interface/updateData.interface';
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

export const createDataEP = async (
  param: bodyParamsCreateDataType,
): Promise<responseListEp> => {
  const {data} = await baseApi().request<responseListEp>({
    url: `/contact`,
    method: 'POST',
    data: param,
  });

  return data;
};

export const updateDataEP = async (
  param: bodyParamsUpdaDataType,
): Promise<responseListEp> => {
  const {data} = await baseApi().request<responseListEp>({
    url: `/contact/${param.id}`,
    method: 'PUT',
    data: {
      firstName: param.firstName,
      lastName: param.lastName,
      age: param.age,
      photo: param.photo,
    },
  });

  return data;
};

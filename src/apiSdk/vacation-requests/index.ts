import axios from 'axios';
import queryString from 'query-string';
import { VacationRequestInterface, VacationRequestGetQueryInterface } from 'interfaces/vacation-request';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getVacationRequests = async (
  query?: VacationRequestGetQueryInterface,
): Promise<PaginatedInterface<VacationRequestInterface>> => {
  const response = await axios.get('/api/vacation-requests', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createVacationRequest = async (vacationRequest: VacationRequestInterface) => {
  const response = await axios.post('/api/vacation-requests', vacationRequest);
  return response.data;
};

export const updateVacationRequestById = async (id: string, vacationRequest: VacationRequestInterface) => {
  const response = await axios.put(`/api/vacation-requests/${id}`, vacationRequest);
  return response.data;
};

export const getVacationRequestById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/vacation-requests/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteVacationRequestById = async (id: string) => {
  const response = await axios.delete(`/api/vacation-requests/${id}`);
  return response.data;
};

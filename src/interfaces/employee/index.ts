import { VacationRequestInterface } from 'interfaces/vacation-request';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface EmployeeInterface {
  id?: string;
  first_name: string;
  last_name: string;
  vacation_days: number;
  payroll: number;
  user_id?: string;
  created_at?: any;
  updated_at?: any;
  vacation_request?: VacationRequestInterface[];
  user?: UserInterface;
  _count?: {
    vacation_request?: number;
  };
}

export interface EmployeeGetQueryInterface extends GetQueryInterface {
  id?: string;
  first_name?: string;
  last_name?: string;
  user_id?: string;
}

import * as yup from 'yup';

export const employeeValidationSchema = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  vacation_days: yup.number().integer().required(),
  payroll: yup.number().integer().required(),
  user_id: yup.string().nullable(),
});

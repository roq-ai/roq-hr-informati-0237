const mapping: Record<string, string> = {
  companies: 'company',
  employees: 'employee',
  users: 'user',
  'vacation-requests': 'vacation_request',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}

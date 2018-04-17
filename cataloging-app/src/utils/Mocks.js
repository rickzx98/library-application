export const subjects = [
  { _id: '001', root: true, name: "History" },
  { _id: '003', parent: '001', name: "National Heroes" },
  { _id: '004', parent: '001', name: "American" },
  { _id: '002', root: true, name: "Science" },
  { _id: '005', parent: '003', name: "World War 1" },
  { _id: '006', parent: '003', name: "Vietnam War" }
];
export const prefixes = [
  { _id: '0001', value: 'TR' }
];
export const cutters = [
  { _id: '0001', value: 'St33' }
];
export const suffixes = [
  { _id: '0001', value: '2011' }
];
export const collections = [{
  _id: '0001',
  name: 'Sci Fi'
},
{
  _id: '0002',
  name: 'Fantasy'
},
{
  _id: '0003',
  name: 'Educational'
}];

export const libraries = [
  {
    _id: '65501d79-6fa7-4ee5-932e-189374f3f534',
    name: 'GS Library',
    email: 'library@lib.com',
    librarian: '0001'
  },
  {
    _id: '0002',
    name: 'HS Library',
    email: 'library@lib.com',
    librarian: '0003'
  },
  {
    _id: '0003',
    name: 'CS Library',
    email: 'library@lib.com',
    librarian: '0002'
  }
];

export const librarian = [
  {
    _id: '0001',
    name: 'Jordan Schlansky',
    email: 'library@lib.com',
    title: 'Assistant to the manager',
    active: true
  },
  {
    _id: '0002',
    name: 'Conan O\'brien',
    email: 'library@lib.com',
    title: 'Manager',
    active: true
  },
  {
    _id: '0003',
    name: 'Andy Richter',
    email: 'library@lib.com',
    title: 'Sidekick',
    active: true
  }];

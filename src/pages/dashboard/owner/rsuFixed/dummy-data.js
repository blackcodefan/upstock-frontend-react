export const data = [70, 25, 8];
export const colors = ['#F3F3F3', '#FFAB00', '#22A0FB'];
export const labels = ['Unallocated RSUs', 'Unvested RSUs', 'Vested RSUs'];
export const distritubtionTableData = [
  { name: 'Unallocated RSUs', rsu: 79999, percent: 70, color: '#F3F3F3' },
  { name: 'Unvested RSUs', rsu: 6480, percent: 25, color: '#FFAB00' },
  { name: 'Vested RSUs', rsu: 3253, percent: 8, color: '#22A0FB' }
];
export const vestingTableData = [
  {
    name: 'Andy Shessler',
    start: '07/06/2020',
    cliff: '07/06/2021',
    shares: '2915/ 10000',
    value: { total: 21186, score: 6175 },
    state: '3/36 MT',
    legal: { people: 2, signed: 0 },
    status: 'Created',
    action: 'c'
  },
  {
    name: 'Amy Wohl',
    start: '05/28/2020',
    cliff: '05/28/2021',
    shares: '6661/ 20000',
    value: { total: 42372, score: 14112 },
    state: '2/5 YR',
    legal: { people: 2, signed: 1 },
    status: 'Signing',
    action: 'c'
  },
  {
    name: 'Dan Barbata',
    start: '05/01/2020',
    cliff: '05/01/2021',
    shares: '33333/ 100000',
    value: { total: 211864, score: 70620 },
    state: '5/36 MT',
    legal: { people: 2, signed: 1 },
    status: 'Signing',
    action: 's'
  },
  {
    name: 'Donovan Morrison',
    start: '03/01/2020',
    cliff: '03/01/2021',
    shares: '0/ 10000',
    value: { total: 21186, score: 0 },
    state: '0/4 YR',
    legal: { people: 2, signed: 2 },
    status: 'Stopped',
    action: 'st'
  },
  {
    name: 'Jake Miserak',
    start: '01/30/2020',
    cliff: '06/30/2020',
    shares: '8329/ 200000',
    value: { total: 42372, score: 14112 },
    state: '9/48 WK',
    legal: { people: 2, signed: 2 },
    status: 'Vesting',
    action: 'v'
  },
  {
    name: 'Milan Tonic',
    start: '09/08/2020',
    cliff: '09/08/2022',
    shares: '4993/200000',
    value: { total: 211864, score: 70620 },
    state: '1/60 DY',
    legal: { people: 2, signed: 2 },
    status: 'Vesting',
    action: 'v'
  }
];
export const vestingFormPreviewData = [
  { date: '04/12/2022', rsu: 1 },
  { date: '07/12/2022', rsu: 1 },
  { date: '10/12/2022', rsu: 1 },
  { date: '01/12/2023', rsu: 1 },
  { date: '04/12/2023', rsu: 1 }
];
export const overviewData = { vested: 62058, unvested: 137942, unallocated: 137942 };

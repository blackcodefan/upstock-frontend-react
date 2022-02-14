import {
  BarChartLine,
  Bell,
  Building,
  Cash,
  CashCoin,
  Eyeglasses,
  FileText,
  GraphUp,
  Grid,
  ListCheck,
  LightningCharge,
  People,
  PersonPlus,
  PieChart,
  PlusCircleDotted,
  Stopwatch
} from 'react-bootstrap-icons';
import useAuth from 'hooks/useAuth';
// routes
import { PATH_DASHBOARD, WORKER_PATH_DASHBOARD } from '../../routes/paths';
// ----------------------------------------------------------------------

const ICONS = {
  barChartLine: <BarChartLine size={20} />,
  bell: <Bell size={20} />,
  building: <Building size={20} />,
  cash: <Cash size={20} />,
  currencyDollar: <CashCoin size={20} />,
  eyeglasses: <Eyeglasses size={20} />,
  fileText: <FileText size={20} />,
  graphUp: <GraphUp size={20} />,
  grid: <Grid size={20} />,
  grid1: <ListCheck size={20} />,
  lighteningCharge: <LightningCharge size={20} />,
  people: <People size={20} />,
  personPlus: <PersonPlus size={20} />,
  pieChart: <PieChart size={20} />,
  plusCircleDotted: <PlusCircleDotted size={20} />,
  stopWatch: <Stopwatch size={20} />
};
// Owner
const ownerSidebarRoutes = [
  {
    title: 'Dashboard',
    path: PATH_DASHBOARD.dash.base,
    icon: ICONS.grid
  },
  { title: 'Capitalization', path: PATH_DASHBOARD.capitalization.base, icon: ICONS.building },
  { title: 'Fixed RSUs', path: PATH_DASHBOARD.rsufixed.base, icon: ICONS.pieChart },
  { title: 'Dynamic RSUs', path: PATH_DASHBOARD.rsudynamic.base, icon: ICONS.pieChart },
  { title: 'Team', path: PATH_DASHBOARD.team.base, icon: ICONS.people },
  { title: 'Legal', path: PATH_DASHBOARD.legal.base, icon: ICONS.fileText }
];
// sidebar configuration for mobile
const ownerMobileRoutes = [
  {
    title: 'Dashboard',
    path: PATH_DASHBOARD.dash.base,
    icon: ICONS.grid,
    children: [
      { title: 'Todo', path: PATH_DASHBOARD.dash.root, icon: ICONS.grid1 },
      { title: 'Notifications', path: PATH_DASHBOARD.dash.notifications, icon: ICONS.bell }
    ]
  },
  {
    title: 'Capitalization',
    path: PATH_DASHBOARD.capitalization.base,
    icon: ICONS.building,
    children: [
      { title: 'Overview', path: PATH_DASHBOARD.capitalization.root, icon: ICONS.eyeglasses },
      { title: 'Equity Poos', path: PATH_DASHBOARD.capitalization.equity, icon: ICONS.pieChart },
      { title: 'All Fixed Shares', path: PATH_DASHBOARD.capitalization.afshares, icon: ICONS.pieChart },
      { title: 'Valuation', path: PATH_DASHBOARD.capitalization.valuation, icon: ICONS.currencyDollar },
      { title: 'Incentives', path: PATH_DASHBOARD.capitalization.incentives, icon: ICONS.lighteningCharge }
    ]
  },
  {
    title: 'Fixed RSUs',
    path: PATH_DASHBOARD.rsufixed.base,
    icon: ICONS.pieChart,
    children: [
      { title: 'Overview', path: PATH_DASHBOARD.rsufixed.root, icon: ICONS.eyeglasses },
      { title: 'Details', path: PATH_DASHBOARD.rsufixed.detail, icon: ICONS.fileText }
    ]
  },
  {
    title: 'Dynamic RSUs',
    path: PATH_DASHBOARD.rsudynamic.base,
    icon: ICONS.pieChart,
    children: [
      { title: 'Overview', path: PATH_DASHBOARD.rsudynamic.root, icon: ICONS.eyeglasses },
      { title: 'Details', path: PATH_DASHBOARD.rsudynamic.detail, icon: ICONS.fileText },
      { title: 'Activity', path: PATH_DASHBOARD.rsudynamic.activity, icon: ICONS.graphUp },
      {
        title: 'Add Task',
        path: PATH_DASHBOARD.rsudynamic.addTask,
        icon: ICONS.plusCircleDotted
      }
    ]
  },
  {
    title: 'Team',
    path: PATH_DASHBOARD.team.base,
    icon: ICONS.people,
    children: [
      { title: 'Workers', path: PATH_DASHBOARD.team.root, icon: ICONS.people },
      { title: 'Rates', path: PATH_DASHBOARD.team.rate, icon: ICONS.cash },
      { title: 'Add Worker', path: PATH_DASHBOARD.team.addWorker, icon: ICONS.personPlus }
    ]
  },
  {
    title: 'Legal',
    path: PATH_DASHBOARD.legal.base,
    icon: ICONS.fileText,
    children: [
      { title: 'Signing', path: PATH_DASHBOARD.legal.root },
      { title: 'Documents', path: PATH_DASHBOARD.legal.document },
      { title: 'Versioning', path: PATH_DASHBOARD.legal.versioning }
    ]
  }
];

// Worker
const workerSidebarRoutes = [
  {
    title: 'Dashboard',
    path: WORKER_PATH_DASHBOARD.dash.base,
    icon: ICONS.grid
  },
  {
    title: 'Fixed RSUs',
    path: WORKER_PATH_DASHBOARD.rsufixed.base,
    icon: ICONS.pieChart
  },
  {
    title: 'Dynamic RSUs',
    path: WORKER_PATH_DASHBOARD.rsudynamic.base,
    icon: ICONS.pieChart
  },
  {
    title: 'Capitalization',
    path: WORKER_PATH_DASHBOARD.capitalization.base,
    icon: ICONS.building
  },
  {
    title: 'Legal Documents',
    path: WORKER_PATH_DASHBOARD.legal.base,
    icon: ICONS.fileText
  }
];
const workerMobileRoutes = [
  {
    title: 'Dashboard',
    path: WORKER_PATH_DASHBOARD.dash.base,
    icon: ICONS.grid,
    children: [{ title: 'Todo', path: WORKER_PATH_DASHBOARD.dash.root, icon: ICONS.grid1 }]
  },
  {
    title: 'Fixed RSUs',
    path: WORKER_PATH_DASHBOARD.rsufixed.base,
    icon: ICONS.pieChart,
    children: [
      { title: 'Overview', path: WORKER_PATH_DASHBOARD.rsufixed.root, icon: ICONS.eyeglasses },
      { title: 'Details', path: WORKER_PATH_DASHBOARD.rsufixed.detail, icon: ICONS.pieChart },
      { title: 'Add Vesting', path: WORKER_PATH_DASHBOARD.rsufixed.addVesting, icon: ICONS.stopWatch }
    ]
  },
  {
    title: 'Dynamic RSUs',
    path: WORKER_PATH_DASHBOARD.rsudynamic.base,
    icon: ICONS.pieChart,
    children: [
      { title: 'Overview', path: WORKER_PATH_DASHBOARD.rsudynamic.root, icon: ICONS.eyeglasses },
      { title: 'Activity', path: WORKER_PATH_DASHBOARD.rsudynamic.activity, icon: ICONS.graphUp },
      { title: 'Totals', path: WORKER_PATH_DASHBOARD.rsudynamic.totals, icon: ICONS.barChartLine },
      {
        title: 'Add Task',
        path: WORKER_PATH_DASHBOARD.rsudynamic.addTask,
        icon: ICONS.plusCircleDotted
      }
    ]
  },
  {
    title: 'Capitalization',
    path: WORKER_PATH_DASHBOARD.capitalization.base,
    icon: ICONS.building,
    children: [
      { title: 'Overview', path: WORKER_PATH_DASHBOARD.capitalization.root, icon: ICONS.eyeglasses },
      { title: 'Incentives', path: WORKER_PATH_DASHBOARD.capitalization.incentives, icon: ICONS.lighteningCharge }
    ]
  },
  {
    title: 'Legal Documents',
    path: WORKER_PATH_DASHBOARD.legal.base,
    icon: ICONS.fileText,
    children: [
      { title: 'Signing', path: WORKER_PATH_DASHBOARD.legal.root },
      { title: 'Documents', path: WORKER_PATH_DASHBOARD.legal.document },
      { title: 'Versioning', path: WORKER_PATH_DASHBOARD.legal.versioning }
    ]
  }
];

export const SidebarRoutes = () => {
  const { user } = useAuth();
  return user.role === 'owner' ? ownerSidebarRoutes : workerSidebarRoutes;
};

export const MobileRoutes = () => {
  const { user } = useAuth();
  return user.role === 'owner' ? ownerMobileRoutes : workerMobileRoutes;
};

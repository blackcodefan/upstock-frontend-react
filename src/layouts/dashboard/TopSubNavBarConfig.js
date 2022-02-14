import {
  BarChartLine,
  Bell,
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

const ICONS = {
  // New Icons from Figma
  barChartLine: <BarChartLine size={20} />,
  bell: <Bell size={20} />,
  cash: <Cash size={20} />,
  cashCoin: <CashCoin size={20} />,
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

const ownerTopNavRoutes = {
  dash: [
    {
      title: 'Todo',
      path: PATH_DASHBOARD.dash.root,
      icon: ICONS.grid1
    },
    {
      title: 'Notifications',
      path: PATH_DASHBOARD.dash.notifications,
      icon: ICONS.bell
    }
  ],
  capitalization: [
    {
      title: 'Overview',
      path: PATH_DASHBOARD.capitalization.root,
      icon: ICONS.grid
    },
    {
      title: 'Equity',
      path: PATH_DASHBOARD.capitalization.equity,
      icon: ICONS.pieChart
    },
    {
      title: 'All Fixed Shares',
      path: PATH_DASHBOARD.capitalization.afshares,
      icon: ICONS.graphUp
    },
    {
      title: 'Valuation',
      path: PATH_DASHBOARD.capitalization.valuation,
      icon: ICONS.cashCoin
    },
    {
      title: 'Incentives',
      path: PATH_DASHBOARD.capitalization.incentives,
      icon: ICONS.barChartLine
    }
  ],
  rsufixed: [
    {
      title: 'Overview',
      path: PATH_DASHBOARD.rsufixed.root,
      icon: ICONS.eyeglasses
    },
    {
      title: 'Details',
      path: PATH_DASHBOARD.rsufixed.detail,
      icon: ICONS.fileText
    }
  ],
  rsudynamic: [
    {
      title: 'Overview',
      path: PATH_DASHBOARD.rsudynamic.root,
      icon: ICONS.eyeglasses
    },
    {
      title: 'Details',
      path: PATH_DASHBOARD.rsudynamic.detail,
      icon: ICONS.fileText
    },
    {
      title: 'Activity',
      path: PATH_DASHBOARD.rsudynamic.activity,
      icon: ICONS.graphUp
    },
    {
      title: 'Add Task',
      path: PATH_DASHBOARD.rsudynamic.addTask,
      icon: ICONS.plusCircleDotted
    }
  ],
  team: [
    { title: 'Workers', path: PATH_DASHBOARD.team.root, icon: ICONS.people },
    { title: 'Rates', path: PATH_DASHBOARD.team.rate, icon: ICONS.cash },
    { title: 'Add Worker', path: PATH_DASHBOARD.team.addWorker, icon: ICONS.personPlus }
  ],
  legal: [
    {
      title: 'Signing',
      path: PATH_DASHBOARD.legal.root
    },
    {
      title: 'Documents',
      path: PATH_DASHBOARD.legal.document
    },
    {
      title: 'Versioning',
      path: PATH_DASHBOARD.legal.versioning
    }
  ]
};

const workerTopNavRoutes = {
  dash: [
    {
      title: 'Todo',
      path: WORKER_PATH_DASHBOARD.dash.root,
      icon: ICONS.grid1
    }
  ],
  rsufixed: [
    {
      title: 'Overview',
      path: WORKER_PATH_DASHBOARD.rsufixed.root,
      icon: ICONS.eyeglasses
    },
    {
      title: 'Details',
      path: WORKER_PATH_DASHBOARD.rsufixed.detail,
      icon: ICONS.pieChart
    },
    {
      title: 'Add Vesting',
      path: WORKER_PATH_DASHBOARD.rsufixed.addVesting,
      icon: ICONS.stopWatch
    }
  ],
  rsudynamic: [
    {
      title: 'Overview',
      path: WORKER_PATH_DASHBOARD.rsudynamic.root,
      icon: ICONS.eyeglasses
    },
    {
      title: 'Activity',
      path: WORKER_PATH_DASHBOARD.rsudynamic.activity,
      icon: ICONS.graphUp
    },
    {
      title: 'Totals',
      path: WORKER_PATH_DASHBOARD.rsudynamic.totals,
      icon: ICONS.barChartLine
    },
    {
      title: 'Add Task',
      path: WORKER_PATH_DASHBOARD.rsudynamic.addTask,
      icon: ICONS.plusCircleDotted
    }
  ],
  capitalization: [
    {
      title: 'Overview',
      path: WORKER_PATH_DASHBOARD.capitalization.root,
      icon: ICONS.eyeglasses
    },
    {
      title: 'Incentives',
      path: WORKER_PATH_DASHBOARD.capitalization.incentives,
      icon: ICONS.lighteningCharge
    }
  ],
  legal: [
    {
      title: 'Signing',
      path: WORKER_PATH_DASHBOARD.legal.root
    },
    {
      title: 'Documents',
      path: WORKER_PATH_DASHBOARD.legal.document
    },
    {
      title: 'Versioning',
      path: WORKER_PATH_DASHBOARD.legal.versioning
    }
  ]
};

const TopNavRoutes = () => {
  const { user } = useAuth();
  return user.role === 'owner' ? ownerTopNavRoutes : workerTopNavRoutes;
};

export default TopNavRoutes;

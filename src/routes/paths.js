// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = '/auth';
const ROOTS_DASHBOARD = '/dashboard';

// ----------------------------------------------------------------------
export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/login'),
  company: path(ROOTS_AUTH, '/company'),
  joinLink: path(ROOTS_AUTH, '/join-link'),
  loginUnprotected: path(ROOTS_AUTH, '/login-unprotected'),
  register: path(ROOTS_AUTH, '/register'),
  registerUnprotected: path(ROOTS_AUTH, '/register-unprotected'),
  resetPassword: path(ROOTS_AUTH, '/reset-password'),
  verify: path(ROOTS_AUTH, '/verify')
};

export const PATH_PAGE = {
  comingSoon: '/coming-soon',
  maintenance: '/maintenance',
  pricing: '/pricing',
  payment: '/payment',
  about: '/about',
  contact: '/contact',
  faqs: '/faqs',
  page404: '/404',
  page500: '/500',
  components: '/components'
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  // Todo routes
  dash: {
    base: path(ROOTS_DASHBOARD, '/dash'),
    root: path(ROOTS_DASHBOARD, '/dash/todo'),
    notifications: path(ROOTS_DASHBOARD, '/dash/notifications')
  },
  // Capitalization routes
  capitalization: {
    base: path(ROOTS_DASHBOARD, '/capitalization'),
    root: path(ROOTS_DASHBOARD, '/capitalization/overview'),
    equity: path(ROOTS_DASHBOARD, '/capitalization/equity'),
    afshares: path(ROOTS_DASHBOARD, '/capitalization/afshares'),
    valuation: path(ROOTS_DASHBOARD, '/capitalization/valuation'),
    incentives: path(ROOTS_DASHBOARD, '/capitalization/incentives')
  },
  // Rsu fixed routes
  rsufixed: {
    base: path(ROOTS_DASHBOARD, '/rsu-fixed'),
    root: path(ROOTS_DASHBOARD, '/rsu-fixed/overview'),
    detail: path(ROOTS_DASHBOARD, '/rsu-fixed/detail'),
    activity: path(ROOTS_DASHBOARD, '/rsu-fixed/activity'),
    total: path(ROOTS_DASHBOARD, '/rsu-fixed/total'),
    add_entry: path(ROOTS_DASHBOARD, '/rsu-fixed/add-entry')
  },
  // Rsu dynamic routes
  rsudynamic: {
    base: path(ROOTS_DASHBOARD, '/rsu-dynamic'),
    root: path(ROOTS_DASHBOARD, '/rsu-dynamic/overview'),
    detail: path(ROOTS_DASHBOARD, '/rsu-dynamic/detail'),
    activity: path(ROOTS_DASHBOARD, '/rsu-dynamic/activity'),
    addTask: path(ROOTS_DASHBOARD, '/rsu-dynamic/add-task')
  },
  // Team routes
  team: {
    base: path(ROOTS_DASHBOARD, '/team'),
    root: path(ROOTS_DASHBOARD, '/team/workers'),
    rate: path(ROOTS_DASHBOARD, '/team/rates'),
    addWorker: path(ROOTS_DASHBOARD, '/team/add-worker')
  },
  // Legam routes
  legal: {
    base: path(ROOTS_DASHBOARD, '/legal'),
    root: path(ROOTS_DASHBOARD, '/legal/signing'),
    document: path(ROOTS_DASHBOARD, '/legal/document'),
    versioning: path(ROOTS_DASHBOARD, '/legal/versioning')
  }
};

export const WORKER_PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  // dashboard routes
  dash: {
    base: path(ROOTS_DASHBOARD, '/dash'),
    root: path(ROOTS_DASHBOARD, '/dash/todo')
  },
  // Capitalization routes
  capitalization: {
    base: path(ROOTS_DASHBOARD, '/capitalization'),
    root: path(ROOTS_DASHBOARD, '/capitalization/overview'),
    incentives: path(ROOTS_DASHBOARD, '/capitalization/incentives')
  },
  capDetail: {
    overall: path(ROOTS_DASHBOARD, '/detail-capitalization-overview/overall'),
    valuation: path(ROOTS_DASHBOARD, '/detail-capitalization-overview/valuation'),
    equity: path(ROOTS_DASHBOARD, '/detail-capitalization-overview/equity'),
    approx: path(ROOTS_DASHBOARD, '/detail-capitalization-overview/approx')
  },
  rsufixed: {
    base: path(ROOTS_DASHBOARD, '/rsu-fixed'),
    root: path(ROOTS_DASHBOARD, '/rsu-fixed/overview'),
    detail: path(ROOTS_DASHBOARD, '/rsu-fixed/detail'),
    addVesting: path(ROOTS_DASHBOARD, '/rsu-fixed/add-vesting')
  },
  rsudynamic: {
    base: path(ROOTS_DASHBOARD, '/rsu-dynamic'),
    root: path(ROOTS_DASHBOARD, '/rsu-dynamic/overview'),
    activity: path(ROOTS_DASHBOARD, '/rsu-dynamic/activity'),
    totals: path(ROOTS_DASHBOARD, '/rsu-dynamic/totals'),
    addTask: path(ROOTS_DASHBOARD, '/rsu-dynamic/add-task')
  },
  legal: {
    base: path(ROOTS_DASHBOARD, '/legal'),
    root: path(ROOTS_DASHBOARD, '/legal/signing'),
    document: path(ROOTS_DASHBOARD, '/legal/document'),
    versioning: path(ROOTS_DASHBOARD, '/legal/versioning')
  }
};

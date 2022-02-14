import { Suspense, lazy } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
// layouts
import MainLayout from 'layouts/main';
import DashboardLayout from 'layouts/dashboard';
import LogoOnlyLayout from 'layouts/LogoOnlyLayout';
// guards
// import GuestGuard from 'guards/GuestGuard';
import AuthGuard from 'guards/AuthGuard';
// components
import LoadingScreen from 'components/LoadingScreen';
import useAuth from 'hooks/useAuth';

// ----------------------------------------------------------------------

function DashboardRoutes() {
  const { user } = useAuth();
  const ownerRoutes = [
    { element: <Navigate to="/dashboard/dash" replace /> },
    {
      path: 'dash',
      children: [
        { element: <Navigate to="/dashboard/dash/todo" replace /> },
        { path: 'todo', element: <OwnerDashboardTodo /> },
        { path: 'notifications', element: <OwnerDashboardNotifications /> }
      ]
    },
    // capitalization routes
    {
      path: 'capitalization',
      children: [
        { element: <Navigate to="/dashboard/capitalization/overview" replace /> },
        { path: 'overview', element: <OwnerCapitalizationOverview /> },
        { path: 'equity', element: <OwnerCapitalizationEquity /> },
        { path: 'afshares', element: <OwnerCapitalizationAFSares /> },
        { path: 'valuation', element: <OwnerCapitalizationValuation /> },
        { path: 'incentives', element: <OwnerCapitalizationIncentives /> }
      ]
    },
    // capitalization detail routes
    {
      path: 'detail-capitalization-overview',
      children: [
        { element: <Navigate to="/dashboard/detail-capitalization-overview/overall" replace /> },
        { path: 'overall', element: <OwnerCapOverallDetail /> },
        { path: 'valuation', element: <OwnerCapValuationDetail /> },
        { path: 'equity', element: <OwnerCapEquityDetail /> },
        { path: 'approx', element: <OwnerCapApproxDetail /> }
      ]
    },
    // fixed RSU routes
    {
      path: 'rsu-fixed',
      children: [
        { element: <Navigate to="/dashboard/rsu-fixed/overview" replace /> },
        { path: 'overview', element: <OwnerRsuFixedOverview /> },
        { path: 'detail', element: <OwnerRsuFixedDetail /> }
      ]
    },

    {
      path: 'rsu-dynamic',
      children: [
        { element: <Navigate to="/dashboard/rsu-dynamic/overview" replace /> },
        { path: 'overview', element: <OwnerRsuDynamicOverview /> },
        { path: 'detail', element: <OwnerRsuDynamicDetail /> },
        { path: 'activity', element: <OwnerRsuDynamicActivity /> },
        { path: 'add-task', element: <OwnerRsuDynamicAddTask /> }
      ]
    },
    // team routes
    {
      path: 'team',
      children: [
        { element: <Navigate to="/dashboard/team/workers" replace /> },
        { path: 'workers', element: <OwnerTeamWorker /> },
        { path: 'rates', element: <OwnerTeamRates /> },
        { path: 'add-worker', element: <OwnerTeamAddWorker /> }
      ]
    },
    // legal routes
    {
      path: 'legal',
      children: [
        { element: <Navigate to="/dashboard/legal/signing" replace /> },
        { path: 'signing', element: <OwnerLegalSigning /> },
        { path: 'document', element: <OwnerLegalDocument /> },
        { path: 'versioning', element: <OwnerLegalVersioning /> }
      ]
    }
  ];

  const workerRoutes = [
    { element: <Navigate to="/dashboard/dash" replace /> },
    {
      path: 'dash',
      children: [
        { element: <Navigate to="/dashboard/dash/todo" replace /> },
        { path: 'todo', element: <WorkerDashboardTodo /> }
      ]
    },
    {
      path: 'capitalization',
      children: [
        { element: <Navigate to="/dashboard/capitalization/overview" replace /> },
        { path: 'overview', element: <WorkerCapitalizationOverview /> },
        { path: 'incentives', element: <WorkerCapitalizationIncentives /> }
      ]
    },
    {
      path: 'rsu-fixed',
      children: [
        { element: <Navigate to="/dashboard/rsu-fixed/overview" replace /> },
        { path: 'overview', element: <WorkerRsuFixedOverview /> },
        { path: 'detail', element: <WorkerRsuFixedDetail /> },
        { path: 'add-vesting', element: <WorkerRsuFixedAddVesting /> }
      ]
    },
    {
      path: 'rsu-dynamic',
      children: [
        { element: <Navigate to="/dashboard/rsu-dynamic/overview" replace /> },
        { path: 'overview', element: <WorkerRsuDynamicOverview /> },
        { path: 'activity', element: <WorkerRsuDynamicActivity /> },
        { path: 'totals', element: <WorkerRsuDynamicTotal /> },
        { path: 'add-task', element: <WorkerRsuDynamicAddTask /> }
      ]
    },
    {
      path: 'legal',
      children: [
        { element: <Navigate to="/dashboard/legal/signing" replace /> },
        { path: 'signing', element: <WorkerLegalSigning /> },
        { path: 'document', element: <WorkerLegalDocument /> },
        { path: 'versioning', element: <WorkerLegalVersioning /> }
      ]
    }
  ];

  return user?.role === 'owner' ? ownerRoutes : workerRoutes;
}

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();
  const isDashboard = pathname.includes('/dashboard');

  return (
    <Suspense
      fallback={
        <LoadingScreen
          sx={{
            ...(!isDashboard && {
              top: 0,
              left: 0,
              width: 1,
              zIndex: 9999,
              position: 'fixed'
            })
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  const routes = useRoutes([
    {
      path: 'auth',
      children: [
        {
          path: 'login',
          element: <Login />
        },
        {
          path: 'company',
          element: (
            <AuthGuard>
              <Company />
            </AuthGuard>
          )
        },
        {
          path: 'join-link',
          element: <Join />
        },
        {
          path: 'register',
          element: <Register />
        },
        { path: 'login-unprotected', element: <Login /> },
        { path: 'register-unprotected', element: <Register /> },
        { path: 'reset-password', element: <ResetPassword /> },
        { path: 'invite', element: <Invite /> }
      ]
    },

    // Dashboard Routes
    {
      path: 'dashboard',
      element: (
        <AuthGuard>
          <DashboardLayout />
        </AuthGuard>
      ),
      children: DashboardRoutes()
    },

    // Main Routes
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'coming-soon', element: <ComingSoon /> },
        { path: 'maintenance', element: <Maintenance /> },
        { path: '500', element: <Page500 /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> }
      ]
    },
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { element: <ComponentsOverview /> },
        // FIXME: remove
        {
          path: 'components',
          children: [
            { element: <ComponentsOverview /> },
            // FOUNDATIONS
            { path: 'color', element: <Color /> },
            { path: 'typography', element: <Typography /> },
            { path: 'shadows', element: <Shadows /> },
            { path: 'grid', element: <Grid /> },
            { path: 'icons', element: <Icons /> },
            // MATERIAL UI
            { path: 'accordion', element: <Accordion /> },
            { path: 'alert', element: <Alert /> },
            { path: 'autocomplete', element: <Autocomplete /> },
            { path: 'avatar', element: <Avatar /> },
            { path: 'badge', element: <Badge /> },
            { path: 'breadcrumbs', element: <Breadcrumb /> },
            { path: 'buttons', element: <Buttons /> },
            { path: 'checkbox', element: <Checkbox /> },
            { path: 'header', element: <Header /> },
            { path: 'cards', element: <Cards /> },
            { path: 'elements', element: <Elements /> },
            { path: 'chip', element: <Chip /> },
            { path: 'dialog', element: <Dialog /> },
            { path: 'label', element: <Label /> },
            { path: 'list', element: <List /> },
            { path: 'menu', element: <Menu /> },
            { path: 'pagination', element: <Pagination /> },
            { path: 'pickers', element: <Pickers /> },
            { path: 'popover', element: <Popover /> },
            { path: 'progress', element: <Progress /> },
            { path: 'radio-button', element: <RadioButtons /> },
            { path: 'rating', element: <Rating /> },
            { path: 'slider', element: <Slider /> },
            { path: 'snackbar', element: <Snackbar /> },
            { path: 'stepper', element: <Stepper /> },
            { path: 'switch', element: <Switches /> },
            { path: 'table', element: <Table /> },
            { path: 'tabs', element: <Tabs /> },
            { path: 'textfield', element: <Textfield /> },
            { path: 'timeline', element: <Timeline /> },
            { path: 'tooltip', element: <Tooltip /> },
            { path: 'transfer-list', element: <TransferList /> },
            { path: 'tree-view', element: <TreeView /> },
            { path: 'data-grid', element: <DataGrid /> }
          ]
        }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
  return routes;
}

// IMPORT COMPONENTS

// Authentication
const Login = Loadable(lazy(() => import('pages/authentication/Login')));
const Company = Loadable(lazy(() => import('pages/authentication/Company')));
const Join = Loadable(lazy(() => import('pages/authentication/Join')));
const Register = Loadable(lazy(() => import('pages/authentication/Register')));
const ResetPassword = Loadable(lazy(() => import('pages/authentication/ResetPassword')));
const Invite = Loadable(lazy(() => import('pages/authentication/Invite')));

// Owner Dashboard Components
const OwnerDashboardTodo = Loadable(lazy(() => import('pages/dashboard/owner/dash/todo')));
const OwnerDashboardNotifications = Loadable(lazy(() => import('pages/dashboard/owner/dash/notification')));

const OwnerCapitalizationOverview = Loadable(lazy(() => import('pages/dashboard/owner/capitalization/overview')));
const OwnerCapitalizationEquity = Loadable(lazy(() => import('pages/dashboard/owner/capitalization/equity')));
const OwnerCapitalizationAFSares = Loadable(lazy(() => import('pages/dashboard/owner/capitalization/allFixedShare')));
const OwnerCapitalizationValuation = Loadable(lazy(() => import('pages/dashboard/owner/capitalization/valuation')));
const OwnerCapitalizationIncentives = Loadable(lazy(() => import('pages/dashboard/owner/capitalization/incentive')));
const OwnerCapOverallDetail = Loadable(lazy(() => import('pages/dashboard/owner/capitalization/overviewOverall')));
const OwnerCapValuationDetail = Loadable(lazy(() => import('pages/dashboard/owner/capitalization/overviewValuation')));
const OwnerCapEquityDetail = Loadable(lazy(() => import('pages/dashboard/owner/capitalization/overviewEquity')));
const OwnerCapApproxDetail = Loadable(lazy(() => import('pages/dashboard/owner/capitalization/overviewApprox')));

const OwnerRsuFixedOverview = Loadable(lazy(() => import('pages/dashboard/owner/rsuFixed/overview')));
const OwnerRsuFixedDetail = Loadable(lazy(() => import('pages/dashboard/owner/rsuFixed/detail')));

const OwnerRsuDynamicOverview = Loadable(lazy(() => import('pages/dashboard/owner/rsuDynamic/overview')));
const OwnerRsuDynamicDetail = Loadable(lazy(() => import('pages/dashboard/owner/rsuDynamic/detail')));
const OwnerRsuDynamicActivity = Loadable(lazy(() => import('pages/dashboard/owner/rsuDynamic/activity')));
const OwnerRsuDynamicAddTask = Loadable(lazy(() => import('pages/dashboard/owner/rsuDynamic/AddTask')));

const OwnerTeamWorker = Loadable(lazy(() => import('pages/dashboard/owner/team/worker')));
const OwnerTeamRates = Loadable(lazy(() => import('pages/dashboard/owner/team/rate')));
const OwnerTeamAddWorker = Loadable(lazy(() => import('pages/dashboard/owner/team/addWorker')));

const OwnerLegalSigning = Loadable(lazy(() => import('pages/dashboard/owner/legal/signing')));
const OwnerLegalDocument = Loadable(lazy(() => import('pages/dashboard/owner/legal/document')));
const OwnerLegalVersioning = Loadable(lazy(() => import('pages/dashboard/owner/legal/versioning')));

// Worker Dashboard Routes
const WorkerDashboardTodo = Loadable(lazy(() => import('pages/dashboard/worker/dash/todo')));
const WorkerCapitalizationOverview = Loadable(lazy(() => import('pages/dashboard/worker/capitalization/overview')));
const WorkerCapitalizationIncentives = Loadable(lazy(() => import('pages/dashboard/worker/capitalization/incentives')));

const WorkerRsuFixedOverview = Loadable(lazy(() => import('pages/dashboard/worker/rsuFixed/overview')));
const WorkerRsuFixedDetail = Loadable(lazy(() => import('pages/dashboard/worker/rsuFixed/detail')));
const WorkerRsuFixedAddVesting = Loadable(lazy(() => import('pages/dashboard/worker/rsuFixed/addVesting')));

const WorkerRsuDynamicOverview = Loadable(lazy(() => import('pages/dashboard/worker/rsuDynamic/overview')));
const WorkerRsuDynamicActivity = Loadable(lazy(() => import('pages/dashboard/worker/rsuDynamic/activity')));
const WorkerRsuDynamicTotal = Loadable(lazy(() => import('pages/dashboard/worker/rsuDynamic/total')));
const WorkerRsuDynamicAddTask = Loadable(lazy(() => import('pages/dashboard/worker/rsuDynamic/addTask')));

const WorkerLegalSigning = Loadable(lazy(() => import('pages/dashboard/worker/legal/signing')));
const WorkerLegalDocument = Loadable(lazy(() => import('pages/dashboard/worker/legal/document')));
const WorkerLegalVersioning = Loadable(lazy(() => import('pages/dashboard/worker/legal/versioning')));

// Main
const ComingSoon = Loadable(lazy(() => import('pages/ComingSoon')));
const Maintenance = Loadable(lazy(() => import('pages/Maintenance')));
const Page500 = Loadable(lazy(() => import('pages/Page500')));
const NotFound = Loadable(lazy(() => import('pages/Page404')));

// Components
const ComponentsOverview = Loadable(lazy(() => import('pages/ComponentsOverview')));
const Color = Loadable(lazy(() => import('pages/components-overview/foundations/FoundationColors')));
const Typography = Loadable(lazy(() => import('pages/components-overview/foundations/FoundationTypography')));
const Shadows = Loadable(lazy(() => import('pages/components-overview/foundations/FoundationShadows')));
const Grid = Loadable(lazy(() => import('pages/components-overview/foundations/FoundationGrid')));
const Icons = Loadable(lazy(() => import('pages/components-overview/foundations/FoundationIcons')));
const Accordion = Loadable(lazy(() => import('pages/components-overview/material-ui/Accordion')));
const Alert = Loadable(lazy(() => import('pages/components-overview/material-ui/Alert')));
const Autocomplete = Loadable(lazy(() => import('pages/components-overview/material-ui/Autocomplete')));
const Avatar = Loadable(lazy(() => import('pages/components-overview/material-ui/Avatar')));
const Badge = Loadable(lazy(() => import('pages/components-overview/material-ui/Badge')));
const Breadcrumb = Loadable(lazy(() => import('pages/components-overview/material-ui/Breadcrumb')));
const Buttons = Loadable(lazy(() => import('pages/components-overview/material-ui/buttons')));
const Checkbox = Loadable(lazy(() => import('pages/components-overview/material-ui/Checkboxes')));
const Header = Loadable(lazy(() => import('pages/components-overview/material-ui/Header')));
const Cards = Loadable(lazy(() => import('pages/components-overview/material-ui/Cards')));
const Elements = Loadable(lazy(() => import('pages/components-overview/material-ui/Elements')));
const Chip = Loadable(lazy(() => import('pages/components-overview/material-ui/chips')));
const Dialog = Loadable(lazy(() => import('pages/components-overview/material-ui/dialog')));
const Label = Loadable(lazy(() => import('pages/components-overview/material-ui/Label')));
const List = Loadable(lazy(() => import('pages/components-overview/material-ui/Lists')));
const Menu = Loadable(lazy(() => import('pages/components-overview/material-ui/Menus')));
const Pagination = Loadable(lazy(() => import('pages/components-overview/material-ui/Pagination')));
const Pickers = Loadable(lazy(() => import('pages/components-overview/material-ui/pickers')));
const Popover = Loadable(lazy(() => import('pages/components-overview/material-ui/Popover')));
const Progress = Loadable(lazy(() => import('pages/components-overview/material-ui/progress')));
const RadioButtons = Loadable(lazy(() => import('pages/components-overview/material-ui/RadioButtons')));
const Rating = Loadable(lazy(() => import('pages/components-overview/material-ui/Rating')));
const Slider = Loadable(lazy(() => import('pages/components-overview/material-ui/Slider')));
const Snackbar = Loadable(lazy(() => import('pages/components-overview/material-ui/Snackbar')));
const Stepper = Loadable(lazy(() => import('pages/components-overview/material-ui/stepper')));
const Switches = Loadable(lazy(() => import('pages/components-overview/material-ui/Switches')));
const Table = Loadable(lazy(() => import('pages/components-overview/material-ui/table')));
const Tabs = Loadable(lazy(() => import('pages/components-overview/material-ui/Tabs')));
const Textfield = Loadable(lazy(() => import('pages/components-overview/material-ui/textfield')));
const Timeline = Loadable(lazy(() => import('pages/components-overview/material-ui/Timeline')));
const Tooltip = Loadable(lazy(() => import('pages/components-overview/material-ui/Tooltip')));
const TransferList = Loadable(lazy(() => import('pages/components-overview/material-ui/transfer-list')));
const TreeView = Loadable(lazy(() => import('pages/components-overview/material-ui/TreeView')));
const DataGrid = Loadable(lazy(() => import('pages/components-overview/material-ui/data-grid')));

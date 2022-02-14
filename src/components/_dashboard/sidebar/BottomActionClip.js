import { styled } from '@mui/material/styles';
import { ListItemButton } from '@mui/material';

const SidebarActionBtn = styled(ListItemButton)(({ theme }) => ({
  ...theme.typography.body2,
  minWidth: '216px',
  padding: '10px 14px',
  textTransform: 'capitalize',
  background: theme.palette.color.bg3,
  color: theme.palette.text.secondary,
  borderRadius: 15,
  justifyContent: 'space-between'
}));

export default SidebarActionBtn;

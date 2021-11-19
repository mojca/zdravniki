import { styled } from '@mui/material/styles';
import MuiInputBase from '@mui/material/InputBase';
import MuiTextField from '@mui/material/TextField';

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '24px',
  backgroundColor: 'transparent',
  opacity: 0.56,
  '&:hover': {
    color: theme.palette.common.white,
    backgroundColor: theme.customColors.accent,
    opacity: 1,
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const InputBase = styled(MuiInputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    lineHeight: 'normal',
    fontWeight: 600,
    letterSpacing: 0,
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: '20ch',
    borderRadius: '24px',
    '&:focus': {
      color: theme.palette.common.white,
      backgroundColor: theme.customColors.accent,
      opacity: 1,
    },

    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export const TextField = styled(MuiTextField)({
  '& .MuiOutlinedInput-root': {
    fontSize: '13px',
    fontWeight: 600,
    letterSpacing: 0,

    borderRadius: '24px',
    '& fieldset': { border: 'none' },
    '&:hover fieldset': {
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
    },
    '&.Mui-focused fieldset': {
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
    },
  },
});
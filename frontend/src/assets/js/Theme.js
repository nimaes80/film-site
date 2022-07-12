import { faIR } from '@mui/material/locale';
import { createTheme } from '@mui/material/styles';



const Theme = createTheme({

	direction: 'rtl',
	palette : {
		mode: 'dark',
		transparent: {
			light: 'transparent',
			main: 'transparent',
			dark: 'transparent'
		},
		white: {
			light: '#fff',
			main: '#fff',
			dark: '#fff',
		},
		foreground: {
			light: 'var(--foreground-color)',
			main: 'var(--foreground-color)',
			dark: 'var(--foreground-color)',
		},
		background: {
			default: 'var(--background-color)',
			paper: 'var(--paper-color)',
		},
	},
	


}, faIR);



export default Theme;
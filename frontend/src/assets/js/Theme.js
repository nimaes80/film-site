import { faIR } from '@mui/material/locale';
import { createTheme } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



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
import React from 'react'
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Divider, IconButton } from '@mui/material';


function Socials() {
	
	return (
	<>
		<div className="center" style={{marginTop:10,}}>
		<IconButton className="icon-telegram" component="a" target="_blank" rel='follow external' href="https://t.me/filoop"> <TelegramIcon /> </IconButton>
		<IconButton className="icon-instagram" component="a" target="_blank" rel='follow external' href="https://www.instagram.com/filoop"> <InstagramIcon /> </IconButton>
		<IconButton className="icon-twitter" component="a" target="_blank" rel='follow external' href="https://twitter.com/filoop"> <TwitterIcon /> </IconButton>
		</div>
		<Divider sx={{mt:1}}> Copyright &copy; 2022 </Divider>
	</>
	);
};

export default Socials;
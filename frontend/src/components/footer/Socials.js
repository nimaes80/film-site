import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Divider, IconButton, Tooltip } from "@mui/material";
import React from "react";


function Socials() {
	
	return (
	<>
		<div className="center" style={{marginTop:10,}}>
			<Tooltip title="telegram" placement="top-start">
				<IconButton className="icon-telegram" component="a" target="_blank" rel="follow external" href="https://t.me/filoop"> <TelegramIcon /> </IconButton>
			</Tooltip>
			<Tooltip title="instagram" placement="top">
				<IconButton className="icon-instagram" component="a" target="_blank" rel="follow external" href="https://www.instagram.com/filoop"> <InstagramIcon /> </IconButton>
			</Tooltip>
			<Tooltip title="twitter" placement="top-end">
				<IconButton className="icon-twitter" component="a" target="_blank" rel="follow external" href="https://twitter.com/filoop"> <TwitterIcon /> </IconButton>
			</Tooltip>
		</div>
		<Divider sx={{mt:1}}> Copyright &copy; 2022 </Divider>
	</>
	);
}

export default Socials;
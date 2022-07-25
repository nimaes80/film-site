import { Avatar, IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

function Profile(props) {
	const userContext = useContext(UserContext);
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<Tooltip title="اکانت">
				<IconButton onClick={handleClick} >
					<Avatar sx={{bgcolor:"white.main"}} src={userContext.img} alt={userContext.username} />
				</IconButton>
			</Tooltip>

			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
				"aria-labelledby": "basic-button",
				}}
			>
				{
					props.items && props.items.map((item, i) => (
						<MenuItem key={i} onClick={handleClose}>
							<Link style={{color:"white"}} to={item.url}> { item.name } </Link>
						</MenuItem>
					))
				}
	
			</Menu>

		</>
	);
}

export default Profile;
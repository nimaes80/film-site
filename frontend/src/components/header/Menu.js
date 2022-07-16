import { List, ListItemButton, ListItemIcon, ListItemText, SwipeableDrawer } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

function Menu(props) {
	
	return (
	<>
		<SwipeableDrawer keepMounted sx={{display:{xm:"block", md:"none"}}}	open={props.open} onClose={props.handler} onOpen={props.handler} anchor="left">
			<List sx={{width:300}} className="drawer-link-list">
				{
					props.items && props.items.map((item, i) => (
						<ListItemButton to={item.url} component={NavLink} key={i} onClick={props.handler}>
							<ListItemIcon> {item.icon} </ListItemIcon>
							<ListItemText> {item.name} </ListItemText>
						</ListItemButton>
					))
				}
			</List>
		</SwipeableDrawer>
	</>
	);
}

export default Menu;
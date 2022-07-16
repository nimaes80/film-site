import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Box, Container, IconButton, Toolbar, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Links from "./Links";
import DrawerMenu from "./Menu";
import Profile from "./Profile";
import { UserContext } from "../../context/UserContex";

function up(setColor, color) {
	window.addEventListener("scroll", () => {
		let y = 1 + (window.scrollY || window.pageYOffset) / 150;
		if (y <= 1.3 && color === "transparent") {
			setColor("transparent");
		}
		else if (color !== ""){
			setColor("");
		}
	});
	
}
function down() {
	return window.removeEventListener("scroll", () =>{});
}


function MainHeader() {
	const [color, setColor ] = useState("transparent");
	const [options, setOptions] = useState([]);
	const [isDrawerOpen, setIsDrawerOpen ] = useState(false);
	const userContext = useContext(UserContext);
	const pages = [
		{
			name: "خانه",
			url: "/",
		},
		{
			name: "سینما",
			url: "/sinema",
		},
		{
			name: "بلاگ",
			url: "/blog",
		},
		{
			name: "درباره ما",
			url: "/about",
		},
		{
			name: "ارتباط با ما",
			url: "/contact",
		},
	];

	const handleDrawer = () => {
		setIsDrawerOpen(!isDrawerOpen);
	};


	useEffect(() => {
		if (userContext.isAuthenticated) {
			setOptions([
				{
					name: "پروفایل",
					url: "/dashboard/profile"
				},
				{
					name: "خروج",
					url: "/dashboard/logout"
				},
			]);
		} else {
			setOptions([
				{
					name: "ورود",
					url: "/login"
				},
				{
					name: "ثبت نام",
					url: "/register"
				},
			]);
		}
	}, [userContext]);



	useEffect(()=> {
		up(setColor, color);

		return down();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
	<AppBar position="fixed" color={color} sx={{boxShadow:"none"}}>
		<Container maxWidth="xl">
			<Toolbar disableGutters>
				<Typography className="brand" sx={{letterSpacing:".3rem", flexGrow:0, mr:2, display:{xs:"none", md:"flex"}}} varient="h6" > FILOOP </Typography>
				
				<Box display={{xs:"none", md:"block", flexGrow:1}}>
					<Links pages={pages} />
				</Box>
				<IconButton onClick={handleDrawer} sx={{display:{xs:"flex", md:"none"}, flexGrow:1, }} size="large" edge="start" color="inherit" aria-label="menu">
					<MenuIcon />
				</IconButton>

				<Typography varient="h6" className="brand" sx={{letterSpacing:".3rem", display:{xs:"flex", md:"none"}, flexGrow:1, mx:10 }}>
					FILOOP
				</Typography>


				<Box sx={{flexGrow:0, display:"flex"}}>
					<Profile items={options} />	
				</Box>

				<Box sx={{display:{xm:"block", md:"none"}}}>
					<DrawerMenu open={isDrawerOpen} handler={handleDrawer}	items={pages} />
				</Box>

			</Toolbar>
		</Container>
	</AppBar>
	);
}

export default MainHeader;
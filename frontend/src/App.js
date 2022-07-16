import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material";
import React from "react";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import Theme from "./assets/js/Theme";
import { UserContextProvider } from "./context/UserContex";
import RouteManager from "./routes/RouteManager";



const cacheRtl = createCache({
	
	key: "muirtl",
	stylisPlugins: [prefixer, rtlPlugin],
});


function App() {
	return (
		<CacheProvider value={cacheRtl}>
			<ThemeProvider theme={Theme}>
				<UserContextProvider>
						<RouteManager />
				</UserContextProvider>
			</ThemeProvider>
		</CacheProvider>
	);
}

export default App;
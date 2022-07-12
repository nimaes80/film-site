import { List, ListItem } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

function Links(props) {
	return (
	<List className="nav-link-list">
		{
			props.pages.map((page, i) => (
				<ListItem key={i} size='large'>
					<NavLink to={page.url} > {page.name} </NavLink>
				</ListItem>
				)
			)
		}
	</List>
  );
};

export default Links;
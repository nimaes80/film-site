import { Divider, Grid, List, ListItem, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function ContentSheet(props) {
  return (
    <Grid container textAlign="center" justifyContent="center" alignItems="flex-start" direction='row' rowSpacing={5}>
        {
            props.items && props.items.map((item, i) => (
                <Grid item xs={12} sm={6} md={4} key={i}>
                    <Divider width='75%' sx={{m:'auto'}} />
                    <Typography variant="h6"> { item.title } </Typography>
                    <List className="footer-link-list" >
                        {
                            item.pages.map((page, j) => (
                                <ListItem sx={{justifyContent:'center'}} key={j}>
                                    <Link to={page.url}>
                                        { page.name }
                                    </Link>
                                </ListItem>
                            ))
                        }
                    </List>
                </Grid>
            ))
        }
    </Grid>
  );
};

export default ContentSheet;
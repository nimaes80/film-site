import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';


function VideoTrip(props) {
  return (
    <>
        <Box>
            <Container maxWidth={false}>
                <Typography variant="h3" sx={{my:5}}  fontSize={25}> {props.title} </Typography>
                <Grid container justifyContent="space-evenly" alignItems="flex-start" spacing={2} >
                    {
                        props.items && props.items.map((item, i) => (
                            <Grid key={i} item xs={12} sm={6} md={4} lg={3} xl={2}>
                                <Card>
                                    <CardActionArea component={Link} to={`item.id`} rel="follow">
                                        <CardMedia component="img" image={item.image} src={item.image} alt={item.name} height={200} />
                                    </CardActionArea>
                                        <CardHeader title={item.name} />
                                        <CardContent>
                                            <Typography textAlign="justify" variant="caption" component="p">
                                                { item.description.slice(0,200) }...
                                            </Typography>
                                        </CardContent>
                                    <CardActions>
                                        <Button component={Link} to={`item.id`} rel="follow"> مشاهده </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))
                    }
                </Grid>
                <Link style={{color:'white'}}  to={`item.more`}> <ExpandMoreIcon /> بیشتر </Link>
            </Container>
        </Box>
    </>
  );
};

export default VideoTrip;
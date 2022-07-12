import { Box, Typography } from '@mui/material';
import React from 'react';



function OnVideoContent(props) {


  return (
    <Box className="on-video-content center" sx={{
        top:{xs:100, md:150, lg:200},
        right: { xs:"50%", md:'inherit'},
        left: { md:100, lg:150 }
    }}>
        <img className='thumbnail' src="https://developers.google.com/static/search/docs/advanced/images/how-dynamic-rendering-works.png" alt="#" />
        <Typography variant="h2" fontSize={35} fontWeight={800}> Hello World </Typography>
    </Box>
  );
};

export default OnVideoContent;
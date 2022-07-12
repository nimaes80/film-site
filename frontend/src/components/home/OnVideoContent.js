import { Box, Typography } from '@mui/material';
import React from 'react';



function OnVideoContent(props) {


  return (
    <Box className="on-video-content center" sx={{
        top:{xs:100, md:150, lg:250},
        right: { xs:"50%", md:'inherit'},
        left: { md:0, }
    }}>
        <Box sx={{display:{xs:'none', md:'block'}, marginTop:20}}>
        <img title={props.title} className='thumbnail' src={props.imgSrc} alt={props.title} />
        </Box>
        <Typography variant="h2" fontSize={{xs:16, sm:18, md:20, lg:22, xl:25 }} fontWeight={600}> { props.title } </Typography>
    </Box>
  );
};

export default OnVideoContent;
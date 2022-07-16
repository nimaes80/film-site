import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import TopVideo from './TopVideo';


function OnVideoContent(props) {


	return (
		<>
			<TopVideo {...props.topVideo} />
			<Box className="on-video-content" sx={{
				top:{
					xs:-100,
					sm: -150,
					md: -250,
					lg: -450,
					xl: -650,
				},
				mb:{
					xs: -10,
					sm: -12.5,
					md: -25,
					lg: -45,
					xl:-70
				},
				height: 'fit-content',
			}}>
				<Container maxWidth={false}>
						<Box sx={{display:{xs:'none', md:'block'}, mb:2.5}}>
							<img title={props.film.title} className='thumbnail' src={props.film.imgSrc} alt={props.film.title} />
						</Box>
						<Box className="top-video-details">
							{
							props.film.title && <Typography sx={{maxWidth:{lg:'50%'}}} variant="h2" fontSize={{xs:16, sm:18, md:20, lg:22, xl:25 }} fontWeight={600}> { props.film.title } </Typography>
							}

							{
							props.film.publish && <Typography sx={{maxWidth:{lg:'50%'}}} variant="subtitle" ><CalendarMonthRoundedIcon /> { props.film.publish } </Typography>
							}

							{
							props.film.description && <Typography sx={{maxWidth:{lg:'50%'}}} variant="body" component="p" fontSize={{xs:12, sm:14, md:16,lg:18, xl:20 }}> { props.film.description } </Typography>
							}

							{
							props.film.timing && <Typography sx={{maxWidth:{lg:'50%'}}} variant="body2" component="p"> <AccessTimeRoundedIcon /> { props.film.timing } </Typography>
							}

							{
							props.film.stars && <Typography sx={{maxWidth:{lg:'50%'}}} variant="subtitle2" component="p"> <StarRoundedIcon /> { props.film.stars } </Typography>
							}

							{
							props.film.age && <div style={{display:'flex'}}>
								<span className="dalton-badge center" > { props.film.age }+ </span>
								<p> مناسب برای افراد بزرگتر از { props.film.age } </p>
							</div>
							}
						</Box>

				</Container>
			</Box>
		</>
	);
};

export default OnVideoContent;
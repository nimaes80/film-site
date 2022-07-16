import { Autocomplete, Button, Card, CardActions, CardContent, CardHeader, Container, Dialog, DialogActions, DialogContent, DialogContentText, FormControl, TextField } from '@mui/material';
import { createFilterOptions } from '@mui/material/Autocomplete';
import React, { useState } from 'react';
import countrys from './countrys.json';


function Login() {
	const [number , setNumber] = useState('')
	const [country , setCountry] = useState({})
	const [open , setOpen] = useState(false)

	const handleNumber = (e) => {
		const result = e.target.value.replace(/\D/g, '');
		setNumber(result);
	}

	const handleCountry = (e, newInputValue) => {
			const i = countrys.findIndex((c)=> c.name === newInputValue)
			if (i !== -1) {
				setCountry(countrys[i]);
			}
	}


	const Submit = (e) => {
		e.preventDefault();
		if (number.length === 11 && country !== null) {
			setOpen(!open);

		} else {

		}


	}

	
	const handleSubmit = (e) => {
		e.preventDefault();

	}

	const handleClose = (e) => {
		e.preventDefault();
		setOpen(!open);
	}

	
	const filterOptions = createFilterOptions({
		limit: 5,
		matchFrom: 'any',
		stringify: (option) => `${option.code}-${option.phone}-${option.name}`,
	  });


	return (
		<Container sx={{my:20}} maxWidth="sm">
			
			<Card sx={{height:500}}>
				<FormControl fullWidth component="form" onSubmit={Submit}>
					<CardHeader title="ورود" className="text-center" />
					<CardContent>
						<Autocomplete
								onInputChange={handleCountry}
								getOptionLabel={(option) => option.name}
								filterOptions={filterOptions}
								disablePortal
								disableListWrap
								id="combo-box-demo"
								options={countrys}
								limitTags={3}
								sx={{my:3}}
								renderInput={(params) => <TextField label="کشور" {...params} />}
							/>

						<TextField
								
								type="tel"
								id="input-with-icon-textfield"
								label="شماره تلفن همراه"
								style={{width:"100%", direction:'ltr', textAlign:'left',}}
								maxLength="10"
								variant="outlined"
								inputProps={{
									maxLength:11,
								}}
								onChange={handleNumber}
							/>



					</CardContent>


					<CardActions>
						<Button variant="outlined" sx={{width:"100%"}} onClick={Submit}>
							ورود به حساب کاربری
						</Button>
						
						
					</CardActions>


				</FormControl>
			</Card>



			<Dialog open={open} onClose={handleClose}>
				
				<DialogContent>
						<DialogContentText> آیا شماره تلفن خود را تایید می‌کنید? </DialogContentText>
						<DialogContentText style={{direction:'ltr', textAlign:'left'}}> ({country.phone}) { number } </DialogContentText>
						
				</DialogContent>
				

				<DialogActions>
					<Button onClick={handleClose}> لغو </Button>
					<Button onClick={handleSubmit}> تایید </Button>

				</DialogActions>
				
			</Dialog>


		</Container>
	);
};


export default Login;
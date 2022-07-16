import { Autocomplete, Button, Card, CardActions, CardContent, CardHeader, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, FormControl, TextField } from "@mui/material";
import { createFilterOptions } from "@mui/material/Autocomplete";
import React, { useState } from "react";
import countrys from "./countrys.json";
import requests from "../../utils/requests";
import urls from "../../utils/urls";



function Register() {
	const [phoneNumber , setphoneNumber] = useState("");
	const [phoneNumberError , setPhoneNumberError] = useState(false);
	
	const [country , setCountry] = useState(null);
	const [countryError , setCountryError] = useState(false);
	
	const [username , setUsername] = useState("");
	const [usernameError , setUsernameError] = useState(false);
	
	const [password , setPassword] = useState("");
	const [passwordError , setPasswordError] = useState(false);
	
	const [email , setEmail] = useState("");
	const [emailError , setEmailError] = useState(false);
	
	const [open , setOpen] = useState(false);

	
	
	
	const handlephoneNumber = (e) => {
		const result = e.target.value.replace(/\D/g, "");
		setphoneNumber(result);
	};

	const handleCountry = (e, newInputValue) => {
			const i = countrys.findIndex((c)=> c.name === newInputValue);
			if (i !== -1) {
				setCountry(countrys[i]);
			}
	};


	const Submit = (e) => {
		e.preventDefault();
		if (username.length < 4) setUsernameError(true);
		if (password.length < 8) setPasswordError(true);
		if (email.length < 8) setEmailError(true);
		if (!country) setCountryError(true);
		if (phoneNumber.length !== 11) setPhoneNumberError(true);
		else if (
			username.length >= 4 &&
			password.length >= 8 &&
			email.length >= 8 &&
			country &&
			phoneNumber.length === 11
		) {
			setOpen(true);
		}

	};

	
	const handleSubmit = (e) => {
		e.preventDefault();
		requests.post(urls.account, {
			"username": username,
			"password": password,
			"email": email,
			"country_code": country.phone,
			"phone": phoneNumber,
		})
		.then(response => {
			console.log(response.status);
		})
		.catch(error => {
			console.log(error.status);

		});

	};

	const handleClose = (e) => {
		e.preventDefault();
		setOpen(!open);
	};

	
	const filterOptions = createFilterOptions({
		limit: 5,
		matchFrom: "any",
		stringify: (option) => `${option.code}-${option.phone}-${option.name}`,
	});


	return (
		<Container sx={{my:20}} maxWidth="sm">
			
			<Card sx={{height:550}}>
				<FormControl fullWidth component="form" onSubmit={Submit} autoComplete="off">
					<CardHeader title="ثبت نام" className="text-center" />
					<CardContent>
						<Autocomplete
								name="country"
								onInputChange={handleCountry}
								getOptionLabel={(option) => option.name}
								filterOptions={filterOptions}
								id="country"
								options={countrys}
								sx={{my:1}}
								renderInput={(params) => <TextField error={countryError} label="کشور *" {...params} /> }
							/>

						<TextField
								sx={{my:1}}
								error={phoneNumberError}
								name="phone"
								type="tel"
								id="phone"
								label="* شماره تلفن همراه"
								autoComplete="off"
								style={{width:"100%", direction:"ltr", textAlign:"left", }}
								variant="outlined"
								inputProps={{
									maxLength:11
								}}
								onChange={handlephoneNumber}
							/>
						
						<TextField
								sx={{my:1}}
								error={usernameError}
								name="username"
								type="text"
								id="username"
								label="* نام کاربری"
								autoComplete="off"
								style={{width:"100%", direction:"ltr", textAlign:"left", }}
								variant="outlined"
								onChange={(e)=> {setUsername(e.target.value);}}
							/>
						

						<TextField
								sx={{my:1}}
								error={emailError}
								name="email"
								type="email"
								id="email"
								label="* ایمیل"
								autoComplete="off"
								style={{width:"100%", direction:"ltr", textAlign:"left", }}
								variant="outlined"
								onChange={(e)=> {setEmail(e.target.value);}}
							/>

						
						<TextField
								sx={{my:1}}
								error={passwordError}
								name="password"
								type="password"
								id="password"
								label="* گذرواژه"
								autoComplete="off"
								style={{width:"100%", direction:"ltr", textAlign:"left", }}
								variant="outlined"
								onChange={(e)=> {setPassword(e.target.value);}}
							/>



					</CardContent>


					<CardActions>
						<Button variant="outlined" sx={{width:"100%"}} onClick={Submit}>
							ثبت نام
						</Button>
						
						
					</CardActions>


				</FormControl>
			</Card>



			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>
					آیا شماره تلفن و ایمیل خود را تایید می‌کنید؟ 
				</DialogTitle>
				<DialogContent>
						<Divider sx={{m:2}}/>
						{
							country	&& <>
								<DialogContentText style={{direction:"ltr", textAlign:"left"}}> ({country.phone}) { phoneNumber } </DialogContentText>
								<DialogContentText style={{direction:"ltr", textAlign:"left"}}> {email} </DialogContentText>
								</>
						}
						
				</DialogContent>
				

				<DialogActions>
					<Button onClick={handleClose}> لغو </Button>
					<Button onClick={handleSubmit}> تایید </Button>

				</DialogActions>
				
			</Dialog>


		</Container>
	);
}


export default Register;
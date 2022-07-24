import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import requests from "../../utils/requests";
import urls from "../../utils/urls";
import { Alert } from "@mui/material";

function Activation() {
	const params = useParams();
	const uid = params.uid;
	const token = params.token;
	const [message, setMessage] = useState("لطفا صبر کنید...");
	const [error, setError] = useState(false);

	useEffect(()=> {
		requests.post(`${urls.account}activation/`, {
				"uid":uid,
				"token":token
		})
			.then(response => {
				if (response.status === 200 && typeof(response.data) === "object") {
					setMessage("اکانت شما با موفقیت فعال شد. هم‌اکنون می‌توانید با نام کاربری و کلمه عبور خود وارد اکانت خود شوید.");
				} else {
					setMessage("اتصال خود را برسی کرده و مجددا تلاش کنید.");
					setError(true);
				}
			})
			.catch(error => {
				setMessage("لینک منتقضی شده یا نامعتبر است. در صورتی که ثبت نام کرده‌اید لطفا دوباره درخواست ایمیل کنید.");
				setError(true);
			});
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Alert sx={{my:30, width:"fit-content", marginInline:"auto"}} severity={error ? "error" : "info"}>
			
			{ message }

		</Alert>
	
	);
}

export default Activation;
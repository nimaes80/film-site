import { Card, CardContent, CardHeader, Divider } from '@mui/material';
import React from 'react';
import ContentSheet from './ContentSheet';
import Socials from './Socials';

function MainFooter() {
	const data = [
		{
			title: 'لینک‌های مفید',
			pages: [
				{
					name: 'خانه',
					url: '/'
				},
				{
					name: 'ورود',
					url: '/login'
				},
				{
					name: 'ثبت نام',
					url: '/register'
				},
				{
					name: 'بلاگ',
					url: '/blog'
				},
			],
		},
		{
			title: 'با ما',
			pages: [
				{
					name: 'درباره‌ی ما',
					url: '/about'
				},
				{
					name: 'ارتباط با ما',
					url: '/contact'
				},
				{
					name: 'قوانین و مقررات',
					url: '/documents'
				},
				{
					name: 'سوالات متداول',
					url: '/faq'
				},
			],
		},
		{
			title: '',
			pages: [
				{
					name: 'مستندات',
					url: '/documents'
				},
				{
					name: 'اپلیکیشن‌ها',
					url: '/applications'
				},
				{
					name: 'خرید اشتراک',
					url: '/plans'
				},
				
				
			],
		},
	]
	
	return (
		<footer >
			<Card sx={{mt:10, mb:0,}}>
				<CardHeader title="FILOOP" className='text-center' />
				<CardContent>
					<ContentSheet items={data} />
					<Divider width="50%" sx={{margin:'auto'}} />
					<Socials />
				</CardContent>
			</Card>
		</footer>
	);
};

export default MainFooter;
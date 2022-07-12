import { Card, CardContent, CardHeader } from '@mui/material';
import React from 'react';
import ContentSheet from './ContentSheet';

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
		<footer>
			<Card>
				<CardHeader title="FILOOP" className='text-center' />
				<CardContent>
					<ContentSheet items={data} />
				</CardContent>
			</Card>
		</footer>
	);
};

export default MainFooter;
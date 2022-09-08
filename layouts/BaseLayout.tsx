import Footer from '@ui-components/Footer';
import Header from '@ui-components/Header';
import Head from 'next/head';
import React from 'react';

type Props = {
	title?: string;
	children: React.ReactElement;
};
const BaseLayout = ({ children, title }: Props) => {
	return (
		<React.Fragment>
			<Head>
				<title>
					{title
						? title
						: 'Loans app. A social web based platform for socio communication'}
				</title>
			</Head>

			<Header />
			<div className="max-w-7xl mx-auto min-h-screen">
				<div className="w-full px-2">{children}</div>
			</div>
			<Footer />
		</React.Fragment>
	);
};

export default BaseLayout;
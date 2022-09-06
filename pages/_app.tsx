import '../styles/globals.css';
import { LoansPageComponentProps } from '@ui-types';
import { ReactNode } from 'react';

function MyApp({ Component, pageProps }: LoansPageComponentProps) {
	const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

	return getLayout(<Component {...pageProps} />);
}

export default MyApp;
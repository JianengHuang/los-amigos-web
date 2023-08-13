'use client';

import Link from 'next/link';
import React from 'react';

const Error = () => {
	return (
		<>
			<p>There was an error...</p>
			<Link href="/">Go Home</Link>
		</>
	);
};

export default Error;

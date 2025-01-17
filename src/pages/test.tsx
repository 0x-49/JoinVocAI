import { useEffect } from 'react';

export default function TestPage() {
	useEffect(() => {
		console.log('test');
	}, []);

	return (
		<div>
			<h1>Test Page</h1>
			<p>Check the console for the test output</p>
		</div>
	);
}
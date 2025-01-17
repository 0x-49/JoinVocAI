import React from 'react';
import { Button } from './ui/button';
import { AlertTriangle } from 'lucide-react';

interface Props {
	children: React.ReactNode;
}

interface State {
	hasError: boolean;
	error?: Error;
}

class ErrorBoundary extends React.Component<Props, State> {
	public state: State = {
		hasError: false
	};

	public static getDerivedStateFromError(error: Error): State {
		return { hasError: true, error };
	}

	public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		console.error('Uncaught error:', error, errorInfo);
	}

	public render() {
		if (this.state.hasError) {
			return (
				<div className="min-h-screen flex items-center justify-center bg-gray-50">
					<div className="text-center p-8">
						<AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
						<h1 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong</h1>
						<p className="text-gray-600 mb-4">We apologize for the inconvenience</p>
						<Button
							onClick={() => {
								this.setState({ hasError: false });
								window.location.reload();
							}}
						>
							Try again
						</Button>
					</div>
				</div>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { PageError } from 'widgets/page-error';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
	public state: State = {
		hasError: false
	};

	public static getDerivedStateFromError(): State {
		return { hasError: true };
	}

	public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error('Uncaught error:', error, errorInfo);
	}

	public render() {
		if (this.state.hasError) {
			return <PageError/>;
		}

		return this.props.children;
	}
}

export default ErrorBoundary;

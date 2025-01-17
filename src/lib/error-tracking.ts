import * as analytics from './analytics'

interface ErrorDetails {
	message: string
	stack?: string
	componentStack?: string
	url?: string
	timestamp: number
}

class ErrorTracker {
	private static instance: ErrorTracker
	private errorQueue: ErrorDetails[] = []
	private readonly maxQueueSize = 10

	private constructor() {
		this.setupWindowErrorHandler()
		this.setupUnhandledRejectionHandler()
	}

	public static getInstance(): ErrorTracker {
		if (!ErrorTracker.instance) {
			ErrorTracker.instance = new ErrorTracker()
		}
		return ErrorTracker.instance
	}

	private setupWindowErrorHandler() {
		window.onerror = (message, source, lineno, colno, error) => {
			this.captureError({
				message: message.toString(),
				stack: error?.stack,
				url: source,
				timestamp: Date.now()
			})
		}
	}

	private setupUnhandledRejectionHandler() {
		window.onunhandledrejection = (event) => {
			this.captureError({
				message: event.reason?.message || 'Unhandled Promise Rejection',
				stack: event.reason?.stack,
				timestamp: Date.now()
			})
		}
	}

	public captureError(error: ErrorDetails) {
		this.errorQueue.push(error)
		if (this.errorQueue.length > this.maxQueueSize) {
			this.flushErrors()
		}

		// Also send to analytics
		analytics.logError(new Error(error.message), {
			stack: error.stack,
			componentStack: error.componentStack,
			url: error.url
		})
	}

	public captureComponentError(error: Error, componentStack: string) {
		this.captureError({
			message: error.message,
			stack: error.stack,
			componentStack,
			timestamp: Date.now()
		})
	}

	private flushErrors() {
		// Here you would typically send the errors to your error tracking service
		console.error('Errors:', this.errorQueue)
		this.errorQueue = []
	}
}

export const errorTracker = ErrorTracker.getInstance()
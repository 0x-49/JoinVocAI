declare global {
	interface Window {
		gtag: (...args: any[]) => void;
	}
}

export const GA_TRACKING_ID = 'G-XXXXXXXXXX' // Replace with your GA4 tracking ID

// Log page view
export const pageview = (url: string) => {
	window.gtag('config', GA_TRACKING_ID, {
		page_path: url,
	});
};

// Log specific events
export const event = ({ action, category, label, value }: {
	action: string;
	category: string;
	label: string;
	value?: number;
}) => {
	window.gtag('event', action, {
		event_category: category,
		event_label: label,
		value: value,
	});
};

// Log errors
export const logError = (error: Error, errorInfo: any = {}) => {
	event({
		action: 'error',
		category: 'Error',
		label: `${error.name}: ${error.message}`,
	});
	
	// You can also send to other error tracking services here
	console.error('Error occurred:', error, errorInfo);
};

// Track user interactions
export const trackInteraction = (elementName: string, interactionType: string) => {
	event({
		action: interactionType,
		category: 'User Interaction',
		label: elementName,
	});
};
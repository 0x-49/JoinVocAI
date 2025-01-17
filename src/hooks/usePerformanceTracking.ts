import { useEffect, useRef } from 'react';
import { performanceMonitor } from '@/lib/performance';

export function usePerformanceTracking(componentName: string) {
	const mountTime = useRef<number>(0);

	useEffect(() => {
		mountTime.current = performance.now();

		return () => {
			const unmountTime = performance.now();
			const duration = unmountTime - mountTime.current;
			performanceMonitor.trackComponentRender(componentName, duration);
		};
	}, [componentName]);

	const trackNetworkRequest = (url: string, startTime: number) => {
		const duration = performance.now() - startTime;
		performanceMonitor.trackNetworkRequest(url, duration, 200); // Assuming successful request
	};

	return {
		trackNetworkRequest,
	};
}
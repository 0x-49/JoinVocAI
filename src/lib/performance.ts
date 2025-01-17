interface PerformanceMetric {
	name: string;
	value: number;
	timestamp: number;
	type: 'page-load' | 'component-render' | 'network-request';
	metadata?: Record<string, any>;
}

class PerformanceMonitor {
	private static instance: PerformanceMonitor;
	private metrics: PerformanceMetric[] = [];
	private readonly maxMetrics = 100;

	private constructor() {
		this.setupPerformanceObserver();
	}

	public static getInstance(): PerformanceMonitor {
		if (!PerformanceMonitor.instance) {
			PerformanceMonitor.instance = new PerformanceMonitor();
		}
		return PerformanceMonitor.instance;
	}

	private setupPerformanceObserver() {
		if (typeof window !== 'undefined') {
			// Observe page load metrics
			const observer = new PerformanceObserver((list) => {
				list.getEntries().forEach((entry) => {
					if (entry.entryType === 'navigation') {
						const navEntry = entry as PerformanceNavigationTiming;
						this.trackMetric({
							name: 'page-load',
							value: navEntry.duration,
							timestamp: Date.now(),
							type: 'page-load',
							metadata: {
								domComplete: navEntry.domComplete,
								domInteractive: navEntry.domInteractive,
								loadEventEnd: navEntry.loadEventEnd,
							},
						});
					}
				});
			});

			observer.observe({ entryTypes: ['navigation'] });

			// Observe long tasks
			const longTaskObserver = new PerformanceObserver((list) => {
				list.getEntries().forEach((entry) => {
					this.trackMetric({
						name: 'long-task',
						value: entry.duration,
						timestamp: Date.now(),
						type: 'component-render',
						metadata: {
							startTime: entry.startTime,
						},
					});
				});
			});

			longTaskObserver.observe({ entryTypes: ['longtask'] });
		}
	}

	public trackMetric(metric: PerformanceMetric) {
		this.metrics.push(metric);
		if (this.metrics.length > this.maxMetrics) {
			this.flushMetrics();
		}
	}

	public trackComponentRender(componentName: string, duration: number) {
		this.trackMetric({
			name: `${componentName}-render`,
			value: duration,
			timestamp: Date.now(),
			type: 'component-render',
		});
	}

	public trackNetworkRequest(url: string, duration: number, status: number) {
		this.trackMetric({
			name: 'network-request',
			value: duration,
			timestamp: Date.now(),
			type: 'network-request',
			metadata: {
				url,
				status,
			},
		});
	}

	private flushMetrics() {
		console.log('Performance metrics:', this.metrics);
		this.metrics = [];
	}

	public getMetrics() {
		return this.metrics;
	}
}


export const performanceMonitor = PerformanceMonitor.getInstance();
const fs = require('fs');
const path = require('path');
const globby = require('globby');

const SITE_URL = 'https://vocai.com';

(async () => {
	const pages = await globby([
		'src/pages/**/*.tsx',
		'!src/pages/_*.tsx',
		'!src/pages/api',
		'!src/pages/404.tsx',
	]);

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
		<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
			${pages
				.map((page) => {
					const route = page
						.replace('src/pages', '')
						.replace('.tsx', '')
						.replace('/index', '');
					return `
						<url>
							<loc>${SITE_URL}${route}</loc>
							<lastmod>${new Date().toISOString()}</lastmod>
							<changefreq>daily</changefreq>
							<priority>0.7</priority>
						</url>
					`;
				})
				.join('')}
		</urlset>`;

	fs.writeFileSync('public/sitemap.xml', sitemap);
	console.log('Sitemap generated successfully!');
})();
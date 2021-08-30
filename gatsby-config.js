require('dotenv').config();

const title = `bug repro`;
const headline = '…';
const url = 'https://jonathans.page';

module.exports = {
	siteMetadata: {
		siteTitle: title,
		siteTitleAlt: `${title} - ${headline}`,
		siteHeadline: headline,
		siteUrl: url,
		siteDescription: headline,
		siteLanguage: 'en',
		siteImage: '/banner.jpg',
		author: '@jsg2021',
	},
	plugins: [
		{
			resolve: 'gatsby-theme',
			options: {
				feedTitle: `${title} - ${headline}`,
				// postsPerPage: 10k,
				redirects: [{ fromPath: '/feed', toPath: '/rss.xml', isPermanent: true, redirectInBrowser: false }],
				navigation: [
					{
						title: 'Blog',
						slug: '/blog',
					},
					{
						title: 'About',
						slug: '/about',
					},
				],
				externalLinks: [],
			},
		},
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: process.env.GOOGLE_ANALYTICS_ID || 'dev',
			},
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: title,
				short_name: 'asd',
				description: headline,
				start_url: '/',
				background_color: '#fff',
				theme_color: '#6B46C1',
				display: 'standalone',
				icons: [],
			},
		},
		{
			resolve: 'gatsby-plugin-disqus',
			options: {
				shortname: 'asd',
			},
		},
		'gatsby-plugin-netlify',
		'gatsby-plugin-offline',
		'gatsby-plugin-sitemap',
	],
};

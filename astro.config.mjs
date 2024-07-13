import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMermaid from 'remark-mermaidjs';

// https://astro.build/config
export default defineConfig({
	markdown: {
		remarkPlugins: [[remarkMermaid, {
		  mermaidConfig: {
			theme: 'dark',
			themeVariables: {
			  darkMode: true,
			  background: '#0d1117',
			  primaryColor: '#5de4c7',
			  secondaryColor: '#cafbff',
			  tertiaryColor: '#61afef',
			  primaryTextColor: '#ffffff',
			  secondaryTextColor: '#ffffff',
			  tertiaryTextColor: '#ffffff',
			  lineColor: '#ffffff',
			  fontFamily: 'arial',
			  fontSize: '16px'
			}
		  }
		}]]
	  },
	integrations: [
		starlight({
			title: 'Multi-Modal Work',
			customCss: [
				'./src/styles/custom.css'
			],
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});

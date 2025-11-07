// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import remarkGfm from 'remark-gfm';

// https://astro.build/config
export default defineConfig({
	site: 'https://pcpp.xihale.top',
	markdown: {
		remarkPlugins: [ remarkGfm ]
	},
	integrations: [
		starlight({
			title: 'Professional C++ 6th',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/xihale/professional-cpp' }],
			editLink: {
				baseUrl: 'https://github.com/xihale/professional-cpp/edit/main/',
			},
			tableOfContents: {
				maxHeadingLevel: 4,
			},
			customCss: [
				// Import the custom CSS for C++ version tags
				'./src/assets/style.css',
			],
			expressiveCode: {
				themes: [
					"vitesse-dark",
					"vitesse-light"
				]
			},
			sidebar: [
				{
					label: 'Professional C++ 6th',
					items: [
						{ label: 'Book Overview', slug: 'index' },
					],
				},
				{
					label: 'Frontmatter',
					items: [
						{ label: 'Copyright', slug: 'f02' },
						{ label: 'Dedication', slug: 'f03' },
						{ label: 'About Author', slug: 'f04' },
						{ label: 'Acknowledgments', slug: 'f05' },
						{ label: 'Introduction', slug: 'f06' },
					],
				},
				{
					label: 'Chapters',
					items: [
						{ label: '01. Crash Course', slug: 'c01' },
						{ label: '02. Strings', slug: 'c02' },
						{ label: '03. Coding Style', slug: 'c03' },
						{ label: '04. Program Design', slug: 'c04' },
						{ label: '05. Class Design', slug: 'c05' },
						{ label: '06. Reusability', slug: 'c06' },
						{ label: '07. Memory Management', slug: 'c07' },
						{ label: '08. Class Proficiency', slug: 'c08' },
						{ label: '09. Inheritance', slug: 'c09' },
						{ label: '10. Advanced Inheritance', slug: 'c10' },
						{ label: '11. Modules', slug: 'c11' },
						{ label: '12. Templates', slug: 'c12' },
						{ label: '13. I/O Streams', slug: 'c13' },
						{ label: '14. Error Handling', slug: 'c14' },
						{ label: '15. Operator Overloading', slug: 'c15' },
						{ label: '16. Standard Library', slug: 'c16' },
						{ label: '17. Iterators & Ranges', slug: 'c17' },
						{ label: '18. Containers', slug: 'c18' },
						{ label: '19. Functions & Lambdas', slug: 'c19' },
						{ label: '20. Algorithms', slug: 'c20' },
						{ label: '21. Localization & Regex', slug: 'c21' },
						{ label: '22. Date & Time', slug: 'c22' },
						{ label: '23. Random Numbers', slug: 'c23' },
						{ label: '24. Vocabulary Types', slug: 'c24' },
						{ label: '25. Customizing STL', slug: 'c25' },
						{ label: '26. Advanced Templates', slug: 'c26' },
						{ label: '27. Multithreading', slug: 'c27' },
						{ label: '28. Software Engineering', slug: 'c28' },
						{ label: '29. Efficient C++', slug: 'c29' },
						{ label: '30. Testing', slug: 'c30' },
						{ label: '31. Debugging', slug: 'c31' },
						{ label: '32. Design Frameworks', slug: 'c32' },
						{ label: '33. Design Patterns', slug: 'c33' },
						{ label: '34. Cross-Platform', slug: 'c34' },
					],
				},
				{
					label: 'Appendices',
					items: [
						{ label: 'A. C++ Interviews', slug: 'b01' },
						{ label: 'B. Additional Resources', slug: 'b02' },
						{ label: 'C. References', slug: 'b03' },
						{ label: 'D. Glossary', slug: 'b04' },
					],
				},
			],
		}),
	],
});

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
			title: {
				en: 'Professional C++ 6th',
				'zh-CN': 'Professional C++（第 6 版）',
			},
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'English',
					lang: 'en',
				},
				'zh-cn': {
					label: '简体中文',
					lang: 'zh-CN',
				},
			},
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
				'./src/assets/inline-code.css',
			],
			expressiveCode: {
				frames: {
					extractFileNameFromCode: false,
				},
				themes: [
					"vitesse-dark",
					"vitesse-light"
				]
			},
			sidebar: [
				{
					label: 'Professional C++ 6th',
					translations: {
						'zh-CN': 'Professional C++（第 6 版）',
					},
					items: [
						{
							label: 'Book Overview',
							translations: {
								'zh-CN': '全书概览',
							},
							slug: 'index',
						},
					],
				},
				{
					label: 'Frontmatter',
					translations: {
						'zh-CN': '前置部分',
					},
					items: [
						{ label: 'Copyright', translations: { 'zh-CN': '版权页' }, slug: 'f02' },
						{ label: 'Dedication', translations: { 'zh-CN': '献辞' }, slug: 'f03' },
						{ label: 'About Author', translations: { 'zh-CN': '关于作者' }, slug: 'f04' },
						{ label: 'Acknowledgments', translations: { 'zh-CN': '致谢' }, slug: 'f05' },
						{ label: 'Introduction', translations: { 'zh-CN': '前言' }, slug: 'f06' },
					],
				},
				{
					label: 'Chapters',
					translations: {
						'zh-CN': '章节',
					},
					items: [
						{ label: '01. Crash Course', translations: { 'zh-CN': '01. C++ 速成导论' }, slug: 'c01' },
						{ label: '02. Strings', translations: { 'zh-CN': '02. 字符串' }, slug: 'c02' },
						{ label: '03. Coding Style', translations: { 'zh-CN': '03. 编码风格' }, slug: 'c03' },
						{ label: '04. Program Design', translations: { 'zh-CN': '04. 程序设计' }, slug: 'c04' },
						{ label: '05. Class Design', translations: { 'zh-CN': '05. 类设计' }, slug: 'c05' },
						{ label: '06. Reusability', translations: { 'zh-CN': '06. 可复用性设计' }, slug: 'c06' },
						{ label: '07. Memory Management', translations: { 'zh-CN': '07. 内存管理' }, slug: 'c07' },
						{ label: '08. Class Proficiency', translations: { 'zh-CN': '08. 精通类与对象' }, slug: 'c08' },
						{ label: '09. Inheritance', translations: { 'zh-CN': '09. 深入继承' }, slug: 'c09' },
						{ label: '10. Advanced Inheritance', translations: { 'zh-CN': '10. 高级继承技巧' }, slug: 'c10' },
						{ label: '11. Modules', translations: { 'zh-CN': '11. 模块与头文件' }, slug: 'c11' },
						{ label: '12. Templates', translations: { 'zh-CN': '12. 模板' }, slug: 'c12' },
						{ label: '13. I/O Streams', translations: { 'zh-CN': '13. 输入输出流' }, slug: 'c13' },
						{ label: '14. Error Handling', translations: { 'zh-CN': '14. 错误处理' }, slug: 'c14' },
						{ label: '15. Operator Overloading', translations: { 'zh-CN': '15. 运算符重载' }, slug: 'c15' },
						{ label: '16. Standard Library', translations: { 'zh-CN': '16. 标准库' }, slug: 'c16' },
						{ label: '17. Iterators & Ranges', translations: { 'zh-CN': '17. 迭代器与范围' }, slug: 'c17' },
						{ label: '18. Containers', translations: { 'zh-CN': '18. 容器' }, slug: 'c18' },
						{ label: '19. Functions & Lambdas', translations: { 'zh-CN': '19. 函数与 Lambda' }, slug: 'c19' },
						{ label: '20. Algorithms', translations: { 'zh-CN': '20. 算法' }, slug: 'c20' },
						{ label: '21. Localization & Regex', translations: { 'zh-CN': '21. 本地化与正则表达式' }, slug: 'c21' },
						{ label: '22. Date & Time', translations: { 'zh-CN': '22. 日期与时间' }, slug: 'c22' },
						{ label: '23. Random Numbers', translations: { 'zh-CN': '23. 随机数' }, slug: 'c23' },
						{ label: '24. Vocabulary Types', translations: { 'zh-CN': '24. 词汇类型' }, slug: 'c24' },
						{ label: '25. Customizing STL', translations: { 'zh-CN': '25. 定制与扩展标准库' }, slug: 'c25' },
						{ label: '26. Advanced Templates', translations: { 'zh-CN': '26. 高级模板' }, slug: 'c26' },
						{ label: '27. Multithreading', translations: { 'zh-CN': '27. 多线程编程' }, slug: 'c27' },
						{ label: '28. Software Engineering', translations: { 'zh-CN': '28. 软件工程' }, slug: 'c28' },
						{ label: '29. Efficient C++', translations: { 'zh-CN': '29. 高效 C++' }, slug: 'c29' },
						{ label: '30. Testing', translations: { 'zh-CN': '30. 测试' }, slug: 'c30' },
						{ label: '31. Debugging', translations: { 'zh-CN': '31. 调试' }, slug: 'c31' },
						{ label: '32. Design Frameworks', translations: { 'zh-CN': '32. 设计框架' }, slug: 'c32' },
						{ label: '33. Design Patterns', translations: { 'zh-CN': '33. 设计模式' }, slug: 'c33' },
						{ label: '34. Cross-Platform', translations: { 'zh-CN': '34. 跨平台开发' }, slug: 'c34' },
					],
				},
				{
					label: 'Appendices',
					translations: {
						'zh-CN': '附录',
					},
					items: [
						{ label: 'A. C++ Interviews', translations: { 'zh-CN': 'A. C++ 面试' }, slug: 'b01' },
						{ label: 'B. Additional Resources', translations: { 'zh-CN': 'B. 延伸阅读' }, slug: 'b02' },
						{ label: 'C. References', translations: { 'zh-CN': 'C. 参考资料' }, slug: 'b03' },
						{ label: 'D. Glossary', translations: { 'zh-CN': 'D. UML 入门' }, slug: 'b04' },
					],
				},
			],
		}),
	],
});

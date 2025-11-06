# Professional C++ - Interactive Documentation

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)
[![C++20](https://img.shields.io/badge/C%2B%2B-20-blue.svg)](https://en.wikipedia.org/wiki/C%2B%2B20)
[![Astro](https://img.shields.io/badge/Astro-5.6+-orange.svg)](https://astro.build/)

An interactive documentation site for *Professional C++* (6th Edition), featuring comprehensive guides to advanced C++ programming techniques, modern C++ features, and professional software development practices.

## 📚 About This Project

This site serves as a digital companion to the *Professional C++* textbook, providing:

- **34 Chapters** covering everything from C++ basics to advanced software engineering
- **Modern C++20 Features** including modules, concepts, and ranges
- **Professional Development Practices** for real-world applications
- **Interactive Navigation** with cross-references and search functionality
- **Code Examples** with syntax highlighting and explanations

## 🚀 Features

- 🌟 **Modern Documentation Interface** built with Astro and Starlight
- 📖 **Comprehensive Chapter Coverage** from fundamentals to advanced topics
- 🎯 **Professional Focus** on real-world applications and best practices
- 🔍 **Full Text Search** across all chapters and sections
- 🌙 **Dark Mode Support** for comfortable reading
- 📱 **Responsive Design** works on all devices
- ⚡ **Fast Loading** with static site generation

## 📖 Content Structure

### Part I: Introduction to Professional C++
- **C01**: A Crash Course in C++ and the Standard Library
- **C02**: Working with Strings
- **C03**: Coding with Professional Style

### Part II: Professional C++ Software Design
- **C04**: Designing Professional Programs
- **C05**: Designing with Classes
- **C06**: Designing for Reuse

### Part III: C++ Coding the Professional Way
- **C07-C24**: From Memory Management to Vocabulary Types

### Part IV: Mastering Advanced Features of C++
- **C25**: Customizing and Extending the STL
- **C26**: Advanced Templates
- **C27**: Multithreading

### Part V: C++ Software Engineering
- **C28-C34**: From Software Engineering to Cross-Platform Development

## 🛠️ Tech Stack

- **Frontend**: [Astro](https://astro.build/) - Modern static site generator
- **Documentation**: [Starlight](https://starlight.astro.build/) - Documentation framework
- **UI Components**: Tailwind CSS + custom styling
- **Markdown**: GitHub Flavored Markdown with syntax highlighting
- **Build Tool**: Astro CLI with Bun runtime
- **Deployment**: Static hosting compatible

## 📦 Project Structure

```
.
├── public/                 # Static assets (favicons, robots.txt, etc.)
├── src/
│   ├── assets/            # Images, fonts, and other assets
│   ├── content/
│   │   └── docs/          # Markdown content for chapters
│   │       ├── b*.md      # Appendices
│   │       ├── c*.md      # Chapters 01-34
│   │       ├── f*.md      # Front matter
│   │       ├── images/    # Chapter images and diagrams
│   │       └── index.md   # Homepage content
│   ├── content.config.ts  # Starlight content configuration
│   └── style.css         # Global styles
├── scripts/               # Build and utility scripts
│   └── convert_to_markdown.py
├── astro.config.mjs       # Astro configuration
├── package.json           # Dependencies and scripts
├── pyproject.toml         # Python dependencies for scripts
└── tsconfig.json          # TypeScript configuration
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- Bun (recommended) or npm
- Python 3.13+ (for content conversion scripts)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd pcpp
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Start development server**
   ```bash
   bun dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321`

## 🧞 Commands

| Command | Action |
|---------|--------|
| `bun install` | Install dependencies |
| `bun dev` | Start development server at `localhost:4321` |
| `bun build` | Build production site to `./dist/` |
| `bun preview` | Preview production build locally |
| `bun astro ...` | Run Astro CLI commands |

## 📝 Content Management

### Adding New Content

1. Create new Markdown files in `src/content/docs/`
2. Add front matter with title and metadata
3. Update navigation in `src/content/config.ts` if needed
4. Add images to `src/content/docs/images/`

### Content Conversion

The project includes a Python script for converting XHTML content to Markdown:

```bash
python scripts/convert_to_markdown.py [input_dir] [output_dir]
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Astro Team** for the amazing Astro framework
- **Starlight Contributors** for the documentation framework
- **Wiley Publishing** for the Professional C++ textbook content
- **C++ Community** for the continued evolution of the language

## 🔗 Related Links

- [Official C++ Documentation](https://en.cppreference.com/)
- [Astro Documentation](https://docs.astro.build/)
- [Starlight Documentation](https://starlight.astro.build/)
- [C++ Standard Committee](https://isocpp.org/)

---

**Note**: This site is intended as a educational supplement to the *Professional C++* textbook. For the complete learning experience, please consider purchasing the official book.
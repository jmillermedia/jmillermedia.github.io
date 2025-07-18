# JMillermedia Personal Website (Jekyll)

This is the source code for the personal website of jmillermedia, built using [Jekyll](https://jekyllrb.com/). The site features an about page, contact page, resume, projects, and more, with custom styles and assets.

## Features

- Static site generated with Jekyll
- Custom SCSS styling and modular design
- Project and skills data managed via JSON in `_data/`
- Responsive layout and modern typography (Roboto font family)
- Organized assets for CSS, fonts, images, and JS

## Project Structure

```
├── _config.yml           # Jekyll configuration
├── Gemfile               # Ruby gem dependencies
├── _layouts/             # HTML layout templates
├── _includes/            # Reusable HTML snippets
├── _sass/                # SCSS partials and modules
├── _data/                # JSON data for projects, skills, etc.
├── assets/               # CSS, fonts, images, JS
├── index.html, *.html    # Main site pages
└── _site/                # Generated site output (do not edit)
```

## Getting Started

### Prerequisites

- Ruby (recommended via [RubyInstaller](https://rubyinstaller.org/) for Windows)
- Bundler (`gem install bundler`)
- Jekyll (`gem install jekyll`)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jmillermedia/jmillermedia.github.io.git
   cd jmillermedia.github.io
   ```
2. Install dependencies:
   ```bash
   bundle install
   ```

### Running Locally

Start the Jekyll development server:
```bash
bundle exec jekyll serve
```
Visit `http://localhost:4000` in your browser to view the site.

## Customization

- Edit SCSS in `_sass/` for styles
- Update data in `_data/projects.json` and `_data/skills.json`
- Modify layouts in `_layouts/` and includes in `_includes/`

## Deployment

The site is designed for deployment to GitHub Pages. Push changes to the `main` branch to update the live site.

## License

This project is open source and available under the [MIT License](LICENSE).

## Credits

- Built with [Jekyll](https://jekyllrb.com/)
- Fonts: [Roboto](https://fonts.google.com/specimen/Roboto)

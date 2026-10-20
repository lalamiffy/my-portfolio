# Portfolio Website

Jianna Huang's portfolio website, built with Next.js and Tailwind CSS.

## Installation

1. Clone the repository: `git clone https://github.com/lalamiffy/my-portfolio.git`
2. Navigate to the project directory: `cd my-portfolio`
3. Install the dependencies: `npm install`

## Usage

1. Start the development server: `npm run dev`
2. Open your browser and visit `http://localhost:3000` to view the website.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute the code as per the terms of the license.

## Deployment

The same repository supports two deployments:

- AWS Amplify continues to build the standard Next.js application from the `master` branch.
- GitHub Actions creates a static export and deploys it to GitHub Pages at
  `https://lalamiffy.github.io/my-portfolio/`.

The contact form submits directly to Formspree using
`https://formspree.io/f/xaeqzrkj`. To replace it later, configure
`NEXT_PUBLIC_FORMSPREE_ENDPOINT` in either location:

1. Add it as an environment variable in AWS Amplify.
2. Add it as a GitHub repository variable under **Settings > Secrets and variables > Actions > Variables**.

Use the complete Formspree endpoint as the value:

```text
https://formspree.io/f/xaeqzrkj
```

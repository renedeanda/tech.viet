# Introduction

Tech Viet is an open-source static website built with [Next.js](https://nextjs.org/) listing 150+ technology companies in Vietnam.

Special thanks to my friend [Franck](https://github.com/pfranck) helping automate the addition of companies via Google Form with his project [gform-to-github](https://github.com/pfranck/gform-to-github). You can also find the Google Apps Script used for this project in the `scripts` folder.

## Contributing to Tech.Viet

All the company pages are created from individual company JSON files in the `public/data/companies` folder.

You can update / add new companies by adding a new JSON file to that folder using this [COMPANY TEMPLATE](https://github.com/renedeanda/Tech.Viet/blob/master/public/data/__company_template.json) as a guide.

Updates to companies that add new structured data are welcome if you can also update the app to accommodate the new data (ie adding a products array for a company).

## Getting Started

First, run the development server:

```bash
npm install
# Make sure Semantic-UI is built at least once using now-dev (also run this anytime you change the global Semantic site.variables file)
npm run now-dev
# All times after you can use dev
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Connect

Feel free to connect with me on [LinkedIn](https://linkedin.com/in/renedeanda) & check out my dev profile on [Vina.Dev](https://vina.dev/rene). I'm currently looking for full-time work.

## License
Tech Viet is distributed under the MIT license. See [LICENSE](https://github.com/renedeanda/Tech.Viet/blob/master/LICENSE.md) for details.

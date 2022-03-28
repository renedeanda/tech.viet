import { writeFileSync } from 'fs';
import { globby } from 'globby';

async function generateSiteMap() {
  const pages = await globby([
    'pages/**/*.tsx',
    '!pages/_*.tsx',
    '!pages/404.tsx',
    '!pages/500.tsx',
    '!pages/**/[company].tsx',
    '!pages/api',
    '!pages/**/[investor].tsx',
    'public/data/companies/*.json',
    'public/data/investors/*.json'
  ])

  const sitemap =
    `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${pages
      .map(page => {
        const path = page
          .replace('pages', '')
          .replace('.json', '')
          .replace('.tsx', '')
          .replace('.jsx', '')
          .replace('.js', '')
          .replace('public/data/companies', '/company')
          .replace('public/data/investors', '/investors')
          .replace('investors/index', 'investors')
          .replace('companies/index', 'companies')

        const route = path === '/index' ? '' : path

        return `
                      <url>
                          <loc>${`${process.env.PUBLIC_URL}${route}`}</loc>
                      </url>
                  `
      })
      .join('')}
      </urlset>`

  writeFileSync('public/sitemap.xml', sitemap);
}

generateSiteMap();
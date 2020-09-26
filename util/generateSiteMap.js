const fs = require('fs');
const globby = require('globby');

async function generateSiteMap() {
    const pages = await globby([
        'pages/**/*.tsx',
        '!pages/_*.tsx',
        '!pages/**/[company].tsx',
        '!pages/api',
        'public/data/companies/*.json'
    ])

    const sitemap = `
      <?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${pages
            .map(page => {
                const path = page
                    .replace('pages', '')
                    .replace('.json', '')
                    .replace('.tsx', '')
                    .replace('.jsx', '')
                    .replace('.js', '')
                    .replace('public/data', '')
                const route = path === '/index' ? '' : path

                return `
                      <url>
                          <loc>${`https://tech.viet.io${route}`}</loc>
                      </url>
                  `
            })
            .join('')}
      </urlset>
  `

    fs.writeFileSync('public/sitemap.xml', sitemap);
}

generateSiteMap();
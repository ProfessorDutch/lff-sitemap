import { createClient } from 'contentful';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { CONTENTFUL_CONFIG } from '../src/config/contentful';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contentfulClient = createClient({
  space: CONTENTFUL_CONFIG.space,
  accessToken: CONTENTFUL_CONFIG.accessToken,
  environment: CONTENTFUL_CONFIG.environment
});

interface SitemapEntry {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: string;
}

const BASE_URL = 'https://legalfeefinder.com';
const CURRENT_DATE = new Date().toISOString().split('T')[0];

const CORE_PAGES: SitemapEntry[] = [
  {
    loc: '/',
    lastmod: CURRENT_DATE,
    changefreq: 'monthly',
    priority: '1.0'
  },
  {
    loc: '/demo',
    lastmod: CURRENT_DATE,
    changefreq: 'monthly',
    priority: '0.9'
  },
  {
    loc: '/privacy',
    lastmod: CURRENT_DATE,
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    loc: '/terms',
    lastmod: CURRENT_DATE,
    changefreq: 'monthly',
    priority: '0.8'
  }
];

const MAJOR_CITIES = [
  'new york', 'los angeles', 'chicago', 'houston', 'phoenix',
  'philadelphia', 'san antonio', 'san diego', 'dallas', 'san jose'
];

const generateSitemapXML = (entries: SitemapEntry[]): string => {
  const urlElements = entries.map(entry => `
    <url>
      <loc>${BASE_URL}${entry.loc}</loc>
      <lastmod>${entry.lastmod}</lastmod>
      <changefreq>${entry.changefreq}</changefreq>
      <priority>${entry.priority}</priority>
    </url>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlElements}
</urlset>`;
};

async function generateSitemap() {
  try {
    console.log('Fetching pages from Contentful...');
    
    const response = await contentfulClient.getEntries({
      content_type: CONTENTFUL_CONFIG.contentTypes.landingPage,
      limit: 1000,
      select: ['fields.url_slug', 'fields.city', 'sys.updatedAt']
    });

    if (!response.items?.length) {
      throw new Error('No pages found in Contentful');
    }

    console.log(`Found ${response.items.length} pages`);

    const sitemapEntries: SitemapEntry[] = [
      ...CORE_PAGES,
      ...response.items.map(entry => {
        const urlSlug = entry.fields.url_slug as string;
        const city = (entry.fields.city as string).toLowerCase();
        const updatedAt = entry.sys.updatedAt as string;
        
        return {
          loc: `/${urlSlug}`,
          lastmod: updatedAt.split('T')[0],
          changefreq: 'quarterly',
          priority: MAJOR_CITIES.includes(city) ? '0.9' : '0.7'
        };
      })
    ];

    const sitemap = generateSitemapXML(sitemapEntries);
    
    // Ensure public directory exists
    const publicDir = path.resolve(__dirname, '../public');
    await fs.mkdir(publicDir, { recursive: true });
    
    // Write sitemap
    const sitemapPath = path.join(publicDir, 'sitemap.xml');
    await fs.writeFile(sitemapPath, sitemap);
    
    console.log('Sitemap generated successfully!');
    console.log(`Written to: ${sitemapPath}`);
    console.log(`Total URLs: ${sitemapEntries.length}`);
  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
}

// Run the generator
generateSitemap();
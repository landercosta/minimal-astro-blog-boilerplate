import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import { name, author, description } from '../../siteConfig.json';

export async function GET(context) {
  return rss({
    title: `${name[0].toUpperCase() + name.toLowerCase().slice(1)} | Blog`,
    description: description,
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>pt-BR</language>`,
  });
}
import type {MetadataRoute} from 'next';
export const dynamic='force-static';
export default function robots():MetadataRoute.Robots{
 const allow=process.env.ALLOW_INDEXING==='true';
 return {rules:{userAgent:'*',...(allow?{allow:'/'}:{disallow:'/'})},...(allow&&process.env.NEXT_PUBLIC_SITE_URL?{sitemap:new URL('/sitemap.xml',process.env.NEXT_PUBLIC_SITE_URL).href}:{})};
}

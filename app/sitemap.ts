import type {MetadataRoute} from 'next';
import {projects} from './data';
export const dynamic='force-static';
export default function sitemap():MetadataRoute.Sitemap{
  const origin=process.env.NEXT_PUBLIC_SITE_URL;
  if(!origin)return [];
  return ['/',...projects.map(p=>'/projects/'+p.slug+'/')].map(path=>({url:new URL(path,origin).href}));
}

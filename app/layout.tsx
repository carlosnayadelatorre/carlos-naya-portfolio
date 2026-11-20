import type {Metadata} from 'next';
import './globals.css';
const origin=process.env.NEXT_PUBLIC_SITE_URL;
export const metadata:Metadata={
  title:{default:'Carlos Naya — AI & Business Automation',template:'%s | Carlos Naya'},
  description:'AI-powered workflows, connected business systems and process optimization. Carlos Naya combines Business Administration, Applied AI and Operations Experience in Switzerland.',
  icons:{icon:'/icon.svg'},
  robots:{index:process.env.ALLOW_INDEXING==='true',follow:process.env.ALLOW_INDEXING==='true'},
  openGraph:{title:'Carlos Naya — Business challenges. Intelligent solutions.',description:'AI & Business Automation · Business Operations · Process Optimization. Switzerland.',type:'website',locale:'en_GB',...(origin?{images:[{url:'/og-image.png',width:1200,height:630}]}:{})},
  twitter:{card:'summary_large_image'},
  ...(origin?{metadataBase:new URL(origin)}:{}),
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><head><link rel="preload" href="/fonts/manrope-600.ttf" as="font" type="font/ttf" crossOrigin="anonymous"/></head><body><a className="skip-link" href="#main">Skip to content</a>{children}</body></html>}

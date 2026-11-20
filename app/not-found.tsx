import Link from 'next/link';
export default function NotFound(){return <main className="error-page wrap"><p className="eyebrow">Page not found</p><h1>Let’s get you<br/>back to the work.</h1><p>The page you’re looking for is not available.</p><Link className="button primary" href="/">Return to portfolio</Link></main>}

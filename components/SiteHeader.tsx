'use client';
import Link from 'next/link';
import {useRef} from 'react';

export default function SiteHeader() {
  const menu = useRef<HTMLDetailsElement>(null);
  const summary = useRef<HTMLElement>(null);
  const close = () => {if(menu.current) menu.current.open=false;};
  return <header className="site-header wrap">
    <Link className="wordmark" href="/" aria-label="Carlos Naya home"><span className="brand-symbol" aria-hidden="true"><i/><i/></span>Carlos Naya</Link>
    <nav className="desktop-nav" aria-label="Main navigation"><Link href="/#work">Work</Link><Link href="/#about">About</Link><Link href="/#experience">Experience</Link></nav>
    <a className="nav-contact" href="/#contact">Let’s talk</a>
    <details ref={menu} className="mobile-menu" onKeyDown={e=>{if(e.key==='Escape'){close();summary.current?.focus();}}}>
      <summary ref={summary}>Menu</summary>
      <nav aria-label="Mobile navigation"><a onClick={close} href="/#work">Work</a><a onClick={close} href="/#about">About</a><a onClick={close} href="/#experience">Experience</a><a onClick={close} href="/#contact">Let’s talk</a></nav>
    </details>
  </header>;
}

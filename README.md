# Carlos Naya — AI & Business Automation

A professional portfolio connecting Business Administration, Applied AI and Operations Experience. Built with Next.js, TypeScript and Tailwind CSS for a fully static deployment.

## Selected work

- **Intelligent Business Operations System — Inmotramit:** connected operational data, structured intake and document preparation. A controlled QA path produced a Google Doc/PDF pair with reconciled totals.
- **AI Content Intelligence Pipeline — HypeSplice:** n8n orchestration, a local media worker and processing validation. Five synthetic exports passed technical QA; their file hashes match the retained output records.
- **Intelligent Invoice Processing:** Make, Gmail, PDF.co and Google Sheets. Fifty expected fields matched across five synthetic invoices, including twenty numeric financial cells.

Each case study explains the business problem, implementation, contribution, evidence and verification scope. Results describe the documented tests, rather than commercial performance claims.

## Development

Use Node.js 22+ and pnpm:

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Production validation and static export:

```sh
pnpm typecheck
pnpm build
```

The export is written to `out/`. Vercel configuration is included. No runtime API key, database, paid backend or analytics service is required.

## Project structure

- `app/`: pages, case-study data, metadata and styles.
- `components/`: responsive navigation and footer.
- `public/`: publication-approved diagrams, synthetic execution evidence, CV and self-hosted fonts.

## Attribution

The invoice implementation adapts a CenteIA exercise; its case-study notes identify the portfolio adaptations. This repository contains the portfolio website, not the educational workflow source. Course blueprints, credentials, private execution records and client datasets are excluded.

The architecture diagrams are redrawn from implementation records and are labelled as diagrams. Original font licences are included in `public/fonts/`. No blanket licence is granted for third-party materials.

## Professional contact

[LinkedIn](https://www.linkedin.com/in/carlosnayadelatorre/) · [GitHub](https://github.com/carlosnayadelatorre) · [Email](mailto:carlosnayadelatorre@gmail.com)

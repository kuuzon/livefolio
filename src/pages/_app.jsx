// import '@/styles/globals.css';
import '@/styles/scss/main.scss';
import { ThemeProvider } from '../contexts/ThemeContext';
import Layout from '@/components/layout/Layout';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

/* CLASS CONVERSION
- 01_livefolio-base: Base begins with portfolio conversion to next incl. all necessary CSS/SCSS
- 02_livefolio_CSR: Discuss how Next can still use client-side SPA rendering with use of hooks
- 03_livefolio_refactoring: Refactoring CSR + layout structures to allow for better scale
- 04_livefolio_SSG: building of repolist & reporows which lists all public repos + refactoring
- 05_livefolio_SSR: building of repo details page + dynamic routing with Link (programmatic navigation to be shown in codefeed)
*/
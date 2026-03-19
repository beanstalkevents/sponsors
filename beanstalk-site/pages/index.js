import Head from 'next/head'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import About from '../components/About'
import Packages from '../components/Packages'
import PricingTimeline from '../components/PricingTimeline'
import Addons from '../components/Addons'
import Contact from '../components/Contact'
import { siteConfig } from '../data/config'

export default function Home() {
  const { title, tagline, clientName } = siteConfig

  const pageTitle = clientName
    ? `Beanstalk 2026 — Partnership Proposal for ${clientName}`
    : `Beanstalk 2026 — ${tagline}`

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Beanstalk 2026 Partnership Overview — the largest gathering of Disruptor Brand executives in North America." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content="Beanstalk 2026 · September 14–16 · Industry City, Brooklyn" />
        <meta name="robots" content="noindex" />
      </Head>

      <Nav />
      <Hero />
      <About />
      <Packages />
      <PricingTimeline />
      <Addons />
      <Contact />
    </>
  )
}

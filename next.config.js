const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants')

module.exports = (phase) => {
  // Setting Phase
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  const isProd = phase === PHASE_PRODUCTION_BUILD
  console.log(`isDev:${isDev}  isProd:${isProd}`)

  const reactStrictMode = true;

  const images = {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.githubusercontent.com',
      }
    ]
  }

  const env = {
    SERVER_NAME: (() => {
      if (isDev) return 'http://localhost:3000/'
      if (isProd) return 'https://livefolio.vercel.app/'
    })(),
    NEXT_PUBLIC_GITHUB_API_TOKEN: process.env.NEXT_PUBLIC_GITHUB_API_TOKEN
  }

  // Next.config is an object
  return {
    reactStrictMode,
    images,
    env,
  }
}
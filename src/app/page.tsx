import './App.scss'
import Main from '@/containers/Main'
import Head from 'next/head'
import "@fortawesome/fontawesome-free/css/All.css"
export default function Home() {
  return (
    <>
      <Head> <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.15.4/css/all.min.css"
      />
      </Head>
      <Main /></>
  )
}

// These styles apply to every route in the application
"use client";
import '../styles/global.css'
import Layout from '../Layouts/Layout'

export default function App({ Component, pageProps }) {
  return <Layout> <Component {...pageProps} /></Layout>
}
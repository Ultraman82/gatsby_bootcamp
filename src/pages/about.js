import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

export default function About() {
  return (
    <Layout>
      <Head title="About"></Head>
      <h1>About me</h1>
      <p>sdgsdgsdg</p>
      <Link to="/contact">Want to work with me?</Link>
    </Layout>
  )
}

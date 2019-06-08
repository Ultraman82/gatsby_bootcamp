import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello sdgs </h1>
      <p>Need a developer?</p>
      <Link to="/contact">Contact me.</Link>
    </Layout>
  )
}

export default IndexPage

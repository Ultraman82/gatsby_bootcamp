import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello</h1>
      <p>Need a developer?</p>
      <a href="/contact">Contact me,</a>
      <Link to="/contact">Contact me.</Link>
    </Layout>
  )
}

export default IndexPage

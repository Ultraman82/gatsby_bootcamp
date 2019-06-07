import React from "react"
import { Link } from "gatsby"
import Layout from "./components/layout"

export default function About() {
  return (
    <Layout>
      <h1>About me</h1>
      <p>sdgsdgsdg</p>
      <Link to="/contact">Want to work with me?</Link>
    </Layout>
  )
}

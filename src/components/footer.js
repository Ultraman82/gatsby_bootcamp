import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import footerSytles from "./footer.module.scss"
export default function footer() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer className={footerSytles.footer}>
      <p>Created by {data.site.siteMetadata.author}, © 2019</p>
    </footer>
  )
}

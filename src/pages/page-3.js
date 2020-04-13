import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import SEO from "../components/seo"

const ThirdPage = () => (
  <Layout>
    {/* <SEO title="Page two" /> */}
    <h1>The third page</h1>
    <p>Welcome to page 3</p>
    <Link to="/">Go back to the homepage</Link>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/fu2wTIZ1oDA"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>{" "}
  </Layout>
)

export default ThirdPage

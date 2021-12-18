import * as React from "react"
// import Jumbotron from 'react-bootstrap/jumbotron'
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../scss/styles.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <div className="wrapper container">
    {/* <Jumbotron fluid> */}
      <div className="sub_container">
        <p className="main_paragraph">Reggie Lussier is an actor, voice actor, and production assistant.</p>
      </div>
    {/* </Jumbotron> */}
  </div>
 </Layout>
);
export default IndexPage
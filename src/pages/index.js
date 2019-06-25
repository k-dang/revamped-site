import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Resume from "../components/resume"

import { graphql } from "gatsby"
import indexStyles from "./index.module.css"

const IndexPage = ({ data }) => {
  // console.log(
  //   data.allMarkdownRemark.edges.filter(
  //     ({ node }) => node.frontmatter.title !== "Technical Skills"
  //   )
  // )
  const rightFields = ["Technical Skills", "Education"]
  return (
    <Layout>
      <SEO title="Home" />
      <Resume>
        <div className={indexStyles.section}>
          <div className={indexStyles.leftSection}>
            {data.allMarkdownRemark.edges
              .filter(
                ({ node }) => !rightFields.includes(node.frontmatter.title)
              )
              .map(({ node }) => (
                <div className={indexStyles.innerleftSection} key={node.id}>
                  <h4 className={indexStyles.heading}>
                    {node.frontmatter.title}
                  </h4>
                  <div dangerouslySetInnerHTML={{ __html: node.html }}></div>
                </div>
              ))}
          </div>
          <div className={indexStyles.rightSection}>
            {data.allMarkdownRemark.edges
              .filter(({ node }) =>
                rightFields.includes(node.frontmatter.title)
              )
              .map(({ node }) => (
                <div key={node.id}>
                  <h4 className={indexStyles.heading}>
                    {node.frontmatter.title}
                  </h4>
                  <div dangerouslySetInnerHTML={{ __html: node.html }}></div>
                </div>
              ))}
          </div>
        </div>
      </Resume>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___position], order: ASC }) {
      edges {
        node {
          id
          frontmatter {
            title
            position
          }
          html
        }
      }
    }
  }
`

export default IndexPage

import * as React from "react"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => (
  <>
    <h1>
      Here <code>gatsby-source-notion-api</code> displays over a hundred pages
      coming from a Notion DB
    </h1>
    <ol>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <li>{node.frontmatter.title}</li>
      ))}
    </ol>
    <h2>Links:</h2>

    <ul>
      <li>
        <a href="https://github.com/orlowdev/gatsby-source-notion-api">
          gatsby-source-notion-api
        </a>
      </li>

      <li>
        <a href="https://www.notion.so/orlowdev/e3634c7610ce428b9f53a523e52c9019?v=6395f91d959f4f43a04943358f8c2f93">
          Source Notion DB
        </a>
      </li>
    </ul>
  </>
)

export default IndexPage

export const query = graphql`
  query IndexPage {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
  }
`

import React from 'react'
import { Text } from 'theme-ui'
import styled from '@emotion/styled'

import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import BlogEntry from '../components/blogEntry'

const Blog = ({
  data: {
    allMarkdownRemark: { edges: posts },
  },
}) => (
  <Layout>
    <Text
      sx={{
        fontSize: 4,
        fontWeight: 'bold',
        float: 'right',
        position: 'fixed',
        top: 10,
        right: 30,
        zIndex: 999,
      }}
      variant="caps"
    >
      <BlogLink to="/blog">HOME</BlogLink>
    </Text>
    <Container>
      {posts.map((post) => (
        <BlogEntry key={post.node.frontmatter.slug} post={post.node.frontmatter} />
      ))}
    </Container>
  </Layout>
)

export const pageQuery = graphql`
  {
    allMarkdownRemark(filter: { fileAbsolutePath: { glob: "**/blog/**" } }) {
      edges {
        node {
          frontmatter {
            title
            slug
            date(formatString: "YYYY-MM-DD")
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 700) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 680px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 80px;

  @media only screen and (max-width: 700px) {
    margin-left: 15px;
    margin-right: 15px;
  }
`

const BlogLink = styled(Link)`
  color: white;

  &:hover {
    color: #08fdd8;
  }
`

export default Blog

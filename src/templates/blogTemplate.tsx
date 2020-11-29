import React from 'react'
import { graphql } from 'gatsby'
import { Text } from 'theme-ui'
import styled from '@emotion/styled'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import { Link } from 'gatsby'
import SEO from '../components/seo'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt: description } = markdownRemark
  const { title } = frontmatter
  const image = frontmatter.thumbnail.childImageSharp.resize.src
  return (
    <>
      <SEO title={`${title} | Blog | Jakub Semik`} description={description} image={image} />
      <Layout>
        <Text
          sx={{
            fontSize: 4,
            fontWeight: 'bold',
            float: 'right',
            position: 'absolute',
            top: 10,
            right: 55,
            zIndex: 999,
          }}
          variant="caps"
        >
          <BlogLink to="/blog">HOME</BlogLink>
        </Text>
        <Container>
          <h1>{frontmatter.title}</h1>
          <Img fluid={frontmatter.thumbnail.childImageSharp.fluid} />
          <h5>Jakub Semik - {frontmatter.date}</h5>
          <BlogPostContent dangerouslySetInnerHTML={{ __html: html }} />
        </Container>
      </Layout>
    </>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 1500) {
              ...GatsbyImageSharpFluid
            }
            resize(width: 900, quality: 90) {
              src
            }
          }
        }
      }
    }
  }
`

const BlogPostContent = styled.div`
  width: 100%;
`

const BlogLink = styled(Link)`
  color: white;

  &:hover {
    color: #08fdd8;
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

  a {
    white-space: pre-wrap; /* CSS3 */
    word-wrap: break-word;
  }

  @media only screen and (max-width: 700px) {
    margin-left: 15px;
    margin-right: 15px;
  }
`

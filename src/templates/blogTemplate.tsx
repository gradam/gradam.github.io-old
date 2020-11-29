import React from 'react'
import { graphql } from 'gatsby'
import { Text } from 'theme-ui'
import styled from '@emotion/styled'

import Layout from '../components/layout'
import { Link } from 'gatsby'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
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
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <BlogPostContent dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
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
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

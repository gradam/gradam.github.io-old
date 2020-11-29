import { Link } from 'gatsby'
import React from 'react'
import Img, { FluidObject } from 'gatsby-image'
import styled from '@emotion/styled'

interface BlogEntry {
  post: {
    title: string
    slug: string
    date: string
    thumbnail: {
      childImageSharp: {
        fluid: FluidObject
      }
    }
  }
}

const BlogEntry: React.FC<BlogEntry> = ({ post: { title, slug, thumbnail, date } }) => (
  <Container>
    <Link to={`/blog/${slug}`}>
      <InnerContainer>
        <Title>{title}</Title>
        <DatePublished>{date}</DatePublished>
        <Img fluid={thumbnail.childImageSharp.fluid} />
      </InnerContainer>
    </Link>
  </Container>
)

const InnerContainer = styled.div`
  color: white;
  transition: color 0.3s;
  &:hover {
    color: #08fdd8;
  }
`

const Title = styled.h2`
  color: #e6e6e6;
  margin-bottom: 0;
`

const DatePublished = styled.span`
  color: #a0a0a0;
`

const Container = styled.div`
  margin-bottom: 40px;
`

export default BlogEntry

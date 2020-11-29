/** @jsx jsx */
import React from 'react'
import { Global } from '@emotion/core'
import { jsx } from 'theme-ui'

type LayoutProps = { children: React.ReactNode; className?: string }

const Layout = ({ children, className = `` }: LayoutProps) => (
  <>
    <Global
      styles={(theme) => ({
        '*': {
          boxSizing: `inherit`,
          '&:before': {
            boxSizing: `inherit`,
          },
          '&:after': {
            boxSizing: `inherit`,
          },
        },
        html: {
          fontSize: `18px`,
          WebkitTextSizeAdjust: `100%`,
        },
        img: {
          borderStyle: `none`,
        },
        pre: {
          fontFamily: `monospace`,
          fontSize: `1em`,
        },
        '[hidden]': {
          display: `none`,
        },
        '::selection': {
          backgroundColor: theme.colors.primary,
          color: theme.colors.background,
        },
        '#scrollBar': {
          '& > div': {
            '::-webkit-scrollbar': {
              width: '5px',
            },
            '::-webkit-scrollbar-track': {
              opacity: 1,
              background: '#00000000',
            },
            '::-webkit-scrollbar-thumb': {
              backgroundColor: '#08fdd8',
            },
          },
        },
      })}
    />
    <main className={`${className}`} id="scrollBar">
      {children}
    </main>
  </>
)

export default Layout

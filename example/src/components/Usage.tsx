import React from 'react'
import { cx, css } from 'emotion'
import { MyTheme, useTronTheme } from 'tron-ui'

interface UsageProps {
  chldren: React.ReactNode
}

const Usage: React.FC = ({ children }) => {
  const theme: MyTheme = useTronTheme()

  const brThemeStyle = css({
    borderColor: theme.colors.primary[1000]
  })

  return <div className={cx(`${brThemeStyle} ba pa2`)}>{children}</div>
}

export default Usage

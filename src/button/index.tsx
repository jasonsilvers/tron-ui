import React from 'react'
import { useButtonStyle } from './style'
// import { cx, css } from 'emotion'
// import { useTronTheme } from 'tron-ui'

// Type - Base | Raised | Stroked | Solid
// color - Primary | Secondary | Neutral
// Options - ...rest
// aria-label
// onCLick

interface ButtonProps {
  type?: 'basic' | 'raised' | 'stroked' | 'solid'
  color?: 'primary' | 'secondary' | 'neutral' | 'basic'
  ariaLabel?: string
  isDisabled?: boolean
  children: React.ReactNode
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({
  type = 'basic',
  color = 'basic',
  ariaLabel,
  isDisabled,
  onClick,
  children,
  ...rest
}) => {
  console.log('in the button', color)
  const buttonClass = useButtonStyle(color, type, isDisabled)

  return (
    <button
      type='button'
      onClick={onClick}
      className={buttonClass}
      disabled={isDisabled}
      aria-label={ariaLabel}
      {...rest}
    >
      {children}
    </button>
  )
}

export { Button, ButtonProps }

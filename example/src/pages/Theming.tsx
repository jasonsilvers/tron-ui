import React from 'react'
import { useTronTheme, MyTheme } from 'tron-ui'

interface Props {}

interface CpProps {
  title: string
  copy: string
  colors: string[]
}

const ColorPalette: React.FC<CpProps> = ({ title, copy, colors }) => {
  return (
    <div>
      <h3 className='f4 fw4 lh-copy'>{title}</h3>
      <p className='f5 fw3 lh-copy'>{copy}</p>
      <div className='flex flex-wrap'>
        {colors.map((color, index) => {
          return (
            <div
              key={index}
              className='pa4'
              style={{ backgroundColor: color }}
            ></div>
          )
        })}
      </div>
    </div>
  )
}

const Theming: React.FC<Props> = () => {
  const theme: MyTheme = useTronTheme()

  const primaryColors = Object.keys(theme.colors.primary).map(
    (key) => theme.colors.primary[key]
  )
  const secondaryColors = Object.keys(theme.colors.secondary).map(
    (key) => theme.colors.secondary[key]
  )
  const neutralColors = Object.keys(theme.colors.neutral).map(
    (key) => theme.colors.neutral[key]
  )

  const supportKeys = ['dark', 'main', 'light']

  const primaryCopy =
    'These are the primary splashes of color that determine the overall look of the app. They are used for actions, links, icons, borders and other items that you want to emphasize'
  const secondaryCopy =
    'These colors should be used sparingly in your UI. Use them when you want an element to stand out'
  const neutralCopy =
    'These colors will be used most often and make up the majority of your UI. Use them for text, backgrounds and borders'

  return (
    <>
      <h1 className='f3 lh-copy'>Theme</h1>
      <p className='f4 fw3 lh-copy'>
        Theming with Tron-UI is based on{' '}
        <a href='https://emotion.sh/docs/theming' className='link fw4'>
          Emotion
        </a>
      </p>
      <h2 className='f3 fw4 lh-copy'>Colors</h2>
      <p className='f4 fw3 lh-copy'>
        The theme is based on the color system from Refactoring-UI (primary,
        secondary and neutral), with support colors (info, warning, error,
        success) inspired from Google Material UI.
      </p>
      <ColorPalette title='Primary' copy={primaryCopy} colors={primaryColors} />
      <ColorPalette
        title='Neutral'
        copy={neutralCopy}
        colors={neutralColors}
      />
      <ColorPalette
        title='Secondary'
        copy={secondaryCopy}
        colors={secondaryColors}
      />

      <h3 className='f4 fw4 lh-copy'>Support</h3>
      <p className='f5 fw3 lh-copy'>
        Support colors are used for reinforcing states within your app
      </p>
      <div className='flex flex-wrap'>
        <div className='w-20 mr2'>
          <h4 className='f6 fw5 lh-copy mt0'>Success</h4>
          <div className='flex flex-column'>
            {supportKeys.map((key) => {
              return (
                <div
                  key={key}
                  className='pa3'
                  style={{
                    backgroundColor: theme.colors.support.success[key]
                  }}
                ></div>
              )
            })}
          </div>
        </div>
        <div className='w-20 mr2'>
          <h4 className='f6 fw5 lh-copy mt0'>Info</h4>
          <div className='flex flex-column'>
            {supportKeys.map((key) => {
              return (
                <div
                  key={key}
                  className='pa3'
                  style={{
                    backgroundColor: theme.colors.support.info[key]
                  }}
                ></div>
              )
            })}
          </div>
        </div>
        <div className='w-20 mr2'>
          <h4 className='f6 fw5 lh-copy mt0'>Warning</h4>
          <div className='flex flex-column'>
            {supportKeys.map((key) => {
              return (
                <div
                  key={key}
                  className='pa3'
                  style={{
                    backgroundColor: theme.colors.support.warning[key]
                  }}
                ></div>
              )
            })}
          </div>
        </div>
        <div className='w-20 mr2'>
          <h4 className='f6 fw5 lh-copy mt0'>Error</h4>
          <div className='flex flex-column'>
            {supportKeys.map((key) => {
              return (
                <div
                  key={key}
                  className='pa3'
                  style={{
                    backgroundColor: theme.colors.support.error[key]
                  }}
                ></div>
              )
            })}
          </div>
        </div>
      </div>
      <p className='f6 fw4'>*note - Support Info color is computed from Primary color palette</p>
    </>
  )
}

export default Theming

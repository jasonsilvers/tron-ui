import React from 'react'
import { FiInfo, FiCheckCircle, FiAlertCircle, FiXCircle } from 'react-icons/fi'
import { useTheme } from 'emotion-theming'
import { cx, css } from 'emotion'

export interface AlertProps {
  type?: 'success' | 'info' | 'warning' | 'error'
  showIcon?: boolean
  title: string
  subtitle?: string
}

const iconMap = {
  info: <FiInfo size='40px' />,
  success: <FiCheckCircle size='40px' />,
  warning: <FiAlertCircle size='40px' />,
  error: <FiXCircle size='40px' />
}

const Alert: React.FC<AlertProps> = ({
  type = 'info',
  title,
  subtitle,
  showIcon
}) => {
  const { colors } = useTheme()

  console.log(type)

  const styles = css({
    backgroundColor: colors.support[type].light,
    border: '1px solid',
    borderColor: colors.support[type].dark
  })

  return (
    <section className='ph1 ph2-ns pv1'>
      <article className={cx(`${styles} mw7 center br2`)}>
        <div className='cf ph2-ns flex items-center'>
          {showIcon ? (
            <div className='fl w-20 pa2'>
              <div className='flex justify-end'>{iconMap[type]}</div>
            </div>
          ) : null}
          <div className='fl w-80 pa2'>
            <div>
              <h2 className='fw4 mt0 mb1'>{title}</h2>
              {subtitle ? (
                <p className='measure lh-copy mv0'>{subtitle}</p>
              ) : null}
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Alert

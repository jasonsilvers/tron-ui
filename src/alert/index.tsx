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
  info: <FiInfo size='25px' />,
  success: <FiCheckCircle size='25px' />,
  warning: <FiAlertCircle size='25px' />,
  error: <FiXCircle size='25px' />
}

const Alert: React.FC<AlertProps> = ({
  type = 'info',
  title,
  subtitle,
  showIcon
}) => {
  const { colors } = useTheme()

  const styles = css({
    backgroundColor: colors.support[type].light,
    border: '1px solid',
    borderLeft: '5px solid',
    borderColor: colors.support[type].dark
  })

  return (
    <section className='ph1 ph2-ns pv1'>
      <article className={cx(`${styles} mw7 center br2 overflow-hidden`)}>
        <div className='cf ph2-ns flex items-center'>
          {showIcon ? (
            <div className='fl w-10 pa2'>
              <div className='flex justify-end'>{iconMap[type]}</div>
            </div>
          ) : null}
          <div className='fl w-90 pa2'>
            <div>
              <h2 className='fw4 f4 mt0 mb1'>{title}</h2>
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

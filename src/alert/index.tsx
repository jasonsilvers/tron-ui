import React, { useMemo } from 'react'
import { FiInfo, FiCheckCircle, FiAlertCircle, FiXCircle } from 'react-icons/fi'
import { useTheme } from 'emotion-theming'
import { cx, css } from 'emotion'
import { Alert as ReachAlert } from '@reach/alert'

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

  // Should this be memoized?
  // https://overreacted.io/writing-resilient-components/
  // I am thinking not because type is not being used to setState so there is no
  // second rerender
  const styles = css({
    backgroundColor: colors.support[type].light,
    border: '1px solid',
    borderLeft: '5px solid',
    borderColor: colors.support[type].dark
  })

  return (
    <div>
      <ReachAlert className='ph1 ph2-ns pv1'>
        <article className={cx(`${styles} mw7 center br2 overflow-hidden`)}>
          <div className='cf ph2-ns flex items-center'>
            {showIcon ? (
              <div className='fl w-10 pa2'>
                <div className='flex justify-end'>{iconMap[type]}</div>
              </div>
            ) : null}
            <div className='fl w-90 pa2 items-center'>
              <div>
                <h2 className='fw4 f4 mt0 mb0'>{title}</h2>
              </div>
              <div>
                {subtitle ? (
                  <p className='measure lh-copy mv0'>{subtitle}</p>
                ) : null}
              </div>
            </div>
          </div>
        </article>
      </ReachAlert>
    </div>
  )
}

export default Alert

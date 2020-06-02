import React from 'react'
import { Alert } from 'tron-ui'

interface Props {}

const AlertPage: React.FC<Props> = () => {
  return (
    <div>
      <Alert
        type='success'
        title='Success'
        subtitle='This is a subtitle'
        showIcon
      />
      <Alert
        type='error'
        title='Error'
        subtitle='This is a subtitle'
        showIcon
      />
      <Alert type='info' title='Info' subtitle='This is a subtitle' showIcon />
      <Alert
        type='warning'
        title='Warning'
        subtitle='This is a subtitle'
        showIcon
      />
      <Alert type='success' title='Success Message' showIcon />
      <Alert type='error' title='Error Message' showIcon />
      <Alert type='info' title='Info Message' showIcon />
      <Alert type='warning' title='Warning Message' showIcon />
    </div>
  )
}

export default AlertPage

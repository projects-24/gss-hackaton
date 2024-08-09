import TextUi from '@/ui/Text'
import React from 'react'

export default function QWrapper({q, children}) {
  return (
    <div className="padding-20 round-edge border margin-bottom-20">
      <div className="margin-botto-40">
        <TextUi text={q} size='big' color='dark500' />
      </div>
      {children}
    </div>

  )
}

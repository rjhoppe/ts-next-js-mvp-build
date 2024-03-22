'use client';

import React from 'react'
import EditTempMsgFetch from '@/components/EditTempMsgFetch'
import { useSearchParams } from 'next/navigation'

const TempEditPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams?.get('id')

  if (id) {
    return (
      <>
        <EditTempMsgFetch id={id}/>
      </>
    )
  }
}

export default TempEditPage
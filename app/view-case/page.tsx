'use client';

import React from 'react'
import { useSearchParams } from 'next/navigation'
import ViewCaseFetch from '@/components/ViewCaseFetch';

const CaseViewPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams?.get('id')

  if (id) {
    return (
      <>
        <ViewCaseFetch id={id}/>
      </>
    )
  }
}

export default CaseViewPage
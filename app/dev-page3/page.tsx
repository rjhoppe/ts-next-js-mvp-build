import Link from 'next/link'
import React from 'react'

const linkVal = 'Click here'

const DevPage3 = () => {
  return (
    <div>
      <Link
        href={`/view-case?id=88208806`}
        className='text-blue-600'
      >
        {linkVal}
      </Link>
    </div>
  )
}

export default DevPage3
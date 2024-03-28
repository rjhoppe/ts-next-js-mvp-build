import { DataTableTypes } from '@/types/collection';
import React from 'react'

type ViewCaseProps = {
  rows: DataTableTypes[];
}

const ViewFullCase = ({ rows }: ViewCaseProps) => {
  return (
    <div>
      <p>{rows[0].assignee}</p>
    </div>
  )
}

export default ViewFullCase
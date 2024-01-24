import React from 'react'

const DataTableComponent = React.lazy(() => import('../../../_moduleTest/components/datatable/dataTableComponent'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/datatable/example', name: 'Datatable Example', element: DataTableComponent }
]

export default routes

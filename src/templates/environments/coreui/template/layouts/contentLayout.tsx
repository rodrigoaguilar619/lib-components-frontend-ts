import React, { Suspense } from 'react'
import { CContainer, CSpinner } from '@coreui/react'

import AppRoutesLayout from '../../../../../components/_layout/appRoutesLayout'

const ContentLayout: React.FC<MainLayoutPropsI> = (props) => {
  return (
    <CContainer lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        <AppRoutesLayout {...props.routesSection} />
      </Suspense>
    </CContainer>
  )
}

export default React.memo(ContentLayout)

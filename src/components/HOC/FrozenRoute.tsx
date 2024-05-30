'use client'

import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useContext, useRef } from 'react'
import React, { PropsWithChildren } from 'react';

const FrozenRoute: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const context = useContext(LayoutRouterContext)
  const frozen = useRef(context).current

  return <LayoutRouterContext.Provider value={frozen}>{children}</LayoutRouterContext.Provider>
}

export default FrozenRoute
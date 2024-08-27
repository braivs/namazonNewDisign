import React, {ReactNode} from "react"

export type GirlData = {
  id: string
  img: string
  name: string
  title: string
  years: string
  description: () => React.ReactNode
  isInProgress?: boolean
}

export type WithChildren = {
  children: ReactNode
}

export type Category = 'ALL' | 'SUBMISSION WRESTLING' | 'MMA' | 'BOXING' | 'MIXED WRESTLING'
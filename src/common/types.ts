import React, {ReactNode} from "react"

type Desk = {
  id: number
}

type NC = {
  id: number
}

export type GirlData = {
  id: string
  img: string
  name: string
  title: string
  years: string
  description: () => React.ReactNode
}

export type WithChildren = {
  children: ReactNode
}

export type Category = 'SUBMISSION WRESTLING' | 'MMA' | 'BOXING' | 'MIXED WRESTLING'
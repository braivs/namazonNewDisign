import React from "react"

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
  description: () => React.ReactNode
}


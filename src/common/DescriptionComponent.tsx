import React, {FC} from 'react'
import {VIDEO_MAP} from '@/common/constants/VIDEO_MAP'
import {GIRLS_MAP} from '@/common/constants/GIRLS_MAP'
import {COMPETITION_MAP} from '@/common/constants/COMPETITION_MAP'
import {VideoDurationLine} from '@/data/video-description/VideoDurationLine'
import {VideoSimpleDesc} from '@/data/video-description/VideoSimpleDesc'

interface DescriptionComponentProps {
  id: number | string
  version?: 'video' | 'girls' | 'competition'
  duration?: number | string
}

const DescriptionComponent: FC<DescriptionComponentProps> = ({id, version, duration}) => {
  if (version === 'girls') {
    const Component = GIRLS_MAP[id]
    return Component ? <Component /> : null
  }

  if (version === 'competition') {
    const Component = COMPETITION_MAP[String(id)]
    return Component ? <Component /> : null
  }

  const hasDuration =
    duration != null && (typeof duration !== 'string' || duration.trim() !== '')
  const durationLine = hasDuration ? <VideoDurationLine duration={duration} /> : null

  const MappedDesc = VIDEO_MAP[id]
  if (MappedDesc) {
    return (
      <>
        <MappedDesc />
        {durationLine}
      </>
    )
  }

  if (typeof id === 'number') {
    return (
      <>
        <VideoSimpleDesc id={id} />
        {durationLine}
      </>
    )
  }

  const numericId = Number(id)
  if (!Number.isNaN(numericId)) {
    return (
      <>
        <VideoSimpleDesc id={numericId} />
        {durationLine}
      </>
    )
  }

  return null
}

export default DescriptionComponent

// components/DescriptionComponent.tsx
import React, { FC } from 'react';
import {VIDEO_MAP} from "@/common/constants/VIDEO_MAP"
import {GIRLS_MAP} from "@/common/constants/GIRLS_MAP"
import {COMPETITION_MAP} from "@/common/constants/COMPETITION_MAP"

interface DescriptionComponentProps {
  id: number | string;
  version?: 'video' | 'girls' | 'competition'
}

const DescriptionComponent: FC<DescriptionComponentProps> = ({ id, version }) => {
  const Component =
    version === 'girls'
      ? GIRLS_MAP[id]
      : version === 'competition'
        ? COMPETITION_MAP[String(id)]
        : VIDEO_MAP[id]
  return Component ? <Component /> : null
};

export default DescriptionComponent;

// components/DescriptionComponent.tsx
import React, { FC } from 'react';
import {VIDEO_MAP} from "@/common/constants/VIDEO_MAP"

interface DescriptionComponentProps {
  id: number;
}

const DescriptionComponent: FC<DescriptionComponentProps> = ({ id }) => {
  const Component = VIDEO_MAP[id];
  return Component ? <Component /> : null;
};

export default DescriptionComponent;

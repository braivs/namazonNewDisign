// components/DescriptionComponent.tsx
import React, { FC } from 'react';
import {descriptionComponents} from "@/common/constants/DescriptionComponents"

interface DescriptionComponentProps {
  id: number;
}

const DescriptionComponent: FC<DescriptionComponentProps> = ({ id }) => {
  const Component = descriptionComponents[id];
  return Component ? <Component /> : null;
};

export default DescriptionComponent;

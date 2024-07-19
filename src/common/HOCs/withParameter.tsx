import { FC } from 'react';

interface WithParameterProps {
  id: number;
}

const withParameter = (Component: FC<WithParameterProps>, id: number): FC => {
  const WrappedComponent: FC = (props) => <Component {...props} id={id} />;
  WrappedComponent.displayName = `WithParameter(${Component.displayName || Component.name || 'Component'})`;
  return WrappedComponent;
};

export default withParameter;
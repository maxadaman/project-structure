import React from 'react';

type IOfficeContextProps = {
  address: string;
};

const OfficeContext = React.createContext<Partial<IOfficeContextProps>>({});

export const withOfficeContext = <P, M>(Component: React.ComponentType<P>): React.ReactNode =>
  class ComponentWithOfficeContext extends React.Component<P & IOfficeContextProps> {
    render() {
      return (
        <OfficeContext.Consumer>
          {({ address }) => <Component {...(this.props as P)} address={address} />}
        </OfficeContext.Consumer>
      );
    }
  };

export default OfficeContext;

import React from 'react';

type IAvatarContextProps = {
  avatarUrl: string;
  getAvatar: () => void;
}

export const AvatarContext = React.createContext<Partial<IAvatarContextProps>>({});

export const withAvatarContext = <P, >(Component: React.ComponentType<P>): React.ReactNode =>
  class ComponentWithAvatarContext extends React.Component<P & IAvatarContextProps> {
    render () {
      return (
        <AvatarContext.Consumer>
          {({ avatarUrl, getAvatar }) => (
            <Component {...this.props as P} avatarUrl={avatarUrl} getAvatar={getAvatar} />
          )}
        </AvatarContext.Consumer>
      );
    }
  };

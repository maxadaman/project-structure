import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { IRoute } from 'types/general';

interface IRouterWrapperProps {
  routes: Array<IRoute>
}

const Router: React.FC<IRouterWrapperProps> = ({ routes }) => (
  <Switch>
    {routes.map((el, idx) => {
      const { component: Component, layout: Layout, ...rest } = el;
      return (
        <Route
          {...rest}
          key={idx}
          render={props => (
            <>
              {Layout ? <Layout {...props}>
                <Component {...props} />
              </Layout>
                : <Component {...props} />}
            </>
          )}
        />
      );
    })}
    <Redirect to={'/'} />
  </Switch>
);

export default Router;

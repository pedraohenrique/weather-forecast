import * as React from 'react';

import { Footer, Header } from '../components';

interface LayoutProps {
  fullWidth?: boolean;
  grid?: boolean;
  transparentHeader?: boolean;
}

const Layout: React.FC<React.PropsWithChildren<LayoutProps>> = ({
  children,
}) => {
  return (
    <>
      <Header />
      <div style={{ minHeight: `calc(100vh - 100px)` }}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;

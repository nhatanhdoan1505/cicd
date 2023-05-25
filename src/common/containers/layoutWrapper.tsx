import Layout from 'common/components/layout/admin';
import React from 'react';

const LayoutWrapper = ({ children }: { children: any }) => {
  if (children.type.layout === 'admin') {
    return <Layout>{children}</Layout>;
  }

  if (children.type.layout === 'public') {
    return <Layout isAuth={false}>{children}</Layout>;
  }

  return <>{children}</>;
};

export default LayoutWrapper;

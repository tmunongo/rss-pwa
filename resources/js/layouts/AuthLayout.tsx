import { Link as TanStackLink, Outlet, redirect } from '@tanstack/react-router';
import React from 'react';

function AuthLayout() {
  return (
    <div>
      <div>Bro, please login</div>
      <hr />
      <Outlet />
    </div>
  );
}

export default AuthLayout;

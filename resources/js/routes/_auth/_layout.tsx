import { createRootRoute ,Link as TanStackLink, Outlet, redirect } from '@tanstack/react-router';
import React from 'react';


export const Route = createRootRoute({
    component: RootComponent,
})


function RootComponent() {
  return (
    <div>
      <div>Bro, please login</div>
      <hr />
      <Outlet />
    </div>
  );
}


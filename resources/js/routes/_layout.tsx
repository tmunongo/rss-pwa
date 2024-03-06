import React from 'react';
import { createFileRoute, Link as TanStackLink, Outlet, redirect } from '@tanstack/react-router';
import { Icon } from '@chakra-ui/react';
import { MdOutlineList, MdOutlineInfo } from 'react-icons/md';

export const Route = createFileRoute('/_layout')({
  component: MainLayout
})

function MainLayout() {
  return (
    <div>
      <div>
        <TanStackLink to="/" as={TanStackLink} className="[&.active]:font-bold">
          <Icon as={MdOutlineList} boxSize={6} /> Home
        </TanStackLink>
        <TanStackLink to="/about" as={TanStackLink} className="[&.active]:font-bold">
          <Icon as={MdOutlineInfo} boxSize={6} /> About
        </TanStackLink>
      </div>
      <hr />
      <Outlet />
    </div>
  );
}

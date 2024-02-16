import { createRootRoute, Link as TanStackLink, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Link as ChakraLink } from '@chakra-ui/react';
import { SunIcon, Icon } from '@chakra-ui/icons';
import { MdOutlineList } from 'react-icons/md';

export const Route = createRootRoute({
    component: () => (
        <>
            <div>
                <ChakraLink to="/" as={TanStackLink} className="[&.active]:font-bold">
                    <Icon as={MdOutlineList} boxSize={6} />  Home
                </ChakraLink>{' '}
                <ChakraLink to="/about" as={TanStackLink} className="[&.active]:font-bold">
                    About <SunIcon boxSize={6} />
                </ChakraLink>
            </div>
            <hr />
            <Outlet />
            <TanStackRouterDevtools />
        </>
    )
})

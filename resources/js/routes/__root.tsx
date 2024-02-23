import { createRootRoute, Link as TanStackLink, Outlet, redirect } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Link as ChakraLink } from '@chakra-ui/react';
import { SunIcon, Icon } from '@chakra-ui/icons';
import { MdOutlineList } from 'react-icons/md';
import { Login } from './auth.login.tsx';
import { useAtom } from 'jotai';
import { isLoggedInAtom } from '../state/authAtoms.ts';

export const Route = createRootRoute({
//  beforeLoad: async ({ location }) => {
//    const [ isLoggedIn ] = useAtom(isLoggedInAtom);

//    if (checkLoggedIn()) {
//      throw redirect({
//        to: 'auth/login',
//        search: {
          // Use the current location to power a redirect after login
          // (Do not use `router.state.resolvedLocation` as it can
          // potentially lag behind the actual current location)
//          redirect: location.href,
//        },
//      })
//    }
//  },
    component: RootComponent,
})

function RootComponent() {
    const [isLoggedIn] = useAtom(isLoggedInAtom);

//        if (!isLoggedIn) {
//            return redirect({
//                to: '/auth/login',
//                search: {
//                    redirect: location.href,
//                },
//            });
//        }

        return (
            <>
                {isLoggedIn ? (
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
                </>
                ) : (
                <>
                    <div>
                        Bro login
                    </div>
                    <hr />
                    <Outlet />
                </>
                )}
                <TanStackRouterDevtools />
            </>
        )
}

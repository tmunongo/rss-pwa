import { createRootRoute, Link as TanStackLink, Outlet, redirect } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { useAtom } from 'jotai';
import { isLoggedInAtom } from '../state/authAtoms';
import MainLayout from '../layouts/MainLayout';
import Login from '../components/Login';

export const Route = createRootRoute({
    component: () => {
    const [isAuthenticated] = useAtom(isLoggedInAtom);

    if (!isAuthenticated) {
      return <Login />
    }

    return RootComponent();
    },
})

function RootComponent() {
    return (
        <>
            <Outlet />
            <TanStackRouterDevtools />
        </>
        )
}

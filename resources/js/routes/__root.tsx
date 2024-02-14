import { createRootRoute, Link, Outlet } from '@tanstack/router'
import { TanStackRouterDevTools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
    component: () => (
        <>
            <div>
                <Link to="/" className="[&.active]:font-bold">
                    Home
                </Link>{' '}
                <Link to="/about" className="[&.active]:font-bold">
                    About
                </Link>
            </div>
            <hr />
            <Outlet />
            <TanStackRouterDevTools />
        </>
    )
})

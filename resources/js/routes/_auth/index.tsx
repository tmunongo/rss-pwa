import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_auth/')({
    component: LoginComponent,
});

function LoginComponent() {
    return <div>login</div>;
}

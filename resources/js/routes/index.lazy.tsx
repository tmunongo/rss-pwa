import { createFileRoute, redirect } from '@tanstack/react-router';
import { useAuth } from '../hooks/authHooks';
import { isLoggedInAtom } from '../state/authAtoms';
import { useAtom } from 'jotai';

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div>
      <h3>Welcome Home!</h3>
    </div>
  )
}

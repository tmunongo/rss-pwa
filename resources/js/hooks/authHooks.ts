import { useAtom } from 'jotai';
import { useLoginMutation } from '../services/AuthService';
import { isLoggedInAtom } from '../state/authAtoms';

export function useAuth() {
    const [ isLoggedIn, setIsLoggedIn ] = useAtom(isLoggedInAtom);

    const loginMutation = useLoginMutation();

    const login = async (credentials: any) => {
        try {
            const response = await loginMutation.mutateAsync(credentials);

            setIsLoggedIn(true);
        } catch (error) {
            throw error;
        }
    }


    return {
        isLoggedIn,
        login
    }
}


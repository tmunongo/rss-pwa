import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login } from './api';

export function useLoginMutation() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: login,
        onSuccess: () => {
            queryClient.invalidateQueries(['login']);
        },
    })
}

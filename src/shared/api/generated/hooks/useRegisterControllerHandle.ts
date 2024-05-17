import client from '../../client';
import { useMutation } from '@tanstack/react-query';
import type {
  RegisterControllerHandleMutationRequest,
  RegisterControllerHandleMutationResponse,
} from '../models/RegisterControllerHandle';
import type { UseMutationOptions } from '@tanstack/react-query';

type RegisterControllerHandleClient = typeof client<
  RegisterControllerHandleMutationResponse,
  never,
  RegisterControllerHandleMutationRequest
>;
type RegisterControllerHandle = {
  data: RegisterControllerHandleMutationResponse;
  error: never;
  request: RegisterControllerHandleMutationRequest;
  pathParams: never;
  queryParams: never;
  headerParams: never;
  response: RegisterControllerHandleMutationResponse;
  client: {
    parameters: Partial<Parameters<RegisterControllerHandleClient>[0]>;
    return: Awaited<ReturnType<RegisterControllerHandleClient>>;
  };
};
/**
 * @link /api/v1/participants
 */
export function useRegisterControllerHandle(
  options: {
    mutation?: UseMutationOptions<
      RegisterControllerHandle['response'],
      RegisterControllerHandle['error'],
      RegisterControllerHandle['request']
    >;
    client?: RegisterControllerHandle['client']['parameters'];
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
  return useMutation({
    mutationFn: async (data) => {
      const res = await client<
        RegisterControllerHandle['data'],
        RegisterControllerHandle['error'],
        RegisterControllerHandle['request']
      >({
        method: 'post',
        url: `/api/v1/participants`,
        data,
        ...clientOptions,
      });
      return res.data;
    },
    ...mutationOptions,
  });
}

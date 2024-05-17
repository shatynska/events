import {
  registerControllerHandleMutationRequestSchema,
  registerControllerHandleMutationResponseSchema,
} from './registerControllerHandleSchema';

export const operations = {
  RegisterController_handle: {
    request: registerControllerHandleMutationRequestSchema,
    parameters: {
      path: undefined,
      query: undefined,
      header: undefined,
    },
    responses: {
      201: registerControllerHandleMutationResponseSchema,
    },
  },
} as const;
export const paths = {
  '/api/v1/participants': {
    post: operations['RegisterController_handle'],
  },
} as const;

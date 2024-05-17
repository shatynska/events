import { z } from 'zod';
import { registerParticipantDtoSchema } from './registerParticipantDtoSchema';

export const registerControllerHandle201Schema = z.any();

export const registerControllerHandleMutationRequestSchema = z.lazy(() => registerParticipantDtoSchema);

export const registerControllerHandleMutationResponseSchema = z.any();

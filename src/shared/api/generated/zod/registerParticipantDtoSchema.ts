import { z } from 'zod';

export const registerParticipantDtoSchema = z.object({
  fullName: z.string().min(3).max(100),
  email: z.string().email(),
  birthDate: z.string().datetime(),
  referralId: z.string(),
  eventId: z.string().min(3).max(100),
});

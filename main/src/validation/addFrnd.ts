import {z} from 'zod';
export const addFrndSchema = z.object({
    email: z.string().email(),
})
import { z } from 'zod'
//import some values from zod database

const BasicImageSchema = z.object({
    page: z.number(),
    per_page: z.number(),
    prev_page: z.string().optional(),
    next_page: z.string().optional(),
    total_results: z.number(),
})

const PhotoSchema = z.object({
    id: z.number(),
    width: z.number(),
    height: z.number(),
    url: z.string(),
    src: z.object({
        large: z.string(),
    }),
    alt: z.string(),
    blurredDataUrl: z.string().opional(),
})

export const ImageSchemaWithPhotos = BasicImageSchema.extend({
    photos: z.array(PhotoSchema)
})

export type Photo = z.infer<typeof PhotoSchema>

export type ImagesResult = z.infer<typeof ImageSchemaWithPhotos>
import { parseCorsOrigins } from 'medusa-core-utils'
import * as cors from 'cors'

export const config: MiddlewaresConfig = {
    routes: [
        {
            matcher: /^\/store(\/.*)?$/,
            middlewares: [
                cors.default({ credentials: true, origin: parseCorsOrigins(process.env.STORE_CORS ?? '') }),
            ],
        },
    ],
}
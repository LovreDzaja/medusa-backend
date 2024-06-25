import { parseCorsOrigins } from 'medusa-core-utils'
import type { MiddlewaresConfig } from "@medusajs/medusa"
import * as cors from 'cors'

export const config: MiddlewaresConfig = {
    routes: [
        {
            matcher: /^\/store(\/.*)?$/,
            middlewares: [
                cors.default({ credentials: true, origin: parseCorsOrigins('http://192.168.8.195:3000/') }),
            ],
        },
    ],
}
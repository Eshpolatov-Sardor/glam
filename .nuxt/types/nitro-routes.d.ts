// Generated by nitro
import type { Serialize, Simplify } from "nitropack/types";
declare module "nitropack/types" {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T
  interface InternalApi {
    '/api/api': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/api').default>>>>
    }
    '/api/pageview': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/pageview').default>>>>
    }
    '/__nuxt_error': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/nuxt@3.15.1_@parcel+watcher@2.5.0_@types+node@22.10.5_db0@0.2.1_eslint@9.17.0_jiti@2.4.2__ior_m2dghto3gxql4daay5coa5iy5u/node_modules/nuxt/dist/core/runtime/nitro/renderer').default>>>>
    }
    '/_ipx/**': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/@nuxt+image@1.9.0_db0@0.2.1_ioredis@5.4.2_magicast@0.3.5_rollup@4.30.0/node_modules/@nuxt/image/dist/runtime/ipx').default>>>>
    }
  }
}
export {}
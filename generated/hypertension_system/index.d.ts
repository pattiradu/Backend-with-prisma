
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model tbl_roles
 * 
 */
export type tbl_roles = $Result.DefaultSelection<Prisma.$tbl_rolesPayload>
/**
 * Model tbl_users
 * 
 */
export type tbl_users = $Result.DefaultSelection<Prisma.$tbl_usersPayload>
/**
 * Model tbl_user
 * 
 */
export type tbl_user = $Result.DefaultSelection<Prisma.$tbl_userPayload>
/**
 * Model tbl_doctors
 * 
 */
export type tbl_doctors = $Result.DefaultSelection<Prisma.$tbl_doctorsPayload>
/**
 * Model tbl_appointments
 * 
 */
export type tbl_appointments = $Result.DefaultSelection<Prisma.$tbl_appointmentsPayload>
/**
 * Model tbl_solved_appointments
 * 
 */
export type tbl_solved_appointments = $Result.DefaultSelection<Prisma.$tbl_solved_appointmentsPayload>
/**
 * Model tbl_heart_data
 * 
 */
export type tbl_heart_data = $Result.DefaultSelection<Prisma.$tbl_heart_dataPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tbl_roles
 * const tbl_roles = await prisma.tbl_roles.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Tbl_roles
   * const tbl_roles = await prisma.tbl_roles.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.tbl_roles`: Exposes CRUD operations for the **tbl_roles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_roles
    * const tbl_roles = await prisma.tbl_roles.findMany()
    * ```
    */
  get tbl_roles(): Prisma.tbl_rolesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tbl_users`: Exposes CRUD operations for the **tbl_users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_users
    * const tbl_users = await prisma.tbl_users.findMany()
    * ```
    */
  get tbl_users(): Prisma.tbl_usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tbl_user`: Exposes CRUD operations for the **tbl_user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_users
    * const tbl_users = await prisma.tbl_user.findMany()
    * ```
    */
  get tbl_user(): Prisma.tbl_userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tbl_doctors`: Exposes CRUD operations for the **tbl_doctors** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_doctors
    * const tbl_doctors = await prisma.tbl_doctors.findMany()
    * ```
    */
  get tbl_doctors(): Prisma.tbl_doctorsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tbl_appointments`: Exposes CRUD operations for the **tbl_appointments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_appointments
    * const tbl_appointments = await prisma.tbl_appointments.findMany()
    * ```
    */
  get tbl_appointments(): Prisma.tbl_appointmentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tbl_solved_appointments`: Exposes CRUD operations for the **tbl_solved_appointments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_solved_appointments
    * const tbl_solved_appointments = await prisma.tbl_solved_appointments.findMany()
    * ```
    */
  get tbl_solved_appointments(): Prisma.tbl_solved_appointmentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tbl_heart_data`: Exposes CRUD operations for the **tbl_heart_data** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_heart_data
    * const tbl_heart_data = await prisma.tbl_heart_data.findMany()
    * ```
    */
  get tbl_heart_data(): Prisma.tbl_heart_dataDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    tbl_roles: 'tbl_roles',
    tbl_users: 'tbl_users',
    tbl_user: 'tbl_user',
    tbl_doctors: 'tbl_doctors',
    tbl_appointments: 'tbl_appointments',
    tbl_solved_appointments: 'tbl_solved_appointments',
    tbl_heart_data: 'tbl_heart_data'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "tbl_roles" | "tbl_users" | "tbl_user" | "tbl_doctors" | "tbl_appointments" | "tbl_solved_appointments" | "tbl_heart_data"
      txIsolationLevel: never
    }
    model: {
      tbl_roles: {
        payload: Prisma.$tbl_rolesPayload<ExtArgs>
        fields: Prisma.tbl_rolesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_rolesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_rolesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_rolesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_rolesPayload>
          }
          findFirst: {
            args: Prisma.tbl_rolesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_rolesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_rolesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_rolesPayload>
          }
          findMany: {
            args: Prisma.tbl_rolesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_rolesPayload>[]
          }
          create: {
            args: Prisma.tbl_rolesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_rolesPayload>
          }
          createMany: {
            args: Prisma.tbl_rolesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tbl_rolesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_rolesPayload>
          }
          update: {
            args: Prisma.tbl_rolesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_rolesPayload>
          }
          deleteMany: {
            args: Prisma.tbl_rolesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_rolesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tbl_rolesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_rolesPayload>
          }
          aggregate: {
            args: Prisma.Tbl_rolesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_roles>
          }
          groupBy: {
            args: Prisma.tbl_rolesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_rolesGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.tbl_rolesFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.tbl_rolesAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.tbl_rolesCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_rolesCountAggregateOutputType> | number
          }
        }
      }
      tbl_users: {
        payload: Prisma.$tbl_usersPayload<ExtArgs>
        fields: Prisma.tbl_usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_usersPayload>
          }
          findFirst: {
            args: Prisma.tbl_usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_usersPayload>
          }
          findMany: {
            args: Prisma.tbl_usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_usersPayload>[]
          }
          create: {
            args: Prisma.tbl_usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_usersPayload>
          }
          createMany: {
            args: Prisma.tbl_usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tbl_usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_usersPayload>
          }
          update: {
            args: Prisma.tbl_usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_usersPayload>
          }
          deleteMany: {
            args: Prisma.tbl_usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tbl_usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_usersPayload>
          }
          aggregate: {
            args: Prisma.Tbl_usersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_users>
          }
          groupBy: {
            args: Prisma.tbl_usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_usersGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.tbl_usersFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.tbl_usersAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.tbl_usersCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_usersCountAggregateOutputType> | number
          }
        }
      }
      tbl_user: {
        payload: Prisma.$tbl_userPayload<ExtArgs>
        fields: Prisma.tbl_userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_userPayload>
          }
          findFirst: {
            args: Prisma.tbl_userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_userPayload>
          }
          findMany: {
            args: Prisma.tbl_userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_userPayload>[]
          }
          create: {
            args: Prisma.tbl_userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_userPayload>
          }
          createMany: {
            args: Prisma.tbl_userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tbl_userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_userPayload>
          }
          update: {
            args: Prisma.tbl_userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_userPayload>
          }
          deleteMany: {
            args: Prisma.tbl_userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tbl_userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_userPayload>
          }
          aggregate: {
            args: Prisma.Tbl_userAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_user>
          }
          groupBy: {
            args: Prisma.tbl_userGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_userGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.tbl_userFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.tbl_userAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.tbl_userCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_userCountAggregateOutputType> | number
          }
        }
      }
      tbl_doctors: {
        payload: Prisma.$tbl_doctorsPayload<ExtArgs>
        fields: Prisma.tbl_doctorsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_doctorsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_doctorsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_doctorsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_doctorsPayload>
          }
          findFirst: {
            args: Prisma.tbl_doctorsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_doctorsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_doctorsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_doctorsPayload>
          }
          findMany: {
            args: Prisma.tbl_doctorsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_doctorsPayload>[]
          }
          create: {
            args: Prisma.tbl_doctorsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_doctorsPayload>
          }
          createMany: {
            args: Prisma.tbl_doctorsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tbl_doctorsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_doctorsPayload>
          }
          update: {
            args: Prisma.tbl_doctorsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_doctorsPayload>
          }
          deleteMany: {
            args: Prisma.tbl_doctorsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_doctorsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tbl_doctorsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_doctorsPayload>
          }
          aggregate: {
            args: Prisma.Tbl_doctorsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_doctors>
          }
          groupBy: {
            args: Prisma.tbl_doctorsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_doctorsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.tbl_doctorsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.tbl_doctorsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.tbl_doctorsCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_doctorsCountAggregateOutputType> | number
          }
        }
      }
      tbl_appointments: {
        payload: Prisma.$tbl_appointmentsPayload<ExtArgs>
        fields: Prisma.tbl_appointmentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_appointmentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_appointmentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_appointmentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_appointmentsPayload>
          }
          findFirst: {
            args: Prisma.tbl_appointmentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_appointmentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_appointmentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_appointmentsPayload>
          }
          findMany: {
            args: Prisma.tbl_appointmentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_appointmentsPayload>[]
          }
          create: {
            args: Prisma.tbl_appointmentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_appointmentsPayload>
          }
          createMany: {
            args: Prisma.tbl_appointmentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tbl_appointmentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_appointmentsPayload>
          }
          update: {
            args: Prisma.tbl_appointmentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_appointmentsPayload>
          }
          deleteMany: {
            args: Prisma.tbl_appointmentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_appointmentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tbl_appointmentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_appointmentsPayload>
          }
          aggregate: {
            args: Prisma.Tbl_appointmentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_appointments>
          }
          groupBy: {
            args: Prisma.tbl_appointmentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_appointmentsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.tbl_appointmentsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.tbl_appointmentsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.tbl_appointmentsCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_appointmentsCountAggregateOutputType> | number
          }
        }
      }
      tbl_solved_appointments: {
        payload: Prisma.$tbl_solved_appointmentsPayload<ExtArgs>
        fields: Prisma.tbl_solved_appointmentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_solved_appointmentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_solved_appointmentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_solved_appointmentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_solved_appointmentsPayload>
          }
          findFirst: {
            args: Prisma.tbl_solved_appointmentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_solved_appointmentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_solved_appointmentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_solved_appointmentsPayload>
          }
          findMany: {
            args: Prisma.tbl_solved_appointmentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_solved_appointmentsPayload>[]
          }
          create: {
            args: Prisma.tbl_solved_appointmentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_solved_appointmentsPayload>
          }
          createMany: {
            args: Prisma.tbl_solved_appointmentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tbl_solved_appointmentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_solved_appointmentsPayload>
          }
          update: {
            args: Prisma.tbl_solved_appointmentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_solved_appointmentsPayload>
          }
          deleteMany: {
            args: Prisma.tbl_solved_appointmentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_solved_appointmentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tbl_solved_appointmentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_solved_appointmentsPayload>
          }
          aggregate: {
            args: Prisma.Tbl_solved_appointmentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_solved_appointments>
          }
          groupBy: {
            args: Prisma.tbl_solved_appointmentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_solved_appointmentsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.tbl_solved_appointmentsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.tbl_solved_appointmentsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.tbl_solved_appointmentsCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_solved_appointmentsCountAggregateOutputType> | number
          }
        }
      }
      tbl_heart_data: {
        payload: Prisma.$tbl_heart_dataPayload<ExtArgs>
        fields: Prisma.tbl_heart_dataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_heart_dataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_heart_dataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_heart_dataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_heart_dataPayload>
          }
          findFirst: {
            args: Prisma.tbl_heart_dataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_heart_dataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_heart_dataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_heart_dataPayload>
          }
          findMany: {
            args: Prisma.tbl_heart_dataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_heart_dataPayload>[]
          }
          create: {
            args: Prisma.tbl_heart_dataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_heart_dataPayload>
          }
          createMany: {
            args: Prisma.tbl_heart_dataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tbl_heart_dataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_heart_dataPayload>
          }
          update: {
            args: Prisma.tbl_heart_dataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_heart_dataPayload>
          }
          deleteMany: {
            args: Prisma.tbl_heart_dataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_heart_dataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tbl_heart_dataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_heart_dataPayload>
          }
          aggregate: {
            args: Prisma.Tbl_heart_dataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_heart_data>
          }
          groupBy: {
            args: Prisma.tbl_heart_dataGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_heart_dataGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.tbl_heart_dataFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.tbl_heart_dataAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.tbl_heart_dataCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_heart_dataCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    tbl_roles?: tbl_rolesOmit
    tbl_users?: tbl_usersOmit
    tbl_user?: tbl_userOmit
    tbl_doctors?: tbl_doctorsOmit
    tbl_appointments?: tbl_appointmentsOmit
    tbl_solved_appointments?: tbl_solved_appointmentsOmit
    tbl_heart_data?: tbl_heart_dataOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Tbl_rolesCountOutputType
   */

  export type Tbl_rolesCountOutputType = {
    users: number
    system_users: number
  }

  export type Tbl_rolesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Tbl_rolesCountOutputTypeCountUsersArgs
    system_users?: boolean | Tbl_rolesCountOutputTypeCountSystem_usersArgs
  }

  // Custom InputTypes
  /**
   * Tbl_rolesCountOutputType without action
   */
  export type Tbl_rolesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tbl_rolesCountOutputType
     */
    select?: Tbl_rolesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tbl_rolesCountOutputType without action
   */
  export type Tbl_rolesCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_usersWhereInput
  }

  /**
   * Tbl_rolesCountOutputType without action
   */
  export type Tbl_rolesCountOutputTypeCountSystem_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_userWhereInput
  }


  /**
   * Count Type Tbl_doctorsCountOutputType
   */

  export type Tbl_doctorsCountOutputType = {
    appointments: number
    solved: number
  }

  export type Tbl_doctorsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | Tbl_doctorsCountOutputTypeCountAppointmentsArgs
    solved?: boolean | Tbl_doctorsCountOutputTypeCountSolvedArgs
  }

  // Custom InputTypes
  /**
   * Tbl_doctorsCountOutputType without action
   */
  export type Tbl_doctorsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tbl_doctorsCountOutputType
     */
    select?: Tbl_doctorsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tbl_doctorsCountOutputType without action
   */
  export type Tbl_doctorsCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_appointmentsWhereInput
  }

  /**
   * Tbl_doctorsCountOutputType without action
   */
  export type Tbl_doctorsCountOutputTypeCountSolvedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_solved_appointmentsWhereInput
  }


  /**
   * Count Type Tbl_appointmentsCountOutputType
   */

  export type Tbl_appointmentsCountOutputType = {
    solved_appointments: number
  }

  export type Tbl_appointmentsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    solved_appointments?: boolean | Tbl_appointmentsCountOutputTypeCountSolved_appointmentsArgs
  }

  // Custom InputTypes
  /**
   * Tbl_appointmentsCountOutputType without action
   */
  export type Tbl_appointmentsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tbl_appointmentsCountOutputType
     */
    select?: Tbl_appointmentsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tbl_appointmentsCountOutputType without action
   */
  export type Tbl_appointmentsCountOutputTypeCountSolved_appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_solved_appointmentsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model tbl_roles
   */

  export type AggregateTbl_roles = {
    _count: Tbl_rolesCountAggregateOutputType | null
    _min: Tbl_rolesMinAggregateOutputType | null
    _max: Tbl_rolesMaxAggregateOutputType | null
  }

  export type Tbl_rolesMinAggregateOutputType = {
    id: string | null
    role_name: string | null
  }

  export type Tbl_rolesMaxAggregateOutputType = {
    id: string | null
    role_name: string | null
  }

  export type Tbl_rolesCountAggregateOutputType = {
    id: number
    role_name: number
    _all: number
  }


  export type Tbl_rolesMinAggregateInputType = {
    id?: true
    role_name?: true
  }

  export type Tbl_rolesMaxAggregateInputType = {
    id?: true
    role_name?: true
  }

  export type Tbl_rolesCountAggregateInputType = {
    id?: true
    role_name?: true
    _all?: true
  }

  export type Tbl_rolesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_roles to aggregate.
     */
    where?: tbl_rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_roles to fetch.
     */
    orderBy?: tbl_rolesOrderByWithRelationInput | tbl_rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_roles
    **/
    _count?: true | Tbl_rolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_rolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_rolesMaxAggregateInputType
  }

  export type GetTbl_rolesAggregateType<T extends Tbl_rolesAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_roles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_roles[P]>
      : GetScalarType<T[P], AggregateTbl_roles[P]>
  }




  export type tbl_rolesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_rolesWhereInput
    orderBy?: tbl_rolesOrderByWithAggregationInput | tbl_rolesOrderByWithAggregationInput[]
    by: Tbl_rolesScalarFieldEnum[] | Tbl_rolesScalarFieldEnum
    having?: tbl_rolesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_rolesCountAggregateInputType | true
    _min?: Tbl_rolesMinAggregateInputType
    _max?: Tbl_rolesMaxAggregateInputType
  }

  export type Tbl_rolesGroupByOutputType = {
    id: string
    role_name: string
    _count: Tbl_rolesCountAggregateOutputType | null
    _min: Tbl_rolesMinAggregateOutputType | null
    _max: Tbl_rolesMaxAggregateOutputType | null
  }

  type GetTbl_rolesGroupByPayload<T extends tbl_rolesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_rolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_rolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_rolesGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_rolesGroupByOutputType[P]>
        }
      >
    >


  export type tbl_rolesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role_name?: boolean
    users?: boolean | tbl_roles$usersArgs<ExtArgs>
    system_users?: boolean | tbl_roles$system_usersArgs<ExtArgs>
    _count?: boolean | Tbl_rolesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_roles"]>



  export type tbl_rolesSelectScalar = {
    id?: boolean
    role_name?: boolean
  }

  export type tbl_rolesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role_name", ExtArgs["result"]["tbl_roles"]>
  export type tbl_rolesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | tbl_roles$usersArgs<ExtArgs>
    system_users?: boolean | tbl_roles$system_usersArgs<ExtArgs>
    _count?: boolean | Tbl_rolesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tbl_rolesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_roles"
    objects: {
      users: Prisma.$tbl_usersPayload<ExtArgs>[]
      system_users: Prisma.$tbl_userPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      role_name: string
    }, ExtArgs["result"]["tbl_roles"]>
    composites: {}
  }

  type tbl_rolesGetPayload<S extends boolean | null | undefined | tbl_rolesDefaultArgs> = $Result.GetResult<Prisma.$tbl_rolesPayload, S>

  type tbl_rolesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_rolesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_rolesCountAggregateInputType | true
    }

  export interface tbl_rolesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_roles'], meta: { name: 'tbl_roles' } }
    /**
     * Find zero or one Tbl_roles that matches the filter.
     * @param {tbl_rolesFindUniqueArgs} args - Arguments to find a Tbl_roles
     * @example
     * // Get one Tbl_roles
     * const tbl_roles = await prisma.tbl_roles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_rolesFindUniqueArgs>(args: SelectSubset<T, tbl_rolesFindUniqueArgs<ExtArgs>>): Prisma__tbl_rolesClient<$Result.GetResult<Prisma.$tbl_rolesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_roles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_rolesFindUniqueOrThrowArgs} args - Arguments to find a Tbl_roles
     * @example
     * // Get one Tbl_roles
     * const tbl_roles = await prisma.tbl_roles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_rolesFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_rolesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_rolesClient<$Result.GetResult<Prisma.$tbl_rolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_rolesFindFirstArgs} args - Arguments to find a Tbl_roles
     * @example
     * // Get one Tbl_roles
     * const tbl_roles = await prisma.tbl_roles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_rolesFindFirstArgs>(args?: SelectSubset<T, tbl_rolesFindFirstArgs<ExtArgs>>): Prisma__tbl_rolesClient<$Result.GetResult<Prisma.$tbl_rolesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_roles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_rolesFindFirstOrThrowArgs} args - Arguments to find a Tbl_roles
     * @example
     * // Get one Tbl_roles
     * const tbl_roles = await prisma.tbl_roles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_rolesFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_rolesFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_rolesClient<$Result.GetResult<Prisma.$tbl_rolesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_rolesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_roles
     * const tbl_roles = await prisma.tbl_roles.findMany()
     * 
     * // Get first 10 Tbl_roles
     * const tbl_roles = await prisma.tbl_roles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tbl_rolesWithIdOnly = await prisma.tbl_roles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tbl_rolesFindManyArgs>(args?: SelectSubset<T, tbl_rolesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_rolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_roles.
     * @param {tbl_rolesCreateArgs} args - Arguments to create a Tbl_roles.
     * @example
     * // Create one Tbl_roles
     * const Tbl_roles = await prisma.tbl_roles.create({
     *   data: {
     *     // ... data to create a Tbl_roles
     *   }
     * })
     * 
     */
    create<T extends tbl_rolesCreateArgs>(args: SelectSubset<T, tbl_rolesCreateArgs<ExtArgs>>): Prisma__tbl_rolesClient<$Result.GetResult<Prisma.$tbl_rolesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_roles.
     * @param {tbl_rolesCreateManyArgs} args - Arguments to create many Tbl_roles.
     * @example
     * // Create many Tbl_roles
     * const tbl_roles = await prisma.tbl_roles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_rolesCreateManyArgs>(args?: SelectSubset<T, tbl_rolesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tbl_roles.
     * @param {tbl_rolesDeleteArgs} args - Arguments to delete one Tbl_roles.
     * @example
     * // Delete one Tbl_roles
     * const Tbl_roles = await prisma.tbl_roles.delete({
     *   where: {
     *     // ... filter to delete one Tbl_roles
     *   }
     * })
     * 
     */
    delete<T extends tbl_rolesDeleteArgs>(args: SelectSubset<T, tbl_rolesDeleteArgs<ExtArgs>>): Prisma__tbl_rolesClient<$Result.GetResult<Prisma.$tbl_rolesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_roles.
     * @param {tbl_rolesUpdateArgs} args - Arguments to update one Tbl_roles.
     * @example
     * // Update one Tbl_roles
     * const tbl_roles = await prisma.tbl_roles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_rolesUpdateArgs>(args: SelectSubset<T, tbl_rolesUpdateArgs<ExtArgs>>): Prisma__tbl_rolesClient<$Result.GetResult<Prisma.$tbl_rolesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_roles.
     * @param {tbl_rolesDeleteManyArgs} args - Arguments to filter Tbl_roles to delete.
     * @example
     * // Delete a few Tbl_roles
     * const { count } = await prisma.tbl_roles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_rolesDeleteManyArgs>(args?: SelectSubset<T, tbl_rolesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_rolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_roles
     * const tbl_roles = await prisma.tbl_roles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_rolesUpdateManyArgs>(args: SelectSubset<T, tbl_rolesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbl_roles.
     * @param {tbl_rolesUpsertArgs} args - Arguments to update or create a Tbl_roles.
     * @example
     * // Update or create a Tbl_roles
     * const tbl_roles = await prisma.tbl_roles.upsert({
     *   create: {
     *     // ... data to create a Tbl_roles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_roles we want to update
     *   }
     * })
     */
    upsert<T extends tbl_rolesUpsertArgs>(args: SelectSubset<T, tbl_rolesUpsertArgs<ExtArgs>>): Prisma__tbl_rolesClient<$Result.GetResult<Prisma.$tbl_rolesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_roles that matches the filter.
     * @param {tbl_rolesFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const tbl_roles = await prisma.tbl_roles.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: tbl_rolesFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Tbl_roles.
     * @param {tbl_rolesAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const tbl_roles = await prisma.tbl_roles.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: tbl_rolesAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Tbl_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_rolesCountArgs} args - Arguments to filter Tbl_roles to count.
     * @example
     * // Count the number of Tbl_roles
     * const count = await prisma.tbl_roles.count({
     *   where: {
     *     // ... the filter for the Tbl_roles we want to count
     *   }
     * })
    **/
    count<T extends tbl_rolesCountArgs>(
      args?: Subset<T, tbl_rolesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_rolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_rolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tbl_rolesAggregateArgs>(args: Subset<T, Tbl_rolesAggregateArgs>): Prisma.PrismaPromise<GetTbl_rolesAggregateType<T>>

    /**
     * Group by Tbl_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_rolesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tbl_rolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_rolesGroupByArgs['orderBy'] }
        : { orderBy?: tbl_rolesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tbl_rolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_rolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_roles model
   */
  readonly fields: tbl_rolesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_roles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_rolesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends tbl_roles$usersArgs<ExtArgs> = {}>(args?: Subset<T, tbl_roles$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    system_users<T extends tbl_roles$system_usersArgs<ExtArgs> = {}>(args?: Subset<T, tbl_roles$system_usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tbl_roles model
   */
  interface tbl_rolesFieldRefs {
    readonly id: FieldRef<"tbl_roles", 'String'>
    readonly role_name: FieldRef<"tbl_roles", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tbl_roles findUnique
   */
  export type tbl_rolesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_roles
     */
    select?: tbl_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_roles
     */
    omit?: tbl_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_rolesInclude<ExtArgs> | null
    /**
     * Filter, which tbl_roles to fetch.
     */
    where: tbl_rolesWhereUniqueInput
  }

  /**
   * tbl_roles findUniqueOrThrow
   */
  export type tbl_rolesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_roles
     */
    select?: tbl_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_roles
     */
    omit?: tbl_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_rolesInclude<ExtArgs> | null
    /**
     * Filter, which tbl_roles to fetch.
     */
    where: tbl_rolesWhereUniqueInput
  }

  /**
   * tbl_roles findFirst
   */
  export type tbl_rolesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_roles
     */
    select?: tbl_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_roles
     */
    omit?: tbl_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_rolesInclude<ExtArgs> | null
    /**
     * Filter, which tbl_roles to fetch.
     */
    where?: tbl_rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_roles to fetch.
     */
    orderBy?: tbl_rolesOrderByWithRelationInput | tbl_rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_roles.
     */
    cursor?: tbl_rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_roles.
     */
    distinct?: Tbl_rolesScalarFieldEnum | Tbl_rolesScalarFieldEnum[]
  }

  /**
   * tbl_roles findFirstOrThrow
   */
  export type tbl_rolesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_roles
     */
    select?: tbl_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_roles
     */
    omit?: tbl_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_rolesInclude<ExtArgs> | null
    /**
     * Filter, which tbl_roles to fetch.
     */
    where?: tbl_rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_roles to fetch.
     */
    orderBy?: tbl_rolesOrderByWithRelationInput | tbl_rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_roles.
     */
    cursor?: tbl_rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_roles.
     */
    distinct?: Tbl_rolesScalarFieldEnum | Tbl_rolesScalarFieldEnum[]
  }

  /**
   * tbl_roles findMany
   */
  export type tbl_rolesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_roles
     */
    select?: tbl_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_roles
     */
    omit?: tbl_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_rolesInclude<ExtArgs> | null
    /**
     * Filter, which tbl_roles to fetch.
     */
    where?: tbl_rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_roles to fetch.
     */
    orderBy?: tbl_rolesOrderByWithRelationInput | tbl_rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_roles.
     */
    cursor?: tbl_rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_roles.
     */
    skip?: number
    distinct?: Tbl_rolesScalarFieldEnum | Tbl_rolesScalarFieldEnum[]
  }

  /**
   * tbl_roles create
   */
  export type tbl_rolesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_roles
     */
    select?: tbl_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_roles
     */
    omit?: tbl_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_rolesInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_roles.
     */
    data: XOR<tbl_rolesCreateInput, tbl_rolesUncheckedCreateInput>
  }

  /**
   * tbl_roles createMany
   */
  export type tbl_rolesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_roles.
     */
    data: tbl_rolesCreateManyInput | tbl_rolesCreateManyInput[]
  }

  /**
   * tbl_roles update
   */
  export type tbl_rolesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_roles
     */
    select?: tbl_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_roles
     */
    omit?: tbl_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_rolesInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_roles.
     */
    data: XOR<tbl_rolesUpdateInput, tbl_rolesUncheckedUpdateInput>
    /**
     * Choose, which tbl_roles to update.
     */
    where: tbl_rolesWhereUniqueInput
  }

  /**
   * tbl_roles updateMany
   */
  export type tbl_rolesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_roles.
     */
    data: XOR<tbl_rolesUpdateManyMutationInput, tbl_rolesUncheckedUpdateManyInput>
    /**
     * Filter which tbl_roles to update
     */
    where?: tbl_rolesWhereInput
    /**
     * Limit how many tbl_roles to update.
     */
    limit?: number
  }

  /**
   * tbl_roles upsert
   */
  export type tbl_rolesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_roles
     */
    select?: tbl_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_roles
     */
    omit?: tbl_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_rolesInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_roles to update in case it exists.
     */
    where: tbl_rolesWhereUniqueInput
    /**
     * In case the tbl_roles found by the `where` argument doesn't exist, create a new tbl_roles with this data.
     */
    create: XOR<tbl_rolesCreateInput, tbl_rolesUncheckedCreateInput>
    /**
     * In case the tbl_roles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_rolesUpdateInput, tbl_rolesUncheckedUpdateInput>
  }

  /**
   * tbl_roles delete
   */
  export type tbl_rolesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_roles
     */
    select?: tbl_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_roles
     */
    omit?: tbl_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_rolesInclude<ExtArgs> | null
    /**
     * Filter which tbl_roles to delete.
     */
    where: tbl_rolesWhereUniqueInput
  }

  /**
   * tbl_roles deleteMany
   */
  export type tbl_rolesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_roles to delete
     */
    where?: tbl_rolesWhereInput
    /**
     * Limit how many tbl_roles to delete.
     */
    limit?: number
  }

  /**
   * tbl_roles findRaw
   */
  export type tbl_rolesFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * tbl_roles aggregateRaw
   */
  export type tbl_rolesAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * tbl_roles.users
   */
  export type tbl_roles$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_users
     */
    select?: tbl_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_users
     */
    omit?: tbl_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_usersInclude<ExtArgs> | null
    where?: tbl_usersWhereInput
    orderBy?: tbl_usersOrderByWithRelationInput | tbl_usersOrderByWithRelationInput[]
    cursor?: tbl_usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_usersScalarFieldEnum | Tbl_usersScalarFieldEnum[]
  }

  /**
   * tbl_roles.system_users
   */
  export type tbl_roles$system_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_user
     */
    select?: tbl_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_user
     */
    omit?: tbl_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_userInclude<ExtArgs> | null
    where?: tbl_userWhereInput
    orderBy?: tbl_userOrderByWithRelationInput | tbl_userOrderByWithRelationInput[]
    cursor?: tbl_userWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_userScalarFieldEnum | Tbl_userScalarFieldEnum[]
  }

  /**
   * tbl_roles without action
   */
  export type tbl_rolesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_roles
     */
    select?: tbl_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_roles
     */
    omit?: tbl_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_rolesInclude<ExtArgs> | null
  }


  /**
   * Model tbl_users
   */

  export type AggregateTbl_users = {
    _count: Tbl_usersCountAggregateOutputType | null
    _min: Tbl_usersMinAggregateOutputType | null
    _max: Tbl_usersMaxAggregateOutputType | null
  }

  export type Tbl_usersMinAggregateOutputType = {
    id: string | null
    names: string | null
    email: string | null
    password: string | null
    role_id: string | null
  }

  export type Tbl_usersMaxAggregateOutputType = {
    id: string | null
    names: string | null
    email: string | null
    password: string | null
    role_id: string | null
  }

  export type Tbl_usersCountAggregateOutputType = {
    id: number
    names: number
    email: number
    password: number
    role_id: number
    _all: number
  }


  export type Tbl_usersMinAggregateInputType = {
    id?: true
    names?: true
    email?: true
    password?: true
    role_id?: true
  }

  export type Tbl_usersMaxAggregateInputType = {
    id?: true
    names?: true
    email?: true
    password?: true
    role_id?: true
  }

  export type Tbl_usersCountAggregateInputType = {
    id?: true
    names?: true
    email?: true
    password?: true
    role_id?: true
    _all?: true
  }

  export type Tbl_usersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_users to aggregate.
     */
    where?: tbl_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_users to fetch.
     */
    orderBy?: tbl_usersOrderByWithRelationInput | tbl_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_users
    **/
    _count?: true | Tbl_usersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_usersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_usersMaxAggregateInputType
  }

  export type GetTbl_usersAggregateType<T extends Tbl_usersAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_users]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_users[P]>
      : GetScalarType<T[P], AggregateTbl_users[P]>
  }




  export type tbl_usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_usersWhereInput
    orderBy?: tbl_usersOrderByWithAggregationInput | tbl_usersOrderByWithAggregationInput[]
    by: Tbl_usersScalarFieldEnum[] | Tbl_usersScalarFieldEnum
    having?: tbl_usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_usersCountAggregateInputType | true
    _min?: Tbl_usersMinAggregateInputType
    _max?: Tbl_usersMaxAggregateInputType
  }

  export type Tbl_usersGroupByOutputType = {
    id: string
    names: string
    email: string
    password: string
    role_id: string
    _count: Tbl_usersCountAggregateOutputType | null
    _min: Tbl_usersMinAggregateOutputType | null
    _max: Tbl_usersMaxAggregateOutputType | null
  }

  type GetTbl_usersGroupByPayload<T extends tbl_usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_usersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_usersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_usersGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_usersGroupByOutputType[P]>
        }
      >
    >


  export type tbl_usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    names?: boolean
    email?: boolean
    password?: boolean
    role_id?: boolean
    role?: boolean | tbl_users$roleArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_users"]>



  export type tbl_usersSelectScalar = {
    id?: boolean
    names?: boolean
    email?: boolean
    password?: boolean
    role_id?: boolean
  }

  export type tbl_usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "names" | "email" | "password" | "role_id", ExtArgs["result"]["tbl_users"]>
  export type tbl_usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | tbl_users$roleArgs<ExtArgs>
  }

  export type $tbl_usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_users"
    objects: {
      role: Prisma.$tbl_rolesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      names: string
      email: string
      password: string
      role_id: string
    }, ExtArgs["result"]["tbl_users"]>
    composites: {}
  }

  type tbl_usersGetPayload<S extends boolean | null | undefined | tbl_usersDefaultArgs> = $Result.GetResult<Prisma.$tbl_usersPayload, S>

  type tbl_usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_usersCountAggregateInputType | true
    }

  export interface tbl_usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_users'], meta: { name: 'tbl_users' } }
    /**
     * Find zero or one Tbl_users that matches the filter.
     * @param {tbl_usersFindUniqueArgs} args - Arguments to find a Tbl_users
     * @example
     * // Get one Tbl_users
     * const tbl_users = await prisma.tbl_users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_usersFindUniqueArgs>(args: SelectSubset<T, tbl_usersFindUniqueArgs<ExtArgs>>): Prisma__tbl_usersClient<$Result.GetResult<Prisma.$tbl_usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_usersFindUniqueOrThrowArgs} args - Arguments to find a Tbl_users
     * @example
     * // Get one Tbl_users
     * const tbl_users = await prisma.tbl_users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_usersFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_usersClient<$Result.GetResult<Prisma.$tbl_usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_usersFindFirstArgs} args - Arguments to find a Tbl_users
     * @example
     * // Get one Tbl_users
     * const tbl_users = await prisma.tbl_users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_usersFindFirstArgs>(args?: SelectSubset<T, tbl_usersFindFirstArgs<ExtArgs>>): Prisma__tbl_usersClient<$Result.GetResult<Prisma.$tbl_usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_usersFindFirstOrThrowArgs} args - Arguments to find a Tbl_users
     * @example
     * // Get one Tbl_users
     * const tbl_users = await prisma.tbl_users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_usersFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_usersClient<$Result.GetResult<Prisma.$tbl_usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_users
     * const tbl_users = await prisma.tbl_users.findMany()
     * 
     * // Get first 10 Tbl_users
     * const tbl_users = await prisma.tbl_users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tbl_usersWithIdOnly = await prisma.tbl_users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tbl_usersFindManyArgs>(args?: SelectSubset<T, tbl_usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_users.
     * @param {tbl_usersCreateArgs} args - Arguments to create a Tbl_users.
     * @example
     * // Create one Tbl_users
     * const Tbl_users = await prisma.tbl_users.create({
     *   data: {
     *     // ... data to create a Tbl_users
     *   }
     * })
     * 
     */
    create<T extends tbl_usersCreateArgs>(args: SelectSubset<T, tbl_usersCreateArgs<ExtArgs>>): Prisma__tbl_usersClient<$Result.GetResult<Prisma.$tbl_usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_users.
     * @param {tbl_usersCreateManyArgs} args - Arguments to create many Tbl_users.
     * @example
     * // Create many Tbl_users
     * const tbl_users = await prisma.tbl_users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_usersCreateManyArgs>(args?: SelectSubset<T, tbl_usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tbl_users.
     * @param {tbl_usersDeleteArgs} args - Arguments to delete one Tbl_users.
     * @example
     * // Delete one Tbl_users
     * const Tbl_users = await prisma.tbl_users.delete({
     *   where: {
     *     // ... filter to delete one Tbl_users
     *   }
     * })
     * 
     */
    delete<T extends tbl_usersDeleteArgs>(args: SelectSubset<T, tbl_usersDeleteArgs<ExtArgs>>): Prisma__tbl_usersClient<$Result.GetResult<Prisma.$tbl_usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_users.
     * @param {tbl_usersUpdateArgs} args - Arguments to update one Tbl_users.
     * @example
     * // Update one Tbl_users
     * const tbl_users = await prisma.tbl_users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_usersUpdateArgs>(args: SelectSubset<T, tbl_usersUpdateArgs<ExtArgs>>): Prisma__tbl_usersClient<$Result.GetResult<Prisma.$tbl_usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_users.
     * @param {tbl_usersDeleteManyArgs} args - Arguments to filter Tbl_users to delete.
     * @example
     * // Delete a few Tbl_users
     * const { count } = await prisma.tbl_users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_usersDeleteManyArgs>(args?: SelectSubset<T, tbl_usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_users
     * const tbl_users = await prisma.tbl_users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_usersUpdateManyArgs>(args: SelectSubset<T, tbl_usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbl_users.
     * @param {tbl_usersUpsertArgs} args - Arguments to update or create a Tbl_users.
     * @example
     * // Update or create a Tbl_users
     * const tbl_users = await prisma.tbl_users.upsert({
     *   create: {
     *     // ... data to create a Tbl_users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_users we want to update
     *   }
     * })
     */
    upsert<T extends tbl_usersUpsertArgs>(args: SelectSubset<T, tbl_usersUpsertArgs<ExtArgs>>): Prisma__tbl_usersClient<$Result.GetResult<Prisma.$tbl_usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_users that matches the filter.
     * @param {tbl_usersFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const tbl_users = await prisma.tbl_users.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: tbl_usersFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Tbl_users.
     * @param {tbl_usersAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const tbl_users = await prisma.tbl_users.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: tbl_usersAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Tbl_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_usersCountArgs} args - Arguments to filter Tbl_users to count.
     * @example
     * // Count the number of Tbl_users
     * const count = await prisma.tbl_users.count({
     *   where: {
     *     // ... the filter for the Tbl_users we want to count
     *   }
     * })
    **/
    count<T extends tbl_usersCountArgs>(
      args?: Subset<T, tbl_usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_usersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_usersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tbl_usersAggregateArgs>(args: Subset<T, Tbl_usersAggregateArgs>): Prisma.PrismaPromise<GetTbl_usersAggregateType<T>>

    /**
     * Group by Tbl_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tbl_usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_usersGroupByArgs['orderBy'] }
        : { orderBy?: tbl_usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tbl_usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_usersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_users model
   */
  readonly fields: tbl_usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends tbl_users$roleArgs<ExtArgs> = {}>(args?: Subset<T, tbl_users$roleArgs<ExtArgs>>): Prisma__tbl_rolesClient<$Result.GetResult<Prisma.$tbl_rolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tbl_users model
   */
  interface tbl_usersFieldRefs {
    readonly id: FieldRef<"tbl_users", 'String'>
    readonly names: FieldRef<"tbl_users", 'String'>
    readonly email: FieldRef<"tbl_users", 'String'>
    readonly password: FieldRef<"tbl_users", 'String'>
    readonly role_id: FieldRef<"tbl_users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tbl_users findUnique
   */
  export type tbl_usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_users
     */
    select?: tbl_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_users
     */
    omit?: tbl_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_usersInclude<ExtArgs> | null
    /**
     * Filter, which tbl_users to fetch.
     */
    where: tbl_usersWhereUniqueInput
  }

  /**
   * tbl_users findUniqueOrThrow
   */
  export type tbl_usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_users
     */
    select?: tbl_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_users
     */
    omit?: tbl_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_usersInclude<ExtArgs> | null
    /**
     * Filter, which tbl_users to fetch.
     */
    where: tbl_usersWhereUniqueInput
  }

  /**
   * tbl_users findFirst
   */
  export type tbl_usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_users
     */
    select?: tbl_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_users
     */
    omit?: tbl_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_usersInclude<ExtArgs> | null
    /**
     * Filter, which tbl_users to fetch.
     */
    where?: tbl_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_users to fetch.
     */
    orderBy?: tbl_usersOrderByWithRelationInput | tbl_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_users.
     */
    cursor?: tbl_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_users.
     */
    distinct?: Tbl_usersScalarFieldEnum | Tbl_usersScalarFieldEnum[]
  }

  /**
   * tbl_users findFirstOrThrow
   */
  export type tbl_usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_users
     */
    select?: tbl_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_users
     */
    omit?: tbl_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_usersInclude<ExtArgs> | null
    /**
     * Filter, which tbl_users to fetch.
     */
    where?: tbl_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_users to fetch.
     */
    orderBy?: tbl_usersOrderByWithRelationInput | tbl_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_users.
     */
    cursor?: tbl_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_users.
     */
    distinct?: Tbl_usersScalarFieldEnum | Tbl_usersScalarFieldEnum[]
  }

  /**
   * tbl_users findMany
   */
  export type tbl_usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_users
     */
    select?: tbl_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_users
     */
    omit?: tbl_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_usersInclude<ExtArgs> | null
    /**
     * Filter, which tbl_users to fetch.
     */
    where?: tbl_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_users to fetch.
     */
    orderBy?: tbl_usersOrderByWithRelationInput | tbl_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_users.
     */
    cursor?: tbl_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_users.
     */
    skip?: number
    distinct?: Tbl_usersScalarFieldEnum | Tbl_usersScalarFieldEnum[]
  }

  /**
   * tbl_users create
   */
  export type tbl_usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_users
     */
    select?: tbl_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_users
     */
    omit?: tbl_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_usersInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_users.
     */
    data: XOR<tbl_usersCreateInput, tbl_usersUncheckedCreateInput>
  }

  /**
   * tbl_users createMany
   */
  export type tbl_usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_users.
     */
    data: tbl_usersCreateManyInput | tbl_usersCreateManyInput[]
  }

  /**
   * tbl_users update
   */
  export type tbl_usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_users
     */
    select?: tbl_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_users
     */
    omit?: tbl_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_usersInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_users.
     */
    data: XOR<tbl_usersUpdateInput, tbl_usersUncheckedUpdateInput>
    /**
     * Choose, which tbl_users to update.
     */
    where: tbl_usersWhereUniqueInput
  }

  /**
   * tbl_users updateMany
   */
  export type tbl_usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_users.
     */
    data: XOR<tbl_usersUpdateManyMutationInput, tbl_usersUncheckedUpdateManyInput>
    /**
     * Filter which tbl_users to update
     */
    where?: tbl_usersWhereInput
    /**
     * Limit how many tbl_users to update.
     */
    limit?: number
  }

  /**
   * tbl_users upsert
   */
  export type tbl_usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_users
     */
    select?: tbl_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_users
     */
    omit?: tbl_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_usersInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_users to update in case it exists.
     */
    where: tbl_usersWhereUniqueInput
    /**
     * In case the tbl_users found by the `where` argument doesn't exist, create a new tbl_users with this data.
     */
    create: XOR<tbl_usersCreateInput, tbl_usersUncheckedCreateInput>
    /**
     * In case the tbl_users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_usersUpdateInput, tbl_usersUncheckedUpdateInput>
  }

  /**
   * tbl_users delete
   */
  export type tbl_usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_users
     */
    select?: tbl_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_users
     */
    omit?: tbl_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_usersInclude<ExtArgs> | null
    /**
     * Filter which tbl_users to delete.
     */
    where: tbl_usersWhereUniqueInput
  }

  /**
   * tbl_users deleteMany
   */
  export type tbl_usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_users to delete
     */
    where?: tbl_usersWhereInput
    /**
     * Limit how many tbl_users to delete.
     */
    limit?: number
  }

  /**
   * tbl_users findRaw
   */
  export type tbl_usersFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * tbl_users aggregateRaw
   */
  export type tbl_usersAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * tbl_users.role
   */
  export type tbl_users$roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_roles
     */
    select?: tbl_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_roles
     */
    omit?: tbl_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_rolesInclude<ExtArgs> | null
    where?: tbl_rolesWhereInput
  }

  /**
   * tbl_users without action
   */
  export type tbl_usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_users
     */
    select?: tbl_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_users
     */
    omit?: tbl_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_usersInclude<ExtArgs> | null
  }


  /**
   * Model tbl_user
   */

  export type AggregateTbl_user = {
    _count: Tbl_userCountAggregateOutputType | null
    _min: Tbl_userMinAggregateOutputType | null
    _max: Tbl_userMaxAggregateOutputType | null
  }

  export type Tbl_userMinAggregateOutputType = {
    id: string | null
    u_names: string | null
    u_phone: string | null
    u_usersname: string | null
    u_email: string | null
    u_password: string | null
    u_role_id: string | null
  }

  export type Tbl_userMaxAggregateOutputType = {
    id: string | null
    u_names: string | null
    u_phone: string | null
    u_usersname: string | null
    u_email: string | null
    u_password: string | null
    u_role_id: string | null
  }

  export type Tbl_userCountAggregateOutputType = {
    id: number
    u_names: number
    u_phone: number
    u_usersname: number
    u_email: number
    u_password: number
    u_role_id: number
    _all: number
  }


  export type Tbl_userMinAggregateInputType = {
    id?: true
    u_names?: true
    u_phone?: true
    u_usersname?: true
    u_email?: true
    u_password?: true
    u_role_id?: true
  }

  export type Tbl_userMaxAggregateInputType = {
    id?: true
    u_names?: true
    u_phone?: true
    u_usersname?: true
    u_email?: true
    u_password?: true
    u_role_id?: true
  }

  export type Tbl_userCountAggregateInputType = {
    id?: true
    u_names?: true
    u_phone?: true
    u_usersname?: true
    u_email?: true
    u_password?: true
    u_role_id?: true
    _all?: true
  }

  export type Tbl_userAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_user to aggregate.
     */
    where?: tbl_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_users to fetch.
     */
    orderBy?: tbl_userOrderByWithRelationInput | tbl_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_users
    **/
    _count?: true | Tbl_userCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_userMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_userMaxAggregateInputType
  }

  export type GetTbl_userAggregateType<T extends Tbl_userAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_user]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_user[P]>
      : GetScalarType<T[P], AggregateTbl_user[P]>
  }




  export type tbl_userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_userWhereInput
    orderBy?: tbl_userOrderByWithAggregationInput | tbl_userOrderByWithAggregationInput[]
    by: Tbl_userScalarFieldEnum[] | Tbl_userScalarFieldEnum
    having?: tbl_userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_userCountAggregateInputType | true
    _min?: Tbl_userMinAggregateInputType
    _max?: Tbl_userMaxAggregateInputType
  }

  export type Tbl_userGroupByOutputType = {
    id: string
    u_names: string
    u_phone: string
    u_usersname: string
    u_email: string
    u_password: string
    u_role_id: string
    _count: Tbl_userCountAggregateOutputType | null
    _min: Tbl_userMinAggregateOutputType | null
    _max: Tbl_userMaxAggregateOutputType | null
  }

  type GetTbl_userGroupByPayload<T extends tbl_userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_userGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_userGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_userGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_userGroupByOutputType[P]>
        }
      >
    >


  export type tbl_userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    u_names?: boolean
    u_phone?: boolean
    u_usersname?: boolean
    u_email?: boolean
    u_password?: boolean
    u_role_id?: boolean
    role?: boolean | tbl_user$roleArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_user"]>



  export type tbl_userSelectScalar = {
    id?: boolean
    u_names?: boolean
    u_phone?: boolean
    u_usersname?: boolean
    u_email?: boolean
    u_password?: boolean
    u_role_id?: boolean
  }

  export type tbl_userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "u_names" | "u_phone" | "u_usersname" | "u_email" | "u_password" | "u_role_id", ExtArgs["result"]["tbl_user"]>
  export type tbl_userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | tbl_user$roleArgs<ExtArgs>
  }

  export type $tbl_userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_user"
    objects: {
      role: Prisma.$tbl_rolesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      u_names: string
      u_phone: string
      u_usersname: string
      u_email: string
      u_password: string
      u_role_id: string
    }, ExtArgs["result"]["tbl_user"]>
    composites: {}
  }

  type tbl_userGetPayload<S extends boolean | null | undefined | tbl_userDefaultArgs> = $Result.GetResult<Prisma.$tbl_userPayload, S>

  type tbl_userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_userCountAggregateInputType | true
    }

  export interface tbl_userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_user'], meta: { name: 'tbl_user' } }
    /**
     * Find zero or one Tbl_user that matches the filter.
     * @param {tbl_userFindUniqueArgs} args - Arguments to find a Tbl_user
     * @example
     * // Get one Tbl_user
     * const tbl_user = await prisma.tbl_user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_userFindUniqueArgs>(args: SelectSubset<T, tbl_userFindUniqueArgs<ExtArgs>>): Prisma__tbl_userClient<$Result.GetResult<Prisma.$tbl_userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_user that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_userFindUniqueOrThrowArgs} args - Arguments to find a Tbl_user
     * @example
     * // Get one Tbl_user
     * const tbl_user = await prisma.tbl_user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_userFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_userClient<$Result.GetResult<Prisma.$tbl_userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_user that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_userFindFirstArgs} args - Arguments to find a Tbl_user
     * @example
     * // Get one Tbl_user
     * const tbl_user = await prisma.tbl_user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_userFindFirstArgs>(args?: SelectSubset<T, tbl_userFindFirstArgs<ExtArgs>>): Prisma__tbl_userClient<$Result.GetResult<Prisma.$tbl_userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_user that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_userFindFirstOrThrowArgs} args - Arguments to find a Tbl_user
     * @example
     * // Get one Tbl_user
     * const tbl_user = await prisma.tbl_user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_userFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_userFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_userClient<$Result.GetResult<Prisma.$tbl_userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_users
     * const tbl_users = await prisma.tbl_user.findMany()
     * 
     * // Get first 10 Tbl_users
     * const tbl_users = await prisma.tbl_user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tbl_userWithIdOnly = await prisma.tbl_user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tbl_userFindManyArgs>(args?: SelectSubset<T, tbl_userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_user.
     * @param {tbl_userCreateArgs} args - Arguments to create a Tbl_user.
     * @example
     * // Create one Tbl_user
     * const Tbl_user = await prisma.tbl_user.create({
     *   data: {
     *     // ... data to create a Tbl_user
     *   }
     * })
     * 
     */
    create<T extends tbl_userCreateArgs>(args: SelectSubset<T, tbl_userCreateArgs<ExtArgs>>): Prisma__tbl_userClient<$Result.GetResult<Prisma.$tbl_userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_users.
     * @param {tbl_userCreateManyArgs} args - Arguments to create many Tbl_users.
     * @example
     * // Create many Tbl_users
     * const tbl_user = await prisma.tbl_user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_userCreateManyArgs>(args?: SelectSubset<T, tbl_userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tbl_user.
     * @param {tbl_userDeleteArgs} args - Arguments to delete one Tbl_user.
     * @example
     * // Delete one Tbl_user
     * const Tbl_user = await prisma.tbl_user.delete({
     *   where: {
     *     // ... filter to delete one Tbl_user
     *   }
     * })
     * 
     */
    delete<T extends tbl_userDeleteArgs>(args: SelectSubset<T, tbl_userDeleteArgs<ExtArgs>>): Prisma__tbl_userClient<$Result.GetResult<Prisma.$tbl_userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_user.
     * @param {tbl_userUpdateArgs} args - Arguments to update one Tbl_user.
     * @example
     * // Update one Tbl_user
     * const tbl_user = await prisma.tbl_user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_userUpdateArgs>(args: SelectSubset<T, tbl_userUpdateArgs<ExtArgs>>): Prisma__tbl_userClient<$Result.GetResult<Prisma.$tbl_userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_users.
     * @param {tbl_userDeleteManyArgs} args - Arguments to filter Tbl_users to delete.
     * @example
     * // Delete a few Tbl_users
     * const { count } = await prisma.tbl_user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_userDeleteManyArgs>(args?: SelectSubset<T, tbl_userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_users
     * const tbl_user = await prisma.tbl_user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_userUpdateManyArgs>(args: SelectSubset<T, tbl_userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbl_user.
     * @param {tbl_userUpsertArgs} args - Arguments to update or create a Tbl_user.
     * @example
     * // Update or create a Tbl_user
     * const tbl_user = await prisma.tbl_user.upsert({
     *   create: {
     *     // ... data to create a Tbl_user
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_user we want to update
     *   }
     * })
     */
    upsert<T extends tbl_userUpsertArgs>(args: SelectSubset<T, tbl_userUpsertArgs<ExtArgs>>): Prisma__tbl_userClient<$Result.GetResult<Prisma.$tbl_userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_users that matches the filter.
     * @param {tbl_userFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const tbl_user = await prisma.tbl_user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: tbl_userFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Tbl_user.
     * @param {tbl_userAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const tbl_user = await prisma.tbl_user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: tbl_userAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Tbl_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_userCountArgs} args - Arguments to filter Tbl_users to count.
     * @example
     * // Count the number of Tbl_users
     * const count = await prisma.tbl_user.count({
     *   where: {
     *     // ... the filter for the Tbl_users we want to count
     *   }
     * })
    **/
    count<T extends tbl_userCountArgs>(
      args?: Subset<T, tbl_userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_userCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_userAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tbl_userAggregateArgs>(args: Subset<T, Tbl_userAggregateArgs>): Prisma.PrismaPromise<GetTbl_userAggregateType<T>>

    /**
     * Group by Tbl_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tbl_userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_userGroupByArgs['orderBy'] }
        : { orderBy?: tbl_userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tbl_userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_userGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_user model
   */
  readonly fields: tbl_userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends tbl_user$roleArgs<ExtArgs> = {}>(args?: Subset<T, tbl_user$roleArgs<ExtArgs>>): Prisma__tbl_rolesClient<$Result.GetResult<Prisma.$tbl_rolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tbl_user model
   */
  interface tbl_userFieldRefs {
    readonly id: FieldRef<"tbl_user", 'String'>
    readonly u_names: FieldRef<"tbl_user", 'String'>
    readonly u_phone: FieldRef<"tbl_user", 'String'>
    readonly u_usersname: FieldRef<"tbl_user", 'String'>
    readonly u_email: FieldRef<"tbl_user", 'String'>
    readonly u_password: FieldRef<"tbl_user", 'String'>
    readonly u_role_id: FieldRef<"tbl_user", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tbl_user findUnique
   */
  export type tbl_userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_user
     */
    select?: tbl_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_user
     */
    omit?: tbl_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_userInclude<ExtArgs> | null
    /**
     * Filter, which tbl_user to fetch.
     */
    where: tbl_userWhereUniqueInput
  }

  /**
   * tbl_user findUniqueOrThrow
   */
  export type tbl_userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_user
     */
    select?: tbl_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_user
     */
    omit?: tbl_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_userInclude<ExtArgs> | null
    /**
     * Filter, which tbl_user to fetch.
     */
    where: tbl_userWhereUniqueInput
  }

  /**
   * tbl_user findFirst
   */
  export type tbl_userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_user
     */
    select?: tbl_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_user
     */
    omit?: tbl_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_userInclude<ExtArgs> | null
    /**
     * Filter, which tbl_user to fetch.
     */
    where?: tbl_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_users to fetch.
     */
    orderBy?: tbl_userOrderByWithRelationInput | tbl_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_users.
     */
    cursor?: tbl_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_users.
     */
    distinct?: Tbl_userScalarFieldEnum | Tbl_userScalarFieldEnum[]
  }

  /**
   * tbl_user findFirstOrThrow
   */
  export type tbl_userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_user
     */
    select?: tbl_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_user
     */
    omit?: tbl_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_userInclude<ExtArgs> | null
    /**
     * Filter, which tbl_user to fetch.
     */
    where?: tbl_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_users to fetch.
     */
    orderBy?: tbl_userOrderByWithRelationInput | tbl_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_users.
     */
    cursor?: tbl_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_users.
     */
    distinct?: Tbl_userScalarFieldEnum | Tbl_userScalarFieldEnum[]
  }

  /**
   * tbl_user findMany
   */
  export type tbl_userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_user
     */
    select?: tbl_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_user
     */
    omit?: tbl_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_userInclude<ExtArgs> | null
    /**
     * Filter, which tbl_users to fetch.
     */
    where?: tbl_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_users to fetch.
     */
    orderBy?: tbl_userOrderByWithRelationInput | tbl_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_users.
     */
    cursor?: tbl_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_users.
     */
    skip?: number
    distinct?: Tbl_userScalarFieldEnum | Tbl_userScalarFieldEnum[]
  }

  /**
   * tbl_user create
   */
  export type tbl_userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_user
     */
    select?: tbl_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_user
     */
    omit?: tbl_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_userInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_user.
     */
    data: XOR<tbl_userCreateInput, tbl_userUncheckedCreateInput>
  }

  /**
   * tbl_user createMany
   */
  export type tbl_userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_users.
     */
    data: tbl_userCreateManyInput | tbl_userCreateManyInput[]
  }

  /**
   * tbl_user update
   */
  export type tbl_userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_user
     */
    select?: tbl_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_user
     */
    omit?: tbl_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_userInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_user.
     */
    data: XOR<tbl_userUpdateInput, tbl_userUncheckedUpdateInput>
    /**
     * Choose, which tbl_user to update.
     */
    where: tbl_userWhereUniqueInput
  }

  /**
   * tbl_user updateMany
   */
  export type tbl_userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_users.
     */
    data: XOR<tbl_userUpdateManyMutationInput, tbl_userUncheckedUpdateManyInput>
    /**
     * Filter which tbl_users to update
     */
    where?: tbl_userWhereInput
    /**
     * Limit how many tbl_users to update.
     */
    limit?: number
  }

  /**
   * tbl_user upsert
   */
  export type tbl_userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_user
     */
    select?: tbl_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_user
     */
    omit?: tbl_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_userInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_user to update in case it exists.
     */
    where: tbl_userWhereUniqueInput
    /**
     * In case the tbl_user found by the `where` argument doesn't exist, create a new tbl_user with this data.
     */
    create: XOR<tbl_userCreateInput, tbl_userUncheckedCreateInput>
    /**
     * In case the tbl_user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_userUpdateInput, tbl_userUncheckedUpdateInput>
  }

  /**
   * tbl_user delete
   */
  export type tbl_userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_user
     */
    select?: tbl_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_user
     */
    omit?: tbl_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_userInclude<ExtArgs> | null
    /**
     * Filter which tbl_user to delete.
     */
    where: tbl_userWhereUniqueInput
  }

  /**
   * tbl_user deleteMany
   */
  export type tbl_userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_users to delete
     */
    where?: tbl_userWhereInput
    /**
     * Limit how many tbl_users to delete.
     */
    limit?: number
  }

  /**
   * tbl_user findRaw
   */
  export type tbl_userFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * tbl_user aggregateRaw
   */
  export type tbl_userAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * tbl_user.role
   */
  export type tbl_user$roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_roles
     */
    select?: tbl_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_roles
     */
    omit?: tbl_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_rolesInclude<ExtArgs> | null
    where?: tbl_rolesWhereInput
  }

  /**
   * tbl_user without action
   */
  export type tbl_userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_user
     */
    select?: tbl_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_user
     */
    omit?: tbl_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_userInclude<ExtArgs> | null
  }


  /**
   * Model tbl_doctors
   */

  export type AggregateTbl_doctors = {
    _count: Tbl_doctorsCountAggregateOutputType | null
    _min: Tbl_doctorsMinAggregateOutputType | null
    _max: Tbl_doctorsMaxAggregateOutputType | null
  }

  export type Tbl_doctorsMinAggregateOutputType = {
    id: string | null
    name: string | null
    specialization: string | null
  }

  export type Tbl_doctorsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    specialization: string | null
  }

  export type Tbl_doctorsCountAggregateOutputType = {
    id: number
    name: number
    specialization: number
    _all: number
  }


  export type Tbl_doctorsMinAggregateInputType = {
    id?: true
    name?: true
    specialization?: true
  }

  export type Tbl_doctorsMaxAggregateInputType = {
    id?: true
    name?: true
    specialization?: true
  }

  export type Tbl_doctorsCountAggregateInputType = {
    id?: true
    name?: true
    specialization?: true
    _all?: true
  }

  export type Tbl_doctorsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_doctors to aggregate.
     */
    where?: tbl_doctorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_doctors to fetch.
     */
    orderBy?: tbl_doctorsOrderByWithRelationInput | tbl_doctorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_doctorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_doctors
    **/
    _count?: true | Tbl_doctorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_doctorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_doctorsMaxAggregateInputType
  }

  export type GetTbl_doctorsAggregateType<T extends Tbl_doctorsAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_doctors]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_doctors[P]>
      : GetScalarType<T[P], AggregateTbl_doctors[P]>
  }




  export type tbl_doctorsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_doctorsWhereInput
    orderBy?: tbl_doctorsOrderByWithAggregationInput | tbl_doctorsOrderByWithAggregationInput[]
    by: Tbl_doctorsScalarFieldEnum[] | Tbl_doctorsScalarFieldEnum
    having?: tbl_doctorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_doctorsCountAggregateInputType | true
    _min?: Tbl_doctorsMinAggregateInputType
    _max?: Tbl_doctorsMaxAggregateInputType
  }

  export type Tbl_doctorsGroupByOutputType = {
    id: string
    name: string
    specialization: string
    _count: Tbl_doctorsCountAggregateOutputType | null
    _min: Tbl_doctorsMinAggregateOutputType | null
    _max: Tbl_doctorsMaxAggregateOutputType | null
  }

  type GetTbl_doctorsGroupByPayload<T extends tbl_doctorsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_doctorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_doctorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_doctorsGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_doctorsGroupByOutputType[P]>
        }
      >
    >


  export type tbl_doctorsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    specialization?: boolean
    appointments?: boolean | tbl_doctors$appointmentsArgs<ExtArgs>
    solved?: boolean | tbl_doctors$solvedArgs<ExtArgs>
    _count?: boolean | Tbl_doctorsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_doctors"]>



  export type tbl_doctorsSelectScalar = {
    id?: boolean
    name?: boolean
    specialization?: boolean
  }

  export type tbl_doctorsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "specialization", ExtArgs["result"]["tbl_doctors"]>
  export type tbl_doctorsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | tbl_doctors$appointmentsArgs<ExtArgs>
    solved?: boolean | tbl_doctors$solvedArgs<ExtArgs>
    _count?: boolean | Tbl_doctorsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tbl_doctorsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_doctors"
    objects: {
      appointments: Prisma.$tbl_appointmentsPayload<ExtArgs>[]
      solved: Prisma.$tbl_solved_appointmentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      specialization: string
    }, ExtArgs["result"]["tbl_doctors"]>
    composites: {}
  }

  type tbl_doctorsGetPayload<S extends boolean | null | undefined | tbl_doctorsDefaultArgs> = $Result.GetResult<Prisma.$tbl_doctorsPayload, S>

  type tbl_doctorsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_doctorsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_doctorsCountAggregateInputType | true
    }

  export interface tbl_doctorsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_doctors'], meta: { name: 'tbl_doctors' } }
    /**
     * Find zero or one Tbl_doctors that matches the filter.
     * @param {tbl_doctorsFindUniqueArgs} args - Arguments to find a Tbl_doctors
     * @example
     * // Get one Tbl_doctors
     * const tbl_doctors = await prisma.tbl_doctors.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_doctorsFindUniqueArgs>(args: SelectSubset<T, tbl_doctorsFindUniqueArgs<ExtArgs>>): Prisma__tbl_doctorsClient<$Result.GetResult<Prisma.$tbl_doctorsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_doctors that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_doctorsFindUniqueOrThrowArgs} args - Arguments to find a Tbl_doctors
     * @example
     * // Get one Tbl_doctors
     * const tbl_doctors = await prisma.tbl_doctors.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_doctorsFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_doctorsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_doctorsClient<$Result.GetResult<Prisma.$tbl_doctorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_doctors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_doctorsFindFirstArgs} args - Arguments to find a Tbl_doctors
     * @example
     * // Get one Tbl_doctors
     * const tbl_doctors = await prisma.tbl_doctors.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_doctorsFindFirstArgs>(args?: SelectSubset<T, tbl_doctorsFindFirstArgs<ExtArgs>>): Prisma__tbl_doctorsClient<$Result.GetResult<Prisma.$tbl_doctorsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_doctors that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_doctorsFindFirstOrThrowArgs} args - Arguments to find a Tbl_doctors
     * @example
     * // Get one Tbl_doctors
     * const tbl_doctors = await prisma.tbl_doctors.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_doctorsFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_doctorsFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_doctorsClient<$Result.GetResult<Prisma.$tbl_doctorsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_doctors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_doctorsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_doctors
     * const tbl_doctors = await prisma.tbl_doctors.findMany()
     * 
     * // Get first 10 Tbl_doctors
     * const tbl_doctors = await prisma.tbl_doctors.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tbl_doctorsWithIdOnly = await prisma.tbl_doctors.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tbl_doctorsFindManyArgs>(args?: SelectSubset<T, tbl_doctorsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_doctorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_doctors.
     * @param {tbl_doctorsCreateArgs} args - Arguments to create a Tbl_doctors.
     * @example
     * // Create one Tbl_doctors
     * const Tbl_doctors = await prisma.tbl_doctors.create({
     *   data: {
     *     // ... data to create a Tbl_doctors
     *   }
     * })
     * 
     */
    create<T extends tbl_doctorsCreateArgs>(args: SelectSubset<T, tbl_doctorsCreateArgs<ExtArgs>>): Prisma__tbl_doctorsClient<$Result.GetResult<Prisma.$tbl_doctorsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_doctors.
     * @param {tbl_doctorsCreateManyArgs} args - Arguments to create many Tbl_doctors.
     * @example
     * // Create many Tbl_doctors
     * const tbl_doctors = await prisma.tbl_doctors.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_doctorsCreateManyArgs>(args?: SelectSubset<T, tbl_doctorsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tbl_doctors.
     * @param {tbl_doctorsDeleteArgs} args - Arguments to delete one Tbl_doctors.
     * @example
     * // Delete one Tbl_doctors
     * const Tbl_doctors = await prisma.tbl_doctors.delete({
     *   where: {
     *     // ... filter to delete one Tbl_doctors
     *   }
     * })
     * 
     */
    delete<T extends tbl_doctorsDeleteArgs>(args: SelectSubset<T, tbl_doctorsDeleteArgs<ExtArgs>>): Prisma__tbl_doctorsClient<$Result.GetResult<Prisma.$tbl_doctorsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_doctors.
     * @param {tbl_doctorsUpdateArgs} args - Arguments to update one Tbl_doctors.
     * @example
     * // Update one Tbl_doctors
     * const tbl_doctors = await prisma.tbl_doctors.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_doctorsUpdateArgs>(args: SelectSubset<T, tbl_doctorsUpdateArgs<ExtArgs>>): Prisma__tbl_doctorsClient<$Result.GetResult<Prisma.$tbl_doctorsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_doctors.
     * @param {tbl_doctorsDeleteManyArgs} args - Arguments to filter Tbl_doctors to delete.
     * @example
     * // Delete a few Tbl_doctors
     * const { count } = await prisma.tbl_doctors.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_doctorsDeleteManyArgs>(args?: SelectSubset<T, tbl_doctorsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_doctorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_doctors
     * const tbl_doctors = await prisma.tbl_doctors.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_doctorsUpdateManyArgs>(args: SelectSubset<T, tbl_doctorsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbl_doctors.
     * @param {tbl_doctorsUpsertArgs} args - Arguments to update or create a Tbl_doctors.
     * @example
     * // Update or create a Tbl_doctors
     * const tbl_doctors = await prisma.tbl_doctors.upsert({
     *   create: {
     *     // ... data to create a Tbl_doctors
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_doctors we want to update
     *   }
     * })
     */
    upsert<T extends tbl_doctorsUpsertArgs>(args: SelectSubset<T, tbl_doctorsUpsertArgs<ExtArgs>>): Prisma__tbl_doctorsClient<$Result.GetResult<Prisma.$tbl_doctorsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_doctors that matches the filter.
     * @param {tbl_doctorsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const tbl_doctors = await prisma.tbl_doctors.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: tbl_doctorsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Tbl_doctors.
     * @param {tbl_doctorsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const tbl_doctors = await prisma.tbl_doctors.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: tbl_doctorsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Tbl_doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_doctorsCountArgs} args - Arguments to filter Tbl_doctors to count.
     * @example
     * // Count the number of Tbl_doctors
     * const count = await prisma.tbl_doctors.count({
     *   where: {
     *     // ... the filter for the Tbl_doctors we want to count
     *   }
     * })
    **/
    count<T extends tbl_doctorsCountArgs>(
      args?: Subset<T, tbl_doctorsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_doctorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_doctorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tbl_doctorsAggregateArgs>(args: Subset<T, Tbl_doctorsAggregateArgs>): Prisma.PrismaPromise<GetTbl_doctorsAggregateType<T>>

    /**
     * Group by Tbl_doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_doctorsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tbl_doctorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_doctorsGroupByArgs['orderBy'] }
        : { orderBy?: tbl_doctorsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tbl_doctorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_doctorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_doctors model
   */
  readonly fields: tbl_doctorsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_doctors.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_doctorsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appointments<T extends tbl_doctors$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, tbl_doctors$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_appointmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    solved<T extends tbl_doctors$solvedArgs<ExtArgs> = {}>(args?: Subset<T, tbl_doctors$solvedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_solved_appointmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tbl_doctors model
   */
  interface tbl_doctorsFieldRefs {
    readonly id: FieldRef<"tbl_doctors", 'String'>
    readonly name: FieldRef<"tbl_doctors", 'String'>
    readonly specialization: FieldRef<"tbl_doctors", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tbl_doctors findUnique
   */
  export type tbl_doctorsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_doctors
     */
    select?: tbl_doctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_doctors
     */
    omit?: tbl_doctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_doctorsInclude<ExtArgs> | null
    /**
     * Filter, which tbl_doctors to fetch.
     */
    where: tbl_doctorsWhereUniqueInput
  }

  /**
   * tbl_doctors findUniqueOrThrow
   */
  export type tbl_doctorsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_doctors
     */
    select?: tbl_doctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_doctors
     */
    omit?: tbl_doctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_doctorsInclude<ExtArgs> | null
    /**
     * Filter, which tbl_doctors to fetch.
     */
    where: tbl_doctorsWhereUniqueInput
  }

  /**
   * tbl_doctors findFirst
   */
  export type tbl_doctorsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_doctors
     */
    select?: tbl_doctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_doctors
     */
    omit?: tbl_doctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_doctorsInclude<ExtArgs> | null
    /**
     * Filter, which tbl_doctors to fetch.
     */
    where?: tbl_doctorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_doctors to fetch.
     */
    orderBy?: tbl_doctorsOrderByWithRelationInput | tbl_doctorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_doctors.
     */
    cursor?: tbl_doctorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_doctors.
     */
    distinct?: Tbl_doctorsScalarFieldEnum | Tbl_doctorsScalarFieldEnum[]
  }

  /**
   * tbl_doctors findFirstOrThrow
   */
  export type tbl_doctorsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_doctors
     */
    select?: tbl_doctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_doctors
     */
    omit?: tbl_doctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_doctorsInclude<ExtArgs> | null
    /**
     * Filter, which tbl_doctors to fetch.
     */
    where?: tbl_doctorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_doctors to fetch.
     */
    orderBy?: tbl_doctorsOrderByWithRelationInput | tbl_doctorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_doctors.
     */
    cursor?: tbl_doctorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_doctors.
     */
    distinct?: Tbl_doctorsScalarFieldEnum | Tbl_doctorsScalarFieldEnum[]
  }

  /**
   * tbl_doctors findMany
   */
  export type tbl_doctorsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_doctors
     */
    select?: tbl_doctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_doctors
     */
    omit?: tbl_doctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_doctorsInclude<ExtArgs> | null
    /**
     * Filter, which tbl_doctors to fetch.
     */
    where?: tbl_doctorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_doctors to fetch.
     */
    orderBy?: tbl_doctorsOrderByWithRelationInput | tbl_doctorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_doctors.
     */
    cursor?: tbl_doctorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_doctors.
     */
    skip?: number
    distinct?: Tbl_doctorsScalarFieldEnum | Tbl_doctorsScalarFieldEnum[]
  }

  /**
   * tbl_doctors create
   */
  export type tbl_doctorsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_doctors
     */
    select?: tbl_doctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_doctors
     */
    omit?: tbl_doctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_doctorsInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_doctors.
     */
    data: XOR<tbl_doctorsCreateInput, tbl_doctorsUncheckedCreateInput>
  }

  /**
   * tbl_doctors createMany
   */
  export type tbl_doctorsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_doctors.
     */
    data: tbl_doctorsCreateManyInput | tbl_doctorsCreateManyInput[]
  }

  /**
   * tbl_doctors update
   */
  export type tbl_doctorsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_doctors
     */
    select?: tbl_doctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_doctors
     */
    omit?: tbl_doctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_doctorsInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_doctors.
     */
    data: XOR<tbl_doctorsUpdateInput, tbl_doctorsUncheckedUpdateInput>
    /**
     * Choose, which tbl_doctors to update.
     */
    where: tbl_doctorsWhereUniqueInput
  }

  /**
   * tbl_doctors updateMany
   */
  export type tbl_doctorsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_doctors.
     */
    data: XOR<tbl_doctorsUpdateManyMutationInput, tbl_doctorsUncheckedUpdateManyInput>
    /**
     * Filter which tbl_doctors to update
     */
    where?: tbl_doctorsWhereInput
    /**
     * Limit how many tbl_doctors to update.
     */
    limit?: number
  }

  /**
   * tbl_doctors upsert
   */
  export type tbl_doctorsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_doctors
     */
    select?: tbl_doctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_doctors
     */
    omit?: tbl_doctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_doctorsInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_doctors to update in case it exists.
     */
    where: tbl_doctorsWhereUniqueInput
    /**
     * In case the tbl_doctors found by the `where` argument doesn't exist, create a new tbl_doctors with this data.
     */
    create: XOR<tbl_doctorsCreateInput, tbl_doctorsUncheckedCreateInput>
    /**
     * In case the tbl_doctors was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_doctorsUpdateInput, tbl_doctorsUncheckedUpdateInput>
  }

  /**
   * tbl_doctors delete
   */
  export type tbl_doctorsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_doctors
     */
    select?: tbl_doctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_doctors
     */
    omit?: tbl_doctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_doctorsInclude<ExtArgs> | null
    /**
     * Filter which tbl_doctors to delete.
     */
    where: tbl_doctorsWhereUniqueInput
  }

  /**
   * tbl_doctors deleteMany
   */
  export type tbl_doctorsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_doctors to delete
     */
    where?: tbl_doctorsWhereInput
    /**
     * Limit how many tbl_doctors to delete.
     */
    limit?: number
  }

  /**
   * tbl_doctors findRaw
   */
  export type tbl_doctorsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * tbl_doctors aggregateRaw
   */
  export type tbl_doctorsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * tbl_doctors.appointments
   */
  export type tbl_doctors$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_appointments
     */
    select?: tbl_appointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_appointments
     */
    omit?: tbl_appointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_appointmentsInclude<ExtArgs> | null
    where?: tbl_appointmentsWhereInput
    orderBy?: tbl_appointmentsOrderByWithRelationInput | tbl_appointmentsOrderByWithRelationInput[]
    cursor?: tbl_appointmentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_appointmentsScalarFieldEnum | Tbl_appointmentsScalarFieldEnum[]
  }

  /**
   * tbl_doctors.solved
   */
  export type tbl_doctors$solvedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_solved_appointments
     */
    select?: tbl_solved_appointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_solved_appointments
     */
    omit?: tbl_solved_appointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_solved_appointmentsInclude<ExtArgs> | null
    where?: tbl_solved_appointmentsWhereInput
    orderBy?: tbl_solved_appointmentsOrderByWithRelationInput | tbl_solved_appointmentsOrderByWithRelationInput[]
    cursor?: tbl_solved_appointmentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_solved_appointmentsScalarFieldEnum | Tbl_solved_appointmentsScalarFieldEnum[]
  }

  /**
   * tbl_doctors without action
   */
  export type tbl_doctorsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_doctors
     */
    select?: tbl_doctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_doctors
     */
    omit?: tbl_doctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_doctorsInclude<ExtArgs> | null
  }


  /**
   * Model tbl_appointments
   */

  export type AggregateTbl_appointments = {
    _count: Tbl_appointmentsCountAggregateOutputType | null
    _min: Tbl_appointmentsMinAggregateOutputType | null
    _max: Tbl_appointmentsMaxAggregateOutputType | null
  }

  export type Tbl_appointmentsMinAggregateOutputType = {
    id: string | null
    doctor_id: string | null
    patient_name: string | null
    appointment_date: Date | null
    status: string | null
    created_at: Date | null
  }

  export type Tbl_appointmentsMaxAggregateOutputType = {
    id: string | null
    doctor_id: string | null
    patient_name: string | null
    appointment_date: Date | null
    status: string | null
    created_at: Date | null
  }

  export type Tbl_appointmentsCountAggregateOutputType = {
    id: number
    doctor_id: number
    patient_name: number
    appointment_date: number
    status: number
    created_at: number
    _all: number
  }


  export type Tbl_appointmentsMinAggregateInputType = {
    id?: true
    doctor_id?: true
    patient_name?: true
    appointment_date?: true
    status?: true
    created_at?: true
  }

  export type Tbl_appointmentsMaxAggregateInputType = {
    id?: true
    doctor_id?: true
    patient_name?: true
    appointment_date?: true
    status?: true
    created_at?: true
  }

  export type Tbl_appointmentsCountAggregateInputType = {
    id?: true
    doctor_id?: true
    patient_name?: true
    appointment_date?: true
    status?: true
    created_at?: true
    _all?: true
  }

  export type Tbl_appointmentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_appointments to aggregate.
     */
    where?: tbl_appointmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_appointments to fetch.
     */
    orderBy?: tbl_appointmentsOrderByWithRelationInput | tbl_appointmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_appointmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_appointments
    **/
    _count?: true | Tbl_appointmentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_appointmentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_appointmentsMaxAggregateInputType
  }

  export type GetTbl_appointmentsAggregateType<T extends Tbl_appointmentsAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_appointments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_appointments[P]>
      : GetScalarType<T[P], AggregateTbl_appointments[P]>
  }




  export type tbl_appointmentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_appointmentsWhereInput
    orderBy?: tbl_appointmentsOrderByWithAggregationInput | tbl_appointmentsOrderByWithAggregationInput[]
    by: Tbl_appointmentsScalarFieldEnum[] | Tbl_appointmentsScalarFieldEnum
    having?: tbl_appointmentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_appointmentsCountAggregateInputType | true
    _min?: Tbl_appointmentsMinAggregateInputType
    _max?: Tbl_appointmentsMaxAggregateInputType
  }

  export type Tbl_appointmentsGroupByOutputType = {
    id: string
    doctor_id: string
    patient_name: string
    appointment_date: Date
    status: string
    created_at: Date
    _count: Tbl_appointmentsCountAggregateOutputType | null
    _min: Tbl_appointmentsMinAggregateOutputType | null
    _max: Tbl_appointmentsMaxAggregateOutputType | null
  }

  type GetTbl_appointmentsGroupByPayload<T extends tbl_appointmentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_appointmentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_appointmentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_appointmentsGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_appointmentsGroupByOutputType[P]>
        }
      >
    >


  export type tbl_appointmentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctor_id?: boolean
    patient_name?: boolean
    appointment_date?: boolean
    status?: boolean
    created_at?: boolean
    doctor?: boolean | tbl_appointments$doctorArgs<ExtArgs>
    solved_appointments?: boolean | tbl_appointments$solved_appointmentsArgs<ExtArgs>
    _count?: boolean | Tbl_appointmentsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_appointments"]>



  export type tbl_appointmentsSelectScalar = {
    id?: boolean
    doctor_id?: boolean
    patient_name?: boolean
    appointment_date?: boolean
    status?: boolean
    created_at?: boolean
  }

  export type tbl_appointmentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "doctor_id" | "patient_name" | "appointment_date" | "status" | "created_at", ExtArgs["result"]["tbl_appointments"]>
  export type tbl_appointmentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | tbl_appointments$doctorArgs<ExtArgs>
    solved_appointments?: boolean | tbl_appointments$solved_appointmentsArgs<ExtArgs>
    _count?: boolean | Tbl_appointmentsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tbl_appointmentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_appointments"
    objects: {
      doctor: Prisma.$tbl_doctorsPayload<ExtArgs> | null
      solved_appointments: Prisma.$tbl_solved_appointmentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      doctor_id: string
      patient_name: string
      appointment_date: Date
      status: string
      created_at: Date
    }, ExtArgs["result"]["tbl_appointments"]>
    composites: {}
  }

  type tbl_appointmentsGetPayload<S extends boolean | null | undefined | tbl_appointmentsDefaultArgs> = $Result.GetResult<Prisma.$tbl_appointmentsPayload, S>

  type tbl_appointmentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_appointmentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_appointmentsCountAggregateInputType | true
    }

  export interface tbl_appointmentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_appointments'], meta: { name: 'tbl_appointments' } }
    /**
     * Find zero or one Tbl_appointments that matches the filter.
     * @param {tbl_appointmentsFindUniqueArgs} args - Arguments to find a Tbl_appointments
     * @example
     * // Get one Tbl_appointments
     * const tbl_appointments = await prisma.tbl_appointments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_appointmentsFindUniqueArgs>(args: SelectSubset<T, tbl_appointmentsFindUniqueArgs<ExtArgs>>): Prisma__tbl_appointmentsClient<$Result.GetResult<Prisma.$tbl_appointmentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_appointments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_appointmentsFindUniqueOrThrowArgs} args - Arguments to find a Tbl_appointments
     * @example
     * // Get one Tbl_appointments
     * const tbl_appointments = await prisma.tbl_appointments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_appointmentsFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_appointmentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_appointmentsClient<$Result.GetResult<Prisma.$tbl_appointmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_appointmentsFindFirstArgs} args - Arguments to find a Tbl_appointments
     * @example
     * // Get one Tbl_appointments
     * const tbl_appointments = await prisma.tbl_appointments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_appointmentsFindFirstArgs>(args?: SelectSubset<T, tbl_appointmentsFindFirstArgs<ExtArgs>>): Prisma__tbl_appointmentsClient<$Result.GetResult<Prisma.$tbl_appointmentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_appointments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_appointmentsFindFirstOrThrowArgs} args - Arguments to find a Tbl_appointments
     * @example
     * // Get one Tbl_appointments
     * const tbl_appointments = await prisma.tbl_appointments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_appointmentsFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_appointmentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_appointmentsClient<$Result.GetResult<Prisma.$tbl_appointmentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_appointmentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_appointments
     * const tbl_appointments = await prisma.tbl_appointments.findMany()
     * 
     * // Get first 10 Tbl_appointments
     * const tbl_appointments = await prisma.tbl_appointments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tbl_appointmentsWithIdOnly = await prisma.tbl_appointments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tbl_appointmentsFindManyArgs>(args?: SelectSubset<T, tbl_appointmentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_appointmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_appointments.
     * @param {tbl_appointmentsCreateArgs} args - Arguments to create a Tbl_appointments.
     * @example
     * // Create one Tbl_appointments
     * const Tbl_appointments = await prisma.tbl_appointments.create({
     *   data: {
     *     // ... data to create a Tbl_appointments
     *   }
     * })
     * 
     */
    create<T extends tbl_appointmentsCreateArgs>(args: SelectSubset<T, tbl_appointmentsCreateArgs<ExtArgs>>): Prisma__tbl_appointmentsClient<$Result.GetResult<Prisma.$tbl_appointmentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_appointments.
     * @param {tbl_appointmentsCreateManyArgs} args - Arguments to create many Tbl_appointments.
     * @example
     * // Create many Tbl_appointments
     * const tbl_appointments = await prisma.tbl_appointments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_appointmentsCreateManyArgs>(args?: SelectSubset<T, tbl_appointmentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tbl_appointments.
     * @param {tbl_appointmentsDeleteArgs} args - Arguments to delete one Tbl_appointments.
     * @example
     * // Delete one Tbl_appointments
     * const Tbl_appointments = await prisma.tbl_appointments.delete({
     *   where: {
     *     // ... filter to delete one Tbl_appointments
     *   }
     * })
     * 
     */
    delete<T extends tbl_appointmentsDeleteArgs>(args: SelectSubset<T, tbl_appointmentsDeleteArgs<ExtArgs>>): Prisma__tbl_appointmentsClient<$Result.GetResult<Prisma.$tbl_appointmentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_appointments.
     * @param {tbl_appointmentsUpdateArgs} args - Arguments to update one Tbl_appointments.
     * @example
     * // Update one Tbl_appointments
     * const tbl_appointments = await prisma.tbl_appointments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_appointmentsUpdateArgs>(args: SelectSubset<T, tbl_appointmentsUpdateArgs<ExtArgs>>): Prisma__tbl_appointmentsClient<$Result.GetResult<Prisma.$tbl_appointmentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_appointments.
     * @param {tbl_appointmentsDeleteManyArgs} args - Arguments to filter Tbl_appointments to delete.
     * @example
     * // Delete a few Tbl_appointments
     * const { count } = await prisma.tbl_appointments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_appointmentsDeleteManyArgs>(args?: SelectSubset<T, tbl_appointmentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_appointmentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_appointments
     * const tbl_appointments = await prisma.tbl_appointments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_appointmentsUpdateManyArgs>(args: SelectSubset<T, tbl_appointmentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbl_appointments.
     * @param {tbl_appointmentsUpsertArgs} args - Arguments to update or create a Tbl_appointments.
     * @example
     * // Update or create a Tbl_appointments
     * const tbl_appointments = await prisma.tbl_appointments.upsert({
     *   create: {
     *     // ... data to create a Tbl_appointments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_appointments we want to update
     *   }
     * })
     */
    upsert<T extends tbl_appointmentsUpsertArgs>(args: SelectSubset<T, tbl_appointmentsUpsertArgs<ExtArgs>>): Prisma__tbl_appointmentsClient<$Result.GetResult<Prisma.$tbl_appointmentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_appointments that matches the filter.
     * @param {tbl_appointmentsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const tbl_appointments = await prisma.tbl_appointments.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: tbl_appointmentsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Tbl_appointments.
     * @param {tbl_appointmentsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const tbl_appointments = await prisma.tbl_appointments.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: tbl_appointmentsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Tbl_appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_appointmentsCountArgs} args - Arguments to filter Tbl_appointments to count.
     * @example
     * // Count the number of Tbl_appointments
     * const count = await prisma.tbl_appointments.count({
     *   where: {
     *     // ... the filter for the Tbl_appointments we want to count
     *   }
     * })
    **/
    count<T extends tbl_appointmentsCountArgs>(
      args?: Subset<T, tbl_appointmentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_appointmentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_appointmentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tbl_appointmentsAggregateArgs>(args: Subset<T, Tbl_appointmentsAggregateArgs>): Prisma.PrismaPromise<GetTbl_appointmentsAggregateType<T>>

    /**
     * Group by Tbl_appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_appointmentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tbl_appointmentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_appointmentsGroupByArgs['orderBy'] }
        : { orderBy?: tbl_appointmentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tbl_appointmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_appointmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_appointments model
   */
  readonly fields: tbl_appointmentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_appointments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_appointmentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctor<T extends tbl_appointments$doctorArgs<ExtArgs> = {}>(args?: Subset<T, tbl_appointments$doctorArgs<ExtArgs>>): Prisma__tbl_doctorsClient<$Result.GetResult<Prisma.$tbl_doctorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    solved_appointments<T extends tbl_appointments$solved_appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, tbl_appointments$solved_appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_solved_appointmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tbl_appointments model
   */
  interface tbl_appointmentsFieldRefs {
    readonly id: FieldRef<"tbl_appointments", 'String'>
    readonly doctor_id: FieldRef<"tbl_appointments", 'String'>
    readonly patient_name: FieldRef<"tbl_appointments", 'String'>
    readonly appointment_date: FieldRef<"tbl_appointments", 'DateTime'>
    readonly status: FieldRef<"tbl_appointments", 'String'>
    readonly created_at: FieldRef<"tbl_appointments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tbl_appointments findUnique
   */
  export type tbl_appointmentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_appointments
     */
    select?: tbl_appointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_appointments
     */
    omit?: tbl_appointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_appointmentsInclude<ExtArgs> | null
    /**
     * Filter, which tbl_appointments to fetch.
     */
    where: tbl_appointmentsWhereUniqueInput
  }

  /**
   * tbl_appointments findUniqueOrThrow
   */
  export type tbl_appointmentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_appointments
     */
    select?: tbl_appointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_appointments
     */
    omit?: tbl_appointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_appointmentsInclude<ExtArgs> | null
    /**
     * Filter, which tbl_appointments to fetch.
     */
    where: tbl_appointmentsWhereUniqueInput
  }

  /**
   * tbl_appointments findFirst
   */
  export type tbl_appointmentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_appointments
     */
    select?: tbl_appointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_appointments
     */
    omit?: tbl_appointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_appointmentsInclude<ExtArgs> | null
    /**
     * Filter, which tbl_appointments to fetch.
     */
    where?: tbl_appointmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_appointments to fetch.
     */
    orderBy?: tbl_appointmentsOrderByWithRelationInput | tbl_appointmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_appointments.
     */
    cursor?: tbl_appointmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_appointments.
     */
    distinct?: Tbl_appointmentsScalarFieldEnum | Tbl_appointmentsScalarFieldEnum[]
  }

  /**
   * tbl_appointments findFirstOrThrow
   */
  export type tbl_appointmentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_appointments
     */
    select?: tbl_appointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_appointments
     */
    omit?: tbl_appointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_appointmentsInclude<ExtArgs> | null
    /**
     * Filter, which tbl_appointments to fetch.
     */
    where?: tbl_appointmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_appointments to fetch.
     */
    orderBy?: tbl_appointmentsOrderByWithRelationInput | tbl_appointmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_appointments.
     */
    cursor?: tbl_appointmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_appointments.
     */
    distinct?: Tbl_appointmentsScalarFieldEnum | Tbl_appointmentsScalarFieldEnum[]
  }

  /**
   * tbl_appointments findMany
   */
  export type tbl_appointmentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_appointments
     */
    select?: tbl_appointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_appointments
     */
    omit?: tbl_appointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_appointmentsInclude<ExtArgs> | null
    /**
     * Filter, which tbl_appointments to fetch.
     */
    where?: tbl_appointmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_appointments to fetch.
     */
    orderBy?: tbl_appointmentsOrderByWithRelationInput | tbl_appointmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_appointments.
     */
    cursor?: tbl_appointmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_appointments.
     */
    skip?: number
    distinct?: Tbl_appointmentsScalarFieldEnum | Tbl_appointmentsScalarFieldEnum[]
  }

  /**
   * tbl_appointments create
   */
  export type tbl_appointmentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_appointments
     */
    select?: tbl_appointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_appointments
     */
    omit?: tbl_appointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_appointmentsInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_appointments.
     */
    data: XOR<tbl_appointmentsCreateInput, tbl_appointmentsUncheckedCreateInput>
  }

  /**
   * tbl_appointments createMany
   */
  export type tbl_appointmentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_appointments.
     */
    data: tbl_appointmentsCreateManyInput | tbl_appointmentsCreateManyInput[]
  }

  /**
   * tbl_appointments update
   */
  export type tbl_appointmentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_appointments
     */
    select?: tbl_appointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_appointments
     */
    omit?: tbl_appointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_appointmentsInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_appointments.
     */
    data: XOR<tbl_appointmentsUpdateInput, tbl_appointmentsUncheckedUpdateInput>
    /**
     * Choose, which tbl_appointments to update.
     */
    where: tbl_appointmentsWhereUniqueInput
  }

  /**
   * tbl_appointments updateMany
   */
  export type tbl_appointmentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_appointments.
     */
    data: XOR<tbl_appointmentsUpdateManyMutationInput, tbl_appointmentsUncheckedUpdateManyInput>
    /**
     * Filter which tbl_appointments to update
     */
    where?: tbl_appointmentsWhereInput
    /**
     * Limit how many tbl_appointments to update.
     */
    limit?: number
  }

  /**
   * tbl_appointments upsert
   */
  export type tbl_appointmentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_appointments
     */
    select?: tbl_appointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_appointments
     */
    omit?: tbl_appointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_appointmentsInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_appointments to update in case it exists.
     */
    where: tbl_appointmentsWhereUniqueInput
    /**
     * In case the tbl_appointments found by the `where` argument doesn't exist, create a new tbl_appointments with this data.
     */
    create: XOR<tbl_appointmentsCreateInput, tbl_appointmentsUncheckedCreateInput>
    /**
     * In case the tbl_appointments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_appointmentsUpdateInput, tbl_appointmentsUncheckedUpdateInput>
  }

  /**
   * tbl_appointments delete
   */
  export type tbl_appointmentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_appointments
     */
    select?: tbl_appointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_appointments
     */
    omit?: tbl_appointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_appointmentsInclude<ExtArgs> | null
    /**
     * Filter which tbl_appointments to delete.
     */
    where: tbl_appointmentsWhereUniqueInput
  }

  /**
   * tbl_appointments deleteMany
   */
  export type tbl_appointmentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_appointments to delete
     */
    where?: tbl_appointmentsWhereInput
    /**
     * Limit how many tbl_appointments to delete.
     */
    limit?: number
  }

  /**
   * tbl_appointments findRaw
   */
  export type tbl_appointmentsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * tbl_appointments aggregateRaw
   */
  export type tbl_appointmentsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * tbl_appointments.doctor
   */
  export type tbl_appointments$doctorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_doctors
     */
    select?: tbl_doctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_doctors
     */
    omit?: tbl_doctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_doctorsInclude<ExtArgs> | null
    where?: tbl_doctorsWhereInput
  }

  /**
   * tbl_appointments.solved_appointments
   */
  export type tbl_appointments$solved_appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_solved_appointments
     */
    select?: tbl_solved_appointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_solved_appointments
     */
    omit?: tbl_solved_appointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_solved_appointmentsInclude<ExtArgs> | null
    where?: tbl_solved_appointmentsWhereInput
    orderBy?: tbl_solved_appointmentsOrderByWithRelationInput | tbl_solved_appointmentsOrderByWithRelationInput[]
    cursor?: tbl_solved_appointmentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_solved_appointmentsScalarFieldEnum | Tbl_solved_appointmentsScalarFieldEnum[]
  }

  /**
   * tbl_appointments without action
   */
  export type tbl_appointmentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_appointments
     */
    select?: tbl_appointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_appointments
     */
    omit?: tbl_appointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_appointmentsInclude<ExtArgs> | null
  }


  /**
   * Model tbl_solved_appointments
   */

  export type AggregateTbl_solved_appointments = {
    _count: Tbl_solved_appointmentsCountAggregateOutputType | null
    _min: Tbl_solved_appointmentsMinAggregateOutputType | null
    _max: Tbl_solved_appointmentsMaxAggregateOutputType | null
  }

  export type Tbl_solved_appointmentsMinAggregateOutputType = {
    id: string | null
    appointment_id: string | null
    doctor_id: string | null
    patient_name: string | null
    appointment_date: Date | null
    status: string | null
    solved_at: Date | null
  }

  export type Tbl_solved_appointmentsMaxAggregateOutputType = {
    id: string | null
    appointment_id: string | null
    doctor_id: string | null
    patient_name: string | null
    appointment_date: Date | null
    status: string | null
    solved_at: Date | null
  }

  export type Tbl_solved_appointmentsCountAggregateOutputType = {
    id: number
    appointment_id: number
    doctor_id: number
    patient_name: number
    appointment_date: number
    status: number
    solved_at: number
    _all: number
  }


  export type Tbl_solved_appointmentsMinAggregateInputType = {
    id?: true
    appointment_id?: true
    doctor_id?: true
    patient_name?: true
    appointment_date?: true
    status?: true
    solved_at?: true
  }

  export type Tbl_solved_appointmentsMaxAggregateInputType = {
    id?: true
    appointment_id?: true
    doctor_id?: true
    patient_name?: true
    appointment_date?: true
    status?: true
    solved_at?: true
  }

  export type Tbl_solved_appointmentsCountAggregateInputType = {
    id?: true
    appointment_id?: true
    doctor_id?: true
    patient_name?: true
    appointment_date?: true
    status?: true
    solved_at?: true
    _all?: true
  }

  export type Tbl_solved_appointmentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_solved_appointments to aggregate.
     */
    where?: tbl_solved_appointmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_solved_appointments to fetch.
     */
    orderBy?: tbl_solved_appointmentsOrderByWithRelationInput | tbl_solved_appointmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_solved_appointmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_solved_appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_solved_appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_solved_appointments
    **/
    _count?: true | Tbl_solved_appointmentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_solved_appointmentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_solved_appointmentsMaxAggregateInputType
  }

  export type GetTbl_solved_appointmentsAggregateType<T extends Tbl_solved_appointmentsAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_solved_appointments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_solved_appointments[P]>
      : GetScalarType<T[P], AggregateTbl_solved_appointments[P]>
  }




  export type tbl_solved_appointmentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_solved_appointmentsWhereInput
    orderBy?: tbl_solved_appointmentsOrderByWithAggregationInput | tbl_solved_appointmentsOrderByWithAggregationInput[]
    by: Tbl_solved_appointmentsScalarFieldEnum[] | Tbl_solved_appointmentsScalarFieldEnum
    having?: tbl_solved_appointmentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_solved_appointmentsCountAggregateInputType | true
    _min?: Tbl_solved_appointmentsMinAggregateInputType
    _max?: Tbl_solved_appointmentsMaxAggregateInputType
  }

  export type Tbl_solved_appointmentsGroupByOutputType = {
    id: string
    appointment_id: string
    doctor_id: string
    patient_name: string
    appointment_date: Date
    status: string
    solved_at: Date
    _count: Tbl_solved_appointmentsCountAggregateOutputType | null
    _min: Tbl_solved_appointmentsMinAggregateOutputType | null
    _max: Tbl_solved_appointmentsMaxAggregateOutputType | null
  }

  type GetTbl_solved_appointmentsGroupByPayload<T extends tbl_solved_appointmentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_solved_appointmentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_solved_appointmentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_solved_appointmentsGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_solved_appointmentsGroupByOutputType[P]>
        }
      >
    >


  export type tbl_solved_appointmentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    appointment_id?: boolean
    doctor_id?: boolean
    patient_name?: boolean
    appointment_date?: boolean
    status?: boolean
    solved_at?: boolean
    appointment?: boolean | tbl_solved_appointments$appointmentArgs<ExtArgs>
    doctor?: boolean | tbl_solved_appointments$doctorArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_solved_appointments"]>



  export type tbl_solved_appointmentsSelectScalar = {
    id?: boolean
    appointment_id?: boolean
    doctor_id?: boolean
    patient_name?: boolean
    appointment_date?: boolean
    status?: boolean
    solved_at?: boolean
  }

  export type tbl_solved_appointmentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "appointment_id" | "doctor_id" | "patient_name" | "appointment_date" | "status" | "solved_at", ExtArgs["result"]["tbl_solved_appointments"]>
  export type tbl_solved_appointmentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | tbl_solved_appointments$appointmentArgs<ExtArgs>
    doctor?: boolean | tbl_solved_appointments$doctorArgs<ExtArgs>
  }

  export type $tbl_solved_appointmentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_solved_appointments"
    objects: {
      appointment: Prisma.$tbl_appointmentsPayload<ExtArgs> | null
      doctor: Prisma.$tbl_doctorsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      appointment_id: string
      doctor_id: string
      patient_name: string
      appointment_date: Date
      status: string
      solved_at: Date
    }, ExtArgs["result"]["tbl_solved_appointments"]>
    composites: {}
  }

  type tbl_solved_appointmentsGetPayload<S extends boolean | null | undefined | tbl_solved_appointmentsDefaultArgs> = $Result.GetResult<Prisma.$tbl_solved_appointmentsPayload, S>

  type tbl_solved_appointmentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_solved_appointmentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_solved_appointmentsCountAggregateInputType | true
    }

  export interface tbl_solved_appointmentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_solved_appointments'], meta: { name: 'tbl_solved_appointments' } }
    /**
     * Find zero or one Tbl_solved_appointments that matches the filter.
     * @param {tbl_solved_appointmentsFindUniqueArgs} args - Arguments to find a Tbl_solved_appointments
     * @example
     * // Get one Tbl_solved_appointments
     * const tbl_solved_appointments = await prisma.tbl_solved_appointments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_solved_appointmentsFindUniqueArgs>(args: SelectSubset<T, tbl_solved_appointmentsFindUniqueArgs<ExtArgs>>): Prisma__tbl_solved_appointmentsClient<$Result.GetResult<Prisma.$tbl_solved_appointmentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_solved_appointments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_solved_appointmentsFindUniqueOrThrowArgs} args - Arguments to find a Tbl_solved_appointments
     * @example
     * // Get one Tbl_solved_appointments
     * const tbl_solved_appointments = await prisma.tbl_solved_appointments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_solved_appointmentsFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_solved_appointmentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_solved_appointmentsClient<$Result.GetResult<Prisma.$tbl_solved_appointmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_solved_appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_solved_appointmentsFindFirstArgs} args - Arguments to find a Tbl_solved_appointments
     * @example
     * // Get one Tbl_solved_appointments
     * const tbl_solved_appointments = await prisma.tbl_solved_appointments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_solved_appointmentsFindFirstArgs>(args?: SelectSubset<T, tbl_solved_appointmentsFindFirstArgs<ExtArgs>>): Prisma__tbl_solved_appointmentsClient<$Result.GetResult<Prisma.$tbl_solved_appointmentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_solved_appointments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_solved_appointmentsFindFirstOrThrowArgs} args - Arguments to find a Tbl_solved_appointments
     * @example
     * // Get one Tbl_solved_appointments
     * const tbl_solved_appointments = await prisma.tbl_solved_appointments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_solved_appointmentsFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_solved_appointmentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_solved_appointmentsClient<$Result.GetResult<Prisma.$tbl_solved_appointmentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_solved_appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_solved_appointmentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_solved_appointments
     * const tbl_solved_appointments = await prisma.tbl_solved_appointments.findMany()
     * 
     * // Get first 10 Tbl_solved_appointments
     * const tbl_solved_appointments = await prisma.tbl_solved_appointments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tbl_solved_appointmentsWithIdOnly = await prisma.tbl_solved_appointments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tbl_solved_appointmentsFindManyArgs>(args?: SelectSubset<T, tbl_solved_appointmentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_solved_appointmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_solved_appointments.
     * @param {tbl_solved_appointmentsCreateArgs} args - Arguments to create a Tbl_solved_appointments.
     * @example
     * // Create one Tbl_solved_appointments
     * const Tbl_solved_appointments = await prisma.tbl_solved_appointments.create({
     *   data: {
     *     // ... data to create a Tbl_solved_appointments
     *   }
     * })
     * 
     */
    create<T extends tbl_solved_appointmentsCreateArgs>(args: SelectSubset<T, tbl_solved_appointmentsCreateArgs<ExtArgs>>): Prisma__tbl_solved_appointmentsClient<$Result.GetResult<Prisma.$tbl_solved_appointmentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_solved_appointments.
     * @param {tbl_solved_appointmentsCreateManyArgs} args - Arguments to create many Tbl_solved_appointments.
     * @example
     * // Create many Tbl_solved_appointments
     * const tbl_solved_appointments = await prisma.tbl_solved_appointments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_solved_appointmentsCreateManyArgs>(args?: SelectSubset<T, tbl_solved_appointmentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tbl_solved_appointments.
     * @param {tbl_solved_appointmentsDeleteArgs} args - Arguments to delete one Tbl_solved_appointments.
     * @example
     * // Delete one Tbl_solved_appointments
     * const Tbl_solved_appointments = await prisma.tbl_solved_appointments.delete({
     *   where: {
     *     // ... filter to delete one Tbl_solved_appointments
     *   }
     * })
     * 
     */
    delete<T extends tbl_solved_appointmentsDeleteArgs>(args: SelectSubset<T, tbl_solved_appointmentsDeleteArgs<ExtArgs>>): Prisma__tbl_solved_appointmentsClient<$Result.GetResult<Prisma.$tbl_solved_appointmentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_solved_appointments.
     * @param {tbl_solved_appointmentsUpdateArgs} args - Arguments to update one Tbl_solved_appointments.
     * @example
     * // Update one Tbl_solved_appointments
     * const tbl_solved_appointments = await prisma.tbl_solved_appointments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_solved_appointmentsUpdateArgs>(args: SelectSubset<T, tbl_solved_appointmentsUpdateArgs<ExtArgs>>): Prisma__tbl_solved_appointmentsClient<$Result.GetResult<Prisma.$tbl_solved_appointmentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_solved_appointments.
     * @param {tbl_solved_appointmentsDeleteManyArgs} args - Arguments to filter Tbl_solved_appointments to delete.
     * @example
     * // Delete a few Tbl_solved_appointments
     * const { count } = await prisma.tbl_solved_appointments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_solved_appointmentsDeleteManyArgs>(args?: SelectSubset<T, tbl_solved_appointmentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_solved_appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_solved_appointmentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_solved_appointments
     * const tbl_solved_appointments = await prisma.tbl_solved_appointments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_solved_appointmentsUpdateManyArgs>(args: SelectSubset<T, tbl_solved_appointmentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbl_solved_appointments.
     * @param {tbl_solved_appointmentsUpsertArgs} args - Arguments to update or create a Tbl_solved_appointments.
     * @example
     * // Update or create a Tbl_solved_appointments
     * const tbl_solved_appointments = await prisma.tbl_solved_appointments.upsert({
     *   create: {
     *     // ... data to create a Tbl_solved_appointments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_solved_appointments we want to update
     *   }
     * })
     */
    upsert<T extends tbl_solved_appointmentsUpsertArgs>(args: SelectSubset<T, tbl_solved_appointmentsUpsertArgs<ExtArgs>>): Prisma__tbl_solved_appointmentsClient<$Result.GetResult<Prisma.$tbl_solved_appointmentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_solved_appointments that matches the filter.
     * @param {tbl_solved_appointmentsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const tbl_solved_appointments = await prisma.tbl_solved_appointments.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: tbl_solved_appointmentsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Tbl_solved_appointments.
     * @param {tbl_solved_appointmentsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const tbl_solved_appointments = await prisma.tbl_solved_appointments.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: tbl_solved_appointmentsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Tbl_solved_appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_solved_appointmentsCountArgs} args - Arguments to filter Tbl_solved_appointments to count.
     * @example
     * // Count the number of Tbl_solved_appointments
     * const count = await prisma.tbl_solved_appointments.count({
     *   where: {
     *     // ... the filter for the Tbl_solved_appointments we want to count
     *   }
     * })
    **/
    count<T extends tbl_solved_appointmentsCountArgs>(
      args?: Subset<T, tbl_solved_appointmentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_solved_appointmentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_solved_appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_solved_appointmentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tbl_solved_appointmentsAggregateArgs>(args: Subset<T, Tbl_solved_appointmentsAggregateArgs>): Prisma.PrismaPromise<GetTbl_solved_appointmentsAggregateType<T>>

    /**
     * Group by Tbl_solved_appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_solved_appointmentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tbl_solved_appointmentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_solved_appointmentsGroupByArgs['orderBy'] }
        : { orderBy?: tbl_solved_appointmentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tbl_solved_appointmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_solved_appointmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_solved_appointments model
   */
  readonly fields: tbl_solved_appointmentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_solved_appointments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_solved_appointmentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appointment<T extends tbl_solved_appointments$appointmentArgs<ExtArgs> = {}>(args?: Subset<T, tbl_solved_appointments$appointmentArgs<ExtArgs>>): Prisma__tbl_appointmentsClient<$Result.GetResult<Prisma.$tbl_appointmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    doctor<T extends tbl_solved_appointments$doctorArgs<ExtArgs> = {}>(args?: Subset<T, tbl_solved_appointments$doctorArgs<ExtArgs>>): Prisma__tbl_doctorsClient<$Result.GetResult<Prisma.$tbl_doctorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tbl_solved_appointments model
   */
  interface tbl_solved_appointmentsFieldRefs {
    readonly id: FieldRef<"tbl_solved_appointments", 'String'>
    readonly appointment_id: FieldRef<"tbl_solved_appointments", 'String'>
    readonly doctor_id: FieldRef<"tbl_solved_appointments", 'String'>
    readonly patient_name: FieldRef<"tbl_solved_appointments", 'String'>
    readonly appointment_date: FieldRef<"tbl_solved_appointments", 'DateTime'>
    readonly status: FieldRef<"tbl_solved_appointments", 'String'>
    readonly solved_at: FieldRef<"tbl_solved_appointments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tbl_solved_appointments findUnique
   */
  export type tbl_solved_appointmentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_solved_appointments
     */
    select?: tbl_solved_appointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_solved_appointments
     */
    omit?: tbl_solved_appointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_solved_appointmentsInclude<ExtArgs> | null
    /**
     * Filter, which tbl_solved_appointments to fetch.
     */
    where: tbl_solved_appointmentsWhereUniqueInput
  }

  /**
   * tbl_solved_appointments findUniqueOrThrow
   */
  export type tbl_solved_appointmentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_solved_appointments
     */
    select?: tbl_solved_appointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_solved_appointments
     */
    omit?: tbl_solved_appointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_solved_appointmentsInclude<ExtArgs> | null
    /**
     * Filter, which tbl_solved_appointments to fetch.
     */
    where: tbl_solved_appointmentsWhereUniqueInput
  }

  /**
   * tbl_solved_appointments findFirst
   */
  export type tbl_solved_appointmentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_solved_appointments
     */
    select?: tbl_solved_appointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_solved_appointments
     */
    omit?: tbl_solved_appointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_solved_appointmentsInclude<ExtArgs> | null
    /**
     * Filter, which tbl_solved_appointments to fetch.
     */
    where?: tbl_solved_appointmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_solved_appointments to fetch.
     */
    orderBy?: tbl_solved_appointmentsOrderByWithRelationInput | tbl_solved_appointmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_solved_appointments.
     */
    cursor?: tbl_solved_appointmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_solved_appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_solved_appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_solved_appointments.
     */
    distinct?: Tbl_solved_appointmentsScalarFieldEnum | Tbl_solved_appointmentsScalarFieldEnum[]
  }

  /**
   * tbl_solved_appointments findFirstOrThrow
   */
  export type tbl_solved_appointmentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_solved_appointments
     */
    select?: tbl_solved_appointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_solved_appointments
     */
    omit?: tbl_solved_appointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_solved_appointmentsInclude<ExtArgs> | null
    /**
     * Filter, which tbl_solved_appointments to fetch.
     */
    where?: tbl_solved_appointmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_solved_appointments to fetch.
     */
    orderBy?: tbl_solved_appointmentsOrderByWithRelationInput | tbl_solved_appointmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_solved_appointments.
     */
    cursor?: tbl_solved_appointmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_solved_appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_solved_appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_solved_appointments.
     */
    distinct?: Tbl_solved_appointmentsScalarFieldEnum | Tbl_solved_appointmentsScalarFieldEnum[]
  }

  /**
   * tbl_solved_appointments findMany
   */
  export type tbl_solved_appointmentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_solved_appointments
     */
    select?: tbl_solved_appointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_solved_appointments
     */
    omit?: tbl_solved_appointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_solved_appointmentsInclude<ExtArgs> | null
    /**
     * Filter, which tbl_solved_appointments to fetch.
     */
    where?: tbl_solved_appointmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_solved_appointments to fetch.
     */
    orderBy?: tbl_solved_appointmentsOrderByWithRelationInput | tbl_solved_appointmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_solved_appointments.
     */
    cursor?: tbl_solved_appointmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_solved_appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_solved_appointments.
     */
    skip?: number
    distinct?: Tbl_solved_appointmentsScalarFieldEnum | Tbl_solved_appointmentsScalarFieldEnum[]
  }

  /**
   * tbl_solved_appointments create
   */
  export type tbl_solved_appointmentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_solved_appointments
     */
    select?: tbl_solved_appointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_solved_appointments
     */
    omit?: tbl_solved_appointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_solved_appointmentsInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_solved_appointments.
     */
    data: XOR<tbl_solved_appointmentsCreateInput, tbl_solved_appointmentsUncheckedCreateInput>
  }

  /**
   * tbl_solved_appointments createMany
   */
  export type tbl_solved_appointmentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_solved_appointments.
     */
    data: tbl_solved_appointmentsCreateManyInput | tbl_solved_appointmentsCreateManyInput[]
  }

  /**
   * tbl_solved_appointments update
   */
  export type tbl_solved_appointmentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_solved_appointments
     */
    select?: tbl_solved_appointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_solved_appointments
     */
    omit?: tbl_solved_appointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_solved_appointmentsInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_solved_appointments.
     */
    data: XOR<tbl_solved_appointmentsUpdateInput, tbl_solved_appointmentsUncheckedUpdateInput>
    /**
     * Choose, which tbl_solved_appointments to update.
     */
    where: tbl_solved_appointmentsWhereUniqueInput
  }

  /**
   * tbl_solved_appointments updateMany
   */
  export type tbl_solved_appointmentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_solved_appointments.
     */
    data: XOR<tbl_solved_appointmentsUpdateManyMutationInput, tbl_solved_appointmentsUncheckedUpdateManyInput>
    /**
     * Filter which tbl_solved_appointments to update
     */
    where?: tbl_solved_appointmentsWhereInput
    /**
     * Limit how many tbl_solved_appointments to update.
     */
    limit?: number
  }

  /**
   * tbl_solved_appointments upsert
   */
  export type tbl_solved_appointmentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_solved_appointments
     */
    select?: tbl_solved_appointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_solved_appointments
     */
    omit?: tbl_solved_appointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_solved_appointmentsInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_solved_appointments to update in case it exists.
     */
    where: tbl_solved_appointmentsWhereUniqueInput
    /**
     * In case the tbl_solved_appointments found by the `where` argument doesn't exist, create a new tbl_solved_appointments with this data.
     */
    create: XOR<tbl_solved_appointmentsCreateInput, tbl_solved_appointmentsUncheckedCreateInput>
    /**
     * In case the tbl_solved_appointments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_solved_appointmentsUpdateInput, tbl_solved_appointmentsUncheckedUpdateInput>
  }

  /**
   * tbl_solved_appointments delete
   */
  export type tbl_solved_appointmentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_solved_appointments
     */
    select?: tbl_solved_appointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_solved_appointments
     */
    omit?: tbl_solved_appointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_solved_appointmentsInclude<ExtArgs> | null
    /**
     * Filter which tbl_solved_appointments to delete.
     */
    where: tbl_solved_appointmentsWhereUniqueInput
  }

  /**
   * tbl_solved_appointments deleteMany
   */
  export type tbl_solved_appointmentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_solved_appointments to delete
     */
    where?: tbl_solved_appointmentsWhereInput
    /**
     * Limit how many tbl_solved_appointments to delete.
     */
    limit?: number
  }

  /**
   * tbl_solved_appointments findRaw
   */
  export type tbl_solved_appointmentsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * tbl_solved_appointments aggregateRaw
   */
  export type tbl_solved_appointmentsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * tbl_solved_appointments.appointment
   */
  export type tbl_solved_appointments$appointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_appointments
     */
    select?: tbl_appointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_appointments
     */
    omit?: tbl_appointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_appointmentsInclude<ExtArgs> | null
    where?: tbl_appointmentsWhereInput
  }

  /**
   * tbl_solved_appointments.doctor
   */
  export type tbl_solved_appointments$doctorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_doctors
     */
    select?: tbl_doctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_doctors
     */
    omit?: tbl_doctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_doctorsInclude<ExtArgs> | null
    where?: tbl_doctorsWhereInput
  }

  /**
   * tbl_solved_appointments without action
   */
  export type tbl_solved_appointmentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_solved_appointments
     */
    select?: tbl_solved_appointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_solved_appointments
     */
    omit?: tbl_solved_appointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_solved_appointmentsInclude<ExtArgs> | null
  }


  /**
   * Model tbl_heart_data
   */

  export type AggregateTbl_heart_data = {
    _count: Tbl_heart_dataCountAggregateOutputType | null
    _avg: Tbl_heart_dataAvgAggregateOutputType | null
    _sum: Tbl_heart_dataSumAggregateOutputType | null
    _min: Tbl_heart_dataMinAggregateOutputType | null
    _max: Tbl_heart_dataMaxAggregateOutputType | null
  }

  export type Tbl_heart_dataAvgAggregateOutputType = {
    heartbeat: number | null
  }

  export type Tbl_heart_dataSumAggregateOutputType = {
    heartbeat: number | null
  }

  export type Tbl_heart_dataMinAggregateOutputType = {
    id: string | null
    patient_name: string | null
    heartbeat: number | null
    status: string | null
    recorded_at: Date | null
  }

  export type Tbl_heart_dataMaxAggregateOutputType = {
    id: string | null
    patient_name: string | null
    heartbeat: number | null
    status: string | null
    recorded_at: Date | null
  }

  export type Tbl_heart_dataCountAggregateOutputType = {
    id: number
    patient_name: number
    heartbeat: number
    status: number
    recorded_at: number
    _all: number
  }


  export type Tbl_heart_dataAvgAggregateInputType = {
    heartbeat?: true
  }

  export type Tbl_heart_dataSumAggregateInputType = {
    heartbeat?: true
  }

  export type Tbl_heart_dataMinAggregateInputType = {
    id?: true
    patient_name?: true
    heartbeat?: true
    status?: true
    recorded_at?: true
  }

  export type Tbl_heart_dataMaxAggregateInputType = {
    id?: true
    patient_name?: true
    heartbeat?: true
    status?: true
    recorded_at?: true
  }

  export type Tbl_heart_dataCountAggregateInputType = {
    id?: true
    patient_name?: true
    heartbeat?: true
    status?: true
    recorded_at?: true
    _all?: true
  }

  export type Tbl_heart_dataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_heart_data to aggregate.
     */
    where?: tbl_heart_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_heart_data to fetch.
     */
    orderBy?: tbl_heart_dataOrderByWithRelationInput | tbl_heart_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_heart_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_heart_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_heart_data.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_heart_data
    **/
    _count?: true | Tbl_heart_dataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_heart_dataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_heart_dataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_heart_dataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_heart_dataMaxAggregateInputType
  }

  export type GetTbl_heart_dataAggregateType<T extends Tbl_heart_dataAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_heart_data]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_heart_data[P]>
      : GetScalarType<T[P], AggregateTbl_heart_data[P]>
  }




  export type tbl_heart_dataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_heart_dataWhereInput
    orderBy?: tbl_heart_dataOrderByWithAggregationInput | tbl_heart_dataOrderByWithAggregationInput[]
    by: Tbl_heart_dataScalarFieldEnum[] | Tbl_heart_dataScalarFieldEnum
    having?: tbl_heart_dataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_heart_dataCountAggregateInputType | true
    _avg?: Tbl_heart_dataAvgAggregateInputType
    _sum?: Tbl_heart_dataSumAggregateInputType
    _min?: Tbl_heart_dataMinAggregateInputType
    _max?: Tbl_heart_dataMaxAggregateInputType
  }

  export type Tbl_heart_dataGroupByOutputType = {
    id: string
    patient_name: string
    heartbeat: number
    status: string
    recorded_at: Date
    _count: Tbl_heart_dataCountAggregateOutputType | null
    _avg: Tbl_heart_dataAvgAggregateOutputType | null
    _sum: Tbl_heart_dataSumAggregateOutputType | null
    _min: Tbl_heart_dataMinAggregateOutputType | null
    _max: Tbl_heart_dataMaxAggregateOutputType | null
  }

  type GetTbl_heart_dataGroupByPayload<T extends tbl_heart_dataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_heart_dataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_heart_dataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_heart_dataGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_heart_dataGroupByOutputType[P]>
        }
      >
    >


  export type tbl_heart_dataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patient_name?: boolean
    heartbeat?: boolean
    status?: boolean
    recorded_at?: boolean
  }, ExtArgs["result"]["tbl_heart_data"]>



  export type tbl_heart_dataSelectScalar = {
    id?: boolean
    patient_name?: boolean
    heartbeat?: boolean
    status?: boolean
    recorded_at?: boolean
  }

  export type tbl_heart_dataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patient_name" | "heartbeat" | "status" | "recorded_at", ExtArgs["result"]["tbl_heart_data"]>

  export type $tbl_heart_dataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_heart_data"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      patient_name: string
      heartbeat: number
      status: string
      recorded_at: Date
    }, ExtArgs["result"]["tbl_heart_data"]>
    composites: {}
  }

  type tbl_heart_dataGetPayload<S extends boolean | null | undefined | tbl_heart_dataDefaultArgs> = $Result.GetResult<Prisma.$tbl_heart_dataPayload, S>

  type tbl_heart_dataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_heart_dataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_heart_dataCountAggregateInputType | true
    }

  export interface tbl_heart_dataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_heart_data'], meta: { name: 'tbl_heart_data' } }
    /**
     * Find zero or one Tbl_heart_data that matches the filter.
     * @param {tbl_heart_dataFindUniqueArgs} args - Arguments to find a Tbl_heart_data
     * @example
     * // Get one Tbl_heart_data
     * const tbl_heart_data = await prisma.tbl_heart_data.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_heart_dataFindUniqueArgs>(args: SelectSubset<T, tbl_heart_dataFindUniqueArgs<ExtArgs>>): Prisma__tbl_heart_dataClient<$Result.GetResult<Prisma.$tbl_heart_dataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_heart_data that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_heart_dataFindUniqueOrThrowArgs} args - Arguments to find a Tbl_heart_data
     * @example
     * // Get one Tbl_heart_data
     * const tbl_heart_data = await prisma.tbl_heart_data.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_heart_dataFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_heart_dataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_heart_dataClient<$Result.GetResult<Prisma.$tbl_heart_dataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_heart_data that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_heart_dataFindFirstArgs} args - Arguments to find a Tbl_heart_data
     * @example
     * // Get one Tbl_heart_data
     * const tbl_heart_data = await prisma.tbl_heart_data.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_heart_dataFindFirstArgs>(args?: SelectSubset<T, tbl_heart_dataFindFirstArgs<ExtArgs>>): Prisma__tbl_heart_dataClient<$Result.GetResult<Prisma.$tbl_heart_dataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_heart_data that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_heart_dataFindFirstOrThrowArgs} args - Arguments to find a Tbl_heart_data
     * @example
     * // Get one Tbl_heart_data
     * const tbl_heart_data = await prisma.tbl_heart_data.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_heart_dataFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_heart_dataFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_heart_dataClient<$Result.GetResult<Prisma.$tbl_heart_dataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_heart_data that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_heart_dataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_heart_data
     * const tbl_heart_data = await prisma.tbl_heart_data.findMany()
     * 
     * // Get first 10 Tbl_heart_data
     * const tbl_heart_data = await prisma.tbl_heart_data.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tbl_heart_dataWithIdOnly = await prisma.tbl_heart_data.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tbl_heart_dataFindManyArgs>(args?: SelectSubset<T, tbl_heart_dataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_heart_dataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_heart_data.
     * @param {tbl_heart_dataCreateArgs} args - Arguments to create a Tbl_heart_data.
     * @example
     * // Create one Tbl_heart_data
     * const Tbl_heart_data = await prisma.tbl_heart_data.create({
     *   data: {
     *     // ... data to create a Tbl_heart_data
     *   }
     * })
     * 
     */
    create<T extends tbl_heart_dataCreateArgs>(args: SelectSubset<T, tbl_heart_dataCreateArgs<ExtArgs>>): Prisma__tbl_heart_dataClient<$Result.GetResult<Prisma.$tbl_heart_dataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_heart_data.
     * @param {tbl_heart_dataCreateManyArgs} args - Arguments to create many Tbl_heart_data.
     * @example
     * // Create many Tbl_heart_data
     * const tbl_heart_data = await prisma.tbl_heart_data.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_heart_dataCreateManyArgs>(args?: SelectSubset<T, tbl_heart_dataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tbl_heart_data.
     * @param {tbl_heart_dataDeleteArgs} args - Arguments to delete one Tbl_heart_data.
     * @example
     * // Delete one Tbl_heart_data
     * const Tbl_heart_data = await prisma.tbl_heart_data.delete({
     *   where: {
     *     // ... filter to delete one Tbl_heart_data
     *   }
     * })
     * 
     */
    delete<T extends tbl_heart_dataDeleteArgs>(args: SelectSubset<T, tbl_heart_dataDeleteArgs<ExtArgs>>): Prisma__tbl_heart_dataClient<$Result.GetResult<Prisma.$tbl_heart_dataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_heart_data.
     * @param {tbl_heart_dataUpdateArgs} args - Arguments to update one Tbl_heart_data.
     * @example
     * // Update one Tbl_heart_data
     * const tbl_heart_data = await prisma.tbl_heart_data.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_heart_dataUpdateArgs>(args: SelectSubset<T, tbl_heart_dataUpdateArgs<ExtArgs>>): Prisma__tbl_heart_dataClient<$Result.GetResult<Prisma.$tbl_heart_dataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_heart_data.
     * @param {tbl_heart_dataDeleteManyArgs} args - Arguments to filter Tbl_heart_data to delete.
     * @example
     * // Delete a few Tbl_heart_data
     * const { count } = await prisma.tbl_heart_data.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_heart_dataDeleteManyArgs>(args?: SelectSubset<T, tbl_heart_dataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_heart_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_heart_dataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_heart_data
     * const tbl_heart_data = await prisma.tbl_heart_data.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_heart_dataUpdateManyArgs>(args: SelectSubset<T, tbl_heart_dataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbl_heart_data.
     * @param {tbl_heart_dataUpsertArgs} args - Arguments to update or create a Tbl_heart_data.
     * @example
     * // Update or create a Tbl_heart_data
     * const tbl_heart_data = await prisma.tbl_heart_data.upsert({
     *   create: {
     *     // ... data to create a Tbl_heart_data
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_heart_data we want to update
     *   }
     * })
     */
    upsert<T extends tbl_heart_dataUpsertArgs>(args: SelectSubset<T, tbl_heart_dataUpsertArgs<ExtArgs>>): Prisma__tbl_heart_dataClient<$Result.GetResult<Prisma.$tbl_heart_dataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_heart_data that matches the filter.
     * @param {tbl_heart_dataFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const tbl_heart_data = await prisma.tbl_heart_data.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: tbl_heart_dataFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Tbl_heart_data.
     * @param {tbl_heart_dataAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const tbl_heart_data = await prisma.tbl_heart_data.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: tbl_heart_dataAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Tbl_heart_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_heart_dataCountArgs} args - Arguments to filter Tbl_heart_data to count.
     * @example
     * // Count the number of Tbl_heart_data
     * const count = await prisma.tbl_heart_data.count({
     *   where: {
     *     // ... the filter for the Tbl_heart_data we want to count
     *   }
     * })
    **/
    count<T extends tbl_heart_dataCountArgs>(
      args?: Subset<T, tbl_heart_dataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_heart_dataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_heart_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_heart_dataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tbl_heart_dataAggregateArgs>(args: Subset<T, Tbl_heart_dataAggregateArgs>): Prisma.PrismaPromise<GetTbl_heart_dataAggregateType<T>>

    /**
     * Group by Tbl_heart_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_heart_dataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tbl_heart_dataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_heart_dataGroupByArgs['orderBy'] }
        : { orderBy?: tbl_heart_dataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tbl_heart_dataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_heart_dataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_heart_data model
   */
  readonly fields: tbl_heart_dataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_heart_data.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_heart_dataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tbl_heart_data model
   */
  interface tbl_heart_dataFieldRefs {
    readonly id: FieldRef<"tbl_heart_data", 'String'>
    readonly patient_name: FieldRef<"tbl_heart_data", 'String'>
    readonly heartbeat: FieldRef<"tbl_heart_data", 'Int'>
    readonly status: FieldRef<"tbl_heart_data", 'String'>
    readonly recorded_at: FieldRef<"tbl_heart_data", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tbl_heart_data findUnique
   */
  export type tbl_heart_dataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_heart_data
     */
    select?: tbl_heart_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_heart_data
     */
    omit?: tbl_heart_dataOmit<ExtArgs> | null
    /**
     * Filter, which tbl_heart_data to fetch.
     */
    where: tbl_heart_dataWhereUniqueInput
  }

  /**
   * tbl_heart_data findUniqueOrThrow
   */
  export type tbl_heart_dataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_heart_data
     */
    select?: tbl_heart_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_heart_data
     */
    omit?: tbl_heart_dataOmit<ExtArgs> | null
    /**
     * Filter, which tbl_heart_data to fetch.
     */
    where: tbl_heart_dataWhereUniqueInput
  }

  /**
   * tbl_heart_data findFirst
   */
  export type tbl_heart_dataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_heart_data
     */
    select?: tbl_heart_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_heart_data
     */
    omit?: tbl_heart_dataOmit<ExtArgs> | null
    /**
     * Filter, which tbl_heart_data to fetch.
     */
    where?: tbl_heart_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_heart_data to fetch.
     */
    orderBy?: tbl_heart_dataOrderByWithRelationInput | tbl_heart_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_heart_data.
     */
    cursor?: tbl_heart_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_heart_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_heart_data.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_heart_data.
     */
    distinct?: Tbl_heart_dataScalarFieldEnum | Tbl_heart_dataScalarFieldEnum[]
  }

  /**
   * tbl_heart_data findFirstOrThrow
   */
  export type tbl_heart_dataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_heart_data
     */
    select?: tbl_heart_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_heart_data
     */
    omit?: tbl_heart_dataOmit<ExtArgs> | null
    /**
     * Filter, which tbl_heart_data to fetch.
     */
    where?: tbl_heart_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_heart_data to fetch.
     */
    orderBy?: tbl_heart_dataOrderByWithRelationInput | tbl_heart_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_heart_data.
     */
    cursor?: tbl_heart_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_heart_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_heart_data.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_heart_data.
     */
    distinct?: Tbl_heart_dataScalarFieldEnum | Tbl_heart_dataScalarFieldEnum[]
  }

  /**
   * tbl_heart_data findMany
   */
  export type tbl_heart_dataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_heart_data
     */
    select?: tbl_heart_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_heart_data
     */
    omit?: tbl_heart_dataOmit<ExtArgs> | null
    /**
     * Filter, which tbl_heart_data to fetch.
     */
    where?: tbl_heart_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_heart_data to fetch.
     */
    orderBy?: tbl_heart_dataOrderByWithRelationInput | tbl_heart_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_heart_data.
     */
    cursor?: tbl_heart_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_heart_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_heart_data.
     */
    skip?: number
    distinct?: Tbl_heart_dataScalarFieldEnum | Tbl_heart_dataScalarFieldEnum[]
  }

  /**
   * tbl_heart_data create
   */
  export type tbl_heart_dataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_heart_data
     */
    select?: tbl_heart_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_heart_data
     */
    omit?: tbl_heart_dataOmit<ExtArgs> | null
    /**
     * The data needed to create a tbl_heart_data.
     */
    data: XOR<tbl_heart_dataCreateInput, tbl_heart_dataUncheckedCreateInput>
  }

  /**
   * tbl_heart_data createMany
   */
  export type tbl_heart_dataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_heart_data.
     */
    data: tbl_heart_dataCreateManyInput | tbl_heart_dataCreateManyInput[]
  }

  /**
   * tbl_heart_data update
   */
  export type tbl_heart_dataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_heart_data
     */
    select?: tbl_heart_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_heart_data
     */
    omit?: tbl_heart_dataOmit<ExtArgs> | null
    /**
     * The data needed to update a tbl_heart_data.
     */
    data: XOR<tbl_heart_dataUpdateInput, tbl_heart_dataUncheckedUpdateInput>
    /**
     * Choose, which tbl_heart_data to update.
     */
    where: tbl_heart_dataWhereUniqueInput
  }

  /**
   * tbl_heart_data updateMany
   */
  export type tbl_heart_dataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_heart_data.
     */
    data: XOR<tbl_heart_dataUpdateManyMutationInput, tbl_heart_dataUncheckedUpdateManyInput>
    /**
     * Filter which tbl_heart_data to update
     */
    where?: tbl_heart_dataWhereInput
    /**
     * Limit how many tbl_heart_data to update.
     */
    limit?: number
  }

  /**
   * tbl_heart_data upsert
   */
  export type tbl_heart_dataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_heart_data
     */
    select?: tbl_heart_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_heart_data
     */
    omit?: tbl_heart_dataOmit<ExtArgs> | null
    /**
     * The filter to search for the tbl_heart_data to update in case it exists.
     */
    where: tbl_heart_dataWhereUniqueInput
    /**
     * In case the tbl_heart_data found by the `where` argument doesn't exist, create a new tbl_heart_data with this data.
     */
    create: XOR<tbl_heart_dataCreateInput, tbl_heart_dataUncheckedCreateInput>
    /**
     * In case the tbl_heart_data was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_heart_dataUpdateInput, tbl_heart_dataUncheckedUpdateInput>
  }

  /**
   * tbl_heart_data delete
   */
  export type tbl_heart_dataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_heart_data
     */
    select?: tbl_heart_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_heart_data
     */
    omit?: tbl_heart_dataOmit<ExtArgs> | null
    /**
     * Filter which tbl_heart_data to delete.
     */
    where: tbl_heart_dataWhereUniqueInput
  }

  /**
   * tbl_heart_data deleteMany
   */
  export type tbl_heart_dataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_heart_data to delete
     */
    where?: tbl_heart_dataWhereInput
    /**
     * Limit how many tbl_heart_data to delete.
     */
    limit?: number
  }

  /**
   * tbl_heart_data findRaw
   */
  export type tbl_heart_dataFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * tbl_heart_data aggregateRaw
   */
  export type tbl_heart_dataAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * tbl_heart_data without action
   */
  export type tbl_heart_dataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_heart_data
     */
    select?: tbl_heart_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_heart_data
     */
    omit?: tbl_heart_dataOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const Tbl_rolesScalarFieldEnum: {
    id: 'id',
    role_name: 'role_name'
  };

  export type Tbl_rolesScalarFieldEnum = (typeof Tbl_rolesScalarFieldEnum)[keyof typeof Tbl_rolesScalarFieldEnum]


  export const Tbl_usersScalarFieldEnum: {
    id: 'id',
    names: 'names',
    email: 'email',
    password: 'password',
    role_id: 'role_id'
  };

  export type Tbl_usersScalarFieldEnum = (typeof Tbl_usersScalarFieldEnum)[keyof typeof Tbl_usersScalarFieldEnum]


  export const Tbl_userScalarFieldEnum: {
    id: 'id',
    u_names: 'u_names',
    u_phone: 'u_phone',
    u_usersname: 'u_usersname',
    u_email: 'u_email',
    u_password: 'u_password',
    u_role_id: 'u_role_id'
  };

  export type Tbl_userScalarFieldEnum = (typeof Tbl_userScalarFieldEnum)[keyof typeof Tbl_userScalarFieldEnum]


  export const Tbl_doctorsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    specialization: 'specialization'
  };

  export type Tbl_doctorsScalarFieldEnum = (typeof Tbl_doctorsScalarFieldEnum)[keyof typeof Tbl_doctorsScalarFieldEnum]


  export const Tbl_appointmentsScalarFieldEnum: {
    id: 'id',
    doctor_id: 'doctor_id',
    patient_name: 'patient_name',
    appointment_date: 'appointment_date',
    status: 'status',
    created_at: 'created_at'
  };

  export type Tbl_appointmentsScalarFieldEnum = (typeof Tbl_appointmentsScalarFieldEnum)[keyof typeof Tbl_appointmentsScalarFieldEnum]


  export const Tbl_solved_appointmentsScalarFieldEnum: {
    id: 'id',
    appointment_id: 'appointment_id',
    doctor_id: 'doctor_id',
    patient_name: 'patient_name',
    appointment_date: 'appointment_date',
    status: 'status',
    solved_at: 'solved_at'
  };

  export type Tbl_solved_appointmentsScalarFieldEnum = (typeof Tbl_solved_appointmentsScalarFieldEnum)[keyof typeof Tbl_solved_appointmentsScalarFieldEnum]


  export const Tbl_heart_dataScalarFieldEnum: {
    id: 'id',
    patient_name: 'patient_name',
    heartbeat: 'heartbeat',
    status: 'status',
    recorded_at: 'recorded_at'
  };

  export type Tbl_heart_dataScalarFieldEnum = (typeof Tbl_heart_dataScalarFieldEnum)[keyof typeof Tbl_heart_dataScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type tbl_rolesWhereInput = {
    AND?: tbl_rolesWhereInput | tbl_rolesWhereInput[]
    OR?: tbl_rolesWhereInput[]
    NOT?: tbl_rolesWhereInput | tbl_rolesWhereInput[]
    id?: StringFilter<"tbl_roles"> | string
    role_name?: StringFilter<"tbl_roles"> | string
    users?: Tbl_usersListRelationFilter
    system_users?: Tbl_userListRelationFilter
  }

  export type tbl_rolesOrderByWithRelationInput = {
    id?: SortOrder
    role_name?: SortOrder
    users?: tbl_usersOrderByRelationAggregateInput
    system_users?: tbl_userOrderByRelationAggregateInput
  }

  export type tbl_rolesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    role_name?: string
    AND?: tbl_rolesWhereInput | tbl_rolesWhereInput[]
    OR?: tbl_rolesWhereInput[]
    NOT?: tbl_rolesWhereInput | tbl_rolesWhereInput[]
    users?: Tbl_usersListRelationFilter
    system_users?: Tbl_userListRelationFilter
  }, "id" | "role_name">

  export type tbl_rolesOrderByWithAggregationInput = {
    id?: SortOrder
    role_name?: SortOrder
    _count?: tbl_rolesCountOrderByAggregateInput
    _max?: tbl_rolesMaxOrderByAggregateInput
    _min?: tbl_rolesMinOrderByAggregateInput
  }

  export type tbl_rolesScalarWhereWithAggregatesInput = {
    AND?: tbl_rolesScalarWhereWithAggregatesInput | tbl_rolesScalarWhereWithAggregatesInput[]
    OR?: tbl_rolesScalarWhereWithAggregatesInput[]
    NOT?: tbl_rolesScalarWhereWithAggregatesInput | tbl_rolesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"tbl_roles"> | string
    role_name?: StringWithAggregatesFilter<"tbl_roles"> | string
  }

  export type tbl_usersWhereInput = {
    AND?: tbl_usersWhereInput | tbl_usersWhereInput[]
    OR?: tbl_usersWhereInput[]
    NOT?: tbl_usersWhereInput | tbl_usersWhereInput[]
    id?: StringFilter<"tbl_users"> | string
    names?: StringFilter<"tbl_users"> | string
    email?: StringFilter<"tbl_users"> | string
    password?: StringFilter<"tbl_users"> | string
    role_id?: StringFilter<"tbl_users"> | string
    role?: XOR<Tbl_rolesNullableScalarRelationFilter, tbl_rolesWhereInput> | null
  }

  export type tbl_usersOrderByWithRelationInput = {
    id?: SortOrder
    names?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role_id?: SortOrder
    role?: tbl_rolesOrderByWithRelationInput
  }

  export type tbl_usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: tbl_usersWhereInput | tbl_usersWhereInput[]
    OR?: tbl_usersWhereInput[]
    NOT?: tbl_usersWhereInput | tbl_usersWhereInput[]
    names?: StringFilter<"tbl_users"> | string
    password?: StringFilter<"tbl_users"> | string
    role_id?: StringFilter<"tbl_users"> | string
    role?: XOR<Tbl_rolesNullableScalarRelationFilter, tbl_rolesWhereInput> | null
  }, "id" | "email">

  export type tbl_usersOrderByWithAggregationInput = {
    id?: SortOrder
    names?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role_id?: SortOrder
    _count?: tbl_usersCountOrderByAggregateInput
    _max?: tbl_usersMaxOrderByAggregateInput
    _min?: tbl_usersMinOrderByAggregateInput
  }

  export type tbl_usersScalarWhereWithAggregatesInput = {
    AND?: tbl_usersScalarWhereWithAggregatesInput | tbl_usersScalarWhereWithAggregatesInput[]
    OR?: tbl_usersScalarWhereWithAggregatesInput[]
    NOT?: tbl_usersScalarWhereWithAggregatesInput | tbl_usersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"tbl_users"> | string
    names?: StringWithAggregatesFilter<"tbl_users"> | string
    email?: StringWithAggregatesFilter<"tbl_users"> | string
    password?: StringWithAggregatesFilter<"tbl_users"> | string
    role_id?: StringWithAggregatesFilter<"tbl_users"> | string
  }

  export type tbl_userWhereInput = {
    AND?: tbl_userWhereInput | tbl_userWhereInput[]
    OR?: tbl_userWhereInput[]
    NOT?: tbl_userWhereInput | tbl_userWhereInput[]
    id?: StringFilter<"tbl_user"> | string
    u_names?: StringFilter<"tbl_user"> | string
    u_phone?: StringFilter<"tbl_user"> | string
    u_usersname?: StringFilter<"tbl_user"> | string
    u_email?: StringFilter<"tbl_user"> | string
    u_password?: StringFilter<"tbl_user"> | string
    u_role_id?: StringFilter<"tbl_user"> | string
    role?: XOR<Tbl_rolesNullableScalarRelationFilter, tbl_rolesWhereInput> | null
  }

  export type tbl_userOrderByWithRelationInput = {
    id?: SortOrder
    u_names?: SortOrder
    u_phone?: SortOrder
    u_usersname?: SortOrder
    u_email?: SortOrder
    u_password?: SortOrder
    u_role_id?: SortOrder
    role?: tbl_rolesOrderByWithRelationInput
  }

  export type tbl_userWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    u_usersname?: string
    u_email?: string
    AND?: tbl_userWhereInput | tbl_userWhereInput[]
    OR?: tbl_userWhereInput[]
    NOT?: tbl_userWhereInput | tbl_userWhereInput[]
    u_names?: StringFilter<"tbl_user"> | string
    u_phone?: StringFilter<"tbl_user"> | string
    u_password?: StringFilter<"tbl_user"> | string
    u_role_id?: StringFilter<"tbl_user"> | string
    role?: XOR<Tbl_rolesNullableScalarRelationFilter, tbl_rolesWhereInput> | null
  }, "id" | "u_usersname" | "u_email">

  export type tbl_userOrderByWithAggregationInput = {
    id?: SortOrder
    u_names?: SortOrder
    u_phone?: SortOrder
    u_usersname?: SortOrder
    u_email?: SortOrder
    u_password?: SortOrder
    u_role_id?: SortOrder
    _count?: tbl_userCountOrderByAggregateInput
    _max?: tbl_userMaxOrderByAggregateInput
    _min?: tbl_userMinOrderByAggregateInput
  }

  export type tbl_userScalarWhereWithAggregatesInput = {
    AND?: tbl_userScalarWhereWithAggregatesInput | tbl_userScalarWhereWithAggregatesInput[]
    OR?: tbl_userScalarWhereWithAggregatesInput[]
    NOT?: tbl_userScalarWhereWithAggregatesInput | tbl_userScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"tbl_user"> | string
    u_names?: StringWithAggregatesFilter<"tbl_user"> | string
    u_phone?: StringWithAggregatesFilter<"tbl_user"> | string
    u_usersname?: StringWithAggregatesFilter<"tbl_user"> | string
    u_email?: StringWithAggregatesFilter<"tbl_user"> | string
    u_password?: StringWithAggregatesFilter<"tbl_user"> | string
    u_role_id?: StringWithAggregatesFilter<"tbl_user"> | string
  }

  export type tbl_doctorsWhereInput = {
    AND?: tbl_doctorsWhereInput | tbl_doctorsWhereInput[]
    OR?: tbl_doctorsWhereInput[]
    NOT?: tbl_doctorsWhereInput | tbl_doctorsWhereInput[]
    id?: StringFilter<"tbl_doctors"> | string
    name?: StringFilter<"tbl_doctors"> | string
    specialization?: StringFilter<"tbl_doctors"> | string
    appointments?: Tbl_appointmentsListRelationFilter
    solved?: Tbl_solved_appointmentsListRelationFilter
  }

  export type tbl_doctorsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    specialization?: SortOrder
    appointments?: tbl_appointmentsOrderByRelationAggregateInput
    solved?: tbl_solved_appointmentsOrderByRelationAggregateInput
  }

  export type tbl_doctorsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: tbl_doctorsWhereInput | tbl_doctorsWhereInput[]
    OR?: tbl_doctorsWhereInput[]
    NOT?: tbl_doctorsWhereInput | tbl_doctorsWhereInput[]
    name?: StringFilter<"tbl_doctors"> | string
    specialization?: StringFilter<"tbl_doctors"> | string
    appointments?: Tbl_appointmentsListRelationFilter
    solved?: Tbl_solved_appointmentsListRelationFilter
  }, "id">

  export type tbl_doctorsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    specialization?: SortOrder
    _count?: tbl_doctorsCountOrderByAggregateInput
    _max?: tbl_doctorsMaxOrderByAggregateInput
    _min?: tbl_doctorsMinOrderByAggregateInput
  }

  export type tbl_doctorsScalarWhereWithAggregatesInput = {
    AND?: tbl_doctorsScalarWhereWithAggregatesInput | tbl_doctorsScalarWhereWithAggregatesInput[]
    OR?: tbl_doctorsScalarWhereWithAggregatesInput[]
    NOT?: tbl_doctorsScalarWhereWithAggregatesInput | tbl_doctorsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"tbl_doctors"> | string
    name?: StringWithAggregatesFilter<"tbl_doctors"> | string
    specialization?: StringWithAggregatesFilter<"tbl_doctors"> | string
  }

  export type tbl_appointmentsWhereInput = {
    AND?: tbl_appointmentsWhereInput | tbl_appointmentsWhereInput[]
    OR?: tbl_appointmentsWhereInput[]
    NOT?: tbl_appointmentsWhereInput | tbl_appointmentsWhereInput[]
    id?: StringFilter<"tbl_appointments"> | string
    doctor_id?: StringFilter<"tbl_appointments"> | string
    patient_name?: StringFilter<"tbl_appointments"> | string
    appointment_date?: DateTimeFilter<"tbl_appointments"> | Date | string
    status?: StringFilter<"tbl_appointments"> | string
    created_at?: DateTimeFilter<"tbl_appointments"> | Date | string
    doctor?: XOR<Tbl_doctorsNullableScalarRelationFilter, tbl_doctorsWhereInput> | null
    solved_appointments?: Tbl_solved_appointmentsListRelationFilter
  }

  export type tbl_appointmentsOrderByWithRelationInput = {
    id?: SortOrder
    doctor_id?: SortOrder
    patient_name?: SortOrder
    appointment_date?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    doctor?: tbl_doctorsOrderByWithRelationInput
    solved_appointments?: tbl_solved_appointmentsOrderByRelationAggregateInput
  }

  export type tbl_appointmentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: tbl_appointmentsWhereInput | tbl_appointmentsWhereInput[]
    OR?: tbl_appointmentsWhereInput[]
    NOT?: tbl_appointmentsWhereInput | tbl_appointmentsWhereInput[]
    doctor_id?: StringFilter<"tbl_appointments"> | string
    patient_name?: StringFilter<"tbl_appointments"> | string
    appointment_date?: DateTimeFilter<"tbl_appointments"> | Date | string
    status?: StringFilter<"tbl_appointments"> | string
    created_at?: DateTimeFilter<"tbl_appointments"> | Date | string
    doctor?: XOR<Tbl_doctorsNullableScalarRelationFilter, tbl_doctorsWhereInput> | null
    solved_appointments?: Tbl_solved_appointmentsListRelationFilter
  }, "id">

  export type tbl_appointmentsOrderByWithAggregationInput = {
    id?: SortOrder
    doctor_id?: SortOrder
    patient_name?: SortOrder
    appointment_date?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    _count?: tbl_appointmentsCountOrderByAggregateInput
    _max?: tbl_appointmentsMaxOrderByAggregateInput
    _min?: tbl_appointmentsMinOrderByAggregateInput
  }

  export type tbl_appointmentsScalarWhereWithAggregatesInput = {
    AND?: tbl_appointmentsScalarWhereWithAggregatesInput | tbl_appointmentsScalarWhereWithAggregatesInput[]
    OR?: tbl_appointmentsScalarWhereWithAggregatesInput[]
    NOT?: tbl_appointmentsScalarWhereWithAggregatesInput | tbl_appointmentsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"tbl_appointments"> | string
    doctor_id?: StringWithAggregatesFilter<"tbl_appointments"> | string
    patient_name?: StringWithAggregatesFilter<"tbl_appointments"> | string
    appointment_date?: DateTimeWithAggregatesFilter<"tbl_appointments"> | Date | string
    status?: StringWithAggregatesFilter<"tbl_appointments"> | string
    created_at?: DateTimeWithAggregatesFilter<"tbl_appointments"> | Date | string
  }

  export type tbl_solved_appointmentsWhereInput = {
    AND?: tbl_solved_appointmentsWhereInput | tbl_solved_appointmentsWhereInput[]
    OR?: tbl_solved_appointmentsWhereInput[]
    NOT?: tbl_solved_appointmentsWhereInput | tbl_solved_appointmentsWhereInput[]
    id?: StringFilter<"tbl_solved_appointments"> | string
    appointment_id?: StringFilter<"tbl_solved_appointments"> | string
    doctor_id?: StringFilter<"tbl_solved_appointments"> | string
    patient_name?: StringFilter<"tbl_solved_appointments"> | string
    appointment_date?: DateTimeFilter<"tbl_solved_appointments"> | Date | string
    status?: StringFilter<"tbl_solved_appointments"> | string
    solved_at?: DateTimeFilter<"tbl_solved_appointments"> | Date | string
    appointment?: XOR<Tbl_appointmentsNullableScalarRelationFilter, tbl_appointmentsWhereInput> | null
    doctor?: XOR<Tbl_doctorsNullableScalarRelationFilter, tbl_doctorsWhereInput> | null
  }

  export type tbl_solved_appointmentsOrderByWithRelationInput = {
    id?: SortOrder
    appointment_id?: SortOrder
    doctor_id?: SortOrder
    patient_name?: SortOrder
    appointment_date?: SortOrder
    status?: SortOrder
    solved_at?: SortOrder
    appointment?: tbl_appointmentsOrderByWithRelationInput
    doctor?: tbl_doctorsOrderByWithRelationInput
  }

  export type tbl_solved_appointmentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: tbl_solved_appointmentsWhereInput | tbl_solved_appointmentsWhereInput[]
    OR?: tbl_solved_appointmentsWhereInput[]
    NOT?: tbl_solved_appointmentsWhereInput | tbl_solved_appointmentsWhereInput[]
    appointment_id?: StringFilter<"tbl_solved_appointments"> | string
    doctor_id?: StringFilter<"tbl_solved_appointments"> | string
    patient_name?: StringFilter<"tbl_solved_appointments"> | string
    appointment_date?: DateTimeFilter<"tbl_solved_appointments"> | Date | string
    status?: StringFilter<"tbl_solved_appointments"> | string
    solved_at?: DateTimeFilter<"tbl_solved_appointments"> | Date | string
    appointment?: XOR<Tbl_appointmentsNullableScalarRelationFilter, tbl_appointmentsWhereInput> | null
    doctor?: XOR<Tbl_doctorsNullableScalarRelationFilter, tbl_doctorsWhereInput> | null
  }, "id">

  export type tbl_solved_appointmentsOrderByWithAggregationInput = {
    id?: SortOrder
    appointment_id?: SortOrder
    doctor_id?: SortOrder
    patient_name?: SortOrder
    appointment_date?: SortOrder
    status?: SortOrder
    solved_at?: SortOrder
    _count?: tbl_solved_appointmentsCountOrderByAggregateInput
    _max?: tbl_solved_appointmentsMaxOrderByAggregateInput
    _min?: tbl_solved_appointmentsMinOrderByAggregateInput
  }

  export type tbl_solved_appointmentsScalarWhereWithAggregatesInput = {
    AND?: tbl_solved_appointmentsScalarWhereWithAggregatesInput | tbl_solved_appointmentsScalarWhereWithAggregatesInput[]
    OR?: tbl_solved_appointmentsScalarWhereWithAggregatesInput[]
    NOT?: tbl_solved_appointmentsScalarWhereWithAggregatesInput | tbl_solved_appointmentsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"tbl_solved_appointments"> | string
    appointment_id?: StringWithAggregatesFilter<"tbl_solved_appointments"> | string
    doctor_id?: StringWithAggregatesFilter<"tbl_solved_appointments"> | string
    patient_name?: StringWithAggregatesFilter<"tbl_solved_appointments"> | string
    appointment_date?: DateTimeWithAggregatesFilter<"tbl_solved_appointments"> | Date | string
    status?: StringWithAggregatesFilter<"tbl_solved_appointments"> | string
    solved_at?: DateTimeWithAggregatesFilter<"tbl_solved_appointments"> | Date | string
  }

  export type tbl_heart_dataWhereInput = {
    AND?: tbl_heart_dataWhereInput | tbl_heart_dataWhereInput[]
    OR?: tbl_heart_dataWhereInput[]
    NOT?: tbl_heart_dataWhereInput | tbl_heart_dataWhereInput[]
    id?: StringFilter<"tbl_heart_data"> | string
    patient_name?: StringFilter<"tbl_heart_data"> | string
    heartbeat?: IntFilter<"tbl_heart_data"> | number
    status?: StringFilter<"tbl_heart_data"> | string
    recorded_at?: DateTimeFilter<"tbl_heart_data"> | Date | string
  }

  export type tbl_heart_dataOrderByWithRelationInput = {
    id?: SortOrder
    patient_name?: SortOrder
    heartbeat?: SortOrder
    status?: SortOrder
    recorded_at?: SortOrder
  }

  export type tbl_heart_dataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: tbl_heart_dataWhereInput | tbl_heart_dataWhereInput[]
    OR?: tbl_heart_dataWhereInput[]
    NOT?: tbl_heart_dataWhereInput | tbl_heart_dataWhereInput[]
    patient_name?: StringFilter<"tbl_heart_data"> | string
    heartbeat?: IntFilter<"tbl_heart_data"> | number
    status?: StringFilter<"tbl_heart_data"> | string
    recorded_at?: DateTimeFilter<"tbl_heart_data"> | Date | string
  }, "id">

  export type tbl_heart_dataOrderByWithAggregationInput = {
    id?: SortOrder
    patient_name?: SortOrder
    heartbeat?: SortOrder
    status?: SortOrder
    recorded_at?: SortOrder
    _count?: tbl_heart_dataCountOrderByAggregateInput
    _avg?: tbl_heart_dataAvgOrderByAggregateInput
    _max?: tbl_heart_dataMaxOrderByAggregateInput
    _min?: tbl_heart_dataMinOrderByAggregateInput
    _sum?: tbl_heart_dataSumOrderByAggregateInput
  }

  export type tbl_heart_dataScalarWhereWithAggregatesInput = {
    AND?: tbl_heart_dataScalarWhereWithAggregatesInput | tbl_heart_dataScalarWhereWithAggregatesInput[]
    OR?: tbl_heart_dataScalarWhereWithAggregatesInput[]
    NOT?: tbl_heart_dataScalarWhereWithAggregatesInput | tbl_heart_dataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"tbl_heart_data"> | string
    patient_name?: StringWithAggregatesFilter<"tbl_heart_data"> | string
    heartbeat?: IntWithAggregatesFilter<"tbl_heart_data"> | number
    status?: StringWithAggregatesFilter<"tbl_heart_data"> | string
    recorded_at?: DateTimeWithAggregatesFilter<"tbl_heart_data"> | Date | string
  }

  export type tbl_rolesCreateInput = {
    id?: string
    role_name: string
    users?: tbl_usersCreateNestedManyWithoutRoleInput
    system_users?: tbl_userCreateNestedManyWithoutRoleInput
  }

  export type tbl_rolesUncheckedCreateInput = {
    id?: string
    role_name: string
    users?: tbl_usersUncheckedCreateNestedManyWithoutRoleInput
    system_users?: tbl_userUncheckedCreateNestedManyWithoutRoleInput
  }

  export type tbl_rolesUpdateInput = {
    role_name?: StringFieldUpdateOperationsInput | string
    users?: tbl_usersUpdateManyWithoutRoleNestedInput
    system_users?: tbl_userUpdateManyWithoutRoleNestedInput
  }

  export type tbl_rolesUncheckedUpdateInput = {
    role_name?: StringFieldUpdateOperationsInput | string
    users?: tbl_usersUncheckedUpdateManyWithoutRoleNestedInput
    system_users?: tbl_userUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type tbl_rolesCreateManyInput = {
    id?: string
    role_name: string
  }

  export type tbl_rolesUpdateManyMutationInput = {
    role_name?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_rolesUncheckedUpdateManyInput = {
    role_name?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_usersCreateInput = {
    id?: string
    names: string
    email: string
    password: string
    role?: tbl_rolesCreateNestedOneWithoutUsersInput
  }

  export type tbl_usersUncheckedCreateInput = {
    id?: string
    names: string
    email: string
    password: string
    role_id: string
  }

  export type tbl_usersUpdateInput = {
    names?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: tbl_rolesUpdateOneWithoutUsersNestedInput
  }

  export type tbl_usersUncheckedUpdateInput = {
    names?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_usersCreateManyInput = {
    id?: string
    names: string
    email: string
    password: string
    role_id: string
  }

  export type tbl_usersUpdateManyMutationInput = {
    names?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_usersUncheckedUpdateManyInput = {
    names?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role_id?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_userCreateInput = {
    id?: string
    u_names: string
    u_phone: string
    u_usersname: string
    u_email: string
    u_password: string
    role?: tbl_rolesCreateNestedOneWithoutSystem_usersInput
  }

  export type tbl_userUncheckedCreateInput = {
    id?: string
    u_names: string
    u_phone: string
    u_usersname: string
    u_email: string
    u_password: string
    u_role_id: string
  }

  export type tbl_userUpdateInput = {
    u_names?: StringFieldUpdateOperationsInput | string
    u_phone?: StringFieldUpdateOperationsInput | string
    u_usersname?: StringFieldUpdateOperationsInput | string
    u_email?: StringFieldUpdateOperationsInput | string
    u_password?: StringFieldUpdateOperationsInput | string
    role?: tbl_rolesUpdateOneWithoutSystem_usersNestedInput
  }

  export type tbl_userUncheckedUpdateInput = {
    u_names?: StringFieldUpdateOperationsInput | string
    u_phone?: StringFieldUpdateOperationsInput | string
    u_usersname?: StringFieldUpdateOperationsInput | string
    u_email?: StringFieldUpdateOperationsInput | string
    u_password?: StringFieldUpdateOperationsInput | string
    u_role_id?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_userCreateManyInput = {
    id?: string
    u_names: string
    u_phone: string
    u_usersname: string
    u_email: string
    u_password: string
    u_role_id: string
  }

  export type tbl_userUpdateManyMutationInput = {
    u_names?: StringFieldUpdateOperationsInput | string
    u_phone?: StringFieldUpdateOperationsInput | string
    u_usersname?: StringFieldUpdateOperationsInput | string
    u_email?: StringFieldUpdateOperationsInput | string
    u_password?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_userUncheckedUpdateManyInput = {
    u_names?: StringFieldUpdateOperationsInput | string
    u_phone?: StringFieldUpdateOperationsInput | string
    u_usersname?: StringFieldUpdateOperationsInput | string
    u_email?: StringFieldUpdateOperationsInput | string
    u_password?: StringFieldUpdateOperationsInput | string
    u_role_id?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_doctorsCreateInput = {
    id?: string
    name: string
    specialization: string
    appointments?: tbl_appointmentsCreateNestedManyWithoutDoctorInput
    solved?: tbl_solved_appointmentsCreateNestedManyWithoutDoctorInput
  }

  export type tbl_doctorsUncheckedCreateInput = {
    id?: string
    name: string
    specialization: string
    appointments?: tbl_appointmentsUncheckedCreateNestedManyWithoutDoctorInput
    solved?: tbl_solved_appointmentsUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type tbl_doctorsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    appointments?: tbl_appointmentsUpdateManyWithoutDoctorNestedInput
    solved?: tbl_solved_appointmentsUpdateManyWithoutDoctorNestedInput
  }

  export type tbl_doctorsUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    appointments?: tbl_appointmentsUncheckedUpdateManyWithoutDoctorNestedInput
    solved?: tbl_solved_appointmentsUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type tbl_doctorsCreateManyInput = {
    id?: string
    name: string
    specialization: string
  }

  export type tbl_doctorsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_doctorsUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_appointmentsCreateInput = {
    id?: string
    patient_name: string
    appointment_date: Date | string
    status: string
    created_at?: Date | string
    doctor?: tbl_doctorsCreateNestedOneWithoutAppointmentsInput
    solved_appointments?: tbl_solved_appointmentsCreateNestedManyWithoutAppointmentInput
  }

  export type tbl_appointmentsUncheckedCreateInput = {
    id?: string
    doctor_id: string
    patient_name: string
    appointment_date: Date | string
    status: string
    created_at?: Date | string
    solved_appointments?: tbl_solved_appointmentsUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type tbl_appointmentsUpdateInput = {
    patient_name?: StringFieldUpdateOperationsInput | string
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: tbl_doctorsUpdateOneWithoutAppointmentsNestedInput
    solved_appointments?: tbl_solved_appointmentsUpdateManyWithoutAppointmentNestedInput
  }

  export type tbl_appointmentsUncheckedUpdateInput = {
    doctor_id?: StringFieldUpdateOperationsInput | string
    patient_name?: StringFieldUpdateOperationsInput | string
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    solved_appointments?: tbl_solved_appointmentsUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type tbl_appointmentsCreateManyInput = {
    id?: string
    doctor_id: string
    patient_name: string
    appointment_date: Date | string
    status: string
    created_at?: Date | string
  }

  export type tbl_appointmentsUpdateManyMutationInput = {
    patient_name?: StringFieldUpdateOperationsInput | string
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_appointmentsUncheckedUpdateManyInput = {
    doctor_id?: StringFieldUpdateOperationsInput | string
    patient_name?: StringFieldUpdateOperationsInput | string
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_solved_appointmentsCreateInput = {
    id?: string
    patient_name: string
    appointment_date: Date | string
    status: string
    solved_at?: Date | string
    appointment?: tbl_appointmentsCreateNestedOneWithoutSolved_appointmentsInput
    doctor?: tbl_doctorsCreateNestedOneWithoutSolvedInput
  }

  export type tbl_solved_appointmentsUncheckedCreateInput = {
    id?: string
    appointment_id: string
    doctor_id: string
    patient_name: string
    appointment_date: Date | string
    status: string
    solved_at?: Date | string
  }

  export type tbl_solved_appointmentsUpdateInput = {
    patient_name?: StringFieldUpdateOperationsInput | string
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    solved_at?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment?: tbl_appointmentsUpdateOneWithoutSolved_appointmentsNestedInput
    doctor?: tbl_doctorsUpdateOneWithoutSolvedNestedInput
  }

  export type tbl_solved_appointmentsUncheckedUpdateInput = {
    appointment_id?: StringFieldUpdateOperationsInput | string
    doctor_id?: StringFieldUpdateOperationsInput | string
    patient_name?: StringFieldUpdateOperationsInput | string
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    solved_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_solved_appointmentsCreateManyInput = {
    id?: string
    appointment_id: string
    doctor_id: string
    patient_name: string
    appointment_date: Date | string
    status: string
    solved_at?: Date | string
  }

  export type tbl_solved_appointmentsUpdateManyMutationInput = {
    patient_name?: StringFieldUpdateOperationsInput | string
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    solved_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_solved_appointmentsUncheckedUpdateManyInput = {
    appointment_id?: StringFieldUpdateOperationsInput | string
    doctor_id?: StringFieldUpdateOperationsInput | string
    patient_name?: StringFieldUpdateOperationsInput | string
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    solved_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_heart_dataCreateInput = {
    id?: string
    patient_name: string
    heartbeat: number
    status: string
    recorded_at?: Date | string
  }

  export type tbl_heart_dataUncheckedCreateInput = {
    id?: string
    patient_name: string
    heartbeat: number
    status: string
    recorded_at?: Date | string
  }

  export type tbl_heart_dataUpdateInput = {
    patient_name?: StringFieldUpdateOperationsInput | string
    heartbeat?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    recorded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_heart_dataUncheckedUpdateInput = {
    patient_name?: StringFieldUpdateOperationsInput | string
    heartbeat?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    recorded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_heart_dataCreateManyInput = {
    id?: string
    patient_name: string
    heartbeat: number
    status: string
    recorded_at?: Date | string
  }

  export type tbl_heart_dataUpdateManyMutationInput = {
    patient_name?: StringFieldUpdateOperationsInput | string
    heartbeat?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    recorded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_heart_dataUncheckedUpdateManyInput = {
    patient_name?: StringFieldUpdateOperationsInput | string
    heartbeat?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    recorded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type Tbl_usersListRelationFilter = {
    every?: tbl_usersWhereInput
    some?: tbl_usersWhereInput
    none?: tbl_usersWhereInput
  }

  export type Tbl_userListRelationFilter = {
    every?: tbl_userWhereInput
    some?: tbl_userWhereInput
    none?: tbl_userWhereInput
  }

  export type tbl_usersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tbl_userOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tbl_rolesCountOrderByAggregateInput = {
    id?: SortOrder
    role_name?: SortOrder
  }

  export type tbl_rolesMaxOrderByAggregateInput = {
    id?: SortOrder
    role_name?: SortOrder
  }

  export type tbl_rolesMinOrderByAggregateInput = {
    id?: SortOrder
    role_name?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type Tbl_rolesNullableScalarRelationFilter = {
    is?: tbl_rolesWhereInput | null
    isNot?: tbl_rolesWhereInput | null
  }

  export type tbl_usersCountOrderByAggregateInput = {
    id?: SortOrder
    names?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role_id?: SortOrder
  }

  export type tbl_usersMaxOrderByAggregateInput = {
    id?: SortOrder
    names?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role_id?: SortOrder
  }

  export type tbl_usersMinOrderByAggregateInput = {
    id?: SortOrder
    names?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role_id?: SortOrder
  }

  export type tbl_userCountOrderByAggregateInput = {
    id?: SortOrder
    u_names?: SortOrder
    u_phone?: SortOrder
    u_usersname?: SortOrder
    u_email?: SortOrder
    u_password?: SortOrder
    u_role_id?: SortOrder
  }

  export type tbl_userMaxOrderByAggregateInput = {
    id?: SortOrder
    u_names?: SortOrder
    u_phone?: SortOrder
    u_usersname?: SortOrder
    u_email?: SortOrder
    u_password?: SortOrder
    u_role_id?: SortOrder
  }

  export type tbl_userMinOrderByAggregateInput = {
    id?: SortOrder
    u_names?: SortOrder
    u_phone?: SortOrder
    u_usersname?: SortOrder
    u_email?: SortOrder
    u_password?: SortOrder
    u_role_id?: SortOrder
  }

  export type Tbl_appointmentsListRelationFilter = {
    every?: tbl_appointmentsWhereInput
    some?: tbl_appointmentsWhereInput
    none?: tbl_appointmentsWhereInput
  }

  export type Tbl_solved_appointmentsListRelationFilter = {
    every?: tbl_solved_appointmentsWhereInput
    some?: tbl_solved_appointmentsWhereInput
    none?: tbl_solved_appointmentsWhereInput
  }

  export type tbl_appointmentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tbl_solved_appointmentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tbl_doctorsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    specialization?: SortOrder
  }

  export type tbl_doctorsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    specialization?: SortOrder
  }

  export type tbl_doctorsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    specialization?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Tbl_doctorsNullableScalarRelationFilter = {
    is?: tbl_doctorsWhereInput | null
    isNot?: tbl_doctorsWhereInput | null
  }

  export type tbl_appointmentsCountOrderByAggregateInput = {
    id?: SortOrder
    doctor_id?: SortOrder
    patient_name?: SortOrder
    appointment_date?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type tbl_appointmentsMaxOrderByAggregateInput = {
    id?: SortOrder
    doctor_id?: SortOrder
    patient_name?: SortOrder
    appointment_date?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type tbl_appointmentsMinOrderByAggregateInput = {
    id?: SortOrder
    doctor_id?: SortOrder
    patient_name?: SortOrder
    appointment_date?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type Tbl_appointmentsNullableScalarRelationFilter = {
    is?: tbl_appointmentsWhereInput | null
    isNot?: tbl_appointmentsWhereInput | null
  }

  export type tbl_solved_appointmentsCountOrderByAggregateInput = {
    id?: SortOrder
    appointment_id?: SortOrder
    doctor_id?: SortOrder
    patient_name?: SortOrder
    appointment_date?: SortOrder
    status?: SortOrder
    solved_at?: SortOrder
  }

  export type tbl_solved_appointmentsMaxOrderByAggregateInput = {
    id?: SortOrder
    appointment_id?: SortOrder
    doctor_id?: SortOrder
    patient_name?: SortOrder
    appointment_date?: SortOrder
    status?: SortOrder
    solved_at?: SortOrder
  }

  export type tbl_solved_appointmentsMinOrderByAggregateInput = {
    id?: SortOrder
    appointment_id?: SortOrder
    doctor_id?: SortOrder
    patient_name?: SortOrder
    appointment_date?: SortOrder
    status?: SortOrder
    solved_at?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type tbl_heart_dataCountOrderByAggregateInput = {
    id?: SortOrder
    patient_name?: SortOrder
    heartbeat?: SortOrder
    status?: SortOrder
    recorded_at?: SortOrder
  }

  export type tbl_heart_dataAvgOrderByAggregateInput = {
    heartbeat?: SortOrder
  }

  export type tbl_heart_dataMaxOrderByAggregateInput = {
    id?: SortOrder
    patient_name?: SortOrder
    heartbeat?: SortOrder
    status?: SortOrder
    recorded_at?: SortOrder
  }

  export type tbl_heart_dataMinOrderByAggregateInput = {
    id?: SortOrder
    patient_name?: SortOrder
    heartbeat?: SortOrder
    status?: SortOrder
    recorded_at?: SortOrder
  }

  export type tbl_heart_dataSumOrderByAggregateInput = {
    heartbeat?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type tbl_usersCreateNestedManyWithoutRoleInput = {
    create?: XOR<tbl_usersCreateWithoutRoleInput, tbl_usersUncheckedCreateWithoutRoleInput> | tbl_usersCreateWithoutRoleInput[] | tbl_usersUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: tbl_usersCreateOrConnectWithoutRoleInput | tbl_usersCreateOrConnectWithoutRoleInput[]
    createMany?: tbl_usersCreateManyRoleInputEnvelope
    connect?: tbl_usersWhereUniqueInput | tbl_usersWhereUniqueInput[]
  }

  export type tbl_userCreateNestedManyWithoutRoleInput = {
    create?: XOR<tbl_userCreateWithoutRoleInput, tbl_userUncheckedCreateWithoutRoleInput> | tbl_userCreateWithoutRoleInput[] | tbl_userUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: tbl_userCreateOrConnectWithoutRoleInput | tbl_userCreateOrConnectWithoutRoleInput[]
    createMany?: tbl_userCreateManyRoleInputEnvelope
    connect?: tbl_userWhereUniqueInput | tbl_userWhereUniqueInput[]
  }

  export type tbl_usersUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<tbl_usersCreateWithoutRoleInput, tbl_usersUncheckedCreateWithoutRoleInput> | tbl_usersCreateWithoutRoleInput[] | tbl_usersUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: tbl_usersCreateOrConnectWithoutRoleInput | tbl_usersCreateOrConnectWithoutRoleInput[]
    createMany?: tbl_usersCreateManyRoleInputEnvelope
    connect?: tbl_usersWhereUniqueInput | tbl_usersWhereUniqueInput[]
  }

  export type tbl_userUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<tbl_userCreateWithoutRoleInput, tbl_userUncheckedCreateWithoutRoleInput> | tbl_userCreateWithoutRoleInput[] | tbl_userUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: tbl_userCreateOrConnectWithoutRoleInput | tbl_userCreateOrConnectWithoutRoleInput[]
    createMany?: tbl_userCreateManyRoleInputEnvelope
    connect?: tbl_userWhereUniqueInput | tbl_userWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type tbl_usersUpdateManyWithoutRoleNestedInput = {
    create?: XOR<tbl_usersCreateWithoutRoleInput, tbl_usersUncheckedCreateWithoutRoleInput> | tbl_usersCreateWithoutRoleInput[] | tbl_usersUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: tbl_usersCreateOrConnectWithoutRoleInput | tbl_usersCreateOrConnectWithoutRoleInput[]
    upsert?: tbl_usersUpsertWithWhereUniqueWithoutRoleInput | tbl_usersUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: tbl_usersCreateManyRoleInputEnvelope
    set?: tbl_usersWhereUniqueInput | tbl_usersWhereUniqueInput[]
    disconnect?: tbl_usersWhereUniqueInput | tbl_usersWhereUniqueInput[]
    delete?: tbl_usersWhereUniqueInput | tbl_usersWhereUniqueInput[]
    connect?: tbl_usersWhereUniqueInput | tbl_usersWhereUniqueInput[]
    update?: tbl_usersUpdateWithWhereUniqueWithoutRoleInput | tbl_usersUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: tbl_usersUpdateManyWithWhereWithoutRoleInput | tbl_usersUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: tbl_usersScalarWhereInput | tbl_usersScalarWhereInput[]
  }

  export type tbl_userUpdateManyWithoutRoleNestedInput = {
    create?: XOR<tbl_userCreateWithoutRoleInput, tbl_userUncheckedCreateWithoutRoleInput> | tbl_userCreateWithoutRoleInput[] | tbl_userUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: tbl_userCreateOrConnectWithoutRoleInput | tbl_userCreateOrConnectWithoutRoleInput[]
    upsert?: tbl_userUpsertWithWhereUniqueWithoutRoleInput | tbl_userUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: tbl_userCreateManyRoleInputEnvelope
    set?: tbl_userWhereUniqueInput | tbl_userWhereUniqueInput[]
    disconnect?: tbl_userWhereUniqueInput | tbl_userWhereUniqueInput[]
    delete?: tbl_userWhereUniqueInput | tbl_userWhereUniqueInput[]
    connect?: tbl_userWhereUniqueInput | tbl_userWhereUniqueInput[]
    update?: tbl_userUpdateWithWhereUniqueWithoutRoleInput | tbl_userUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: tbl_userUpdateManyWithWhereWithoutRoleInput | tbl_userUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: tbl_userScalarWhereInput | tbl_userScalarWhereInput[]
  }

  export type tbl_usersUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<tbl_usersCreateWithoutRoleInput, tbl_usersUncheckedCreateWithoutRoleInput> | tbl_usersCreateWithoutRoleInput[] | tbl_usersUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: tbl_usersCreateOrConnectWithoutRoleInput | tbl_usersCreateOrConnectWithoutRoleInput[]
    upsert?: tbl_usersUpsertWithWhereUniqueWithoutRoleInput | tbl_usersUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: tbl_usersCreateManyRoleInputEnvelope
    set?: tbl_usersWhereUniqueInput | tbl_usersWhereUniqueInput[]
    disconnect?: tbl_usersWhereUniqueInput | tbl_usersWhereUniqueInput[]
    delete?: tbl_usersWhereUniqueInput | tbl_usersWhereUniqueInput[]
    connect?: tbl_usersWhereUniqueInput | tbl_usersWhereUniqueInput[]
    update?: tbl_usersUpdateWithWhereUniqueWithoutRoleInput | tbl_usersUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: tbl_usersUpdateManyWithWhereWithoutRoleInput | tbl_usersUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: tbl_usersScalarWhereInput | tbl_usersScalarWhereInput[]
  }

  export type tbl_userUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<tbl_userCreateWithoutRoleInput, tbl_userUncheckedCreateWithoutRoleInput> | tbl_userCreateWithoutRoleInput[] | tbl_userUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: tbl_userCreateOrConnectWithoutRoleInput | tbl_userCreateOrConnectWithoutRoleInput[]
    upsert?: tbl_userUpsertWithWhereUniqueWithoutRoleInput | tbl_userUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: tbl_userCreateManyRoleInputEnvelope
    set?: tbl_userWhereUniqueInput | tbl_userWhereUniqueInput[]
    disconnect?: tbl_userWhereUniqueInput | tbl_userWhereUniqueInput[]
    delete?: tbl_userWhereUniqueInput | tbl_userWhereUniqueInput[]
    connect?: tbl_userWhereUniqueInput | tbl_userWhereUniqueInput[]
    update?: tbl_userUpdateWithWhereUniqueWithoutRoleInput | tbl_userUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: tbl_userUpdateManyWithWhereWithoutRoleInput | tbl_userUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: tbl_userScalarWhereInput | tbl_userScalarWhereInput[]
  }

  export type tbl_rolesCreateNestedOneWithoutUsersInput = {
    create?: XOR<tbl_rolesCreateWithoutUsersInput, tbl_rolesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: tbl_rolesCreateOrConnectWithoutUsersInput
    connect?: tbl_rolesWhereUniqueInput
  }

  export type tbl_rolesUpdateOneWithoutUsersNestedInput = {
    create?: XOR<tbl_rolesCreateWithoutUsersInput, tbl_rolesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: tbl_rolesCreateOrConnectWithoutUsersInput
    upsert?: tbl_rolesUpsertWithoutUsersInput
    disconnect?: boolean
    delete?: tbl_rolesWhereInput | boolean
    connect?: tbl_rolesWhereUniqueInput
    update?: XOR<XOR<tbl_rolesUpdateToOneWithWhereWithoutUsersInput, tbl_rolesUpdateWithoutUsersInput>, tbl_rolesUncheckedUpdateWithoutUsersInput>
  }

  export type tbl_rolesCreateNestedOneWithoutSystem_usersInput = {
    create?: XOR<tbl_rolesCreateWithoutSystem_usersInput, tbl_rolesUncheckedCreateWithoutSystem_usersInput>
    connectOrCreate?: tbl_rolesCreateOrConnectWithoutSystem_usersInput
    connect?: tbl_rolesWhereUniqueInput
  }

  export type tbl_rolesUpdateOneWithoutSystem_usersNestedInput = {
    create?: XOR<tbl_rolesCreateWithoutSystem_usersInput, tbl_rolesUncheckedCreateWithoutSystem_usersInput>
    connectOrCreate?: tbl_rolesCreateOrConnectWithoutSystem_usersInput
    upsert?: tbl_rolesUpsertWithoutSystem_usersInput
    disconnect?: boolean
    delete?: tbl_rolesWhereInput | boolean
    connect?: tbl_rolesWhereUniqueInput
    update?: XOR<XOR<tbl_rolesUpdateToOneWithWhereWithoutSystem_usersInput, tbl_rolesUpdateWithoutSystem_usersInput>, tbl_rolesUncheckedUpdateWithoutSystem_usersInput>
  }

  export type tbl_appointmentsCreateNestedManyWithoutDoctorInput = {
    create?: XOR<tbl_appointmentsCreateWithoutDoctorInput, tbl_appointmentsUncheckedCreateWithoutDoctorInput> | tbl_appointmentsCreateWithoutDoctorInput[] | tbl_appointmentsUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: tbl_appointmentsCreateOrConnectWithoutDoctorInput | tbl_appointmentsCreateOrConnectWithoutDoctorInput[]
    createMany?: tbl_appointmentsCreateManyDoctorInputEnvelope
    connect?: tbl_appointmentsWhereUniqueInput | tbl_appointmentsWhereUniqueInput[]
  }

  export type tbl_solved_appointmentsCreateNestedManyWithoutDoctorInput = {
    create?: XOR<tbl_solved_appointmentsCreateWithoutDoctorInput, tbl_solved_appointmentsUncheckedCreateWithoutDoctorInput> | tbl_solved_appointmentsCreateWithoutDoctorInput[] | tbl_solved_appointmentsUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: tbl_solved_appointmentsCreateOrConnectWithoutDoctorInput | tbl_solved_appointmentsCreateOrConnectWithoutDoctorInput[]
    createMany?: tbl_solved_appointmentsCreateManyDoctorInputEnvelope
    connect?: tbl_solved_appointmentsWhereUniqueInput | tbl_solved_appointmentsWhereUniqueInput[]
  }

  export type tbl_appointmentsUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<tbl_appointmentsCreateWithoutDoctorInput, tbl_appointmentsUncheckedCreateWithoutDoctorInput> | tbl_appointmentsCreateWithoutDoctorInput[] | tbl_appointmentsUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: tbl_appointmentsCreateOrConnectWithoutDoctorInput | tbl_appointmentsCreateOrConnectWithoutDoctorInput[]
    createMany?: tbl_appointmentsCreateManyDoctorInputEnvelope
    connect?: tbl_appointmentsWhereUniqueInput | tbl_appointmentsWhereUniqueInput[]
  }

  export type tbl_solved_appointmentsUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<tbl_solved_appointmentsCreateWithoutDoctorInput, tbl_solved_appointmentsUncheckedCreateWithoutDoctorInput> | tbl_solved_appointmentsCreateWithoutDoctorInput[] | tbl_solved_appointmentsUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: tbl_solved_appointmentsCreateOrConnectWithoutDoctorInput | tbl_solved_appointmentsCreateOrConnectWithoutDoctorInput[]
    createMany?: tbl_solved_appointmentsCreateManyDoctorInputEnvelope
    connect?: tbl_solved_appointmentsWhereUniqueInput | tbl_solved_appointmentsWhereUniqueInput[]
  }

  export type tbl_appointmentsUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<tbl_appointmentsCreateWithoutDoctorInput, tbl_appointmentsUncheckedCreateWithoutDoctorInput> | tbl_appointmentsCreateWithoutDoctorInput[] | tbl_appointmentsUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: tbl_appointmentsCreateOrConnectWithoutDoctorInput | tbl_appointmentsCreateOrConnectWithoutDoctorInput[]
    upsert?: tbl_appointmentsUpsertWithWhereUniqueWithoutDoctorInput | tbl_appointmentsUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: tbl_appointmentsCreateManyDoctorInputEnvelope
    set?: tbl_appointmentsWhereUniqueInput | tbl_appointmentsWhereUniqueInput[]
    disconnect?: tbl_appointmentsWhereUniqueInput | tbl_appointmentsWhereUniqueInput[]
    delete?: tbl_appointmentsWhereUniqueInput | tbl_appointmentsWhereUniqueInput[]
    connect?: tbl_appointmentsWhereUniqueInput | tbl_appointmentsWhereUniqueInput[]
    update?: tbl_appointmentsUpdateWithWhereUniqueWithoutDoctorInput | tbl_appointmentsUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: tbl_appointmentsUpdateManyWithWhereWithoutDoctorInput | tbl_appointmentsUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: tbl_appointmentsScalarWhereInput | tbl_appointmentsScalarWhereInput[]
  }

  export type tbl_solved_appointmentsUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<tbl_solved_appointmentsCreateWithoutDoctorInput, tbl_solved_appointmentsUncheckedCreateWithoutDoctorInput> | tbl_solved_appointmentsCreateWithoutDoctorInput[] | tbl_solved_appointmentsUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: tbl_solved_appointmentsCreateOrConnectWithoutDoctorInput | tbl_solved_appointmentsCreateOrConnectWithoutDoctorInput[]
    upsert?: tbl_solved_appointmentsUpsertWithWhereUniqueWithoutDoctorInput | tbl_solved_appointmentsUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: tbl_solved_appointmentsCreateManyDoctorInputEnvelope
    set?: tbl_solved_appointmentsWhereUniqueInput | tbl_solved_appointmentsWhereUniqueInput[]
    disconnect?: tbl_solved_appointmentsWhereUniqueInput | tbl_solved_appointmentsWhereUniqueInput[]
    delete?: tbl_solved_appointmentsWhereUniqueInput | tbl_solved_appointmentsWhereUniqueInput[]
    connect?: tbl_solved_appointmentsWhereUniqueInput | tbl_solved_appointmentsWhereUniqueInput[]
    update?: tbl_solved_appointmentsUpdateWithWhereUniqueWithoutDoctorInput | tbl_solved_appointmentsUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: tbl_solved_appointmentsUpdateManyWithWhereWithoutDoctorInput | tbl_solved_appointmentsUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: tbl_solved_appointmentsScalarWhereInput | tbl_solved_appointmentsScalarWhereInput[]
  }

  export type tbl_appointmentsUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<tbl_appointmentsCreateWithoutDoctorInput, tbl_appointmentsUncheckedCreateWithoutDoctorInput> | tbl_appointmentsCreateWithoutDoctorInput[] | tbl_appointmentsUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: tbl_appointmentsCreateOrConnectWithoutDoctorInput | tbl_appointmentsCreateOrConnectWithoutDoctorInput[]
    upsert?: tbl_appointmentsUpsertWithWhereUniqueWithoutDoctorInput | tbl_appointmentsUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: tbl_appointmentsCreateManyDoctorInputEnvelope
    set?: tbl_appointmentsWhereUniqueInput | tbl_appointmentsWhereUniqueInput[]
    disconnect?: tbl_appointmentsWhereUniqueInput | tbl_appointmentsWhereUniqueInput[]
    delete?: tbl_appointmentsWhereUniqueInput | tbl_appointmentsWhereUniqueInput[]
    connect?: tbl_appointmentsWhereUniqueInput | tbl_appointmentsWhereUniqueInput[]
    update?: tbl_appointmentsUpdateWithWhereUniqueWithoutDoctorInput | tbl_appointmentsUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: tbl_appointmentsUpdateManyWithWhereWithoutDoctorInput | tbl_appointmentsUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: tbl_appointmentsScalarWhereInput | tbl_appointmentsScalarWhereInput[]
  }

  export type tbl_solved_appointmentsUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<tbl_solved_appointmentsCreateWithoutDoctorInput, tbl_solved_appointmentsUncheckedCreateWithoutDoctorInput> | tbl_solved_appointmentsCreateWithoutDoctorInput[] | tbl_solved_appointmentsUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: tbl_solved_appointmentsCreateOrConnectWithoutDoctorInput | tbl_solved_appointmentsCreateOrConnectWithoutDoctorInput[]
    upsert?: tbl_solved_appointmentsUpsertWithWhereUniqueWithoutDoctorInput | tbl_solved_appointmentsUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: tbl_solved_appointmentsCreateManyDoctorInputEnvelope
    set?: tbl_solved_appointmentsWhereUniqueInput | tbl_solved_appointmentsWhereUniqueInput[]
    disconnect?: tbl_solved_appointmentsWhereUniqueInput | tbl_solved_appointmentsWhereUniqueInput[]
    delete?: tbl_solved_appointmentsWhereUniqueInput | tbl_solved_appointmentsWhereUniqueInput[]
    connect?: tbl_solved_appointmentsWhereUniqueInput | tbl_solved_appointmentsWhereUniqueInput[]
    update?: tbl_solved_appointmentsUpdateWithWhereUniqueWithoutDoctorInput | tbl_solved_appointmentsUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: tbl_solved_appointmentsUpdateManyWithWhereWithoutDoctorInput | tbl_solved_appointmentsUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: tbl_solved_appointmentsScalarWhereInput | tbl_solved_appointmentsScalarWhereInput[]
  }

  export type tbl_doctorsCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<tbl_doctorsCreateWithoutAppointmentsInput, tbl_doctorsUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: tbl_doctorsCreateOrConnectWithoutAppointmentsInput
    connect?: tbl_doctorsWhereUniqueInput
  }

  export type tbl_solved_appointmentsCreateNestedManyWithoutAppointmentInput = {
    create?: XOR<tbl_solved_appointmentsCreateWithoutAppointmentInput, tbl_solved_appointmentsUncheckedCreateWithoutAppointmentInput> | tbl_solved_appointmentsCreateWithoutAppointmentInput[] | tbl_solved_appointmentsUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: tbl_solved_appointmentsCreateOrConnectWithoutAppointmentInput | tbl_solved_appointmentsCreateOrConnectWithoutAppointmentInput[]
    createMany?: tbl_solved_appointmentsCreateManyAppointmentInputEnvelope
    connect?: tbl_solved_appointmentsWhereUniqueInput | tbl_solved_appointmentsWhereUniqueInput[]
  }

  export type tbl_solved_appointmentsUncheckedCreateNestedManyWithoutAppointmentInput = {
    create?: XOR<tbl_solved_appointmentsCreateWithoutAppointmentInput, tbl_solved_appointmentsUncheckedCreateWithoutAppointmentInput> | tbl_solved_appointmentsCreateWithoutAppointmentInput[] | tbl_solved_appointmentsUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: tbl_solved_appointmentsCreateOrConnectWithoutAppointmentInput | tbl_solved_appointmentsCreateOrConnectWithoutAppointmentInput[]
    createMany?: tbl_solved_appointmentsCreateManyAppointmentInputEnvelope
    connect?: tbl_solved_appointmentsWhereUniqueInput | tbl_solved_appointmentsWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type tbl_doctorsUpdateOneWithoutAppointmentsNestedInput = {
    create?: XOR<tbl_doctorsCreateWithoutAppointmentsInput, tbl_doctorsUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: tbl_doctorsCreateOrConnectWithoutAppointmentsInput
    upsert?: tbl_doctorsUpsertWithoutAppointmentsInput
    disconnect?: boolean
    delete?: tbl_doctorsWhereInput | boolean
    connect?: tbl_doctorsWhereUniqueInput
    update?: XOR<XOR<tbl_doctorsUpdateToOneWithWhereWithoutAppointmentsInput, tbl_doctorsUpdateWithoutAppointmentsInput>, tbl_doctorsUncheckedUpdateWithoutAppointmentsInput>
  }

  export type tbl_solved_appointmentsUpdateManyWithoutAppointmentNestedInput = {
    create?: XOR<tbl_solved_appointmentsCreateWithoutAppointmentInput, tbl_solved_appointmentsUncheckedCreateWithoutAppointmentInput> | tbl_solved_appointmentsCreateWithoutAppointmentInput[] | tbl_solved_appointmentsUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: tbl_solved_appointmentsCreateOrConnectWithoutAppointmentInput | tbl_solved_appointmentsCreateOrConnectWithoutAppointmentInput[]
    upsert?: tbl_solved_appointmentsUpsertWithWhereUniqueWithoutAppointmentInput | tbl_solved_appointmentsUpsertWithWhereUniqueWithoutAppointmentInput[]
    createMany?: tbl_solved_appointmentsCreateManyAppointmentInputEnvelope
    set?: tbl_solved_appointmentsWhereUniqueInput | tbl_solved_appointmentsWhereUniqueInput[]
    disconnect?: tbl_solved_appointmentsWhereUniqueInput | tbl_solved_appointmentsWhereUniqueInput[]
    delete?: tbl_solved_appointmentsWhereUniqueInput | tbl_solved_appointmentsWhereUniqueInput[]
    connect?: tbl_solved_appointmentsWhereUniqueInput | tbl_solved_appointmentsWhereUniqueInput[]
    update?: tbl_solved_appointmentsUpdateWithWhereUniqueWithoutAppointmentInput | tbl_solved_appointmentsUpdateWithWhereUniqueWithoutAppointmentInput[]
    updateMany?: tbl_solved_appointmentsUpdateManyWithWhereWithoutAppointmentInput | tbl_solved_appointmentsUpdateManyWithWhereWithoutAppointmentInput[]
    deleteMany?: tbl_solved_appointmentsScalarWhereInput | tbl_solved_appointmentsScalarWhereInput[]
  }

  export type tbl_solved_appointmentsUncheckedUpdateManyWithoutAppointmentNestedInput = {
    create?: XOR<tbl_solved_appointmentsCreateWithoutAppointmentInput, tbl_solved_appointmentsUncheckedCreateWithoutAppointmentInput> | tbl_solved_appointmentsCreateWithoutAppointmentInput[] | tbl_solved_appointmentsUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: tbl_solved_appointmentsCreateOrConnectWithoutAppointmentInput | tbl_solved_appointmentsCreateOrConnectWithoutAppointmentInput[]
    upsert?: tbl_solved_appointmentsUpsertWithWhereUniqueWithoutAppointmentInput | tbl_solved_appointmentsUpsertWithWhereUniqueWithoutAppointmentInput[]
    createMany?: tbl_solved_appointmentsCreateManyAppointmentInputEnvelope
    set?: tbl_solved_appointmentsWhereUniqueInput | tbl_solved_appointmentsWhereUniqueInput[]
    disconnect?: tbl_solved_appointmentsWhereUniqueInput | tbl_solved_appointmentsWhereUniqueInput[]
    delete?: tbl_solved_appointmentsWhereUniqueInput | tbl_solved_appointmentsWhereUniqueInput[]
    connect?: tbl_solved_appointmentsWhereUniqueInput | tbl_solved_appointmentsWhereUniqueInput[]
    update?: tbl_solved_appointmentsUpdateWithWhereUniqueWithoutAppointmentInput | tbl_solved_appointmentsUpdateWithWhereUniqueWithoutAppointmentInput[]
    updateMany?: tbl_solved_appointmentsUpdateManyWithWhereWithoutAppointmentInput | tbl_solved_appointmentsUpdateManyWithWhereWithoutAppointmentInput[]
    deleteMany?: tbl_solved_appointmentsScalarWhereInput | tbl_solved_appointmentsScalarWhereInput[]
  }

  export type tbl_appointmentsCreateNestedOneWithoutSolved_appointmentsInput = {
    create?: XOR<tbl_appointmentsCreateWithoutSolved_appointmentsInput, tbl_appointmentsUncheckedCreateWithoutSolved_appointmentsInput>
    connectOrCreate?: tbl_appointmentsCreateOrConnectWithoutSolved_appointmentsInput
    connect?: tbl_appointmentsWhereUniqueInput
  }

  export type tbl_doctorsCreateNestedOneWithoutSolvedInput = {
    create?: XOR<tbl_doctorsCreateWithoutSolvedInput, tbl_doctorsUncheckedCreateWithoutSolvedInput>
    connectOrCreate?: tbl_doctorsCreateOrConnectWithoutSolvedInput
    connect?: tbl_doctorsWhereUniqueInput
  }

  export type tbl_appointmentsUpdateOneWithoutSolved_appointmentsNestedInput = {
    create?: XOR<tbl_appointmentsCreateWithoutSolved_appointmentsInput, tbl_appointmentsUncheckedCreateWithoutSolved_appointmentsInput>
    connectOrCreate?: tbl_appointmentsCreateOrConnectWithoutSolved_appointmentsInput
    upsert?: tbl_appointmentsUpsertWithoutSolved_appointmentsInput
    disconnect?: boolean
    delete?: tbl_appointmentsWhereInput | boolean
    connect?: tbl_appointmentsWhereUniqueInput
    update?: XOR<XOR<tbl_appointmentsUpdateToOneWithWhereWithoutSolved_appointmentsInput, tbl_appointmentsUpdateWithoutSolved_appointmentsInput>, tbl_appointmentsUncheckedUpdateWithoutSolved_appointmentsInput>
  }

  export type tbl_doctorsUpdateOneWithoutSolvedNestedInput = {
    create?: XOR<tbl_doctorsCreateWithoutSolvedInput, tbl_doctorsUncheckedCreateWithoutSolvedInput>
    connectOrCreate?: tbl_doctorsCreateOrConnectWithoutSolvedInput
    upsert?: tbl_doctorsUpsertWithoutSolvedInput
    disconnect?: boolean
    delete?: tbl_doctorsWhereInput | boolean
    connect?: tbl_doctorsWhereUniqueInput
    update?: XOR<XOR<tbl_doctorsUpdateToOneWithWhereWithoutSolvedInput, tbl_doctorsUpdateWithoutSolvedInput>, tbl_doctorsUncheckedUpdateWithoutSolvedInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type tbl_usersCreateWithoutRoleInput = {
    id?: string
    names: string
    email: string
    password: string
  }

  export type tbl_usersUncheckedCreateWithoutRoleInput = {
    id?: string
    names: string
    email: string
    password: string
  }

  export type tbl_usersCreateOrConnectWithoutRoleInput = {
    where: tbl_usersWhereUniqueInput
    create: XOR<tbl_usersCreateWithoutRoleInput, tbl_usersUncheckedCreateWithoutRoleInput>
  }

  export type tbl_usersCreateManyRoleInputEnvelope = {
    data: tbl_usersCreateManyRoleInput | tbl_usersCreateManyRoleInput[]
  }

  export type tbl_userCreateWithoutRoleInput = {
    id?: string
    u_names: string
    u_phone: string
    u_usersname: string
    u_email: string
    u_password: string
  }

  export type tbl_userUncheckedCreateWithoutRoleInput = {
    id?: string
    u_names: string
    u_phone: string
    u_usersname: string
    u_email: string
    u_password: string
  }

  export type tbl_userCreateOrConnectWithoutRoleInput = {
    where: tbl_userWhereUniqueInput
    create: XOR<tbl_userCreateWithoutRoleInput, tbl_userUncheckedCreateWithoutRoleInput>
  }

  export type tbl_userCreateManyRoleInputEnvelope = {
    data: tbl_userCreateManyRoleInput | tbl_userCreateManyRoleInput[]
  }

  export type tbl_usersUpsertWithWhereUniqueWithoutRoleInput = {
    where: tbl_usersWhereUniqueInput
    update: XOR<tbl_usersUpdateWithoutRoleInput, tbl_usersUncheckedUpdateWithoutRoleInput>
    create: XOR<tbl_usersCreateWithoutRoleInput, tbl_usersUncheckedCreateWithoutRoleInput>
  }

  export type tbl_usersUpdateWithWhereUniqueWithoutRoleInput = {
    where: tbl_usersWhereUniqueInput
    data: XOR<tbl_usersUpdateWithoutRoleInput, tbl_usersUncheckedUpdateWithoutRoleInput>
  }

  export type tbl_usersUpdateManyWithWhereWithoutRoleInput = {
    where: tbl_usersScalarWhereInput
    data: XOR<tbl_usersUpdateManyMutationInput, tbl_usersUncheckedUpdateManyWithoutRoleInput>
  }

  export type tbl_usersScalarWhereInput = {
    AND?: tbl_usersScalarWhereInput | tbl_usersScalarWhereInput[]
    OR?: tbl_usersScalarWhereInput[]
    NOT?: tbl_usersScalarWhereInput | tbl_usersScalarWhereInput[]
    id?: StringFilter<"tbl_users"> | string
    names?: StringFilter<"tbl_users"> | string
    email?: StringFilter<"tbl_users"> | string
    password?: StringFilter<"tbl_users"> | string
    role_id?: StringFilter<"tbl_users"> | string
  }

  export type tbl_userUpsertWithWhereUniqueWithoutRoleInput = {
    where: tbl_userWhereUniqueInput
    update: XOR<tbl_userUpdateWithoutRoleInput, tbl_userUncheckedUpdateWithoutRoleInput>
    create: XOR<tbl_userCreateWithoutRoleInput, tbl_userUncheckedCreateWithoutRoleInput>
  }

  export type tbl_userUpdateWithWhereUniqueWithoutRoleInput = {
    where: tbl_userWhereUniqueInput
    data: XOR<tbl_userUpdateWithoutRoleInput, tbl_userUncheckedUpdateWithoutRoleInput>
  }

  export type tbl_userUpdateManyWithWhereWithoutRoleInput = {
    where: tbl_userScalarWhereInput
    data: XOR<tbl_userUpdateManyMutationInput, tbl_userUncheckedUpdateManyWithoutRoleInput>
  }

  export type tbl_userScalarWhereInput = {
    AND?: tbl_userScalarWhereInput | tbl_userScalarWhereInput[]
    OR?: tbl_userScalarWhereInput[]
    NOT?: tbl_userScalarWhereInput | tbl_userScalarWhereInput[]
    id?: StringFilter<"tbl_user"> | string
    u_names?: StringFilter<"tbl_user"> | string
    u_phone?: StringFilter<"tbl_user"> | string
    u_usersname?: StringFilter<"tbl_user"> | string
    u_email?: StringFilter<"tbl_user"> | string
    u_password?: StringFilter<"tbl_user"> | string
    u_role_id?: StringFilter<"tbl_user"> | string
  }

  export type tbl_rolesCreateWithoutUsersInput = {
    id?: string
    role_name: string
    system_users?: tbl_userCreateNestedManyWithoutRoleInput
  }

  export type tbl_rolesUncheckedCreateWithoutUsersInput = {
    id?: string
    role_name: string
    system_users?: tbl_userUncheckedCreateNestedManyWithoutRoleInput
  }

  export type tbl_rolesCreateOrConnectWithoutUsersInput = {
    where: tbl_rolesWhereUniqueInput
    create: XOR<tbl_rolesCreateWithoutUsersInput, tbl_rolesUncheckedCreateWithoutUsersInput>
  }

  export type tbl_rolesUpsertWithoutUsersInput = {
    update: XOR<tbl_rolesUpdateWithoutUsersInput, tbl_rolesUncheckedUpdateWithoutUsersInput>
    create: XOR<tbl_rolesCreateWithoutUsersInput, tbl_rolesUncheckedCreateWithoutUsersInput>
    where?: tbl_rolesWhereInput
  }

  export type tbl_rolesUpdateToOneWithWhereWithoutUsersInput = {
    where?: tbl_rolesWhereInput
    data: XOR<tbl_rolesUpdateWithoutUsersInput, tbl_rolesUncheckedUpdateWithoutUsersInput>
  }

  export type tbl_rolesUpdateWithoutUsersInput = {
    role_name?: StringFieldUpdateOperationsInput | string
    system_users?: tbl_userUpdateManyWithoutRoleNestedInput
  }

  export type tbl_rolesUncheckedUpdateWithoutUsersInput = {
    role_name?: StringFieldUpdateOperationsInput | string
    system_users?: tbl_userUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type tbl_rolesCreateWithoutSystem_usersInput = {
    id?: string
    role_name: string
    users?: tbl_usersCreateNestedManyWithoutRoleInput
  }

  export type tbl_rolesUncheckedCreateWithoutSystem_usersInput = {
    id?: string
    role_name: string
    users?: tbl_usersUncheckedCreateNestedManyWithoutRoleInput
  }

  export type tbl_rolesCreateOrConnectWithoutSystem_usersInput = {
    where: tbl_rolesWhereUniqueInput
    create: XOR<tbl_rolesCreateWithoutSystem_usersInput, tbl_rolesUncheckedCreateWithoutSystem_usersInput>
  }

  export type tbl_rolesUpsertWithoutSystem_usersInput = {
    update: XOR<tbl_rolesUpdateWithoutSystem_usersInput, tbl_rolesUncheckedUpdateWithoutSystem_usersInput>
    create: XOR<tbl_rolesCreateWithoutSystem_usersInput, tbl_rolesUncheckedCreateWithoutSystem_usersInput>
    where?: tbl_rolesWhereInput
  }

  export type tbl_rolesUpdateToOneWithWhereWithoutSystem_usersInput = {
    where?: tbl_rolesWhereInput
    data: XOR<tbl_rolesUpdateWithoutSystem_usersInput, tbl_rolesUncheckedUpdateWithoutSystem_usersInput>
  }

  export type tbl_rolesUpdateWithoutSystem_usersInput = {
    role_name?: StringFieldUpdateOperationsInput | string
    users?: tbl_usersUpdateManyWithoutRoleNestedInput
  }

  export type tbl_rolesUncheckedUpdateWithoutSystem_usersInput = {
    role_name?: StringFieldUpdateOperationsInput | string
    users?: tbl_usersUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type tbl_appointmentsCreateWithoutDoctorInput = {
    id?: string
    patient_name: string
    appointment_date: Date | string
    status: string
    created_at?: Date | string
    solved_appointments?: tbl_solved_appointmentsCreateNestedManyWithoutAppointmentInput
  }

  export type tbl_appointmentsUncheckedCreateWithoutDoctorInput = {
    id?: string
    patient_name: string
    appointment_date: Date | string
    status: string
    created_at?: Date | string
    solved_appointments?: tbl_solved_appointmentsUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type tbl_appointmentsCreateOrConnectWithoutDoctorInput = {
    where: tbl_appointmentsWhereUniqueInput
    create: XOR<tbl_appointmentsCreateWithoutDoctorInput, tbl_appointmentsUncheckedCreateWithoutDoctorInput>
  }

  export type tbl_appointmentsCreateManyDoctorInputEnvelope = {
    data: tbl_appointmentsCreateManyDoctorInput | tbl_appointmentsCreateManyDoctorInput[]
  }

  export type tbl_solved_appointmentsCreateWithoutDoctorInput = {
    id?: string
    patient_name: string
    appointment_date: Date | string
    status: string
    solved_at?: Date | string
    appointment?: tbl_appointmentsCreateNestedOneWithoutSolved_appointmentsInput
  }

  export type tbl_solved_appointmentsUncheckedCreateWithoutDoctorInput = {
    id?: string
    appointment_id: string
    patient_name: string
    appointment_date: Date | string
    status: string
    solved_at?: Date | string
  }

  export type tbl_solved_appointmentsCreateOrConnectWithoutDoctorInput = {
    where: tbl_solved_appointmentsWhereUniqueInput
    create: XOR<tbl_solved_appointmentsCreateWithoutDoctorInput, tbl_solved_appointmentsUncheckedCreateWithoutDoctorInput>
  }

  export type tbl_solved_appointmentsCreateManyDoctorInputEnvelope = {
    data: tbl_solved_appointmentsCreateManyDoctorInput | tbl_solved_appointmentsCreateManyDoctorInput[]
  }

  export type tbl_appointmentsUpsertWithWhereUniqueWithoutDoctorInput = {
    where: tbl_appointmentsWhereUniqueInput
    update: XOR<tbl_appointmentsUpdateWithoutDoctorInput, tbl_appointmentsUncheckedUpdateWithoutDoctorInput>
    create: XOR<tbl_appointmentsCreateWithoutDoctorInput, tbl_appointmentsUncheckedCreateWithoutDoctorInput>
  }

  export type tbl_appointmentsUpdateWithWhereUniqueWithoutDoctorInput = {
    where: tbl_appointmentsWhereUniqueInput
    data: XOR<tbl_appointmentsUpdateWithoutDoctorInput, tbl_appointmentsUncheckedUpdateWithoutDoctorInput>
  }

  export type tbl_appointmentsUpdateManyWithWhereWithoutDoctorInput = {
    where: tbl_appointmentsScalarWhereInput
    data: XOR<tbl_appointmentsUpdateManyMutationInput, tbl_appointmentsUncheckedUpdateManyWithoutDoctorInput>
  }

  export type tbl_appointmentsScalarWhereInput = {
    AND?: tbl_appointmentsScalarWhereInput | tbl_appointmentsScalarWhereInput[]
    OR?: tbl_appointmentsScalarWhereInput[]
    NOT?: tbl_appointmentsScalarWhereInput | tbl_appointmentsScalarWhereInput[]
    id?: StringFilter<"tbl_appointments"> | string
    doctor_id?: StringFilter<"tbl_appointments"> | string
    patient_name?: StringFilter<"tbl_appointments"> | string
    appointment_date?: DateTimeFilter<"tbl_appointments"> | Date | string
    status?: StringFilter<"tbl_appointments"> | string
    created_at?: DateTimeFilter<"tbl_appointments"> | Date | string
  }

  export type tbl_solved_appointmentsUpsertWithWhereUniqueWithoutDoctorInput = {
    where: tbl_solved_appointmentsWhereUniqueInput
    update: XOR<tbl_solved_appointmentsUpdateWithoutDoctorInput, tbl_solved_appointmentsUncheckedUpdateWithoutDoctorInput>
    create: XOR<tbl_solved_appointmentsCreateWithoutDoctorInput, tbl_solved_appointmentsUncheckedCreateWithoutDoctorInput>
  }

  export type tbl_solved_appointmentsUpdateWithWhereUniqueWithoutDoctorInput = {
    where: tbl_solved_appointmentsWhereUniqueInput
    data: XOR<tbl_solved_appointmentsUpdateWithoutDoctorInput, tbl_solved_appointmentsUncheckedUpdateWithoutDoctorInput>
  }

  export type tbl_solved_appointmentsUpdateManyWithWhereWithoutDoctorInput = {
    where: tbl_solved_appointmentsScalarWhereInput
    data: XOR<tbl_solved_appointmentsUpdateManyMutationInput, tbl_solved_appointmentsUncheckedUpdateManyWithoutDoctorInput>
  }

  export type tbl_solved_appointmentsScalarWhereInput = {
    AND?: tbl_solved_appointmentsScalarWhereInput | tbl_solved_appointmentsScalarWhereInput[]
    OR?: tbl_solved_appointmentsScalarWhereInput[]
    NOT?: tbl_solved_appointmentsScalarWhereInput | tbl_solved_appointmentsScalarWhereInput[]
    id?: StringFilter<"tbl_solved_appointments"> | string
    appointment_id?: StringFilter<"tbl_solved_appointments"> | string
    doctor_id?: StringFilter<"tbl_solved_appointments"> | string
    patient_name?: StringFilter<"tbl_solved_appointments"> | string
    appointment_date?: DateTimeFilter<"tbl_solved_appointments"> | Date | string
    status?: StringFilter<"tbl_solved_appointments"> | string
    solved_at?: DateTimeFilter<"tbl_solved_appointments"> | Date | string
  }

  export type tbl_doctorsCreateWithoutAppointmentsInput = {
    id?: string
    name: string
    specialization: string
    solved?: tbl_solved_appointmentsCreateNestedManyWithoutDoctorInput
  }

  export type tbl_doctorsUncheckedCreateWithoutAppointmentsInput = {
    id?: string
    name: string
    specialization: string
    solved?: tbl_solved_appointmentsUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type tbl_doctorsCreateOrConnectWithoutAppointmentsInput = {
    where: tbl_doctorsWhereUniqueInput
    create: XOR<tbl_doctorsCreateWithoutAppointmentsInput, tbl_doctorsUncheckedCreateWithoutAppointmentsInput>
  }

  export type tbl_solved_appointmentsCreateWithoutAppointmentInput = {
    id?: string
    patient_name: string
    appointment_date: Date | string
    status: string
    solved_at?: Date | string
    doctor?: tbl_doctorsCreateNestedOneWithoutSolvedInput
  }

  export type tbl_solved_appointmentsUncheckedCreateWithoutAppointmentInput = {
    id?: string
    doctor_id: string
    patient_name: string
    appointment_date: Date | string
    status: string
    solved_at?: Date | string
  }

  export type tbl_solved_appointmentsCreateOrConnectWithoutAppointmentInput = {
    where: tbl_solved_appointmentsWhereUniqueInput
    create: XOR<tbl_solved_appointmentsCreateWithoutAppointmentInput, tbl_solved_appointmentsUncheckedCreateWithoutAppointmentInput>
  }

  export type tbl_solved_appointmentsCreateManyAppointmentInputEnvelope = {
    data: tbl_solved_appointmentsCreateManyAppointmentInput | tbl_solved_appointmentsCreateManyAppointmentInput[]
  }

  export type tbl_doctorsUpsertWithoutAppointmentsInput = {
    update: XOR<tbl_doctorsUpdateWithoutAppointmentsInput, tbl_doctorsUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<tbl_doctorsCreateWithoutAppointmentsInput, tbl_doctorsUncheckedCreateWithoutAppointmentsInput>
    where?: tbl_doctorsWhereInput
  }

  export type tbl_doctorsUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: tbl_doctorsWhereInput
    data: XOR<tbl_doctorsUpdateWithoutAppointmentsInput, tbl_doctorsUncheckedUpdateWithoutAppointmentsInput>
  }

  export type tbl_doctorsUpdateWithoutAppointmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    solved?: tbl_solved_appointmentsUpdateManyWithoutDoctorNestedInput
  }

  export type tbl_doctorsUncheckedUpdateWithoutAppointmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    solved?: tbl_solved_appointmentsUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type tbl_solved_appointmentsUpsertWithWhereUniqueWithoutAppointmentInput = {
    where: tbl_solved_appointmentsWhereUniqueInput
    update: XOR<tbl_solved_appointmentsUpdateWithoutAppointmentInput, tbl_solved_appointmentsUncheckedUpdateWithoutAppointmentInput>
    create: XOR<tbl_solved_appointmentsCreateWithoutAppointmentInput, tbl_solved_appointmentsUncheckedCreateWithoutAppointmentInput>
  }

  export type tbl_solved_appointmentsUpdateWithWhereUniqueWithoutAppointmentInput = {
    where: tbl_solved_appointmentsWhereUniqueInput
    data: XOR<tbl_solved_appointmentsUpdateWithoutAppointmentInput, tbl_solved_appointmentsUncheckedUpdateWithoutAppointmentInput>
  }

  export type tbl_solved_appointmentsUpdateManyWithWhereWithoutAppointmentInput = {
    where: tbl_solved_appointmentsScalarWhereInput
    data: XOR<tbl_solved_appointmentsUpdateManyMutationInput, tbl_solved_appointmentsUncheckedUpdateManyWithoutAppointmentInput>
  }

  export type tbl_appointmentsCreateWithoutSolved_appointmentsInput = {
    id?: string
    patient_name: string
    appointment_date: Date | string
    status: string
    created_at?: Date | string
    doctor?: tbl_doctorsCreateNestedOneWithoutAppointmentsInput
  }

  export type tbl_appointmentsUncheckedCreateWithoutSolved_appointmentsInput = {
    id?: string
    doctor_id: string
    patient_name: string
    appointment_date: Date | string
    status: string
    created_at?: Date | string
  }

  export type tbl_appointmentsCreateOrConnectWithoutSolved_appointmentsInput = {
    where: tbl_appointmentsWhereUniqueInput
    create: XOR<tbl_appointmentsCreateWithoutSolved_appointmentsInput, tbl_appointmentsUncheckedCreateWithoutSolved_appointmentsInput>
  }

  export type tbl_doctorsCreateWithoutSolvedInput = {
    id?: string
    name: string
    specialization: string
    appointments?: tbl_appointmentsCreateNestedManyWithoutDoctorInput
  }

  export type tbl_doctorsUncheckedCreateWithoutSolvedInput = {
    id?: string
    name: string
    specialization: string
    appointments?: tbl_appointmentsUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type tbl_doctorsCreateOrConnectWithoutSolvedInput = {
    where: tbl_doctorsWhereUniqueInput
    create: XOR<tbl_doctorsCreateWithoutSolvedInput, tbl_doctorsUncheckedCreateWithoutSolvedInput>
  }

  export type tbl_appointmentsUpsertWithoutSolved_appointmentsInput = {
    update: XOR<tbl_appointmentsUpdateWithoutSolved_appointmentsInput, tbl_appointmentsUncheckedUpdateWithoutSolved_appointmentsInput>
    create: XOR<tbl_appointmentsCreateWithoutSolved_appointmentsInput, tbl_appointmentsUncheckedCreateWithoutSolved_appointmentsInput>
    where?: tbl_appointmentsWhereInput
  }

  export type tbl_appointmentsUpdateToOneWithWhereWithoutSolved_appointmentsInput = {
    where?: tbl_appointmentsWhereInput
    data: XOR<tbl_appointmentsUpdateWithoutSolved_appointmentsInput, tbl_appointmentsUncheckedUpdateWithoutSolved_appointmentsInput>
  }

  export type tbl_appointmentsUpdateWithoutSolved_appointmentsInput = {
    patient_name?: StringFieldUpdateOperationsInput | string
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: tbl_doctorsUpdateOneWithoutAppointmentsNestedInput
  }

  export type tbl_appointmentsUncheckedUpdateWithoutSolved_appointmentsInput = {
    doctor_id?: StringFieldUpdateOperationsInput | string
    patient_name?: StringFieldUpdateOperationsInput | string
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_doctorsUpsertWithoutSolvedInput = {
    update: XOR<tbl_doctorsUpdateWithoutSolvedInput, tbl_doctorsUncheckedUpdateWithoutSolvedInput>
    create: XOR<tbl_doctorsCreateWithoutSolvedInput, tbl_doctorsUncheckedCreateWithoutSolvedInput>
    where?: tbl_doctorsWhereInput
  }

  export type tbl_doctorsUpdateToOneWithWhereWithoutSolvedInput = {
    where?: tbl_doctorsWhereInput
    data: XOR<tbl_doctorsUpdateWithoutSolvedInput, tbl_doctorsUncheckedUpdateWithoutSolvedInput>
  }

  export type tbl_doctorsUpdateWithoutSolvedInput = {
    name?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    appointments?: tbl_appointmentsUpdateManyWithoutDoctorNestedInput
  }

  export type tbl_doctorsUncheckedUpdateWithoutSolvedInput = {
    name?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    appointments?: tbl_appointmentsUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type tbl_usersCreateManyRoleInput = {
    id?: string
    names: string
    email: string
    password: string
  }

  export type tbl_userCreateManyRoleInput = {
    id?: string
    u_names: string
    u_phone: string
    u_usersname: string
    u_email: string
    u_password: string
  }

  export type tbl_usersUpdateWithoutRoleInput = {
    names?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_usersUncheckedUpdateWithoutRoleInput = {
    names?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_usersUncheckedUpdateManyWithoutRoleInput = {
    names?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_userUpdateWithoutRoleInput = {
    u_names?: StringFieldUpdateOperationsInput | string
    u_phone?: StringFieldUpdateOperationsInput | string
    u_usersname?: StringFieldUpdateOperationsInput | string
    u_email?: StringFieldUpdateOperationsInput | string
    u_password?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_userUncheckedUpdateWithoutRoleInput = {
    u_names?: StringFieldUpdateOperationsInput | string
    u_phone?: StringFieldUpdateOperationsInput | string
    u_usersname?: StringFieldUpdateOperationsInput | string
    u_email?: StringFieldUpdateOperationsInput | string
    u_password?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_userUncheckedUpdateManyWithoutRoleInput = {
    u_names?: StringFieldUpdateOperationsInput | string
    u_phone?: StringFieldUpdateOperationsInput | string
    u_usersname?: StringFieldUpdateOperationsInput | string
    u_email?: StringFieldUpdateOperationsInput | string
    u_password?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_appointmentsCreateManyDoctorInput = {
    id?: string
    patient_name: string
    appointment_date: Date | string
    status: string
    created_at?: Date | string
  }

  export type tbl_solved_appointmentsCreateManyDoctorInput = {
    id?: string
    appointment_id: string
    patient_name: string
    appointment_date: Date | string
    status: string
    solved_at?: Date | string
  }

  export type tbl_appointmentsUpdateWithoutDoctorInput = {
    patient_name?: StringFieldUpdateOperationsInput | string
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    solved_appointments?: tbl_solved_appointmentsUpdateManyWithoutAppointmentNestedInput
  }

  export type tbl_appointmentsUncheckedUpdateWithoutDoctorInput = {
    patient_name?: StringFieldUpdateOperationsInput | string
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    solved_appointments?: tbl_solved_appointmentsUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type tbl_appointmentsUncheckedUpdateManyWithoutDoctorInput = {
    patient_name?: StringFieldUpdateOperationsInput | string
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_solved_appointmentsUpdateWithoutDoctorInput = {
    patient_name?: StringFieldUpdateOperationsInput | string
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    solved_at?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment?: tbl_appointmentsUpdateOneWithoutSolved_appointmentsNestedInput
  }

  export type tbl_solved_appointmentsUncheckedUpdateWithoutDoctorInput = {
    appointment_id?: StringFieldUpdateOperationsInput | string
    patient_name?: StringFieldUpdateOperationsInput | string
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    solved_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_solved_appointmentsUncheckedUpdateManyWithoutDoctorInput = {
    appointment_id?: StringFieldUpdateOperationsInput | string
    patient_name?: StringFieldUpdateOperationsInput | string
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    solved_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_solved_appointmentsCreateManyAppointmentInput = {
    id?: string
    doctor_id: string
    patient_name: string
    appointment_date: Date | string
    status: string
    solved_at?: Date | string
  }

  export type tbl_solved_appointmentsUpdateWithoutAppointmentInput = {
    patient_name?: StringFieldUpdateOperationsInput | string
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    solved_at?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: tbl_doctorsUpdateOneWithoutSolvedNestedInput
  }

  export type tbl_solved_appointmentsUncheckedUpdateWithoutAppointmentInput = {
    doctor_id?: StringFieldUpdateOperationsInput | string
    patient_name?: StringFieldUpdateOperationsInput | string
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    solved_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_solved_appointmentsUncheckedUpdateManyWithoutAppointmentInput = {
    doctor_id?: StringFieldUpdateOperationsInput | string
    patient_name?: StringFieldUpdateOperationsInput | string
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    solved_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
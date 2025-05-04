
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model PlatformAccount
 * 
 */
export type PlatformAccount = $Result.DefaultSelection<Prisma.$PlatformAccountPayload>
/**
 * Model Connection
 * 
 */
export type Connection = $Result.DefaultSelection<Prisma.$ConnectionPayload>
/**
 * Model ConnectionEvent
 * 
 */
export type ConnectionEvent = $Result.DefaultSelection<Prisma.$ConnectionEventPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model NetworkStats
 * 
 */
export type NetworkStats = $Result.DefaultSelection<Prisma.$NetworkStatsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Platform: {
  LINKEDIN: 'LINKEDIN',
  TWITTER: 'TWITTER',
  FACEBOOK: 'FACEBOOK',
  INSTAGRAM: 'INSTAGRAM',
  EMAIL: 'EMAIL',
  SMS: 'SMS',
  WHATSAPP: 'WHATSAPP',
  TELEGRAM: 'TELEGRAM',
  DISCORD: 'DISCORD',
  SLACK: 'SLACK',
  OTHER: 'OTHER'
};

export type Platform = (typeof Platform)[keyof typeof Platform]


export const EventType: {
  CONNECTED: 'CONNECTED',
  MESSAGE_SENT: 'MESSAGE_SENT',
  MESSAGE_RECEIVED: 'MESSAGE_RECEIVED',
  PROFILE_VIEWED: 'PROFILE_VIEWED',
  CONTENT_LIKED: 'CONTENT_LIKED',
  CONTENT_SHARED: 'CONTENT_SHARED',
  MEETING: 'MEETING',
  CALL: 'CALL',
  EMAIL: 'EMAIL',
  TAGGED: 'TAGGED',
  OTHER: 'OTHER'
};

export type EventType = (typeof EventType)[keyof typeof EventType]

}

export type Platform = $Enums.Platform

export const Platform: typeof $Enums.Platform

export type EventType = $Enums.EventType

export const EventType: typeof $Enums.EventType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.platformAccount`: Exposes CRUD operations for the **PlatformAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlatformAccounts
    * const platformAccounts = await prisma.platformAccount.findMany()
    * ```
    */
  get platformAccount(): Prisma.PlatformAccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.connection`: Exposes CRUD operations for the **Connection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Connections
    * const connections = await prisma.connection.findMany()
    * ```
    */
  get connection(): Prisma.ConnectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.connectionEvent`: Exposes CRUD operations for the **ConnectionEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConnectionEvents
    * const connectionEvents = await prisma.connectionEvent.findMany()
    * ```
    */
  get connectionEvent(): Prisma.ConnectionEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.networkStats`: Exposes CRUD operations for the **NetworkStats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NetworkStats
    * const networkStats = await prisma.networkStats.findMany()
    * ```
    */
  get networkStats(): Prisma.NetworkStatsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    User: 'User',
    PlatformAccount: 'PlatformAccount',
    Connection: 'Connection',
    ConnectionEvent: 'ConnectionEvent',
    Message: 'Message',
    NetworkStats: 'NetworkStats'
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
      modelProps: "user" | "platformAccount" | "connection" | "connectionEvent" | "message" | "networkStats"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      PlatformAccount: {
        payload: Prisma.$PlatformAccountPayload<ExtArgs>
        fields: Prisma.PlatformAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlatformAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlatformAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformAccountPayload>
          }
          findFirst: {
            args: Prisma.PlatformAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlatformAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformAccountPayload>
          }
          findMany: {
            args: Prisma.PlatformAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformAccountPayload>[]
          }
          create: {
            args: Prisma.PlatformAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformAccountPayload>
          }
          createMany: {
            args: Prisma.PlatformAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlatformAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformAccountPayload>[]
          }
          delete: {
            args: Prisma.PlatformAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformAccountPayload>
          }
          update: {
            args: Prisma.PlatformAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformAccountPayload>
          }
          deleteMany: {
            args: Prisma.PlatformAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlatformAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlatformAccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformAccountPayload>[]
          }
          upsert: {
            args: Prisma.PlatformAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformAccountPayload>
          }
          aggregate: {
            args: Prisma.PlatformAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlatformAccount>
          }
          groupBy: {
            args: Prisma.PlatformAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlatformAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlatformAccountCountArgs<ExtArgs>
            result: $Utils.Optional<PlatformAccountCountAggregateOutputType> | number
          }
        }
      }
      Connection: {
        payload: Prisma.$ConnectionPayload<ExtArgs>
        fields: Prisma.ConnectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConnectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConnectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload>
          }
          findFirst: {
            args: Prisma.ConnectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConnectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload>
          }
          findMany: {
            args: Prisma.ConnectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload>[]
          }
          create: {
            args: Prisma.ConnectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload>
          }
          createMany: {
            args: Prisma.ConnectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConnectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload>[]
          }
          delete: {
            args: Prisma.ConnectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload>
          }
          update: {
            args: Prisma.ConnectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload>
          }
          deleteMany: {
            args: Prisma.ConnectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConnectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConnectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload>[]
          }
          upsert: {
            args: Prisma.ConnectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload>
          }
          aggregate: {
            args: Prisma.ConnectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConnection>
          }
          groupBy: {
            args: Prisma.ConnectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConnectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConnectionCountArgs<ExtArgs>
            result: $Utils.Optional<ConnectionCountAggregateOutputType> | number
          }
        }
      }
      ConnectionEvent: {
        payload: Prisma.$ConnectionEventPayload<ExtArgs>
        fields: Prisma.ConnectionEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConnectionEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConnectionEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionEventPayload>
          }
          findFirst: {
            args: Prisma.ConnectionEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConnectionEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionEventPayload>
          }
          findMany: {
            args: Prisma.ConnectionEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionEventPayload>[]
          }
          create: {
            args: Prisma.ConnectionEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionEventPayload>
          }
          createMany: {
            args: Prisma.ConnectionEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConnectionEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionEventPayload>[]
          }
          delete: {
            args: Prisma.ConnectionEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionEventPayload>
          }
          update: {
            args: Prisma.ConnectionEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionEventPayload>
          }
          deleteMany: {
            args: Prisma.ConnectionEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConnectionEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConnectionEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionEventPayload>[]
          }
          upsert: {
            args: Prisma.ConnectionEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionEventPayload>
          }
          aggregate: {
            args: Prisma.ConnectionEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConnectionEvent>
          }
          groupBy: {
            args: Prisma.ConnectionEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConnectionEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConnectionEventCountArgs<ExtArgs>
            result: $Utils.Optional<ConnectionEventCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      NetworkStats: {
        payload: Prisma.$NetworkStatsPayload<ExtArgs>
        fields: Prisma.NetworkStatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NetworkStatsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkStatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NetworkStatsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkStatsPayload>
          }
          findFirst: {
            args: Prisma.NetworkStatsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkStatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NetworkStatsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkStatsPayload>
          }
          findMany: {
            args: Prisma.NetworkStatsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkStatsPayload>[]
          }
          create: {
            args: Prisma.NetworkStatsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkStatsPayload>
          }
          createMany: {
            args: Prisma.NetworkStatsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NetworkStatsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkStatsPayload>[]
          }
          delete: {
            args: Prisma.NetworkStatsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkStatsPayload>
          }
          update: {
            args: Prisma.NetworkStatsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkStatsPayload>
          }
          deleteMany: {
            args: Prisma.NetworkStatsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NetworkStatsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NetworkStatsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkStatsPayload>[]
          }
          upsert: {
            args: Prisma.NetworkStatsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkStatsPayload>
          }
          aggregate: {
            args: Prisma.NetworkStatsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNetworkStats>
          }
          groupBy: {
            args: Prisma.NetworkStatsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NetworkStatsGroupByOutputType>[]
          }
          count: {
            args: Prisma.NetworkStatsCountArgs<ExtArgs>
            result: $Utils.Optional<NetworkStatsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
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
      isolationLevel?: Prisma.TransactionIsolationLevel
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
    user?: UserOmit
    platformAccount?: PlatformAccountOmit
    connection?: ConnectionOmit
    connectionEvent?: ConnectionEventOmit
    message?: MessageOmit
    networkStats?: NetworkStatsOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    connections: number
    platformAccounts: number
    sentMessages: number
    receivedMessages: number
    interactions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    connections?: boolean | UserCountOutputTypeCountConnectionsArgs
    platformAccounts?: boolean | UserCountOutputTypeCountPlatformAccountsArgs
    sentMessages?: boolean | UserCountOutputTypeCountSentMessagesArgs
    receivedMessages?: boolean | UserCountOutputTypeCountReceivedMessagesArgs
    interactions?: boolean | UserCountOutputTypeCountInteractionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountConnectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConnectionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPlatformAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlatformAccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInteractionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConnectionEventWhereInput
  }


  /**
   * Count Type ConnectionCountOutputType
   */

  export type ConnectionCountOutputType = {
    events: number
    messages: number
  }

  export type ConnectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | ConnectionCountOutputTypeCountEventsArgs
    messages?: boolean | ConnectionCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ConnectionCountOutputType without action
   */
  export type ConnectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionCountOutputType
     */
    select?: ConnectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConnectionCountOutputType without action
   */
  export type ConnectionCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConnectionEventWhereInput
  }

  /**
   * ConnectionCountOutputType without action
   */
  export type ConnectionCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    image: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    connections?: boolean | User$connectionsArgs<ExtArgs>
    platformAccounts?: boolean | User$platformAccountsArgs<ExtArgs>
    sentMessages?: boolean | User$sentMessagesArgs<ExtArgs>
    receivedMessages?: boolean | User$receivedMessagesArgs<ExtArgs>
    interactions?: boolean | User$interactionsArgs<ExtArgs>
    networkStats?: boolean | User$networkStatsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "image" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    connections?: boolean | User$connectionsArgs<ExtArgs>
    platformAccounts?: boolean | User$platformAccountsArgs<ExtArgs>
    sentMessages?: boolean | User$sentMessagesArgs<ExtArgs>
    receivedMessages?: boolean | User$receivedMessagesArgs<ExtArgs>
    interactions?: boolean | User$interactionsArgs<ExtArgs>
    networkStats?: boolean | User$networkStatsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      connections: Prisma.$ConnectionPayload<ExtArgs>[]
      platformAccounts: Prisma.$PlatformAccountPayload<ExtArgs>[]
      sentMessages: Prisma.$MessagePayload<ExtArgs>[]
      receivedMessages: Prisma.$MessagePayload<ExtArgs>[]
      interactions: Prisma.$ConnectionEventPayload<ExtArgs>[]
      networkStats: Prisma.$NetworkStatsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      image: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    connections<T extends User$connectionsArgs<ExtArgs> = {}>(args?: Subset<T, User$connectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    platformAccounts<T extends User$platformAccountsArgs<ExtArgs> = {}>(args?: Subset<T, User$platformAccountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatformAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentMessages<T extends User$sentMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$sentMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedMessages<T extends User$receivedMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    interactions<T extends User$interactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$interactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectionEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    networkStats<T extends User$networkStatsArgs<ExtArgs> = {}>(args?: Subset<T, User$networkStatsArgs<ExtArgs>>): Prisma__NetworkStatsClient<$Result.GetResult<Prisma.$NetworkStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.connections
   */
  export type User$connectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    where?: ConnectionWhereInput
    orderBy?: ConnectionOrderByWithRelationInput | ConnectionOrderByWithRelationInput[]
    cursor?: ConnectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConnectionScalarFieldEnum | ConnectionScalarFieldEnum[]
  }

  /**
   * User.platformAccounts
   */
  export type User$platformAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformAccount
     */
    select?: PlatformAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformAccount
     */
    omit?: PlatformAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformAccountInclude<ExtArgs> | null
    where?: PlatformAccountWhereInput
    orderBy?: PlatformAccountOrderByWithRelationInput | PlatformAccountOrderByWithRelationInput[]
    cursor?: PlatformAccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlatformAccountScalarFieldEnum | PlatformAccountScalarFieldEnum[]
  }

  /**
   * User.sentMessages
   */
  export type User$sentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.receivedMessages
   */
  export type User$receivedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.interactions
   */
  export type User$interactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionEvent
     */
    select?: ConnectionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectionEvent
     */
    omit?: ConnectionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionEventInclude<ExtArgs> | null
    where?: ConnectionEventWhereInput
    orderBy?: ConnectionEventOrderByWithRelationInput | ConnectionEventOrderByWithRelationInput[]
    cursor?: ConnectionEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConnectionEventScalarFieldEnum | ConnectionEventScalarFieldEnum[]
  }

  /**
   * User.networkStats
   */
  export type User$networkStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkStats
     */
    select?: NetworkStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkStats
     */
    omit?: NetworkStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NetworkStatsInclude<ExtArgs> | null
    where?: NetworkStatsWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model PlatformAccount
   */

  export type AggregatePlatformAccount = {
    _count: PlatformAccountCountAggregateOutputType | null
    _min: PlatformAccountMinAggregateOutputType | null
    _max: PlatformAccountMaxAggregateOutputType | null
  }

  export type PlatformAccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    platformType: $Enums.Platform | null
    platformId: string | null
    accessToken: string | null
    refreshToken: string | null
    tokenExpiry: Date | null
    lastSynced: Date | null
    username: string | null
    profileUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlatformAccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    platformType: $Enums.Platform | null
    platformId: string | null
    accessToken: string | null
    refreshToken: string | null
    tokenExpiry: Date | null
    lastSynced: Date | null
    username: string | null
    profileUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlatformAccountCountAggregateOutputType = {
    id: number
    userId: number
    platformType: number
    platformId: number
    accessToken: number
    refreshToken: number
    tokenExpiry: number
    lastSynced: number
    username: number
    profileUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlatformAccountMinAggregateInputType = {
    id?: true
    userId?: true
    platformType?: true
    platformId?: true
    accessToken?: true
    refreshToken?: true
    tokenExpiry?: true
    lastSynced?: true
    username?: true
    profileUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlatformAccountMaxAggregateInputType = {
    id?: true
    userId?: true
    platformType?: true
    platformId?: true
    accessToken?: true
    refreshToken?: true
    tokenExpiry?: true
    lastSynced?: true
    username?: true
    profileUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlatformAccountCountAggregateInputType = {
    id?: true
    userId?: true
    platformType?: true
    platformId?: true
    accessToken?: true
    refreshToken?: true
    tokenExpiry?: true
    lastSynced?: true
    username?: true
    profileUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlatformAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlatformAccount to aggregate.
     */
    where?: PlatformAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlatformAccounts to fetch.
     */
    orderBy?: PlatformAccountOrderByWithRelationInput | PlatformAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlatformAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlatformAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlatformAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlatformAccounts
    **/
    _count?: true | PlatformAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlatformAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlatformAccountMaxAggregateInputType
  }

  export type GetPlatformAccountAggregateType<T extends PlatformAccountAggregateArgs> = {
        [P in keyof T & keyof AggregatePlatformAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlatformAccount[P]>
      : GetScalarType<T[P], AggregatePlatformAccount[P]>
  }




  export type PlatformAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlatformAccountWhereInput
    orderBy?: PlatformAccountOrderByWithAggregationInput | PlatformAccountOrderByWithAggregationInput[]
    by: PlatformAccountScalarFieldEnum[] | PlatformAccountScalarFieldEnum
    having?: PlatformAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlatformAccountCountAggregateInputType | true
    _min?: PlatformAccountMinAggregateInputType
    _max?: PlatformAccountMaxAggregateInputType
  }

  export type PlatformAccountGroupByOutputType = {
    id: string
    userId: string
    platformType: $Enums.Platform
    platformId: string
    accessToken: string | null
    refreshToken: string | null
    tokenExpiry: Date | null
    lastSynced: Date | null
    username: string | null
    profileUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: PlatformAccountCountAggregateOutputType | null
    _min: PlatformAccountMinAggregateOutputType | null
    _max: PlatformAccountMaxAggregateOutputType | null
  }

  type GetPlatformAccountGroupByPayload<T extends PlatformAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlatformAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlatformAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlatformAccountGroupByOutputType[P]>
            : GetScalarType<T[P], PlatformAccountGroupByOutputType[P]>
        }
      >
    >


  export type PlatformAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    platformType?: boolean
    platformId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    tokenExpiry?: boolean
    lastSynced?: boolean
    username?: boolean
    profileUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["platformAccount"]>

  export type PlatformAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    platformType?: boolean
    platformId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    tokenExpiry?: boolean
    lastSynced?: boolean
    username?: boolean
    profileUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["platformAccount"]>

  export type PlatformAccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    platformType?: boolean
    platformId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    tokenExpiry?: boolean
    lastSynced?: boolean
    username?: boolean
    profileUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["platformAccount"]>

  export type PlatformAccountSelectScalar = {
    id?: boolean
    userId?: boolean
    platformType?: boolean
    platformId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    tokenExpiry?: boolean
    lastSynced?: boolean
    username?: boolean
    profileUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PlatformAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "platformType" | "platformId" | "accessToken" | "refreshToken" | "tokenExpiry" | "lastSynced" | "username" | "profileUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["platformAccount"]>
  export type PlatformAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PlatformAccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PlatformAccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PlatformAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlatformAccount"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      platformType: $Enums.Platform
      platformId: string
      accessToken: string | null
      refreshToken: string | null
      tokenExpiry: Date | null
      lastSynced: Date | null
      username: string | null
      profileUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["platformAccount"]>
    composites: {}
  }

  type PlatformAccountGetPayload<S extends boolean | null | undefined | PlatformAccountDefaultArgs> = $Result.GetResult<Prisma.$PlatformAccountPayload, S>

  type PlatformAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlatformAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlatformAccountCountAggregateInputType | true
    }

  export interface PlatformAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlatformAccount'], meta: { name: 'PlatformAccount' } }
    /**
     * Find zero or one PlatformAccount that matches the filter.
     * @param {PlatformAccountFindUniqueArgs} args - Arguments to find a PlatformAccount
     * @example
     * // Get one PlatformAccount
     * const platformAccount = await prisma.platformAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlatformAccountFindUniqueArgs>(args: SelectSubset<T, PlatformAccountFindUniqueArgs<ExtArgs>>): Prisma__PlatformAccountClient<$Result.GetResult<Prisma.$PlatformAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlatformAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlatformAccountFindUniqueOrThrowArgs} args - Arguments to find a PlatformAccount
     * @example
     * // Get one PlatformAccount
     * const platformAccount = await prisma.platformAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlatformAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, PlatformAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlatformAccountClient<$Result.GetResult<Prisma.$PlatformAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlatformAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformAccountFindFirstArgs} args - Arguments to find a PlatformAccount
     * @example
     * // Get one PlatformAccount
     * const platformAccount = await prisma.platformAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlatformAccountFindFirstArgs>(args?: SelectSubset<T, PlatformAccountFindFirstArgs<ExtArgs>>): Prisma__PlatformAccountClient<$Result.GetResult<Prisma.$PlatformAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlatformAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformAccountFindFirstOrThrowArgs} args - Arguments to find a PlatformAccount
     * @example
     * // Get one PlatformAccount
     * const platformAccount = await prisma.platformAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlatformAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, PlatformAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlatformAccountClient<$Result.GetResult<Prisma.$PlatformAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlatformAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlatformAccounts
     * const platformAccounts = await prisma.platformAccount.findMany()
     * 
     * // Get first 10 PlatformAccounts
     * const platformAccounts = await prisma.platformAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const platformAccountWithIdOnly = await prisma.platformAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlatformAccountFindManyArgs>(args?: SelectSubset<T, PlatformAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatformAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlatformAccount.
     * @param {PlatformAccountCreateArgs} args - Arguments to create a PlatformAccount.
     * @example
     * // Create one PlatformAccount
     * const PlatformAccount = await prisma.platformAccount.create({
     *   data: {
     *     // ... data to create a PlatformAccount
     *   }
     * })
     * 
     */
    create<T extends PlatformAccountCreateArgs>(args: SelectSubset<T, PlatformAccountCreateArgs<ExtArgs>>): Prisma__PlatformAccountClient<$Result.GetResult<Prisma.$PlatformAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlatformAccounts.
     * @param {PlatformAccountCreateManyArgs} args - Arguments to create many PlatformAccounts.
     * @example
     * // Create many PlatformAccounts
     * const platformAccount = await prisma.platformAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlatformAccountCreateManyArgs>(args?: SelectSubset<T, PlatformAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlatformAccounts and returns the data saved in the database.
     * @param {PlatformAccountCreateManyAndReturnArgs} args - Arguments to create many PlatformAccounts.
     * @example
     * // Create many PlatformAccounts
     * const platformAccount = await prisma.platformAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlatformAccounts and only return the `id`
     * const platformAccountWithIdOnly = await prisma.platformAccount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlatformAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, PlatformAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatformAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlatformAccount.
     * @param {PlatformAccountDeleteArgs} args - Arguments to delete one PlatformAccount.
     * @example
     * // Delete one PlatformAccount
     * const PlatformAccount = await prisma.platformAccount.delete({
     *   where: {
     *     // ... filter to delete one PlatformAccount
     *   }
     * })
     * 
     */
    delete<T extends PlatformAccountDeleteArgs>(args: SelectSubset<T, PlatformAccountDeleteArgs<ExtArgs>>): Prisma__PlatformAccountClient<$Result.GetResult<Prisma.$PlatformAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlatformAccount.
     * @param {PlatformAccountUpdateArgs} args - Arguments to update one PlatformAccount.
     * @example
     * // Update one PlatformAccount
     * const platformAccount = await prisma.platformAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlatformAccountUpdateArgs>(args: SelectSubset<T, PlatformAccountUpdateArgs<ExtArgs>>): Prisma__PlatformAccountClient<$Result.GetResult<Prisma.$PlatformAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlatformAccounts.
     * @param {PlatformAccountDeleteManyArgs} args - Arguments to filter PlatformAccounts to delete.
     * @example
     * // Delete a few PlatformAccounts
     * const { count } = await prisma.platformAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlatformAccountDeleteManyArgs>(args?: SelectSubset<T, PlatformAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlatformAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlatformAccounts
     * const platformAccount = await prisma.platformAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlatformAccountUpdateManyArgs>(args: SelectSubset<T, PlatformAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlatformAccounts and returns the data updated in the database.
     * @param {PlatformAccountUpdateManyAndReturnArgs} args - Arguments to update many PlatformAccounts.
     * @example
     * // Update many PlatformAccounts
     * const platformAccount = await prisma.platformAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlatformAccounts and only return the `id`
     * const platformAccountWithIdOnly = await prisma.platformAccount.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlatformAccountUpdateManyAndReturnArgs>(args: SelectSubset<T, PlatformAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatformAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlatformAccount.
     * @param {PlatformAccountUpsertArgs} args - Arguments to update or create a PlatformAccount.
     * @example
     * // Update or create a PlatformAccount
     * const platformAccount = await prisma.platformAccount.upsert({
     *   create: {
     *     // ... data to create a PlatformAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlatformAccount we want to update
     *   }
     * })
     */
    upsert<T extends PlatformAccountUpsertArgs>(args: SelectSubset<T, PlatformAccountUpsertArgs<ExtArgs>>): Prisma__PlatformAccountClient<$Result.GetResult<Prisma.$PlatformAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlatformAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformAccountCountArgs} args - Arguments to filter PlatformAccounts to count.
     * @example
     * // Count the number of PlatformAccounts
     * const count = await prisma.platformAccount.count({
     *   where: {
     *     // ... the filter for the PlatformAccounts we want to count
     *   }
     * })
    **/
    count<T extends PlatformAccountCountArgs>(
      args?: Subset<T, PlatformAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlatformAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlatformAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlatformAccountAggregateArgs>(args: Subset<T, PlatformAccountAggregateArgs>): Prisma.PrismaPromise<GetPlatformAccountAggregateType<T>>

    /**
     * Group by PlatformAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformAccountGroupByArgs} args - Group by arguments.
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
      T extends PlatformAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlatformAccountGroupByArgs['orderBy'] }
        : { orderBy?: PlatformAccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlatformAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlatformAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlatformAccount model
   */
  readonly fields: PlatformAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlatformAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlatformAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PlatformAccount model
   */
  interface PlatformAccountFieldRefs {
    readonly id: FieldRef<"PlatformAccount", 'String'>
    readonly userId: FieldRef<"PlatformAccount", 'String'>
    readonly platformType: FieldRef<"PlatformAccount", 'Platform'>
    readonly platformId: FieldRef<"PlatformAccount", 'String'>
    readonly accessToken: FieldRef<"PlatformAccount", 'String'>
    readonly refreshToken: FieldRef<"PlatformAccount", 'String'>
    readonly tokenExpiry: FieldRef<"PlatformAccount", 'DateTime'>
    readonly lastSynced: FieldRef<"PlatformAccount", 'DateTime'>
    readonly username: FieldRef<"PlatformAccount", 'String'>
    readonly profileUrl: FieldRef<"PlatformAccount", 'String'>
    readonly createdAt: FieldRef<"PlatformAccount", 'DateTime'>
    readonly updatedAt: FieldRef<"PlatformAccount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PlatformAccount findUnique
   */
  export type PlatformAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformAccount
     */
    select?: PlatformAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformAccount
     */
    omit?: PlatformAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformAccountInclude<ExtArgs> | null
    /**
     * Filter, which PlatformAccount to fetch.
     */
    where: PlatformAccountWhereUniqueInput
  }

  /**
   * PlatformAccount findUniqueOrThrow
   */
  export type PlatformAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformAccount
     */
    select?: PlatformAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformAccount
     */
    omit?: PlatformAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformAccountInclude<ExtArgs> | null
    /**
     * Filter, which PlatformAccount to fetch.
     */
    where: PlatformAccountWhereUniqueInput
  }

  /**
   * PlatformAccount findFirst
   */
  export type PlatformAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformAccount
     */
    select?: PlatformAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformAccount
     */
    omit?: PlatformAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformAccountInclude<ExtArgs> | null
    /**
     * Filter, which PlatformAccount to fetch.
     */
    where?: PlatformAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlatformAccounts to fetch.
     */
    orderBy?: PlatformAccountOrderByWithRelationInput | PlatformAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlatformAccounts.
     */
    cursor?: PlatformAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlatformAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlatformAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlatformAccounts.
     */
    distinct?: PlatformAccountScalarFieldEnum | PlatformAccountScalarFieldEnum[]
  }

  /**
   * PlatformAccount findFirstOrThrow
   */
  export type PlatformAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformAccount
     */
    select?: PlatformAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformAccount
     */
    omit?: PlatformAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformAccountInclude<ExtArgs> | null
    /**
     * Filter, which PlatformAccount to fetch.
     */
    where?: PlatformAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlatformAccounts to fetch.
     */
    orderBy?: PlatformAccountOrderByWithRelationInput | PlatformAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlatformAccounts.
     */
    cursor?: PlatformAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlatformAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlatformAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlatformAccounts.
     */
    distinct?: PlatformAccountScalarFieldEnum | PlatformAccountScalarFieldEnum[]
  }

  /**
   * PlatformAccount findMany
   */
  export type PlatformAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformAccount
     */
    select?: PlatformAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformAccount
     */
    omit?: PlatformAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformAccountInclude<ExtArgs> | null
    /**
     * Filter, which PlatformAccounts to fetch.
     */
    where?: PlatformAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlatformAccounts to fetch.
     */
    orderBy?: PlatformAccountOrderByWithRelationInput | PlatformAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlatformAccounts.
     */
    cursor?: PlatformAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlatformAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlatformAccounts.
     */
    skip?: number
    distinct?: PlatformAccountScalarFieldEnum | PlatformAccountScalarFieldEnum[]
  }

  /**
   * PlatformAccount create
   */
  export type PlatformAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformAccount
     */
    select?: PlatformAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformAccount
     */
    omit?: PlatformAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a PlatformAccount.
     */
    data: XOR<PlatformAccountCreateInput, PlatformAccountUncheckedCreateInput>
  }

  /**
   * PlatformAccount createMany
   */
  export type PlatformAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlatformAccounts.
     */
    data: PlatformAccountCreateManyInput | PlatformAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlatformAccount createManyAndReturn
   */
  export type PlatformAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformAccount
     */
    select?: PlatformAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformAccount
     */
    omit?: PlatformAccountOmit<ExtArgs> | null
    /**
     * The data used to create many PlatformAccounts.
     */
    data: PlatformAccountCreateManyInput | PlatformAccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformAccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlatformAccount update
   */
  export type PlatformAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformAccount
     */
    select?: PlatformAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformAccount
     */
    omit?: PlatformAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a PlatformAccount.
     */
    data: XOR<PlatformAccountUpdateInput, PlatformAccountUncheckedUpdateInput>
    /**
     * Choose, which PlatformAccount to update.
     */
    where: PlatformAccountWhereUniqueInput
  }

  /**
   * PlatformAccount updateMany
   */
  export type PlatformAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlatformAccounts.
     */
    data: XOR<PlatformAccountUpdateManyMutationInput, PlatformAccountUncheckedUpdateManyInput>
    /**
     * Filter which PlatformAccounts to update
     */
    where?: PlatformAccountWhereInput
    /**
     * Limit how many PlatformAccounts to update.
     */
    limit?: number
  }

  /**
   * PlatformAccount updateManyAndReturn
   */
  export type PlatformAccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformAccount
     */
    select?: PlatformAccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformAccount
     */
    omit?: PlatformAccountOmit<ExtArgs> | null
    /**
     * The data used to update PlatformAccounts.
     */
    data: XOR<PlatformAccountUpdateManyMutationInput, PlatformAccountUncheckedUpdateManyInput>
    /**
     * Filter which PlatformAccounts to update
     */
    where?: PlatformAccountWhereInput
    /**
     * Limit how many PlatformAccounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformAccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlatformAccount upsert
   */
  export type PlatformAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformAccount
     */
    select?: PlatformAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformAccount
     */
    omit?: PlatformAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the PlatformAccount to update in case it exists.
     */
    where: PlatformAccountWhereUniqueInput
    /**
     * In case the PlatformAccount found by the `where` argument doesn't exist, create a new PlatformAccount with this data.
     */
    create: XOR<PlatformAccountCreateInput, PlatformAccountUncheckedCreateInput>
    /**
     * In case the PlatformAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlatformAccountUpdateInput, PlatformAccountUncheckedUpdateInput>
  }

  /**
   * PlatformAccount delete
   */
  export type PlatformAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformAccount
     */
    select?: PlatformAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformAccount
     */
    omit?: PlatformAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformAccountInclude<ExtArgs> | null
    /**
     * Filter which PlatformAccount to delete.
     */
    where: PlatformAccountWhereUniqueInput
  }

  /**
   * PlatformAccount deleteMany
   */
  export type PlatformAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlatformAccounts to delete
     */
    where?: PlatformAccountWhereInput
    /**
     * Limit how many PlatformAccounts to delete.
     */
    limit?: number
  }

  /**
   * PlatformAccount without action
   */
  export type PlatformAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformAccount
     */
    select?: PlatformAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformAccount
     */
    omit?: PlatformAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformAccountInclude<ExtArgs> | null
  }


  /**
   * Model Connection
   */

  export type AggregateConnection = {
    _count: ConnectionCountAggregateOutputType | null
    _avg: ConnectionAvgAggregateOutputType | null
    _sum: ConnectionSumAggregateOutputType | null
    _min: ConnectionMinAggregateOutputType | null
    _max: ConnectionMaxAggregateOutputType | null
  }

  export type ConnectionAvgAggregateOutputType = {
    connectionLevel: number | null
    strength: number | null
  }

  export type ConnectionSumAggregateOutputType = {
    connectionLevel: number | null
    strength: number | null
  }

  export type ConnectionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    platformType: $Enums.Platform | null
    connectionId: string | null
    name: string | null
    jobTitle: string | null
    company: string | null
    email: string | null
    phoneNumber: string | null
    profileUrl: string | null
    imageUrl: string | null
    connectionLevel: number | null
    location: string | null
    bio: string | null
    notes: string | null
    firstConnected: Date | null
    lastInteraction: Date | null
    strength: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConnectionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    platformType: $Enums.Platform | null
    connectionId: string | null
    name: string | null
    jobTitle: string | null
    company: string | null
    email: string | null
    phoneNumber: string | null
    profileUrl: string | null
    imageUrl: string | null
    connectionLevel: number | null
    location: string | null
    bio: string | null
    notes: string | null
    firstConnected: Date | null
    lastInteraction: Date | null
    strength: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConnectionCountAggregateOutputType = {
    id: number
    userId: number
    platformType: number
    connectionId: number
    name: number
    jobTitle: number
    company: number
    email: number
    phoneNumber: number
    profileUrl: number
    imageUrl: number
    connectionLevel: number
    location: number
    bio: number
    tags: number
    notes: number
    firstConnected: number
    lastInteraction: number
    strength: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ConnectionAvgAggregateInputType = {
    connectionLevel?: true
    strength?: true
  }

  export type ConnectionSumAggregateInputType = {
    connectionLevel?: true
    strength?: true
  }

  export type ConnectionMinAggregateInputType = {
    id?: true
    userId?: true
    platformType?: true
    connectionId?: true
    name?: true
    jobTitle?: true
    company?: true
    email?: true
    phoneNumber?: true
    profileUrl?: true
    imageUrl?: true
    connectionLevel?: true
    location?: true
    bio?: true
    notes?: true
    firstConnected?: true
    lastInteraction?: true
    strength?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConnectionMaxAggregateInputType = {
    id?: true
    userId?: true
    platformType?: true
    connectionId?: true
    name?: true
    jobTitle?: true
    company?: true
    email?: true
    phoneNumber?: true
    profileUrl?: true
    imageUrl?: true
    connectionLevel?: true
    location?: true
    bio?: true
    notes?: true
    firstConnected?: true
    lastInteraction?: true
    strength?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConnectionCountAggregateInputType = {
    id?: true
    userId?: true
    platformType?: true
    connectionId?: true
    name?: true
    jobTitle?: true
    company?: true
    email?: true
    phoneNumber?: true
    profileUrl?: true
    imageUrl?: true
    connectionLevel?: true
    location?: true
    bio?: true
    tags?: true
    notes?: true
    firstConnected?: true
    lastInteraction?: true
    strength?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ConnectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Connection to aggregate.
     */
    where?: ConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Connections to fetch.
     */
    orderBy?: ConnectionOrderByWithRelationInput | ConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Connections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Connections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Connections
    **/
    _count?: true | ConnectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConnectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConnectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConnectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConnectionMaxAggregateInputType
  }

  export type GetConnectionAggregateType<T extends ConnectionAggregateArgs> = {
        [P in keyof T & keyof AggregateConnection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConnection[P]>
      : GetScalarType<T[P], AggregateConnection[P]>
  }




  export type ConnectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConnectionWhereInput
    orderBy?: ConnectionOrderByWithAggregationInput | ConnectionOrderByWithAggregationInput[]
    by: ConnectionScalarFieldEnum[] | ConnectionScalarFieldEnum
    having?: ConnectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConnectionCountAggregateInputType | true
    _avg?: ConnectionAvgAggregateInputType
    _sum?: ConnectionSumAggregateInputType
    _min?: ConnectionMinAggregateInputType
    _max?: ConnectionMaxAggregateInputType
  }

  export type ConnectionGroupByOutputType = {
    id: string
    userId: string
    platformType: $Enums.Platform
    connectionId: string
    name: string
    jobTitle: string | null
    company: string | null
    email: string | null
    phoneNumber: string | null
    profileUrl: string | null
    imageUrl: string | null
    connectionLevel: number | null
    location: string | null
    bio: string | null
    tags: string[]
    notes: string | null
    firstConnected: Date | null
    lastInteraction: Date | null
    strength: number | null
    createdAt: Date
    updatedAt: Date
    _count: ConnectionCountAggregateOutputType | null
    _avg: ConnectionAvgAggregateOutputType | null
    _sum: ConnectionSumAggregateOutputType | null
    _min: ConnectionMinAggregateOutputType | null
    _max: ConnectionMaxAggregateOutputType | null
  }

  type GetConnectionGroupByPayload<T extends ConnectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConnectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConnectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConnectionGroupByOutputType[P]>
            : GetScalarType<T[P], ConnectionGroupByOutputType[P]>
        }
      >
    >


  export type ConnectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    platformType?: boolean
    connectionId?: boolean
    name?: boolean
    jobTitle?: boolean
    company?: boolean
    email?: boolean
    phoneNumber?: boolean
    profileUrl?: boolean
    imageUrl?: boolean
    connectionLevel?: boolean
    location?: boolean
    bio?: boolean
    tags?: boolean
    notes?: boolean
    firstConnected?: boolean
    lastInteraction?: boolean
    strength?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    events?: boolean | Connection$eventsArgs<ExtArgs>
    messages?: boolean | Connection$messagesArgs<ExtArgs>
    _count?: boolean | ConnectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["connection"]>

  export type ConnectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    platformType?: boolean
    connectionId?: boolean
    name?: boolean
    jobTitle?: boolean
    company?: boolean
    email?: boolean
    phoneNumber?: boolean
    profileUrl?: boolean
    imageUrl?: boolean
    connectionLevel?: boolean
    location?: boolean
    bio?: boolean
    tags?: boolean
    notes?: boolean
    firstConnected?: boolean
    lastInteraction?: boolean
    strength?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["connection"]>

  export type ConnectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    platformType?: boolean
    connectionId?: boolean
    name?: boolean
    jobTitle?: boolean
    company?: boolean
    email?: boolean
    phoneNumber?: boolean
    profileUrl?: boolean
    imageUrl?: boolean
    connectionLevel?: boolean
    location?: boolean
    bio?: boolean
    tags?: boolean
    notes?: boolean
    firstConnected?: boolean
    lastInteraction?: boolean
    strength?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["connection"]>

  export type ConnectionSelectScalar = {
    id?: boolean
    userId?: boolean
    platformType?: boolean
    connectionId?: boolean
    name?: boolean
    jobTitle?: boolean
    company?: boolean
    email?: boolean
    phoneNumber?: boolean
    profileUrl?: boolean
    imageUrl?: boolean
    connectionLevel?: boolean
    location?: boolean
    bio?: boolean
    tags?: boolean
    notes?: boolean
    firstConnected?: boolean
    lastInteraction?: boolean
    strength?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ConnectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "platformType" | "connectionId" | "name" | "jobTitle" | "company" | "email" | "phoneNumber" | "profileUrl" | "imageUrl" | "connectionLevel" | "location" | "bio" | "tags" | "notes" | "firstConnected" | "lastInteraction" | "strength" | "createdAt" | "updatedAt", ExtArgs["result"]["connection"]>
  export type ConnectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    events?: boolean | Connection$eventsArgs<ExtArgs>
    messages?: boolean | Connection$messagesArgs<ExtArgs>
    _count?: boolean | ConnectionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConnectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ConnectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ConnectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Connection"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      events: Prisma.$ConnectionEventPayload<ExtArgs>[]
      messages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      platformType: $Enums.Platform
      connectionId: string
      name: string
      jobTitle: string | null
      company: string | null
      email: string | null
      phoneNumber: string | null
      profileUrl: string | null
      imageUrl: string | null
      connectionLevel: number | null
      location: string | null
      bio: string | null
      tags: string[]
      notes: string | null
      firstConnected: Date | null
      lastInteraction: Date | null
      strength: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["connection"]>
    composites: {}
  }

  type ConnectionGetPayload<S extends boolean | null | undefined | ConnectionDefaultArgs> = $Result.GetResult<Prisma.$ConnectionPayload, S>

  type ConnectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConnectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConnectionCountAggregateInputType | true
    }

  export interface ConnectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Connection'], meta: { name: 'Connection' } }
    /**
     * Find zero or one Connection that matches the filter.
     * @param {ConnectionFindUniqueArgs} args - Arguments to find a Connection
     * @example
     * // Get one Connection
     * const connection = await prisma.connection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConnectionFindUniqueArgs>(args: SelectSubset<T, ConnectionFindUniqueArgs<ExtArgs>>): Prisma__ConnectionClient<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Connection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConnectionFindUniqueOrThrowArgs} args - Arguments to find a Connection
     * @example
     * // Get one Connection
     * const connection = await prisma.connection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConnectionFindUniqueOrThrowArgs>(args: SelectSubset<T, ConnectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConnectionClient<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Connection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionFindFirstArgs} args - Arguments to find a Connection
     * @example
     * // Get one Connection
     * const connection = await prisma.connection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConnectionFindFirstArgs>(args?: SelectSubset<T, ConnectionFindFirstArgs<ExtArgs>>): Prisma__ConnectionClient<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Connection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionFindFirstOrThrowArgs} args - Arguments to find a Connection
     * @example
     * // Get one Connection
     * const connection = await prisma.connection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConnectionFindFirstOrThrowArgs>(args?: SelectSubset<T, ConnectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConnectionClient<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Connections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Connections
     * const connections = await prisma.connection.findMany()
     * 
     * // Get first 10 Connections
     * const connections = await prisma.connection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const connectionWithIdOnly = await prisma.connection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConnectionFindManyArgs>(args?: SelectSubset<T, ConnectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Connection.
     * @param {ConnectionCreateArgs} args - Arguments to create a Connection.
     * @example
     * // Create one Connection
     * const Connection = await prisma.connection.create({
     *   data: {
     *     // ... data to create a Connection
     *   }
     * })
     * 
     */
    create<T extends ConnectionCreateArgs>(args: SelectSubset<T, ConnectionCreateArgs<ExtArgs>>): Prisma__ConnectionClient<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Connections.
     * @param {ConnectionCreateManyArgs} args - Arguments to create many Connections.
     * @example
     * // Create many Connections
     * const connection = await prisma.connection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConnectionCreateManyArgs>(args?: SelectSubset<T, ConnectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Connections and returns the data saved in the database.
     * @param {ConnectionCreateManyAndReturnArgs} args - Arguments to create many Connections.
     * @example
     * // Create many Connections
     * const connection = await prisma.connection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Connections and only return the `id`
     * const connectionWithIdOnly = await prisma.connection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConnectionCreateManyAndReturnArgs>(args?: SelectSubset<T, ConnectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Connection.
     * @param {ConnectionDeleteArgs} args - Arguments to delete one Connection.
     * @example
     * // Delete one Connection
     * const Connection = await prisma.connection.delete({
     *   where: {
     *     // ... filter to delete one Connection
     *   }
     * })
     * 
     */
    delete<T extends ConnectionDeleteArgs>(args: SelectSubset<T, ConnectionDeleteArgs<ExtArgs>>): Prisma__ConnectionClient<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Connection.
     * @param {ConnectionUpdateArgs} args - Arguments to update one Connection.
     * @example
     * // Update one Connection
     * const connection = await prisma.connection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConnectionUpdateArgs>(args: SelectSubset<T, ConnectionUpdateArgs<ExtArgs>>): Prisma__ConnectionClient<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Connections.
     * @param {ConnectionDeleteManyArgs} args - Arguments to filter Connections to delete.
     * @example
     * // Delete a few Connections
     * const { count } = await prisma.connection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConnectionDeleteManyArgs>(args?: SelectSubset<T, ConnectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Connections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Connections
     * const connection = await prisma.connection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConnectionUpdateManyArgs>(args: SelectSubset<T, ConnectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Connections and returns the data updated in the database.
     * @param {ConnectionUpdateManyAndReturnArgs} args - Arguments to update many Connections.
     * @example
     * // Update many Connections
     * const connection = await prisma.connection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Connections and only return the `id`
     * const connectionWithIdOnly = await prisma.connection.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConnectionUpdateManyAndReturnArgs>(args: SelectSubset<T, ConnectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Connection.
     * @param {ConnectionUpsertArgs} args - Arguments to update or create a Connection.
     * @example
     * // Update or create a Connection
     * const connection = await prisma.connection.upsert({
     *   create: {
     *     // ... data to create a Connection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Connection we want to update
     *   }
     * })
     */
    upsert<T extends ConnectionUpsertArgs>(args: SelectSubset<T, ConnectionUpsertArgs<ExtArgs>>): Prisma__ConnectionClient<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Connections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionCountArgs} args - Arguments to filter Connections to count.
     * @example
     * // Count the number of Connections
     * const count = await prisma.connection.count({
     *   where: {
     *     // ... the filter for the Connections we want to count
     *   }
     * })
    **/
    count<T extends ConnectionCountArgs>(
      args?: Subset<T, ConnectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConnectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Connection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConnectionAggregateArgs>(args: Subset<T, ConnectionAggregateArgs>): Prisma.PrismaPromise<GetConnectionAggregateType<T>>

    /**
     * Group by Connection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionGroupByArgs} args - Group by arguments.
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
      T extends ConnectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConnectionGroupByArgs['orderBy'] }
        : { orderBy?: ConnectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConnectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConnectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Connection model
   */
  readonly fields: ConnectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Connection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConnectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    events<T extends Connection$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Connection$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectionEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends Connection$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Connection$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Connection model
   */
  interface ConnectionFieldRefs {
    readonly id: FieldRef<"Connection", 'String'>
    readonly userId: FieldRef<"Connection", 'String'>
    readonly platformType: FieldRef<"Connection", 'Platform'>
    readonly connectionId: FieldRef<"Connection", 'String'>
    readonly name: FieldRef<"Connection", 'String'>
    readonly jobTitle: FieldRef<"Connection", 'String'>
    readonly company: FieldRef<"Connection", 'String'>
    readonly email: FieldRef<"Connection", 'String'>
    readonly phoneNumber: FieldRef<"Connection", 'String'>
    readonly profileUrl: FieldRef<"Connection", 'String'>
    readonly imageUrl: FieldRef<"Connection", 'String'>
    readonly connectionLevel: FieldRef<"Connection", 'Int'>
    readonly location: FieldRef<"Connection", 'String'>
    readonly bio: FieldRef<"Connection", 'String'>
    readonly tags: FieldRef<"Connection", 'String[]'>
    readonly notes: FieldRef<"Connection", 'String'>
    readonly firstConnected: FieldRef<"Connection", 'DateTime'>
    readonly lastInteraction: FieldRef<"Connection", 'DateTime'>
    readonly strength: FieldRef<"Connection", 'Float'>
    readonly createdAt: FieldRef<"Connection", 'DateTime'>
    readonly updatedAt: FieldRef<"Connection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Connection findUnique
   */
  export type ConnectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    /**
     * Filter, which Connection to fetch.
     */
    where: ConnectionWhereUniqueInput
  }

  /**
   * Connection findUniqueOrThrow
   */
  export type ConnectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    /**
     * Filter, which Connection to fetch.
     */
    where: ConnectionWhereUniqueInput
  }

  /**
   * Connection findFirst
   */
  export type ConnectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    /**
     * Filter, which Connection to fetch.
     */
    where?: ConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Connections to fetch.
     */
    orderBy?: ConnectionOrderByWithRelationInput | ConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Connections.
     */
    cursor?: ConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Connections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Connections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Connections.
     */
    distinct?: ConnectionScalarFieldEnum | ConnectionScalarFieldEnum[]
  }

  /**
   * Connection findFirstOrThrow
   */
  export type ConnectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    /**
     * Filter, which Connection to fetch.
     */
    where?: ConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Connections to fetch.
     */
    orderBy?: ConnectionOrderByWithRelationInput | ConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Connections.
     */
    cursor?: ConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Connections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Connections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Connections.
     */
    distinct?: ConnectionScalarFieldEnum | ConnectionScalarFieldEnum[]
  }

  /**
   * Connection findMany
   */
  export type ConnectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    /**
     * Filter, which Connections to fetch.
     */
    where?: ConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Connections to fetch.
     */
    orderBy?: ConnectionOrderByWithRelationInput | ConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Connections.
     */
    cursor?: ConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Connections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Connections.
     */
    skip?: number
    distinct?: ConnectionScalarFieldEnum | ConnectionScalarFieldEnum[]
  }

  /**
   * Connection create
   */
  export type ConnectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    /**
     * The data needed to create a Connection.
     */
    data: XOR<ConnectionCreateInput, ConnectionUncheckedCreateInput>
  }

  /**
   * Connection createMany
   */
  export type ConnectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Connections.
     */
    data: ConnectionCreateManyInput | ConnectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Connection createManyAndReturn
   */
  export type ConnectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * The data used to create many Connections.
     */
    data: ConnectionCreateManyInput | ConnectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Connection update
   */
  export type ConnectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    /**
     * The data needed to update a Connection.
     */
    data: XOR<ConnectionUpdateInput, ConnectionUncheckedUpdateInput>
    /**
     * Choose, which Connection to update.
     */
    where: ConnectionWhereUniqueInput
  }

  /**
   * Connection updateMany
   */
  export type ConnectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Connections.
     */
    data: XOR<ConnectionUpdateManyMutationInput, ConnectionUncheckedUpdateManyInput>
    /**
     * Filter which Connections to update
     */
    where?: ConnectionWhereInput
    /**
     * Limit how many Connections to update.
     */
    limit?: number
  }

  /**
   * Connection updateManyAndReturn
   */
  export type ConnectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * The data used to update Connections.
     */
    data: XOR<ConnectionUpdateManyMutationInput, ConnectionUncheckedUpdateManyInput>
    /**
     * Filter which Connections to update
     */
    where?: ConnectionWhereInput
    /**
     * Limit how many Connections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Connection upsert
   */
  export type ConnectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    /**
     * The filter to search for the Connection to update in case it exists.
     */
    where: ConnectionWhereUniqueInput
    /**
     * In case the Connection found by the `where` argument doesn't exist, create a new Connection with this data.
     */
    create: XOR<ConnectionCreateInput, ConnectionUncheckedCreateInput>
    /**
     * In case the Connection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConnectionUpdateInput, ConnectionUncheckedUpdateInput>
  }

  /**
   * Connection delete
   */
  export type ConnectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    /**
     * Filter which Connection to delete.
     */
    where: ConnectionWhereUniqueInput
  }

  /**
   * Connection deleteMany
   */
  export type ConnectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Connections to delete
     */
    where?: ConnectionWhereInput
    /**
     * Limit how many Connections to delete.
     */
    limit?: number
  }

  /**
   * Connection.events
   */
  export type Connection$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionEvent
     */
    select?: ConnectionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectionEvent
     */
    omit?: ConnectionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionEventInclude<ExtArgs> | null
    where?: ConnectionEventWhereInput
    orderBy?: ConnectionEventOrderByWithRelationInput | ConnectionEventOrderByWithRelationInput[]
    cursor?: ConnectionEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConnectionEventScalarFieldEnum | ConnectionEventScalarFieldEnum[]
  }

  /**
   * Connection.messages
   */
  export type Connection$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Connection without action
   */
  export type ConnectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
  }


  /**
   * Model ConnectionEvent
   */

  export type AggregateConnectionEvent = {
    _count: ConnectionEventCountAggregateOutputType | null
    _min: ConnectionEventMinAggregateOutputType | null
    _max: ConnectionEventMaxAggregateOutputType | null
  }

  export type ConnectionEventMinAggregateOutputType = {
    id: string | null
    userId: string | null
    connectionId: string | null
    eventType: $Enums.EventType | null
    platform: $Enums.Platform | null
    timestamp: Date | null
    createdAt: Date | null
  }

  export type ConnectionEventMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    connectionId: string | null
    eventType: $Enums.EventType | null
    platform: $Enums.Platform | null
    timestamp: Date | null
    createdAt: Date | null
  }

  export type ConnectionEventCountAggregateOutputType = {
    id: number
    userId: number
    connectionId: number
    eventType: number
    platform: number
    timestamp: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type ConnectionEventMinAggregateInputType = {
    id?: true
    userId?: true
    connectionId?: true
    eventType?: true
    platform?: true
    timestamp?: true
    createdAt?: true
  }

  export type ConnectionEventMaxAggregateInputType = {
    id?: true
    userId?: true
    connectionId?: true
    eventType?: true
    platform?: true
    timestamp?: true
    createdAt?: true
  }

  export type ConnectionEventCountAggregateInputType = {
    id?: true
    userId?: true
    connectionId?: true
    eventType?: true
    platform?: true
    timestamp?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type ConnectionEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConnectionEvent to aggregate.
     */
    where?: ConnectionEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConnectionEvents to fetch.
     */
    orderBy?: ConnectionEventOrderByWithRelationInput | ConnectionEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConnectionEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConnectionEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConnectionEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConnectionEvents
    **/
    _count?: true | ConnectionEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConnectionEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConnectionEventMaxAggregateInputType
  }

  export type GetConnectionEventAggregateType<T extends ConnectionEventAggregateArgs> = {
        [P in keyof T & keyof AggregateConnectionEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConnectionEvent[P]>
      : GetScalarType<T[P], AggregateConnectionEvent[P]>
  }




  export type ConnectionEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConnectionEventWhereInput
    orderBy?: ConnectionEventOrderByWithAggregationInput | ConnectionEventOrderByWithAggregationInput[]
    by: ConnectionEventScalarFieldEnum[] | ConnectionEventScalarFieldEnum
    having?: ConnectionEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConnectionEventCountAggregateInputType | true
    _min?: ConnectionEventMinAggregateInputType
    _max?: ConnectionEventMaxAggregateInputType
  }

  export type ConnectionEventGroupByOutputType = {
    id: string
    userId: string
    connectionId: string
    eventType: $Enums.EventType
    platform: $Enums.Platform
    timestamp: Date
    metadata: JsonValue | null
    createdAt: Date
    _count: ConnectionEventCountAggregateOutputType | null
    _min: ConnectionEventMinAggregateOutputType | null
    _max: ConnectionEventMaxAggregateOutputType | null
  }

  type GetConnectionEventGroupByPayload<T extends ConnectionEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConnectionEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConnectionEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConnectionEventGroupByOutputType[P]>
            : GetScalarType<T[P], ConnectionEventGroupByOutputType[P]>
        }
      >
    >


  export type ConnectionEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    connectionId?: boolean
    eventType?: boolean
    platform?: boolean
    timestamp?: boolean
    metadata?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    connection?: boolean | ConnectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["connectionEvent"]>

  export type ConnectionEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    connectionId?: boolean
    eventType?: boolean
    platform?: boolean
    timestamp?: boolean
    metadata?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    connection?: boolean | ConnectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["connectionEvent"]>

  export type ConnectionEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    connectionId?: boolean
    eventType?: boolean
    platform?: boolean
    timestamp?: boolean
    metadata?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    connection?: boolean | ConnectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["connectionEvent"]>

  export type ConnectionEventSelectScalar = {
    id?: boolean
    userId?: boolean
    connectionId?: boolean
    eventType?: boolean
    platform?: boolean
    timestamp?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type ConnectionEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "connectionId" | "eventType" | "platform" | "timestamp" | "metadata" | "createdAt", ExtArgs["result"]["connectionEvent"]>
  export type ConnectionEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    connection?: boolean | ConnectionDefaultArgs<ExtArgs>
  }
  export type ConnectionEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    connection?: boolean | ConnectionDefaultArgs<ExtArgs>
  }
  export type ConnectionEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    connection?: boolean | ConnectionDefaultArgs<ExtArgs>
  }

  export type $ConnectionEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ConnectionEvent"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      connection: Prisma.$ConnectionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      connectionId: string
      eventType: $Enums.EventType
      platform: $Enums.Platform
      timestamp: Date
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["connectionEvent"]>
    composites: {}
  }

  type ConnectionEventGetPayload<S extends boolean | null | undefined | ConnectionEventDefaultArgs> = $Result.GetResult<Prisma.$ConnectionEventPayload, S>

  type ConnectionEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConnectionEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConnectionEventCountAggregateInputType | true
    }

  export interface ConnectionEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConnectionEvent'], meta: { name: 'ConnectionEvent' } }
    /**
     * Find zero or one ConnectionEvent that matches the filter.
     * @param {ConnectionEventFindUniqueArgs} args - Arguments to find a ConnectionEvent
     * @example
     * // Get one ConnectionEvent
     * const connectionEvent = await prisma.connectionEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConnectionEventFindUniqueArgs>(args: SelectSubset<T, ConnectionEventFindUniqueArgs<ExtArgs>>): Prisma__ConnectionEventClient<$Result.GetResult<Prisma.$ConnectionEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ConnectionEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConnectionEventFindUniqueOrThrowArgs} args - Arguments to find a ConnectionEvent
     * @example
     * // Get one ConnectionEvent
     * const connectionEvent = await prisma.connectionEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConnectionEventFindUniqueOrThrowArgs>(args: SelectSubset<T, ConnectionEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConnectionEventClient<$Result.GetResult<Prisma.$ConnectionEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConnectionEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionEventFindFirstArgs} args - Arguments to find a ConnectionEvent
     * @example
     * // Get one ConnectionEvent
     * const connectionEvent = await prisma.connectionEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConnectionEventFindFirstArgs>(args?: SelectSubset<T, ConnectionEventFindFirstArgs<ExtArgs>>): Prisma__ConnectionEventClient<$Result.GetResult<Prisma.$ConnectionEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConnectionEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionEventFindFirstOrThrowArgs} args - Arguments to find a ConnectionEvent
     * @example
     * // Get one ConnectionEvent
     * const connectionEvent = await prisma.connectionEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConnectionEventFindFirstOrThrowArgs>(args?: SelectSubset<T, ConnectionEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConnectionEventClient<$Result.GetResult<Prisma.$ConnectionEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ConnectionEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConnectionEvents
     * const connectionEvents = await prisma.connectionEvent.findMany()
     * 
     * // Get first 10 ConnectionEvents
     * const connectionEvents = await prisma.connectionEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const connectionEventWithIdOnly = await prisma.connectionEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConnectionEventFindManyArgs>(args?: SelectSubset<T, ConnectionEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectionEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ConnectionEvent.
     * @param {ConnectionEventCreateArgs} args - Arguments to create a ConnectionEvent.
     * @example
     * // Create one ConnectionEvent
     * const ConnectionEvent = await prisma.connectionEvent.create({
     *   data: {
     *     // ... data to create a ConnectionEvent
     *   }
     * })
     * 
     */
    create<T extends ConnectionEventCreateArgs>(args: SelectSubset<T, ConnectionEventCreateArgs<ExtArgs>>): Prisma__ConnectionEventClient<$Result.GetResult<Prisma.$ConnectionEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ConnectionEvents.
     * @param {ConnectionEventCreateManyArgs} args - Arguments to create many ConnectionEvents.
     * @example
     * // Create many ConnectionEvents
     * const connectionEvent = await prisma.connectionEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConnectionEventCreateManyArgs>(args?: SelectSubset<T, ConnectionEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ConnectionEvents and returns the data saved in the database.
     * @param {ConnectionEventCreateManyAndReturnArgs} args - Arguments to create many ConnectionEvents.
     * @example
     * // Create many ConnectionEvents
     * const connectionEvent = await prisma.connectionEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ConnectionEvents and only return the `id`
     * const connectionEventWithIdOnly = await prisma.connectionEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConnectionEventCreateManyAndReturnArgs>(args?: SelectSubset<T, ConnectionEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectionEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ConnectionEvent.
     * @param {ConnectionEventDeleteArgs} args - Arguments to delete one ConnectionEvent.
     * @example
     * // Delete one ConnectionEvent
     * const ConnectionEvent = await prisma.connectionEvent.delete({
     *   where: {
     *     // ... filter to delete one ConnectionEvent
     *   }
     * })
     * 
     */
    delete<T extends ConnectionEventDeleteArgs>(args: SelectSubset<T, ConnectionEventDeleteArgs<ExtArgs>>): Prisma__ConnectionEventClient<$Result.GetResult<Prisma.$ConnectionEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ConnectionEvent.
     * @param {ConnectionEventUpdateArgs} args - Arguments to update one ConnectionEvent.
     * @example
     * // Update one ConnectionEvent
     * const connectionEvent = await prisma.connectionEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConnectionEventUpdateArgs>(args: SelectSubset<T, ConnectionEventUpdateArgs<ExtArgs>>): Prisma__ConnectionEventClient<$Result.GetResult<Prisma.$ConnectionEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ConnectionEvents.
     * @param {ConnectionEventDeleteManyArgs} args - Arguments to filter ConnectionEvents to delete.
     * @example
     * // Delete a few ConnectionEvents
     * const { count } = await prisma.connectionEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConnectionEventDeleteManyArgs>(args?: SelectSubset<T, ConnectionEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConnectionEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConnectionEvents
     * const connectionEvent = await prisma.connectionEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConnectionEventUpdateManyArgs>(args: SelectSubset<T, ConnectionEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConnectionEvents and returns the data updated in the database.
     * @param {ConnectionEventUpdateManyAndReturnArgs} args - Arguments to update many ConnectionEvents.
     * @example
     * // Update many ConnectionEvents
     * const connectionEvent = await prisma.connectionEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ConnectionEvents and only return the `id`
     * const connectionEventWithIdOnly = await prisma.connectionEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConnectionEventUpdateManyAndReturnArgs>(args: SelectSubset<T, ConnectionEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectionEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ConnectionEvent.
     * @param {ConnectionEventUpsertArgs} args - Arguments to update or create a ConnectionEvent.
     * @example
     * // Update or create a ConnectionEvent
     * const connectionEvent = await prisma.connectionEvent.upsert({
     *   create: {
     *     // ... data to create a ConnectionEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConnectionEvent we want to update
     *   }
     * })
     */
    upsert<T extends ConnectionEventUpsertArgs>(args: SelectSubset<T, ConnectionEventUpsertArgs<ExtArgs>>): Prisma__ConnectionEventClient<$Result.GetResult<Prisma.$ConnectionEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ConnectionEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionEventCountArgs} args - Arguments to filter ConnectionEvents to count.
     * @example
     * // Count the number of ConnectionEvents
     * const count = await prisma.connectionEvent.count({
     *   where: {
     *     // ... the filter for the ConnectionEvents we want to count
     *   }
     * })
    **/
    count<T extends ConnectionEventCountArgs>(
      args?: Subset<T, ConnectionEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConnectionEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConnectionEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConnectionEventAggregateArgs>(args: Subset<T, ConnectionEventAggregateArgs>): Prisma.PrismaPromise<GetConnectionEventAggregateType<T>>

    /**
     * Group by ConnectionEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionEventGroupByArgs} args - Group by arguments.
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
      T extends ConnectionEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConnectionEventGroupByArgs['orderBy'] }
        : { orderBy?: ConnectionEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConnectionEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConnectionEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConnectionEvent model
   */
  readonly fields: ConnectionEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConnectionEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConnectionEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    connection<T extends ConnectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConnectionDefaultArgs<ExtArgs>>): Prisma__ConnectionClient<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ConnectionEvent model
   */
  interface ConnectionEventFieldRefs {
    readonly id: FieldRef<"ConnectionEvent", 'String'>
    readonly userId: FieldRef<"ConnectionEvent", 'String'>
    readonly connectionId: FieldRef<"ConnectionEvent", 'String'>
    readonly eventType: FieldRef<"ConnectionEvent", 'EventType'>
    readonly platform: FieldRef<"ConnectionEvent", 'Platform'>
    readonly timestamp: FieldRef<"ConnectionEvent", 'DateTime'>
    readonly metadata: FieldRef<"ConnectionEvent", 'Json'>
    readonly createdAt: FieldRef<"ConnectionEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ConnectionEvent findUnique
   */
  export type ConnectionEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionEvent
     */
    select?: ConnectionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectionEvent
     */
    omit?: ConnectionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionEventInclude<ExtArgs> | null
    /**
     * Filter, which ConnectionEvent to fetch.
     */
    where: ConnectionEventWhereUniqueInput
  }

  /**
   * ConnectionEvent findUniqueOrThrow
   */
  export type ConnectionEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionEvent
     */
    select?: ConnectionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectionEvent
     */
    omit?: ConnectionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionEventInclude<ExtArgs> | null
    /**
     * Filter, which ConnectionEvent to fetch.
     */
    where: ConnectionEventWhereUniqueInput
  }

  /**
   * ConnectionEvent findFirst
   */
  export type ConnectionEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionEvent
     */
    select?: ConnectionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectionEvent
     */
    omit?: ConnectionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionEventInclude<ExtArgs> | null
    /**
     * Filter, which ConnectionEvent to fetch.
     */
    where?: ConnectionEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConnectionEvents to fetch.
     */
    orderBy?: ConnectionEventOrderByWithRelationInput | ConnectionEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConnectionEvents.
     */
    cursor?: ConnectionEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConnectionEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConnectionEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConnectionEvents.
     */
    distinct?: ConnectionEventScalarFieldEnum | ConnectionEventScalarFieldEnum[]
  }

  /**
   * ConnectionEvent findFirstOrThrow
   */
  export type ConnectionEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionEvent
     */
    select?: ConnectionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectionEvent
     */
    omit?: ConnectionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionEventInclude<ExtArgs> | null
    /**
     * Filter, which ConnectionEvent to fetch.
     */
    where?: ConnectionEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConnectionEvents to fetch.
     */
    orderBy?: ConnectionEventOrderByWithRelationInput | ConnectionEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConnectionEvents.
     */
    cursor?: ConnectionEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConnectionEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConnectionEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConnectionEvents.
     */
    distinct?: ConnectionEventScalarFieldEnum | ConnectionEventScalarFieldEnum[]
  }

  /**
   * ConnectionEvent findMany
   */
  export type ConnectionEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionEvent
     */
    select?: ConnectionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectionEvent
     */
    omit?: ConnectionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionEventInclude<ExtArgs> | null
    /**
     * Filter, which ConnectionEvents to fetch.
     */
    where?: ConnectionEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConnectionEvents to fetch.
     */
    orderBy?: ConnectionEventOrderByWithRelationInput | ConnectionEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConnectionEvents.
     */
    cursor?: ConnectionEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConnectionEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConnectionEvents.
     */
    skip?: number
    distinct?: ConnectionEventScalarFieldEnum | ConnectionEventScalarFieldEnum[]
  }

  /**
   * ConnectionEvent create
   */
  export type ConnectionEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionEvent
     */
    select?: ConnectionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectionEvent
     */
    omit?: ConnectionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionEventInclude<ExtArgs> | null
    /**
     * The data needed to create a ConnectionEvent.
     */
    data: XOR<ConnectionEventCreateInput, ConnectionEventUncheckedCreateInput>
  }

  /**
   * ConnectionEvent createMany
   */
  export type ConnectionEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConnectionEvents.
     */
    data: ConnectionEventCreateManyInput | ConnectionEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConnectionEvent createManyAndReturn
   */
  export type ConnectionEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionEvent
     */
    select?: ConnectionEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectionEvent
     */
    omit?: ConnectionEventOmit<ExtArgs> | null
    /**
     * The data used to create many ConnectionEvents.
     */
    data: ConnectionEventCreateManyInput | ConnectionEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ConnectionEvent update
   */
  export type ConnectionEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionEvent
     */
    select?: ConnectionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectionEvent
     */
    omit?: ConnectionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionEventInclude<ExtArgs> | null
    /**
     * The data needed to update a ConnectionEvent.
     */
    data: XOR<ConnectionEventUpdateInput, ConnectionEventUncheckedUpdateInput>
    /**
     * Choose, which ConnectionEvent to update.
     */
    where: ConnectionEventWhereUniqueInput
  }

  /**
   * ConnectionEvent updateMany
   */
  export type ConnectionEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConnectionEvents.
     */
    data: XOR<ConnectionEventUpdateManyMutationInput, ConnectionEventUncheckedUpdateManyInput>
    /**
     * Filter which ConnectionEvents to update
     */
    where?: ConnectionEventWhereInput
    /**
     * Limit how many ConnectionEvents to update.
     */
    limit?: number
  }

  /**
   * ConnectionEvent updateManyAndReturn
   */
  export type ConnectionEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionEvent
     */
    select?: ConnectionEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectionEvent
     */
    omit?: ConnectionEventOmit<ExtArgs> | null
    /**
     * The data used to update ConnectionEvents.
     */
    data: XOR<ConnectionEventUpdateManyMutationInput, ConnectionEventUncheckedUpdateManyInput>
    /**
     * Filter which ConnectionEvents to update
     */
    where?: ConnectionEventWhereInput
    /**
     * Limit how many ConnectionEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ConnectionEvent upsert
   */
  export type ConnectionEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionEvent
     */
    select?: ConnectionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectionEvent
     */
    omit?: ConnectionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionEventInclude<ExtArgs> | null
    /**
     * The filter to search for the ConnectionEvent to update in case it exists.
     */
    where: ConnectionEventWhereUniqueInput
    /**
     * In case the ConnectionEvent found by the `where` argument doesn't exist, create a new ConnectionEvent with this data.
     */
    create: XOR<ConnectionEventCreateInput, ConnectionEventUncheckedCreateInput>
    /**
     * In case the ConnectionEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConnectionEventUpdateInput, ConnectionEventUncheckedUpdateInput>
  }

  /**
   * ConnectionEvent delete
   */
  export type ConnectionEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionEvent
     */
    select?: ConnectionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectionEvent
     */
    omit?: ConnectionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionEventInclude<ExtArgs> | null
    /**
     * Filter which ConnectionEvent to delete.
     */
    where: ConnectionEventWhereUniqueInput
  }

  /**
   * ConnectionEvent deleteMany
   */
  export type ConnectionEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConnectionEvents to delete
     */
    where?: ConnectionEventWhereInput
    /**
     * Limit how many ConnectionEvents to delete.
     */
    limit?: number
  }

  /**
   * ConnectionEvent without action
   */
  export type ConnectionEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionEvent
     */
    select?: ConnectionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectionEvent
     */
    omit?: ConnectionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionEventInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    senderId: string | null
    receiverId: string | null
    connectionId: string | null
    platform: $Enums.Platform | null
    externalId: string | null
    content: string | null
    timestamp: Date | null
    createdAt: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    senderId: string | null
    receiverId: string | null
    connectionId: string | null
    platform: $Enums.Platform | null
    externalId: string | null
    content: string | null
    timestamp: Date | null
    createdAt: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    senderId: number
    receiverId: number
    connectionId: number
    platform: number
    externalId: number
    content: number
    timestamp: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    connectionId?: true
    platform?: true
    externalId?: true
    content?: true
    timestamp?: true
    createdAt?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    connectionId?: true
    platform?: true
    externalId?: true
    content?: true
    timestamp?: true
    createdAt?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    connectionId?: true
    platform?: true
    externalId?: true
    content?: true
    timestamp?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    senderId: string
    receiverId: string
    connectionId: string | null
    platform: $Enums.Platform
    externalId: string | null
    content: string
    timestamp: Date
    metadata: JsonValue | null
    createdAt: Date
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    connectionId?: boolean
    platform?: boolean
    externalId?: boolean
    content?: boolean
    timestamp?: boolean
    metadata?: boolean
    createdAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    connection?: boolean | Message$connectionArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    connectionId?: boolean
    platform?: boolean
    externalId?: boolean
    content?: boolean
    timestamp?: boolean
    metadata?: boolean
    createdAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    connection?: boolean | Message$connectionArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    connectionId?: boolean
    platform?: boolean
    externalId?: boolean
    content?: boolean
    timestamp?: boolean
    metadata?: boolean
    createdAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    connection?: boolean | Message$connectionArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    connectionId?: boolean
    platform?: boolean
    externalId?: boolean
    content?: boolean
    timestamp?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "senderId" | "receiverId" | "connectionId" | "platform" | "externalId" | "content" | "timestamp" | "metadata" | "createdAt", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    connection?: boolean | Message$connectionArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    connection?: boolean | Message$connectionArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    connection?: boolean | Message$connectionArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs>
      connection: Prisma.$ConnectionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      senderId: string
      receiverId: string
      connectionId: string | null
      platform: $Enums.Platform
      externalId: string | null
      content: string
      timestamp: Date
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
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
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    connection<T extends Message$connectionArgs<ExtArgs> = {}>(args?: Subset<T, Message$connectionArgs<ExtArgs>>): Prisma__ConnectionClient<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly senderId: FieldRef<"Message", 'String'>
    readonly receiverId: FieldRef<"Message", 'String'>
    readonly connectionId: FieldRef<"Message", 'String'>
    readonly platform: FieldRef<"Message", 'Platform'>
    readonly externalId: FieldRef<"Message", 'String'>
    readonly content: FieldRef<"Message", 'String'>
    readonly timestamp: FieldRef<"Message", 'DateTime'>
    readonly metadata: FieldRef<"Message", 'Json'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message.connection
   */
  export type Message$connectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    where?: ConnectionWhereInput
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model NetworkStats
   */

  export type AggregateNetworkStats = {
    _count: NetworkStatsCountAggregateOutputType | null
    _avg: NetworkStatsAvgAggregateOutputType | null
    _sum: NetworkStatsSumAggregateOutputType | null
    _min: NetworkStatsMinAggregateOutputType | null
    _max: NetworkStatsMaxAggregateOutputType | null
  }

  export type NetworkStatsAvgAggregateOutputType = {
    totalConnections: number | null
    averageStrength: number | null
  }

  export type NetworkStatsSumAggregateOutputType = {
    totalConnections: number | null
    averageStrength: number | null
  }

  export type NetworkStatsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    totalConnections: number | null
    averageStrength: number | null
    lastCalculated: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NetworkStatsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    totalConnections: number | null
    averageStrength: number | null
    lastCalculated: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NetworkStatsCountAggregateOutputType = {
    id: number
    userId: number
    totalConnections: number
    averageStrength: number
    lastCalculated: number
    connectionsPerPlatform: number
    topTags: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NetworkStatsAvgAggregateInputType = {
    totalConnections?: true
    averageStrength?: true
  }

  export type NetworkStatsSumAggregateInputType = {
    totalConnections?: true
    averageStrength?: true
  }

  export type NetworkStatsMinAggregateInputType = {
    id?: true
    userId?: true
    totalConnections?: true
    averageStrength?: true
    lastCalculated?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NetworkStatsMaxAggregateInputType = {
    id?: true
    userId?: true
    totalConnections?: true
    averageStrength?: true
    lastCalculated?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NetworkStatsCountAggregateInputType = {
    id?: true
    userId?: true
    totalConnections?: true
    averageStrength?: true
    lastCalculated?: true
    connectionsPerPlatform?: true
    topTags?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NetworkStatsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NetworkStats to aggregate.
     */
    where?: NetworkStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NetworkStats to fetch.
     */
    orderBy?: NetworkStatsOrderByWithRelationInput | NetworkStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NetworkStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NetworkStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NetworkStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NetworkStats
    **/
    _count?: true | NetworkStatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NetworkStatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NetworkStatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NetworkStatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NetworkStatsMaxAggregateInputType
  }

  export type GetNetworkStatsAggregateType<T extends NetworkStatsAggregateArgs> = {
        [P in keyof T & keyof AggregateNetworkStats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNetworkStats[P]>
      : GetScalarType<T[P], AggregateNetworkStats[P]>
  }




  export type NetworkStatsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NetworkStatsWhereInput
    orderBy?: NetworkStatsOrderByWithAggregationInput | NetworkStatsOrderByWithAggregationInput[]
    by: NetworkStatsScalarFieldEnum[] | NetworkStatsScalarFieldEnum
    having?: NetworkStatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NetworkStatsCountAggregateInputType | true
    _avg?: NetworkStatsAvgAggregateInputType
    _sum?: NetworkStatsSumAggregateInputType
    _min?: NetworkStatsMinAggregateInputType
    _max?: NetworkStatsMaxAggregateInputType
  }

  export type NetworkStatsGroupByOutputType = {
    id: string
    userId: string
    totalConnections: number
    averageStrength: number | null
    lastCalculated: Date
    connectionsPerPlatform: JsonValue | null
    topTags: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: NetworkStatsCountAggregateOutputType | null
    _avg: NetworkStatsAvgAggregateOutputType | null
    _sum: NetworkStatsSumAggregateOutputType | null
    _min: NetworkStatsMinAggregateOutputType | null
    _max: NetworkStatsMaxAggregateOutputType | null
  }

  type GetNetworkStatsGroupByPayload<T extends NetworkStatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NetworkStatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NetworkStatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NetworkStatsGroupByOutputType[P]>
            : GetScalarType<T[P], NetworkStatsGroupByOutputType[P]>
        }
      >
    >


  export type NetworkStatsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    totalConnections?: boolean
    averageStrength?: boolean
    lastCalculated?: boolean
    connectionsPerPlatform?: boolean
    topTags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["networkStats"]>

  export type NetworkStatsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    totalConnections?: boolean
    averageStrength?: boolean
    lastCalculated?: boolean
    connectionsPerPlatform?: boolean
    topTags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["networkStats"]>

  export type NetworkStatsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    totalConnections?: boolean
    averageStrength?: boolean
    lastCalculated?: boolean
    connectionsPerPlatform?: boolean
    topTags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["networkStats"]>

  export type NetworkStatsSelectScalar = {
    id?: boolean
    userId?: boolean
    totalConnections?: boolean
    averageStrength?: boolean
    lastCalculated?: boolean
    connectionsPerPlatform?: boolean
    topTags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NetworkStatsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "totalConnections" | "averageStrength" | "lastCalculated" | "connectionsPerPlatform" | "topTags" | "createdAt" | "updatedAt", ExtArgs["result"]["networkStats"]>
  export type NetworkStatsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NetworkStatsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NetworkStatsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NetworkStatsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NetworkStats"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      totalConnections: number
      averageStrength: number | null
      lastCalculated: Date
      connectionsPerPlatform: Prisma.JsonValue | null
      topTags: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["networkStats"]>
    composites: {}
  }

  type NetworkStatsGetPayload<S extends boolean | null | undefined | NetworkStatsDefaultArgs> = $Result.GetResult<Prisma.$NetworkStatsPayload, S>

  type NetworkStatsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NetworkStatsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NetworkStatsCountAggregateInputType | true
    }

  export interface NetworkStatsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NetworkStats'], meta: { name: 'NetworkStats' } }
    /**
     * Find zero or one NetworkStats that matches the filter.
     * @param {NetworkStatsFindUniqueArgs} args - Arguments to find a NetworkStats
     * @example
     * // Get one NetworkStats
     * const networkStats = await prisma.networkStats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NetworkStatsFindUniqueArgs>(args: SelectSubset<T, NetworkStatsFindUniqueArgs<ExtArgs>>): Prisma__NetworkStatsClient<$Result.GetResult<Prisma.$NetworkStatsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NetworkStats that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NetworkStatsFindUniqueOrThrowArgs} args - Arguments to find a NetworkStats
     * @example
     * // Get one NetworkStats
     * const networkStats = await prisma.networkStats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NetworkStatsFindUniqueOrThrowArgs>(args: SelectSubset<T, NetworkStatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NetworkStatsClient<$Result.GetResult<Prisma.$NetworkStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NetworkStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NetworkStatsFindFirstArgs} args - Arguments to find a NetworkStats
     * @example
     * // Get one NetworkStats
     * const networkStats = await prisma.networkStats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NetworkStatsFindFirstArgs>(args?: SelectSubset<T, NetworkStatsFindFirstArgs<ExtArgs>>): Prisma__NetworkStatsClient<$Result.GetResult<Prisma.$NetworkStatsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NetworkStats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NetworkStatsFindFirstOrThrowArgs} args - Arguments to find a NetworkStats
     * @example
     * // Get one NetworkStats
     * const networkStats = await prisma.networkStats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NetworkStatsFindFirstOrThrowArgs>(args?: SelectSubset<T, NetworkStatsFindFirstOrThrowArgs<ExtArgs>>): Prisma__NetworkStatsClient<$Result.GetResult<Prisma.$NetworkStatsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NetworkStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NetworkStatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NetworkStats
     * const networkStats = await prisma.networkStats.findMany()
     * 
     * // Get first 10 NetworkStats
     * const networkStats = await prisma.networkStats.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const networkStatsWithIdOnly = await prisma.networkStats.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NetworkStatsFindManyArgs>(args?: SelectSubset<T, NetworkStatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NetworkStatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NetworkStats.
     * @param {NetworkStatsCreateArgs} args - Arguments to create a NetworkStats.
     * @example
     * // Create one NetworkStats
     * const NetworkStats = await prisma.networkStats.create({
     *   data: {
     *     // ... data to create a NetworkStats
     *   }
     * })
     * 
     */
    create<T extends NetworkStatsCreateArgs>(args: SelectSubset<T, NetworkStatsCreateArgs<ExtArgs>>): Prisma__NetworkStatsClient<$Result.GetResult<Prisma.$NetworkStatsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NetworkStats.
     * @param {NetworkStatsCreateManyArgs} args - Arguments to create many NetworkStats.
     * @example
     * // Create many NetworkStats
     * const networkStats = await prisma.networkStats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NetworkStatsCreateManyArgs>(args?: SelectSubset<T, NetworkStatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NetworkStats and returns the data saved in the database.
     * @param {NetworkStatsCreateManyAndReturnArgs} args - Arguments to create many NetworkStats.
     * @example
     * // Create many NetworkStats
     * const networkStats = await prisma.networkStats.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NetworkStats and only return the `id`
     * const networkStatsWithIdOnly = await prisma.networkStats.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NetworkStatsCreateManyAndReturnArgs>(args?: SelectSubset<T, NetworkStatsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NetworkStatsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NetworkStats.
     * @param {NetworkStatsDeleteArgs} args - Arguments to delete one NetworkStats.
     * @example
     * // Delete one NetworkStats
     * const NetworkStats = await prisma.networkStats.delete({
     *   where: {
     *     // ... filter to delete one NetworkStats
     *   }
     * })
     * 
     */
    delete<T extends NetworkStatsDeleteArgs>(args: SelectSubset<T, NetworkStatsDeleteArgs<ExtArgs>>): Prisma__NetworkStatsClient<$Result.GetResult<Prisma.$NetworkStatsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NetworkStats.
     * @param {NetworkStatsUpdateArgs} args - Arguments to update one NetworkStats.
     * @example
     * // Update one NetworkStats
     * const networkStats = await prisma.networkStats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NetworkStatsUpdateArgs>(args: SelectSubset<T, NetworkStatsUpdateArgs<ExtArgs>>): Prisma__NetworkStatsClient<$Result.GetResult<Prisma.$NetworkStatsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NetworkStats.
     * @param {NetworkStatsDeleteManyArgs} args - Arguments to filter NetworkStats to delete.
     * @example
     * // Delete a few NetworkStats
     * const { count } = await prisma.networkStats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NetworkStatsDeleteManyArgs>(args?: SelectSubset<T, NetworkStatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NetworkStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NetworkStatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NetworkStats
     * const networkStats = await prisma.networkStats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NetworkStatsUpdateManyArgs>(args: SelectSubset<T, NetworkStatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NetworkStats and returns the data updated in the database.
     * @param {NetworkStatsUpdateManyAndReturnArgs} args - Arguments to update many NetworkStats.
     * @example
     * // Update many NetworkStats
     * const networkStats = await prisma.networkStats.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NetworkStats and only return the `id`
     * const networkStatsWithIdOnly = await prisma.networkStats.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NetworkStatsUpdateManyAndReturnArgs>(args: SelectSubset<T, NetworkStatsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NetworkStatsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NetworkStats.
     * @param {NetworkStatsUpsertArgs} args - Arguments to update or create a NetworkStats.
     * @example
     * // Update or create a NetworkStats
     * const networkStats = await prisma.networkStats.upsert({
     *   create: {
     *     // ... data to create a NetworkStats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NetworkStats we want to update
     *   }
     * })
     */
    upsert<T extends NetworkStatsUpsertArgs>(args: SelectSubset<T, NetworkStatsUpsertArgs<ExtArgs>>): Prisma__NetworkStatsClient<$Result.GetResult<Prisma.$NetworkStatsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NetworkStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NetworkStatsCountArgs} args - Arguments to filter NetworkStats to count.
     * @example
     * // Count the number of NetworkStats
     * const count = await prisma.networkStats.count({
     *   where: {
     *     // ... the filter for the NetworkStats we want to count
     *   }
     * })
    **/
    count<T extends NetworkStatsCountArgs>(
      args?: Subset<T, NetworkStatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NetworkStatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NetworkStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NetworkStatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NetworkStatsAggregateArgs>(args: Subset<T, NetworkStatsAggregateArgs>): Prisma.PrismaPromise<GetNetworkStatsAggregateType<T>>

    /**
     * Group by NetworkStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NetworkStatsGroupByArgs} args - Group by arguments.
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
      T extends NetworkStatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NetworkStatsGroupByArgs['orderBy'] }
        : { orderBy?: NetworkStatsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NetworkStatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNetworkStatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NetworkStats model
   */
  readonly fields: NetworkStatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NetworkStats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NetworkStatsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the NetworkStats model
   */
  interface NetworkStatsFieldRefs {
    readonly id: FieldRef<"NetworkStats", 'String'>
    readonly userId: FieldRef<"NetworkStats", 'String'>
    readonly totalConnections: FieldRef<"NetworkStats", 'Int'>
    readonly averageStrength: FieldRef<"NetworkStats", 'Float'>
    readonly lastCalculated: FieldRef<"NetworkStats", 'DateTime'>
    readonly connectionsPerPlatform: FieldRef<"NetworkStats", 'Json'>
    readonly topTags: FieldRef<"NetworkStats", 'Json'>
    readonly createdAt: FieldRef<"NetworkStats", 'DateTime'>
    readonly updatedAt: FieldRef<"NetworkStats", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NetworkStats findUnique
   */
  export type NetworkStatsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkStats
     */
    select?: NetworkStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkStats
     */
    omit?: NetworkStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NetworkStatsInclude<ExtArgs> | null
    /**
     * Filter, which NetworkStats to fetch.
     */
    where: NetworkStatsWhereUniqueInput
  }

  /**
   * NetworkStats findUniqueOrThrow
   */
  export type NetworkStatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkStats
     */
    select?: NetworkStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkStats
     */
    omit?: NetworkStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NetworkStatsInclude<ExtArgs> | null
    /**
     * Filter, which NetworkStats to fetch.
     */
    where: NetworkStatsWhereUniqueInput
  }

  /**
   * NetworkStats findFirst
   */
  export type NetworkStatsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkStats
     */
    select?: NetworkStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkStats
     */
    omit?: NetworkStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NetworkStatsInclude<ExtArgs> | null
    /**
     * Filter, which NetworkStats to fetch.
     */
    where?: NetworkStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NetworkStats to fetch.
     */
    orderBy?: NetworkStatsOrderByWithRelationInput | NetworkStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NetworkStats.
     */
    cursor?: NetworkStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NetworkStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NetworkStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NetworkStats.
     */
    distinct?: NetworkStatsScalarFieldEnum | NetworkStatsScalarFieldEnum[]
  }

  /**
   * NetworkStats findFirstOrThrow
   */
  export type NetworkStatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkStats
     */
    select?: NetworkStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkStats
     */
    omit?: NetworkStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NetworkStatsInclude<ExtArgs> | null
    /**
     * Filter, which NetworkStats to fetch.
     */
    where?: NetworkStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NetworkStats to fetch.
     */
    orderBy?: NetworkStatsOrderByWithRelationInput | NetworkStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NetworkStats.
     */
    cursor?: NetworkStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NetworkStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NetworkStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NetworkStats.
     */
    distinct?: NetworkStatsScalarFieldEnum | NetworkStatsScalarFieldEnum[]
  }

  /**
   * NetworkStats findMany
   */
  export type NetworkStatsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkStats
     */
    select?: NetworkStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkStats
     */
    omit?: NetworkStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NetworkStatsInclude<ExtArgs> | null
    /**
     * Filter, which NetworkStats to fetch.
     */
    where?: NetworkStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NetworkStats to fetch.
     */
    orderBy?: NetworkStatsOrderByWithRelationInput | NetworkStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NetworkStats.
     */
    cursor?: NetworkStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NetworkStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NetworkStats.
     */
    skip?: number
    distinct?: NetworkStatsScalarFieldEnum | NetworkStatsScalarFieldEnum[]
  }

  /**
   * NetworkStats create
   */
  export type NetworkStatsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkStats
     */
    select?: NetworkStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkStats
     */
    omit?: NetworkStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NetworkStatsInclude<ExtArgs> | null
    /**
     * The data needed to create a NetworkStats.
     */
    data: XOR<NetworkStatsCreateInput, NetworkStatsUncheckedCreateInput>
  }

  /**
   * NetworkStats createMany
   */
  export type NetworkStatsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NetworkStats.
     */
    data: NetworkStatsCreateManyInput | NetworkStatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NetworkStats createManyAndReturn
   */
  export type NetworkStatsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkStats
     */
    select?: NetworkStatsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkStats
     */
    omit?: NetworkStatsOmit<ExtArgs> | null
    /**
     * The data used to create many NetworkStats.
     */
    data: NetworkStatsCreateManyInput | NetworkStatsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NetworkStatsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NetworkStats update
   */
  export type NetworkStatsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkStats
     */
    select?: NetworkStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkStats
     */
    omit?: NetworkStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NetworkStatsInclude<ExtArgs> | null
    /**
     * The data needed to update a NetworkStats.
     */
    data: XOR<NetworkStatsUpdateInput, NetworkStatsUncheckedUpdateInput>
    /**
     * Choose, which NetworkStats to update.
     */
    where: NetworkStatsWhereUniqueInput
  }

  /**
   * NetworkStats updateMany
   */
  export type NetworkStatsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NetworkStats.
     */
    data: XOR<NetworkStatsUpdateManyMutationInput, NetworkStatsUncheckedUpdateManyInput>
    /**
     * Filter which NetworkStats to update
     */
    where?: NetworkStatsWhereInput
    /**
     * Limit how many NetworkStats to update.
     */
    limit?: number
  }

  /**
   * NetworkStats updateManyAndReturn
   */
  export type NetworkStatsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkStats
     */
    select?: NetworkStatsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkStats
     */
    omit?: NetworkStatsOmit<ExtArgs> | null
    /**
     * The data used to update NetworkStats.
     */
    data: XOR<NetworkStatsUpdateManyMutationInput, NetworkStatsUncheckedUpdateManyInput>
    /**
     * Filter which NetworkStats to update
     */
    where?: NetworkStatsWhereInput
    /**
     * Limit how many NetworkStats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NetworkStatsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NetworkStats upsert
   */
  export type NetworkStatsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkStats
     */
    select?: NetworkStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkStats
     */
    omit?: NetworkStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NetworkStatsInclude<ExtArgs> | null
    /**
     * The filter to search for the NetworkStats to update in case it exists.
     */
    where: NetworkStatsWhereUniqueInput
    /**
     * In case the NetworkStats found by the `where` argument doesn't exist, create a new NetworkStats with this data.
     */
    create: XOR<NetworkStatsCreateInput, NetworkStatsUncheckedCreateInput>
    /**
     * In case the NetworkStats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NetworkStatsUpdateInput, NetworkStatsUncheckedUpdateInput>
  }

  /**
   * NetworkStats delete
   */
  export type NetworkStatsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkStats
     */
    select?: NetworkStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkStats
     */
    omit?: NetworkStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NetworkStatsInclude<ExtArgs> | null
    /**
     * Filter which NetworkStats to delete.
     */
    where: NetworkStatsWhereUniqueInput
  }

  /**
   * NetworkStats deleteMany
   */
  export type NetworkStatsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NetworkStats to delete
     */
    where?: NetworkStatsWhereInput
    /**
     * Limit how many NetworkStats to delete.
     */
    limit?: number
  }

  /**
   * NetworkStats without action
   */
  export type NetworkStatsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkStats
     */
    select?: NetworkStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkStats
     */
    omit?: NetworkStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NetworkStatsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PlatformAccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    platformType: 'platformType',
    platformId: 'platformId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    tokenExpiry: 'tokenExpiry',
    lastSynced: 'lastSynced',
    username: 'username',
    profileUrl: 'profileUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlatformAccountScalarFieldEnum = (typeof PlatformAccountScalarFieldEnum)[keyof typeof PlatformAccountScalarFieldEnum]


  export const ConnectionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    platformType: 'platformType',
    connectionId: 'connectionId',
    name: 'name',
    jobTitle: 'jobTitle',
    company: 'company',
    email: 'email',
    phoneNumber: 'phoneNumber',
    profileUrl: 'profileUrl',
    imageUrl: 'imageUrl',
    connectionLevel: 'connectionLevel',
    location: 'location',
    bio: 'bio',
    tags: 'tags',
    notes: 'notes',
    firstConnected: 'firstConnected',
    lastInteraction: 'lastInteraction',
    strength: 'strength',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ConnectionScalarFieldEnum = (typeof ConnectionScalarFieldEnum)[keyof typeof ConnectionScalarFieldEnum]


  export const ConnectionEventScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    connectionId: 'connectionId',
    eventType: 'eventType',
    platform: 'platform',
    timestamp: 'timestamp',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type ConnectionEventScalarFieldEnum = (typeof ConnectionEventScalarFieldEnum)[keyof typeof ConnectionEventScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    senderId: 'senderId',
    receiverId: 'receiverId',
    connectionId: 'connectionId',
    platform: 'platform',
    externalId: 'externalId',
    content: 'content',
    timestamp: 'timestamp',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const NetworkStatsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    totalConnections: 'totalConnections',
    averageStrength: 'averageStrength',
    lastCalculated: 'lastCalculated',
    connectionsPerPlatform: 'connectionsPerPlatform',
    topTags: 'topTags',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NetworkStatsScalarFieldEnum = (typeof NetworkStatsScalarFieldEnum)[keyof typeof NetworkStatsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Platform'
   */
  export type EnumPlatformFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Platform'>
    


  /**
   * Reference to a field of type 'Platform[]'
   */
  export type ListEnumPlatformFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Platform[]'>
    


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
   * Reference to a field of type 'EventType'
   */
  export type EnumEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventType'>
    


  /**
   * Reference to a field of type 'EventType[]'
   */
  export type ListEnumEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    connections?: ConnectionListRelationFilter
    platformAccounts?: PlatformAccountListRelationFilter
    sentMessages?: MessageListRelationFilter
    receivedMessages?: MessageListRelationFilter
    interactions?: ConnectionEventListRelationFilter
    networkStats?: XOR<NetworkStatsNullableScalarRelationFilter, NetworkStatsWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    connections?: ConnectionOrderByRelationAggregateInput
    platformAccounts?: PlatformAccountOrderByRelationAggregateInput
    sentMessages?: MessageOrderByRelationAggregateInput
    receivedMessages?: MessageOrderByRelationAggregateInput
    interactions?: ConnectionEventOrderByRelationAggregateInput
    networkStats?: NetworkStatsOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    connections?: ConnectionListRelationFilter
    platformAccounts?: PlatformAccountListRelationFilter
    sentMessages?: MessageListRelationFilter
    receivedMessages?: MessageListRelationFilter
    interactions?: ConnectionEventListRelationFilter
    networkStats?: XOR<NetworkStatsNullableScalarRelationFilter, NetworkStatsWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PlatformAccountWhereInput = {
    AND?: PlatformAccountWhereInput | PlatformAccountWhereInput[]
    OR?: PlatformAccountWhereInput[]
    NOT?: PlatformAccountWhereInput | PlatformAccountWhereInput[]
    id?: StringFilter<"PlatformAccount"> | string
    userId?: StringFilter<"PlatformAccount"> | string
    platformType?: EnumPlatformFilter<"PlatformAccount"> | $Enums.Platform
    platformId?: StringFilter<"PlatformAccount"> | string
    accessToken?: StringNullableFilter<"PlatformAccount"> | string | null
    refreshToken?: StringNullableFilter<"PlatformAccount"> | string | null
    tokenExpiry?: DateTimeNullableFilter<"PlatformAccount"> | Date | string | null
    lastSynced?: DateTimeNullableFilter<"PlatformAccount"> | Date | string | null
    username?: StringNullableFilter<"PlatformAccount"> | string | null
    profileUrl?: StringNullableFilter<"PlatformAccount"> | string | null
    createdAt?: DateTimeFilter<"PlatformAccount"> | Date | string
    updatedAt?: DateTimeFilter<"PlatformAccount"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PlatformAccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    platformType?: SortOrder
    platformId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    tokenExpiry?: SortOrderInput | SortOrder
    lastSynced?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    profileUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PlatformAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_platformType?: PlatformAccountUserIdPlatformTypeCompoundUniqueInput
    AND?: PlatformAccountWhereInput | PlatformAccountWhereInput[]
    OR?: PlatformAccountWhereInput[]
    NOT?: PlatformAccountWhereInput | PlatformAccountWhereInput[]
    userId?: StringFilter<"PlatformAccount"> | string
    platformType?: EnumPlatformFilter<"PlatformAccount"> | $Enums.Platform
    platformId?: StringFilter<"PlatformAccount"> | string
    accessToken?: StringNullableFilter<"PlatformAccount"> | string | null
    refreshToken?: StringNullableFilter<"PlatformAccount"> | string | null
    tokenExpiry?: DateTimeNullableFilter<"PlatformAccount"> | Date | string | null
    lastSynced?: DateTimeNullableFilter<"PlatformAccount"> | Date | string | null
    username?: StringNullableFilter<"PlatformAccount"> | string | null
    profileUrl?: StringNullableFilter<"PlatformAccount"> | string | null
    createdAt?: DateTimeFilter<"PlatformAccount"> | Date | string
    updatedAt?: DateTimeFilter<"PlatformAccount"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_platformType">

  export type PlatformAccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    platformType?: SortOrder
    platformId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    tokenExpiry?: SortOrderInput | SortOrder
    lastSynced?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    profileUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PlatformAccountCountOrderByAggregateInput
    _max?: PlatformAccountMaxOrderByAggregateInput
    _min?: PlatformAccountMinOrderByAggregateInput
  }

  export type PlatformAccountScalarWhereWithAggregatesInput = {
    AND?: PlatformAccountScalarWhereWithAggregatesInput | PlatformAccountScalarWhereWithAggregatesInput[]
    OR?: PlatformAccountScalarWhereWithAggregatesInput[]
    NOT?: PlatformAccountScalarWhereWithAggregatesInput | PlatformAccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PlatformAccount"> | string
    userId?: StringWithAggregatesFilter<"PlatformAccount"> | string
    platformType?: EnumPlatformWithAggregatesFilter<"PlatformAccount"> | $Enums.Platform
    platformId?: StringWithAggregatesFilter<"PlatformAccount"> | string
    accessToken?: StringNullableWithAggregatesFilter<"PlatformAccount"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"PlatformAccount"> | string | null
    tokenExpiry?: DateTimeNullableWithAggregatesFilter<"PlatformAccount"> | Date | string | null
    lastSynced?: DateTimeNullableWithAggregatesFilter<"PlatformAccount"> | Date | string | null
    username?: StringNullableWithAggregatesFilter<"PlatformAccount"> | string | null
    profileUrl?: StringNullableWithAggregatesFilter<"PlatformAccount"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PlatformAccount"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PlatformAccount"> | Date | string
  }

  export type ConnectionWhereInput = {
    AND?: ConnectionWhereInput | ConnectionWhereInput[]
    OR?: ConnectionWhereInput[]
    NOT?: ConnectionWhereInput | ConnectionWhereInput[]
    id?: StringFilter<"Connection"> | string
    userId?: StringFilter<"Connection"> | string
    platformType?: EnumPlatformFilter<"Connection"> | $Enums.Platform
    connectionId?: StringFilter<"Connection"> | string
    name?: StringFilter<"Connection"> | string
    jobTitle?: StringNullableFilter<"Connection"> | string | null
    company?: StringNullableFilter<"Connection"> | string | null
    email?: StringNullableFilter<"Connection"> | string | null
    phoneNumber?: StringNullableFilter<"Connection"> | string | null
    profileUrl?: StringNullableFilter<"Connection"> | string | null
    imageUrl?: StringNullableFilter<"Connection"> | string | null
    connectionLevel?: IntNullableFilter<"Connection"> | number | null
    location?: StringNullableFilter<"Connection"> | string | null
    bio?: StringNullableFilter<"Connection"> | string | null
    tags?: StringNullableListFilter<"Connection">
    notes?: StringNullableFilter<"Connection"> | string | null
    firstConnected?: DateTimeNullableFilter<"Connection"> | Date | string | null
    lastInteraction?: DateTimeNullableFilter<"Connection"> | Date | string | null
    strength?: FloatNullableFilter<"Connection"> | number | null
    createdAt?: DateTimeFilter<"Connection"> | Date | string
    updatedAt?: DateTimeFilter<"Connection"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    events?: ConnectionEventListRelationFilter
    messages?: MessageListRelationFilter
  }

  export type ConnectionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    platformType?: SortOrder
    connectionId?: SortOrder
    name?: SortOrder
    jobTitle?: SortOrderInput | SortOrder
    company?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    profileUrl?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    connectionLevel?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    tags?: SortOrder
    notes?: SortOrderInput | SortOrder
    firstConnected?: SortOrderInput | SortOrder
    lastInteraction?: SortOrderInput | SortOrder
    strength?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    events?: ConnectionEventOrderByRelationAggregateInput
    messages?: MessageOrderByRelationAggregateInput
  }

  export type ConnectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_platformType_connectionId?: ConnectionUserIdPlatformTypeConnectionIdCompoundUniqueInput
    AND?: ConnectionWhereInput | ConnectionWhereInput[]
    OR?: ConnectionWhereInput[]
    NOT?: ConnectionWhereInput | ConnectionWhereInput[]
    userId?: StringFilter<"Connection"> | string
    platformType?: EnumPlatformFilter<"Connection"> | $Enums.Platform
    connectionId?: StringFilter<"Connection"> | string
    name?: StringFilter<"Connection"> | string
    jobTitle?: StringNullableFilter<"Connection"> | string | null
    company?: StringNullableFilter<"Connection"> | string | null
    email?: StringNullableFilter<"Connection"> | string | null
    phoneNumber?: StringNullableFilter<"Connection"> | string | null
    profileUrl?: StringNullableFilter<"Connection"> | string | null
    imageUrl?: StringNullableFilter<"Connection"> | string | null
    connectionLevel?: IntNullableFilter<"Connection"> | number | null
    location?: StringNullableFilter<"Connection"> | string | null
    bio?: StringNullableFilter<"Connection"> | string | null
    tags?: StringNullableListFilter<"Connection">
    notes?: StringNullableFilter<"Connection"> | string | null
    firstConnected?: DateTimeNullableFilter<"Connection"> | Date | string | null
    lastInteraction?: DateTimeNullableFilter<"Connection"> | Date | string | null
    strength?: FloatNullableFilter<"Connection"> | number | null
    createdAt?: DateTimeFilter<"Connection"> | Date | string
    updatedAt?: DateTimeFilter<"Connection"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    events?: ConnectionEventListRelationFilter
    messages?: MessageListRelationFilter
  }, "id" | "userId_platformType_connectionId">

  export type ConnectionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    platformType?: SortOrder
    connectionId?: SortOrder
    name?: SortOrder
    jobTitle?: SortOrderInput | SortOrder
    company?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    profileUrl?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    connectionLevel?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    tags?: SortOrder
    notes?: SortOrderInput | SortOrder
    firstConnected?: SortOrderInput | SortOrder
    lastInteraction?: SortOrderInput | SortOrder
    strength?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ConnectionCountOrderByAggregateInput
    _avg?: ConnectionAvgOrderByAggregateInput
    _max?: ConnectionMaxOrderByAggregateInput
    _min?: ConnectionMinOrderByAggregateInput
    _sum?: ConnectionSumOrderByAggregateInput
  }

  export type ConnectionScalarWhereWithAggregatesInput = {
    AND?: ConnectionScalarWhereWithAggregatesInput | ConnectionScalarWhereWithAggregatesInput[]
    OR?: ConnectionScalarWhereWithAggregatesInput[]
    NOT?: ConnectionScalarWhereWithAggregatesInput | ConnectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Connection"> | string
    userId?: StringWithAggregatesFilter<"Connection"> | string
    platformType?: EnumPlatformWithAggregatesFilter<"Connection"> | $Enums.Platform
    connectionId?: StringWithAggregatesFilter<"Connection"> | string
    name?: StringWithAggregatesFilter<"Connection"> | string
    jobTitle?: StringNullableWithAggregatesFilter<"Connection"> | string | null
    company?: StringNullableWithAggregatesFilter<"Connection"> | string | null
    email?: StringNullableWithAggregatesFilter<"Connection"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"Connection"> | string | null
    profileUrl?: StringNullableWithAggregatesFilter<"Connection"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Connection"> | string | null
    connectionLevel?: IntNullableWithAggregatesFilter<"Connection"> | number | null
    location?: StringNullableWithAggregatesFilter<"Connection"> | string | null
    bio?: StringNullableWithAggregatesFilter<"Connection"> | string | null
    tags?: StringNullableListFilter<"Connection">
    notes?: StringNullableWithAggregatesFilter<"Connection"> | string | null
    firstConnected?: DateTimeNullableWithAggregatesFilter<"Connection"> | Date | string | null
    lastInteraction?: DateTimeNullableWithAggregatesFilter<"Connection"> | Date | string | null
    strength?: FloatNullableWithAggregatesFilter<"Connection"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Connection"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Connection"> | Date | string
  }

  export type ConnectionEventWhereInput = {
    AND?: ConnectionEventWhereInput | ConnectionEventWhereInput[]
    OR?: ConnectionEventWhereInput[]
    NOT?: ConnectionEventWhereInput | ConnectionEventWhereInput[]
    id?: StringFilter<"ConnectionEvent"> | string
    userId?: StringFilter<"ConnectionEvent"> | string
    connectionId?: StringFilter<"ConnectionEvent"> | string
    eventType?: EnumEventTypeFilter<"ConnectionEvent"> | $Enums.EventType
    platform?: EnumPlatformFilter<"ConnectionEvent"> | $Enums.Platform
    timestamp?: DateTimeFilter<"ConnectionEvent"> | Date | string
    metadata?: JsonNullableFilter<"ConnectionEvent">
    createdAt?: DateTimeFilter<"ConnectionEvent"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    connection?: XOR<ConnectionScalarRelationFilter, ConnectionWhereInput>
  }

  export type ConnectionEventOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    connectionId?: SortOrder
    eventType?: SortOrder
    platform?: SortOrder
    timestamp?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    connection?: ConnectionOrderByWithRelationInput
  }

  export type ConnectionEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConnectionEventWhereInput | ConnectionEventWhereInput[]
    OR?: ConnectionEventWhereInput[]
    NOT?: ConnectionEventWhereInput | ConnectionEventWhereInput[]
    userId?: StringFilter<"ConnectionEvent"> | string
    connectionId?: StringFilter<"ConnectionEvent"> | string
    eventType?: EnumEventTypeFilter<"ConnectionEvent"> | $Enums.EventType
    platform?: EnumPlatformFilter<"ConnectionEvent"> | $Enums.Platform
    timestamp?: DateTimeFilter<"ConnectionEvent"> | Date | string
    metadata?: JsonNullableFilter<"ConnectionEvent">
    createdAt?: DateTimeFilter<"ConnectionEvent"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    connection?: XOR<ConnectionScalarRelationFilter, ConnectionWhereInput>
  }, "id">

  export type ConnectionEventOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    connectionId?: SortOrder
    eventType?: SortOrder
    platform?: SortOrder
    timestamp?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ConnectionEventCountOrderByAggregateInput
    _max?: ConnectionEventMaxOrderByAggregateInput
    _min?: ConnectionEventMinOrderByAggregateInput
  }

  export type ConnectionEventScalarWhereWithAggregatesInput = {
    AND?: ConnectionEventScalarWhereWithAggregatesInput | ConnectionEventScalarWhereWithAggregatesInput[]
    OR?: ConnectionEventScalarWhereWithAggregatesInput[]
    NOT?: ConnectionEventScalarWhereWithAggregatesInput | ConnectionEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ConnectionEvent"> | string
    userId?: StringWithAggregatesFilter<"ConnectionEvent"> | string
    connectionId?: StringWithAggregatesFilter<"ConnectionEvent"> | string
    eventType?: EnumEventTypeWithAggregatesFilter<"ConnectionEvent"> | $Enums.EventType
    platform?: EnumPlatformWithAggregatesFilter<"ConnectionEvent"> | $Enums.Platform
    timestamp?: DateTimeWithAggregatesFilter<"ConnectionEvent"> | Date | string
    metadata?: JsonNullableWithAggregatesFilter<"ConnectionEvent">
    createdAt?: DateTimeWithAggregatesFilter<"ConnectionEvent"> | Date | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<"Message"> | string
    senderId?: StringFilter<"Message"> | string
    receiverId?: StringFilter<"Message"> | string
    connectionId?: StringNullableFilter<"Message"> | string | null
    platform?: EnumPlatformFilter<"Message"> | $Enums.Platform
    externalId?: StringNullableFilter<"Message"> | string | null
    content?: StringFilter<"Message"> | string
    timestamp?: DateTimeFilter<"Message"> | Date | string
    metadata?: JsonNullableFilter<"Message">
    createdAt?: DateTimeFilter<"Message"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
    connection?: XOR<ConnectionNullableScalarRelationFilter, ConnectionWhereInput> | null
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    connectionId?: SortOrderInput | SortOrder
    platform?: SortOrder
    externalId?: SortOrderInput | SortOrder
    content?: SortOrder
    timestamp?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    sender?: UserOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
    connection?: ConnectionOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    senderId?: StringFilter<"Message"> | string
    receiverId?: StringFilter<"Message"> | string
    connectionId?: StringNullableFilter<"Message"> | string | null
    platform?: EnumPlatformFilter<"Message"> | $Enums.Platform
    externalId?: StringNullableFilter<"Message"> | string | null
    content?: StringFilter<"Message"> | string
    timestamp?: DateTimeFilter<"Message"> | Date | string
    metadata?: JsonNullableFilter<"Message">
    createdAt?: DateTimeFilter<"Message"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
    connection?: XOR<ConnectionNullableScalarRelationFilter, ConnectionWhereInput> | null
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    connectionId?: SortOrderInput | SortOrder
    platform?: SortOrder
    externalId?: SortOrderInput | SortOrder
    content?: SortOrder
    timestamp?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Message"> | string
    senderId?: StringWithAggregatesFilter<"Message"> | string
    receiverId?: StringWithAggregatesFilter<"Message"> | string
    connectionId?: StringNullableWithAggregatesFilter<"Message"> | string | null
    platform?: EnumPlatformWithAggregatesFilter<"Message"> | $Enums.Platform
    externalId?: StringNullableWithAggregatesFilter<"Message"> | string | null
    content?: StringWithAggregatesFilter<"Message"> | string
    timestamp?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    metadata?: JsonNullableWithAggregatesFilter<"Message">
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
  }

  export type NetworkStatsWhereInput = {
    AND?: NetworkStatsWhereInput | NetworkStatsWhereInput[]
    OR?: NetworkStatsWhereInput[]
    NOT?: NetworkStatsWhereInput | NetworkStatsWhereInput[]
    id?: StringFilter<"NetworkStats"> | string
    userId?: StringFilter<"NetworkStats"> | string
    totalConnections?: IntFilter<"NetworkStats"> | number
    averageStrength?: FloatNullableFilter<"NetworkStats"> | number | null
    lastCalculated?: DateTimeFilter<"NetworkStats"> | Date | string
    connectionsPerPlatform?: JsonNullableFilter<"NetworkStats">
    topTags?: JsonNullableFilter<"NetworkStats">
    createdAt?: DateTimeFilter<"NetworkStats"> | Date | string
    updatedAt?: DateTimeFilter<"NetworkStats"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NetworkStatsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    totalConnections?: SortOrder
    averageStrength?: SortOrderInput | SortOrder
    lastCalculated?: SortOrder
    connectionsPerPlatform?: SortOrderInput | SortOrder
    topTags?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NetworkStatsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: NetworkStatsWhereInput | NetworkStatsWhereInput[]
    OR?: NetworkStatsWhereInput[]
    NOT?: NetworkStatsWhereInput | NetworkStatsWhereInput[]
    totalConnections?: IntFilter<"NetworkStats"> | number
    averageStrength?: FloatNullableFilter<"NetworkStats"> | number | null
    lastCalculated?: DateTimeFilter<"NetworkStats"> | Date | string
    connectionsPerPlatform?: JsonNullableFilter<"NetworkStats">
    topTags?: JsonNullableFilter<"NetworkStats">
    createdAt?: DateTimeFilter<"NetworkStats"> | Date | string
    updatedAt?: DateTimeFilter<"NetworkStats"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type NetworkStatsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    totalConnections?: SortOrder
    averageStrength?: SortOrderInput | SortOrder
    lastCalculated?: SortOrder
    connectionsPerPlatform?: SortOrderInput | SortOrder
    topTags?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NetworkStatsCountOrderByAggregateInput
    _avg?: NetworkStatsAvgOrderByAggregateInput
    _max?: NetworkStatsMaxOrderByAggregateInput
    _min?: NetworkStatsMinOrderByAggregateInput
    _sum?: NetworkStatsSumOrderByAggregateInput
  }

  export type NetworkStatsScalarWhereWithAggregatesInput = {
    AND?: NetworkStatsScalarWhereWithAggregatesInput | NetworkStatsScalarWhereWithAggregatesInput[]
    OR?: NetworkStatsScalarWhereWithAggregatesInput[]
    NOT?: NetworkStatsScalarWhereWithAggregatesInput | NetworkStatsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NetworkStats"> | string
    userId?: StringWithAggregatesFilter<"NetworkStats"> | string
    totalConnections?: IntWithAggregatesFilter<"NetworkStats"> | number
    averageStrength?: FloatNullableWithAggregatesFilter<"NetworkStats"> | number | null
    lastCalculated?: DateTimeWithAggregatesFilter<"NetworkStats"> | Date | string
    connectionsPerPlatform?: JsonNullableWithAggregatesFilter<"NetworkStats">
    topTags?: JsonNullableWithAggregatesFilter<"NetworkStats">
    createdAt?: DateTimeWithAggregatesFilter<"NetworkStats"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NetworkStats"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    connections?: ConnectionCreateNestedManyWithoutUserInput
    platformAccounts?: PlatformAccountCreateNestedManyWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    interactions?: ConnectionEventCreateNestedManyWithoutUserInput
    networkStats?: NetworkStatsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    connections?: ConnectionUncheckedCreateNestedManyWithoutUserInput
    platformAccounts?: PlatformAccountUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    interactions?: ConnectionEventUncheckedCreateNestedManyWithoutUserInput
    networkStats?: NetworkStatsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    connections?: ConnectionUpdateManyWithoutUserNestedInput
    platformAccounts?: PlatformAccountUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    interactions?: ConnectionEventUpdateManyWithoutUserNestedInput
    networkStats?: NetworkStatsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    connections?: ConnectionUncheckedUpdateManyWithoutUserNestedInput
    platformAccounts?: PlatformAccountUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    interactions?: ConnectionEventUncheckedUpdateManyWithoutUserNestedInput
    networkStats?: NetworkStatsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlatformAccountCreateInput = {
    id?: string
    platformType: $Enums.Platform
    platformId: string
    accessToken?: string | null
    refreshToken?: string | null
    tokenExpiry?: Date | string | null
    lastSynced?: Date | string | null
    username?: string | null
    profileUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPlatformAccountsInput
  }

  export type PlatformAccountUncheckedCreateInput = {
    id?: string
    userId: string
    platformType: $Enums.Platform
    platformId: string
    accessToken?: string | null
    refreshToken?: string | null
    tokenExpiry?: Date | string | null
    lastSynced?: Date | string | null
    username?: string | null
    profileUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlatformAccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    platformType?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    platformId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSynced?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPlatformAccountsNestedInput
  }

  export type PlatformAccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    platformType?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    platformId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSynced?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlatformAccountCreateManyInput = {
    id?: string
    userId: string
    platformType: $Enums.Platform
    platformId: string
    accessToken?: string | null
    refreshToken?: string | null
    tokenExpiry?: Date | string | null
    lastSynced?: Date | string | null
    username?: string | null
    profileUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlatformAccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    platformType?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    platformId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSynced?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlatformAccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    platformType?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    platformId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSynced?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectionCreateInput = {
    id?: string
    platformType: $Enums.Platform
    connectionId: string
    name: string
    jobTitle?: string | null
    company?: string | null
    email?: string | null
    phoneNumber?: string | null
    profileUrl?: string | null
    imageUrl?: string | null
    connectionLevel?: number | null
    location?: string | null
    bio?: string | null
    tags?: ConnectionCreatetagsInput | string[]
    notes?: string | null
    firstConnected?: Date | string | null
    lastInteraction?: Date | string | null
    strength?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutConnectionsInput
    events?: ConnectionEventCreateNestedManyWithoutConnectionInput
    messages?: MessageCreateNestedManyWithoutConnectionInput
  }

  export type ConnectionUncheckedCreateInput = {
    id?: string
    userId: string
    platformType: $Enums.Platform
    connectionId: string
    name: string
    jobTitle?: string | null
    company?: string | null
    email?: string | null
    phoneNumber?: string | null
    profileUrl?: string | null
    imageUrl?: string | null
    connectionLevel?: number | null
    location?: string | null
    bio?: string | null
    tags?: ConnectionCreatetagsInput | string[]
    notes?: string | null
    firstConnected?: Date | string | null
    lastInteraction?: Date | string | null
    strength?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: ConnectionEventUncheckedCreateNestedManyWithoutConnectionInput
    messages?: MessageUncheckedCreateNestedManyWithoutConnectionInput
  }

  export type ConnectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    platformType?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    connectionId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    connectionLevel?: NullableIntFieldUpdateOperationsInput | number | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ConnectionUpdatetagsInput | string[]
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    firstConnected?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastInteraction?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    strength?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutConnectionsNestedInput
    events?: ConnectionEventUpdateManyWithoutConnectionNestedInput
    messages?: MessageUpdateManyWithoutConnectionNestedInput
  }

  export type ConnectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    platformType?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    connectionId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    connectionLevel?: NullableIntFieldUpdateOperationsInput | number | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ConnectionUpdatetagsInput | string[]
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    firstConnected?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastInteraction?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    strength?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: ConnectionEventUncheckedUpdateManyWithoutConnectionNestedInput
    messages?: MessageUncheckedUpdateManyWithoutConnectionNestedInput
  }

  export type ConnectionCreateManyInput = {
    id?: string
    userId: string
    platformType: $Enums.Platform
    connectionId: string
    name: string
    jobTitle?: string | null
    company?: string | null
    email?: string | null
    phoneNumber?: string | null
    profileUrl?: string | null
    imageUrl?: string | null
    connectionLevel?: number | null
    location?: string | null
    bio?: string | null
    tags?: ConnectionCreatetagsInput | string[]
    notes?: string | null
    firstConnected?: Date | string | null
    lastInteraction?: Date | string | null
    strength?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConnectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    platformType?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    connectionId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    connectionLevel?: NullableIntFieldUpdateOperationsInput | number | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ConnectionUpdatetagsInput | string[]
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    firstConnected?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastInteraction?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    strength?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    platformType?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    connectionId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    connectionLevel?: NullableIntFieldUpdateOperationsInput | number | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ConnectionUpdatetagsInput | string[]
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    firstConnected?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastInteraction?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    strength?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectionEventCreateInput = {
    id?: string
    eventType: $Enums.EventType
    platform: $Enums.Platform
    timestamp: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutInteractionsInput
    connection: ConnectionCreateNestedOneWithoutEventsInput
  }

  export type ConnectionEventUncheckedCreateInput = {
    id?: string
    userId: string
    connectionId: string
    eventType: $Enums.EventType
    platform: $Enums.Platform
    timestamp: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ConnectionEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutInteractionsNestedInput
    connection?: ConnectionUpdateOneRequiredWithoutEventsNestedInput
  }

  export type ConnectionEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    connectionId?: StringFieldUpdateOperationsInput | string
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectionEventCreateManyInput = {
    id?: string
    userId: string
    connectionId: string
    eventType: $Enums.EventType
    platform: $Enums.Platform
    timestamp: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ConnectionEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectionEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    connectionId?: StringFieldUpdateOperationsInput | string
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateInput = {
    id?: string
    platform: $Enums.Platform
    externalId?: string | null
    content: string
    timestamp: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutSentMessagesInput
    receiver: UserCreateNestedOneWithoutReceivedMessagesInput
    connection?: ConnectionCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    senderId: string
    receiverId: string
    connectionId?: string | null
    platform: $Enums.Platform
    externalId?: string | null
    content: string
    timestamp: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
    connection?: ConnectionUpdateOneWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    connectionId?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyInput = {
    id?: string
    senderId: string
    receiverId: string
    connectionId?: string | null
    platform: $Enums.Platform
    externalId?: string | null
    content: string
    timestamp: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    connectionId?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NetworkStatsCreateInput = {
    id?: string
    totalConnections?: number
    averageStrength?: number | null
    lastCalculated?: Date | string
    connectionsPerPlatform?: NullableJsonNullValueInput | InputJsonValue
    topTags?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutNetworkStatsInput
  }

  export type NetworkStatsUncheckedCreateInput = {
    id?: string
    userId: string
    totalConnections?: number
    averageStrength?: number | null
    lastCalculated?: Date | string
    connectionsPerPlatform?: NullableJsonNullValueInput | InputJsonValue
    topTags?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NetworkStatsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalConnections?: IntFieldUpdateOperationsInput | number
    averageStrength?: NullableFloatFieldUpdateOperationsInput | number | null
    lastCalculated?: DateTimeFieldUpdateOperationsInput | Date | string
    connectionsPerPlatform?: NullableJsonNullValueInput | InputJsonValue
    topTags?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNetworkStatsNestedInput
  }

  export type NetworkStatsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    totalConnections?: IntFieldUpdateOperationsInput | number
    averageStrength?: NullableFloatFieldUpdateOperationsInput | number | null
    lastCalculated?: DateTimeFieldUpdateOperationsInput | Date | string
    connectionsPerPlatform?: NullableJsonNullValueInput | InputJsonValue
    topTags?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NetworkStatsCreateManyInput = {
    id?: string
    userId: string
    totalConnections?: number
    averageStrength?: number | null
    lastCalculated?: Date | string
    connectionsPerPlatform?: NullableJsonNullValueInput | InputJsonValue
    topTags?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NetworkStatsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalConnections?: IntFieldUpdateOperationsInput | number
    averageStrength?: NullableFloatFieldUpdateOperationsInput | number | null
    lastCalculated?: DateTimeFieldUpdateOperationsInput | Date | string
    connectionsPerPlatform?: NullableJsonNullValueInput | InputJsonValue
    topTags?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NetworkStatsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    totalConnections?: IntFieldUpdateOperationsInput | number
    averageStrength?: NullableFloatFieldUpdateOperationsInput | number | null
    lastCalculated?: DateTimeFieldUpdateOperationsInput | Date | string
    connectionsPerPlatform?: NullableJsonNullValueInput | InputJsonValue
    topTags?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type ConnectionListRelationFilter = {
    every?: ConnectionWhereInput
    some?: ConnectionWhereInput
    none?: ConnectionWhereInput
  }

  export type PlatformAccountListRelationFilter = {
    every?: PlatformAccountWhereInput
    some?: PlatformAccountWhereInput
    none?: PlatformAccountWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type ConnectionEventListRelationFilter = {
    every?: ConnectionEventWhereInput
    some?: ConnectionEventWhereInput
    none?: ConnectionEventWhereInput
  }

  export type NetworkStatsNullableScalarRelationFilter = {
    is?: NetworkStatsWhereInput | null
    isNot?: NetworkStatsWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ConnectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlatformAccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConnectionEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type EnumPlatformFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumPlatformFilter<$PrismaModel> | $Enums.Platform
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PlatformAccountUserIdPlatformTypeCompoundUniqueInput = {
    userId: string
    platformType: $Enums.Platform
  }

  export type PlatformAccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    platformType?: SortOrder
    platformId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    tokenExpiry?: SortOrder
    lastSynced?: SortOrder
    username?: SortOrder
    profileUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlatformAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    platformType?: SortOrder
    platformId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    tokenExpiry?: SortOrder
    lastSynced?: SortOrder
    username?: SortOrder
    profileUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlatformAccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    platformType?: SortOrder
    platformId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    tokenExpiry?: SortOrder
    lastSynced?: SortOrder
    username?: SortOrder
    profileUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumPlatformWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumPlatformWithAggregatesFilter<$PrismaModel> | $Enums.Platform
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlatformFilter<$PrismaModel>
    _max?: NestedEnumPlatformFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ConnectionUserIdPlatformTypeConnectionIdCompoundUniqueInput = {
    userId: string
    platformType: $Enums.Platform
    connectionId: string
  }

  export type ConnectionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    platformType?: SortOrder
    connectionId?: SortOrder
    name?: SortOrder
    jobTitle?: SortOrder
    company?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    profileUrl?: SortOrder
    imageUrl?: SortOrder
    connectionLevel?: SortOrder
    location?: SortOrder
    bio?: SortOrder
    tags?: SortOrder
    notes?: SortOrder
    firstConnected?: SortOrder
    lastInteraction?: SortOrder
    strength?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConnectionAvgOrderByAggregateInput = {
    connectionLevel?: SortOrder
    strength?: SortOrder
  }

  export type ConnectionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    platformType?: SortOrder
    connectionId?: SortOrder
    name?: SortOrder
    jobTitle?: SortOrder
    company?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    profileUrl?: SortOrder
    imageUrl?: SortOrder
    connectionLevel?: SortOrder
    location?: SortOrder
    bio?: SortOrder
    notes?: SortOrder
    firstConnected?: SortOrder
    lastInteraction?: SortOrder
    strength?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConnectionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    platformType?: SortOrder
    connectionId?: SortOrder
    name?: SortOrder
    jobTitle?: SortOrder
    company?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    profileUrl?: SortOrder
    imageUrl?: SortOrder
    connectionLevel?: SortOrder
    location?: SortOrder
    bio?: SortOrder
    notes?: SortOrder
    firstConnected?: SortOrder
    lastInteraction?: SortOrder
    strength?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConnectionSumOrderByAggregateInput = {
    connectionLevel?: SortOrder
    strength?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeFilter<$PrismaModel> | $Enums.EventType
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ConnectionScalarRelationFilter = {
    is?: ConnectionWhereInput
    isNot?: ConnectionWhereInput
  }

  export type ConnectionEventCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    connectionId?: SortOrder
    eventType?: SortOrder
    platform?: SortOrder
    timestamp?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type ConnectionEventMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    connectionId?: SortOrder
    eventType?: SortOrder
    platform?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
  }

  export type ConnectionEventMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    connectionId?: SortOrder
    eventType?: SortOrder
    platform?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.EventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventTypeFilter<$PrismaModel>
    _max?: NestedEnumEventTypeFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type ConnectionNullableScalarRelationFilter = {
    is?: ConnectionWhereInput | null
    isNot?: ConnectionWhereInput | null
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    connectionId?: SortOrder
    platform?: SortOrder
    externalId?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    connectionId?: SortOrder
    platform?: SortOrder
    externalId?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    connectionId?: SortOrder
    platform?: SortOrder
    externalId?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
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

  export type NetworkStatsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalConnections?: SortOrder
    averageStrength?: SortOrder
    lastCalculated?: SortOrder
    connectionsPerPlatform?: SortOrder
    topTags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NetworkStatsAvgOrderByAggregateInput = {
    totalConnections?: SortOrder
    averageStrength?: SortOrder
  }

  export type NetworkStatsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalConnections?: SortOrder
    averageStrength?: SortOrder
    lastCalculated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NetworkStatsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalConnections?: SortOrder
    averageStrength?: SortOrder
    lastCalculated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NetworkStatsSumOrderByAggregateInput = {
    totalConnections?: SortOrder
    averageStrength?: SortOrder
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

  export type ConnectionCreateNestedManyWithoutUserInput = {
    create?: XOR<ConnectionCreateWithoutUserInput, ConnectionUncheckedCreateWithoutUserInput> | ConnectionCreateWithoutUserInput[] | ConnectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConnectionCreateOrConnectWithoutUserInput | ConnectionCreateOrConnectWithoutUserInput[]
    createMany?: ConnectionCreateManyUserInputEnvelope
    connect?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
  }

  export type PlatformAccountCreateNestedManyWithoutUserInput = {
    create?: XOR<PlatformAccountCreateWithoutUserInput, PlatformAccountUncheckedCreateWithoutUserInput> | PlatformAccountCreateWithoutUserInput[] | PlatformAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlatformAccountCreateOrConnectWithoutUserInput | PlatformAccountCreateOrConnectWithoutUserInput[]
    createMany?: PlatformAccountCreateManyUserInputEnvelope
    connect?: PlatformAccountWhereUniqueInput | PlatformAccountWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutReceiverInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type ConnectionEventCreateNestedManyWithoutUserInput = {
    create?: XOR<ConnectionEventCreateWithoutUserInput, ConnectionEventUncheckedCreateWithoutUserInput> | ConnectionEventCreateWithoutUserInput[] | ConnectionEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConnectionEventCreateOrConnectWithoutUserInput | ConnectionEventCreateOrConnectWithoutUserInput[]
    createMany?: ConnectionEventCreateManyUserInputEnvelope
    connect?: ConnectionEventWhereUniqueInput | ConnectionEventWhereUniqueInput[]
  }

  export type NetworkStatsCreateNestedOneWithoutUserInput = {
    create?: XOR<NetworkStatsCreateWithoutUserInput, NetworkStatsUncheckedCreateWithoutUserInput>
    connectOrCreate?: NetworkStatsCreateOrConnectWithoutUserInput
    connect?: NetworkStatsWhereUniqueInput
  }

  export type ConnectionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ConnectionCreateWithoutUserInput, ConnectionUncheckedCreateWithoutUserInput> | ConnectionCreateWithoutUserInput[] | ConnectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConnectionCreateOrConnectWithoutUserInput | ConnectionCreateOrConnectWithoutUserInput[]
    createMany?: ConnectionCreateManyUserInputEnvelope
    connect?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
  }

  export type PlatformAccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PlatformAccountCreateWithoutUserInput, PlatformAccountUncheckedCreateWithoutUserInput> | PlatformAccountCreateWithoutUserInput[] | PlatformAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlatformAccountCreateOrConnectWithoutUserInput | PlatformAccountCreateOrConnectWithoutUserInput[]
    createMany?: PlatformAccountCreateManyUserInputEnvelope
    connect?: PlatformAccountWhereUniqueInput | PlatformAccountWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type ConnectionEventUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ConnectionEventCreateWithoutUserInput, ConnectionEventUncheckedCreateWithoutUserInput> | ConnectionEventCreateWithoutUserInput[] | ConnectionEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConnectionEventCreateOrConnectWithoutUserInput | ConnectionEventCreateOrConnectWithoutUserInput[]
    createMany?: ConnectionEventCreateManyUserInputEnvelope
    connect?: ConnectionEventWhereUniqueInput | ConnectionEventWhereUniqueInput[]
  }

  export type NetworkStatsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<NetworkStatsCreateWithoutUserInput, NetworkStatsUncheckedCreateWithoutUserInput>
    connectOrCreate?: NetworkStatsCreateOrConnectWithoutUserInput
    connect?: NetworkStatsWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ConnectionUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConnectionCreateWithoutUserInput, ConnectionUncheckedCreateWithoutUserInput> | ConnectionCreateWithoutUserInput[] | ConnectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConnectionCreateOrConnectWithoutUserInput | ConnectionCreateOrConnectWithoutUserInput[]
    upsert?: ConnectionUpsertWithWhereUniqueWithoutUserInput | ConnectionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConnectionCreateManyUserInputEnvelope
    set?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    disconnect?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    delete?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    connect?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    update?: ConnectionUpdateWithWhereUniqueWithoutUserInput | ConnectionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConnectionUpdateManyWithWhereWithoutUserInput | ConnectionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConnectionScalarWhereInput | ConnectionScalarWhereInput[]
  }

  export type PlatformAccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<PlatformAccountCreateWithoutUserInput, PlatformAccountUncheckedCreateWithoutUserInput> | PlatformAccountCreateWithoutUserInput[] | PlatformAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlatformAccountCreateOrConnectWithoutUserInput | PlatformAccountCreateOrConnectWithoutUserInput[]
    upsert?: PlatformAccountUpsertWithWhereUniqueWithoutUserInput | PlatformAccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PlatformAccountCreateManyUserInputEnvelope
    set?: PlatformAccountWhereUniqueInput | PlatformAccountWhereUniqueInput[]
    disconnect?: PlatformAccountWhereUniqueInput | PlatformAccountWhereUniqueInput[]
    delete?: PlatformAccountWhereUniqueInput | PlatformAccountWhereUniqueInput[]
    connect?: PlatformAccountWhereUniqueInput | PlatformAccountWhereUniqueInput[]
    update?: PlatformAccountUpdateWithWhereUniqueWithoutUserInput | PlatformAccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PlatformAccountUpdateManyWithWhereWithoutUserInput | PlatformAccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PlatformAccountScalarWhereInput | PlatformAccountScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutReceiverInput | MessageUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutReceiverInput | MessageUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutReceiverInput | MessageUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ConnectionEventUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConnectionEventCreateWithoutUserInput, ConnectionEventUncheckedCreateWithoutUserInput> | ConnectionEventCreateWithoutUserInput[] | ConnectionEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConnectionEventCreateOrConnectWithoutUserInput | ConnectionEventCreateOrConnectWithoutUserInput[]
    upsert?: ConnectionEventUpsertWithWhereUniqueWithoutUserInput | ConnectionEventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConnectionEventCreateManyUserInputEnvelope
    set?: ConnectionEventWhereUniqueInput | ConnectionEventWhereUniqueInput[]
    disconnect?: ConnectionEventWhereUniqueInput | ConnectionEventWhereUniqueInput[]
    delete?: ConnectionEventWhereUniqueInput | ConnectionEventWhereUniqueInput[]
    connect?: ConnectionEventWhereUniqueInput | ConnectionEventWhereUniqueInput[]
    update?: ConnectionEventUpdateWithWhereUniqueWithoutUserInput | ConnectionEventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConnectionEventUpdateManyWithWhereWithoutUserInput | ConnectionEventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConnectionEventScalarWhereInput | ConnectionEventScalarWhereInput[]
  }

  export type NetworkStatsUpdateOneWithoutUserNestedInput = {
    create?: XOR<NetworkStatsCreateWithoutUserInput, NetworkStatsUncheckedCreateWithoutUserInput>
    connectOrCreate?: NetworkStatsCreateOrConnectWithoutUserInput
    upsert?: NetworkStatsUpsertWithoutUserInput
    disconnect?: NetworkStatsWhereInput | boolean
    delete?: NetworkStatsWhereInput | boolean
    connect?: NetworkStatsWhereUniqueInput
    update?: XOR<XOR<NetworkStatsUpdateToOneWithWhereWithoutUserInput, NetworkStatsUpdateWithoutUserInput>, NetworkStatsUncheckedUpdateWithoutUserInput>
  }

  export type ConnectionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConnectionCreateWithoutUserInput, ConnectionUncheckedCreateWithoutUserInput> | ConnectionCreateWithoutUserInput[] | ConnectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConnectionCreateOrConnectWithoutUserInput | ConnectionCreateOrConnectWithoutUserInput[]
    upsert?: ConnectionUpsertWithWhereUniqueWithoutUserInput | ConnectionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConnectionCreateManyUserInputEnvelope
    set?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    disconnect?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    delete?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    connect?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    update?: ConnectionUpdateWithWhereUniqueWithoutUserInput | ConnectionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConnectionUpdateManyWithWhereWithoutUserInput | ConnectionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConnectionScalarWhereInput | ConnectionScalarWhereInput[]
  }

  export type PlatformAccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PlatformAccountCreateWithoutUserInput, PlatformAccountUncheckedCreateWithoutUserInput> | PlatformAccountCreateWithoutUserInput[] | PlatformAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlatformAccountCreateOrConnectWithoutUserInput | PlatformAccountCreateOrConnectWithoutUserInput[]
    upsert?: PlatformAccountUpsertWithWhereUniqueWithoutUserInput | PlatformAccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PlatformAccountCreateManyUserInputEnvelope
    set?: PlatformAccountWhereUniqueInput | PlatformAccountWhereUniqueInput[]
    disconnect?: PlatformAccountWhereUniqueInput | PlatformAccountWhereUniqueInput[]
    delete?: PlatformAccountWhereUniqueInput | PlatformAccountWhereUniqueInput[]
    connect?: PlatformAccountWhereUniqueInput | PlatformAccountWhereUniqueInput[]
    update?: PlatformAccountUpdateWithWhereUniqueWithoutUserInput | PlatformAccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PlatformAccountUpdateManyWithWhereWithoutUserInput | PlatformAccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PlatformAccountScalarWhereInput | PlatformAccountScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutReceiverInput | MessageUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutReceiverInput | MessageUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutReceiverInput | MessageUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ConnectionEventUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConnectionEventCreateWithoutUserInput, ConnectionEventUncheckedCreateWithoutUserInput> | ConnectionEventCreateWithoutUserInput[] | ConnectionEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConnectionEventCreateOrConnectWithoutUserInput | ConnectionEventCreateOrConnectWithoutUserInput[]
    upsert?: ConnectionEventUpsertWithWhereUniqueWithoutUserInput | ConnectionEventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConnectionEventCreateManyUserInputEnvelope
    set?: ConnectionEventWhereUniqueInput | ConnectionEventWhereUniqueInput[]
    disconnect?: ConnectionEventWhereUniqueInput | ConnectionEventWhereUniqueInput[]
    delete?: ConnectionEventWhereUniqueInput | ConnectionEventWhereUniqueInput[]
    connect?: ConnectionEventWhereUniqueInput | ConnectionEventWhereUniqueInput[]
    update?: ConnectionEventUpdateWithWhereUniqueWithoutUserInput | ConnectionEventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConnectionEventUpdateManyWithWhereWithoutUserInput | ConnectionEventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConnectionEventScalarWhereInput | ConnectionEventScalarWhereInput[]
  }

  export type NetworkStatsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<NetworkStatsCreateWithoutUserInput, NetworkStatsUncheckedCreateWithoutUserInput>
    connectOrCreate?: NetworkStatsCreateOrConnectWithoutUserInput
    upsert?: NetworkStatsUpsertWithoutUserInput
    disconnect?: NetworkStatsWhereInput | boolean
    delete?: NetworkStatsWhereInput | boolean
    connect?: NetworkStatsWhereUniqueInput
    update?: XOR<XOR<NetworkStatsUpdateToOneWithWhereWithoutUserInput, NetworkStatsUpdateWithoutUserInput>, NetworkStatsUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutPlatformAccountsInput = {
    create?: XOR<UserCreateWithoutPlatformAccountsInput, UserUncheckedCreateWithoutPlatformAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlatformAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumPlatformFieldUpdateOperationsInput = {
    set?: $Enums.Platform
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutPlatformAccountsNestedInput = {
    create?: XOR<UserCreateWithoutPlatformAccountsInput, UserUncheckedCreateWithoutPlatformAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlatformAccountsInput
    upsert?: UserUpsertWithoutPlatformAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPlatformAccountsInput, UserUpdateWithoutPlatformAccountsInput>, UserUncheckedUpdateWithoutPlatformAccountsInput>
  }

  export type ConnectionCreatetagsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutConnectionsInput = {
    create?: XOR<UserCreateWithoutConnectionsInput, UserUncheckedCreateWithoutConnectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutConnectionsInput
    connect?: UserWhereUniqueInput
  }

  export type ConnectionEventCreateNestedManyWithoutConnectionInput = {
    create?: XOR<ConnectionEventCreateWithoutConnectionInput, ConnectionEventUncheckedCreateWithoutConnectionInput> | ConnectionEventCreateWithoutConnectionInput[] | ConnectionEventUncheckedCreateWithoutConnectionInput[]
    connectOrCreate?: ConnectionEventCreateOrConnectWithoutConnectionInput | ConnectionEventCreateOrConnectWithoutConnectionInput[]
    createMany?: ConnectionEventCreateManyConnectionInputEnvelope
    connect?: ConnectionEventWhereUniqueInput | ConnectionEventWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutConnectionInput = {
    create?: XOR<MessageCreateWithoutConnectionInput, MessageUncheckedCreateWithoutConnectionInput> | MessageCreateWithoutConnectionInput[] | MessageUncheckedCreateWithoutConnectionInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConnectionInput | MessageCreateOrConnectWithoutConnectionInput[]
    createMany?: MessageCreateManyConnectionInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type ConnectionEventUncheckedCreateNestedManyWithoutConnectionInput = {
    create?: XOR<ConnectionEventCreateWithoutConnectionInput, ConnectionEventUncheckedCreateWithoutConnectionInput> | ConnectionEventCreateWithoutConnectionInput[] | ConnectionEventUncheckedCreateWithoutConnectionInput[]
    connectOrCreate?: ConnectionEventCreateOrConnectWithoutConnectionInput | ConnectionEventCreateOrConnectWithoutConnectionInput[]
    createMany?: ConnectionEventCreateManyConnectionInputEnvelope
    connect?: ConnectionEventWhereUniqueInput | ConnectionEventWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutConnectionInput = {
    create?: XOR<MessageCreateWithoutConnectionInput, MessageUncheckedCreateWithoutConnectionInput> | MessageCreateWithoutConnectionInput[] | MessageUncheckedCreateWithoutConnectionInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConnectionInput | MessageCreateOrConnectWithoutConnectionInput[]
    createMany?: MessageCreateManyConnectionInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ConnectionUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutConnectionsNestedInput = {
    create?: XOR<UserCreateWithoutConnectionsInput, UserUncheckedCreateWithoutConnectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutConnectionsInput
    upsert?: UserUpsertWithoutConnectionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutConnectionsInput, UserUpdateWithoutConnectionsInput>, UserUncheckedUpdateWithoutConnectionsInput>
  }

  export type ConnectionEventUpdateManyWithoutConnectionNestedInput = {
    create?: XOR<ConnectionEventCreateWithoutConnectionInput, ConnectionEventUncheckedCreateWithoutConnectionInput> | ConnectionEventCreateWithoutConnectionInput[] | ConnectionEventUncheckedCreateWithoutConnectionInput[]
    connectOrCreate?: ConnectionEventCreateOrConnectWithoutConnectionInput | ConnectionEventCreateOrConnectWithoutConnectionInput[]
    upsert?: ConnectionEventUpsertWithWhereUniqueWithoutConnectionInput | ConnectionEventUpsertWithWhereUniqueWithoutConnectionInput[]
    createMany?: ConnectionEventCreateManyConnectionInputEnvelope
    set?: ConnectionEventWhereUniqueInput | ConnectionEventWhereUniqueInput[]
    disconnect?: ConnectionEventWhereUniqueInput | ConnectionEventWhereUniqueInput[]
    delete?: ConnectionEventWhereUniqueInput | ConnectionEventWhereUniqueInput[]
    connect?: ConnectionEventWhereUniqueInput | ConnectionEventWhereUniqueInput[]
    update?: ConnectionEventUpdateWithWhereUniqueWithoutConnectionInput | ConnectionEventUpdateWithWhereUniqueWithoutConnectionInput[]
    updateMany?: ConnectionEventUpdateManyWithWhereWithoutConnectionInput | ConnectionEventUpdateManyWithWhereWithoutConnectionInput[]
    deleteMany?: ConnectionEventScalarWhereInput | ConnectionEventScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutConnectionNestedInput = {
    create?: XOR<MessageCreateWithoutConnectionInput, MessageUncheckedCreateWithoutConnectionInput> | MessageCreateWithoutConnectionInput[] | MessageUncheckedCreateWithoutConnectionInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConnectionInput | MessageCreateOrConnectWithoutConnectionInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutConnectionInput | MessageUpsertWithWhereUniqueWithoutConnectionInput[]
    createMany?: MessageCreateManyConnectionInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutConnectionInput | MessageUpdateWithWhereUniqueWithoutConnectionInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutConnectionInput | MessageUpdateManyWithWhereWithoutConnectionInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ConnectionEventUncheckedUpdateManyWithoutConnectionNestedInput = {
    create?: XOR<ConnectionEventCreateWithoutConnectionInput, ConnectionEventUncheckedCreateWithoutConnectionInput> | ConnectionEventCreateWithoutConnectionInput[] | ConnectionEventUncheckedCreateWithoutConnectionInput[]
    connectOrCreate?: ConnectionEventCreateOrConnectWithoutConnectionInput | ConnectionEventCreateOrConnectWithoutConnectionInput[]
    upsert?: ConnectionEventUpsertWithWhereUniqueWithoutConnectionInput | ConnectionEventUpsertWithWhereUniqueWithoutConnectionInput[]
    createMany?: ConnectionEventCreateManyConnectionInputEnvelope
    set?: ConnectionEventWhereUniqueInput | ConnectionEventWhereUniqueInput[]
    disconnect?: ConnectionEventWhereUniqueInput | ConnectionEventWhereUniqueInput[]
    delete?: ConnectionEventWhereUniqueInput | ConnectionEventWhereUniqueInput[]
    connect?: ConnectionEventWhereUniqueInput | ConnectionEventWhereUniqueInput[]
    update?: ConnectionEventUpdateWithWhereUniqueWithoutConnectionInput | ConnectionEventUpdateWithWhereUniqueWithoutConnectionInput[]
    updateMany?: ConnectionEventUpdateManyWithWhereWithoutConnectionInput | ConnectionEventUpdateManyWithWhereWithoutConnectionInput[]
    deleteMany?: ConnectionEventScalarWhereInput | ConnectionEventScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutConnectionNestedInput = {
    create?: XOR<MessageCreateWithoutConnectionInput, MessageUncheckedCreateWithoutConnectionInput> | MessageCreateWithoutConnectionInput[] | MessageUncheckedCreateWithoutConnectionInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConnectionInput | MessageCreateOrConnectWithoutConnectionInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutConnectionInput | MessageUpsertWithWhereUniqueWithoutConnectionInput[]
    createMany?: MessageCreateManyConnectionInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutConnectionInput | MessageUpdateWithWhereUniqueWithoutConnectionInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutConnectionInput | MessageUpdateManyWithWhereWithoutConnectionInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutInteractionsInput = {
    create?: XOR<UserCreateWithoutInteractionsInput, UserUncheckedCreateWithoutInteractionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInteractionsInput
    connect?: UserWhereUniqueInput
  }

  export type ConnectionCreateNestedOneWithoutEventsInput = {
    create?: XOR<ConnectionCreateWithoutEventsInput, ConnectionUncheckedCreateWithoutEventsInput>
    connectOrCreate?: ConnectionCreateOrConnectWithoutEventsInput
    connect?: ConnectionWhereUniqueInput
  }

  export type EnumEventTypeFieldUpdateOperationsInput = {
    set?: $Enums.EventType
  }

  export type UserUpdateOneRequiredWithoutInteractionsNestedInput = {
    create?: XOR<UserCreateWithoutInteractionsInput, UserUncheckedCreateWithoutInteractionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInteractionsInput
    upsert?: UserUpsertWithoutInteractionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInteractionsInput, UserUpdateWithoutInteractionsInput>, UserUncheckedUpdateWithoutInteractionsInput>
  }

  export type ConnectionUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<ConnectionCreateWithoutEventsInput, ConnectionUncheckedCreateWithoutEventsInput>
    connectOrCreate?: ConnectionCreateOrConnectWithoutEventsInput
    upsert?: ConnectionUpsertWithoutEventsInput
    connect?: ConnectionWhereUniqueInput
    update?: XOR<XOR<ConnectionUpdateToOneWithWhereWithoutEventsInput, ConnectionUpdateWithoutEventsInput>, ConnectionUncheckedUpdateWithoutEventsInput>
  }

  export type UserCreateNestedOneWithoutSentMessagesInput = {
    create?: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedMessagesInput = {
    create?: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type ConnectionCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ConnectionCreateWithoutMessagesInput, ConnectionUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ConnectionCreateOrConnectWithoutMessagesInput
    connect?: ConnectionWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSentMessagesNestedInput = {
    create?: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput
    upsert?: UserUpsertWithoutSentMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentMessagesInput, UserUpdateWithoutSentMessagesInput>, UserUncheckedUpdateWithoutSentMessagesInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedMessagesNestedInput = {
    create?: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedMessagesInput
    upsert?: UserUpsertWithoutReceivedMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedMessagesInput, UserUpdateWithoutReceivedMessagesInput>, UserUncheckedUpdateWithoutReceivedMessagesInput>
  }

  export type ConnectionUpdateOneWithoutMessagesNestedInput = {
    create?: XOR<ConnectionCreateWithoutMessagesInput, ConnectionUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ConnectionCreateOrConnectWithoutMessagesInput
    upsert?: ConnectionUpsertWithoutMessagesInput
    disconnect?: ConnectionWhereInput | boolean
    delete?: ConnectionWhereInput | boolean
    connect?: ConnectionWhereUniqueInput
    update?: XOR<XOR<ConnectionUpdateToOneWithWhereWithoutMessagesInput, ConnectionUpdateWithoutMessagesInput>, ConnectionUncheckedUpdateWithoutMessagesInput>
  }

  export type UserCreateNestedOneWithoutNetworkStatsInput = {
    create?: XOR<UserCreateWithoutNetworkStatsInput, UserUncheckedCreateWithoutNetworkStatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNetworkStatsInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutNetworkStatsNestedInput = {
    create?: XOR<UserCreateWithoutNetworkStatsInput, UserUncheckedCreateWithoutNetworkStatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNetworkStatsInput
    upsert?: UserUpsertWithoutNetworkStatsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNetworkStatsInput, UserUpdateWithoutNetworkStatsInput>, UserUncheckedUpdateWithoutNetworkStatsInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type NestedEnumPlatformFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumPlatformFilter<$PrismaModel> | $Enums.Platform
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumPlatformWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumPlatformWithAggregatesFilter<$PrismaModel> | $Enums.Platform
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlatformFilter<$PrismaModel>
    _max?: NestedEnumPlatformFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeFilter<$PrismaModel> | $Enums.EventType
  }

  export type NestedEnumEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.EventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventTypeFilter<$PrismaModel>
    _max?: NestedEnumEventTypeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type ConnectionCreateWithoutUserInput = {
    id?: string
    platformType: $Enums.Platform
    connectionId: string
    name: string
    jobTitle?: string | null
    company?: string | null
    email?: string | null
    phoneNumber?: string | null
    profileUrl?: string | null
    imageUrl?: string | null
    connectionLevel?: number | null
    location?: string | null
    bio?: string | null
    tags?: ConnectionCreatetagsInput | string[]
    notes?: string | null
    firstConnected?: Date | string | null
    lastInteraction?: Date | string | null
    strength?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: ConnectionEventCreateNestedManyWithoutConnectionInput
    messages?: MessageCreateNestedManyWithoutConnectionInput
  }

  export type ConnectionUncheckedCreateWithoutUserInput = {
    id?: string
    platformType: $Enums.Platform
    connectionId: string
    name: string
    jobTitle?: string | null
    company?: string | null
    email?: string | null
    phoneNumber?: string | null
    profileUrl?: string | null
    imageUrl?: string | null
    connectionLevel?: number | null
    location?: string | null
    bio?: string | null
    tags?: ConnectionCreatetagsInput | string[]
    notes?: string | null
    firstConnected?: Date | string | null
    lastInteraction?: Date | string | null
    strength?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: ConnectionEventUncheckedCreateNestedManyWithoutConnectionInput
    messages?: MessageUncheckedCreateNestedManyWithoutConnectionInput
  }

  export type ConnectionCreateOrConnectWithoutUserInput = {
    where: ConnectionWhereUniqueInput
    create: XOR<ConnectionCreateWithoutUserInput, ConnectionUncheckedCreateWithoutUserInput>
  }

  export type ConnectionCreateManyUserInputEnvelope = {
    data: ConnectionCreateManyUserInput | ConnectionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PlatformAccountCreateWithoutUserInput = {
    id?: string
    platformType: $Enums.Platform
    platformId: string
    accessToken?: string | null
    refreshToken?: string | null
    tokenExpiry?: Date | string | null
    lastSynced?: Date | string | null
    username?: string | null
    profileUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlatformAccountUncheckedCreateWithoutUserInput = {
    id?: string
    platformType: $Enums.Platform
    platformId: string
    accessToken?: string | null
    refreshToken?: string | null
    tokenExpiry?: Date | string | null
    lastSynced?: Date | string | null
    username?: string | null
    profileUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlatformAccountCreateOrConnectWithoutUserInput = {
    where: PlatformAccountWhereUniqueInput
    create: XOR<PlatformAccountCreateWithoutUserInput, PlatformAccountUncheckedCreateWithoutUserInput>
  }

  export type PlatformAccountCreateManyUserInputEnvelope = {
    data: PlatformAccountCreateManyUserInput | PlatformAccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutSenderInput = {
    id?: string
    platform: $Enums.Platform
    externalId?: string | null
    content: string
    timestamp: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    receiver: UserCreateNestedOneWithoutReceivedMessagesInput
    connection?: ConnectionCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutSenderInput = {
    id?: string
    receiverId: string
    connectionId?: string | null
    platform: $Enums.Platform
    externalId?: string | null
    content: string
    timestamp: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutSenderInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageCreateManySenderInputEnvelope = {
    data: MessageCreateManySenderInput | MessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutReceiverInput = {
    id?: string
    platform: $Enums.Platform
    externalId?: string | null
    content: string
    timestamp: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutSentMessagesInput
    connection?: ConnectionCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutReceiverInput = {
    id?: string
    senderId: string
    connectionId?: string | null
    platform: $Enums.Platform
    externalId?: string | null
    content: string
    timestamp: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput>
  }

  export type MessageCreateManyReceiverInputEnvelope = {
    data: MessageCreateManyReceiverInput | MessageCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type ConnectionEventCreateWithoutUserInput = {
    id?: string
    eventType: $Enums.EventType
    platform: $Enums.Platform
    timestamp: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    connection: ConnectionCreateNestedOneWithoutEventsInput
  }

  export type ConnectionEventUncheckedCreateWithoutUserInput = {
    id?: string
    connectionId: string
    eventType: $Enums.EventType
    platform: $Enums.Platform
    timestamp: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ConnectionEventCreateOrConnectWithoutUserInput = {
    where: ConnectionEventWhereUniqueInput
    create: XOR<ConnectionEventCreateWithoutUserInput, ConnectionEventUncheckedCreateWithoutUserInput>
  }

  export type ConnectionEventCreateManyUserInputEnvelope = {
    data: ConnectionEventCreateManyUserInput | ConnectionEventCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NetworkStatsCreateWithoutUserInput = {
    id?: string
    totalConnections?: number
    averageStrength?: number | null
    lastCalculated?: Date | string
    connectionsPerPlatform?: NullableJsonNullValueInput | InputJsonValue
    topTags?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NetworkStatsUncheckedCreateWithoutUserInput = {
    id?: string
    totalConnections?: number
    averageStrength?: number | null
    lastCalculated?: Date | string
    connectionsPerPlatform?: NullableJsonNullValueInput | InputJsonValue
    topTags?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NetworkStatsCreateOrConnectWithoutUserInput = {
    where: NetworkStatsWhereUniqueInput
    create: XOR<NetworkStatsCreateWithoutUserInput, NetworkStatsUncheckedCreateWithoutUserInput>
  }

  export type ConnectionUpsertWithWhereUniqueWithoutUserInput = {
    where: ConnectionWhereUniqueInput
    update: XOR<ConnectionUpdateWithoutUserInput, ConnectionUncheckedUpdateWithoutUserInput>
    create: XOR<ConnectionCreateWithoutUserInput, ConnectionUncheckedCreateWithoutUserInput>
  }

  export type ConnectionUpdateWithWhereUniqueWithoutUserInput = {
    where: ConnectionWhereUniqueInput
    data: XOR<ConnectionUpdateWithoutUserInput, ConnectionUncheckedUpdateWithoutUserInput>
  }

  export type ConnectionUpdateManyWithWhereWithoutUserInput = {
    where: ConnectionScalarWhereInput
    data: XOR<ConnectionUpdateManyMutationInput, ConnectionUncheckedUpdateManyWithoutUserInput>
  }

  export type ConnectionScalarWhereInput = {
    AND?: ConnectionScalarWhereInput | ConnectionScalarWhereInput[]
    OR?: ConnectionScalarWhereInput[]
    NOT?: ConnectionScalarWhereInput | ConnectionScalarWhereInput[]
    id?: StringFilter<"Connection"> | string
    userId?: StringFilter<"Connection"> | string
    platformType?: EnumPlatformFilter<"Connection"> | $Enums.Platform
    connectionId?: StringFilter<"Connection"> | string
    name?: StringFilter<"Connection"> | string
    jobTitle?: StringNullableFilter<"Connection"> | string | null
    company?: StringNullableFilter<"Connection"> | string | null
    email?: StringNullableFilter<"Connection"> | string | null
    phoneNumber?: StringNullableFilter<"Connection"> | string | null
    profileUrl?: StringNullableFilter<"Connection"> | string | null
    imageUrl?: StringNullableFilter<"Connection"> | string | null
    connectionLevel?: IntNullableFilter<"Connection"> | number | null
    location?: StringNullableFilter<"Connection"> | string | null
    bio?: StringNullableFilter<"Connection"> | string | null
    tags?: StringNullableListFilter<"Connection">
    notes?: StringNullableFilter<"Connection"> | string | null
    firstConnected?: DateTimeNullableFilter<"Connection"> | Date | string | null
    lastInteraction?: DateTimeNullableFilter<"Connection"> | Date | string | null
    strength?: FloatNullableFilter<"Connection"> | number | null
    createdAt?: DateTimeFilter<"Connection"> | Date | string
    updatedAt?: DateTimeFilter<"Connection"> | Date | string
  }

  export type PlatformAccountUpsertWithWhereUniqueWithoutUserInput = {
    where: PlatformAccountWhereUniqueInput
    update: XOR<PlatformAccountUpdateWithoutUserInput, PlatformAccountUncheckedUpdateWithoutUserInput>
    create: XOR<PlatformAccountCreateWithoutUserInput, PlatformAccountUncheckedCreateWithoutUserInput>
  }

  export type PlatformAccountUpdateWithWhereUniqueWithoutUserInput = {
    where: PlatformAccountWhereUniqueInput
    data: XOR<PlatformAccountUpdateWithoutUserInput, PlatformAccountUncheckedUpdateWithoutUserInput>
  }

  export type PlatformAccountUpdateManyWithWhereWithoutUserInput = {
    where: PlatformAccountScalarWhereInput
    data: XOR<PlatformAccountUpdateManyMutationInput, PlatformAccountUncheckedUpdateManyWithoutUserInput>
  }

  export type PlatformAccountScalarWhereInput = {
    AND?: PlatformAccountScalarWhereInput | PlatformAccountScalarWhereInput[]
    OR?: PlatformAccountScalarWhereInput[]
    NOT?: PlatformAccountScalarWhereInput | PlatformAccountScalarWhereInput[]
    id?: StringFilter<"PlatformAccount"> | string
    userId?: StringFilter<"PlatformAccount"> | string
    platformType?: EnumPlatformFilter<"PlatformAccount"> | $Enums.Platform
    platformId?: StringFilter<"PlatformAccount"> | string
    accessToken?: StringNullableFilter<"PlatformAccount"> | string | null
    refreshToken?: StringNullableFilter<"PlatformAccount"> | string | null
    tokenExpiry?: DateTimeNullableFilter<"PlatformAccount"> | Date | string | null
    lastSynced?: DateTimeNullableFilter<"PlatformAccount"> | Date | string | null
    username?: StringNullableFilter<"PlatformAccount"> | string | null
    profileUrl?: StringNullableFilter<"PlatformAccount"> | string | null
    createdAt?: DateTimeFilter<"PlatformAccount"> | Date | string
    updatedAt?: DateTimeFilter<"PlatformAccount"> | Date | string
  }

  export type MessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
  }

  export type MessageUpdateManyWithWhereWithoutSenderInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: StringFilter<"Message"> | string
    senderId?: StringFilter<"Message"> | string
    receiverId?: StringFilter<"Message"> | string
    connectionId?: StringNullableFilter<"Message"> | string | null
    platform?: EnumPlatformFilter<"Message"> | $Enums.Platform
    externalId?: StringNullableFilter<"Message"> | string | null
    content?: StringFilter<"Message"> | string
    timestamp?: DateTimeFilter<"Message"> | Date | string
    metadata?: JsonNullableFilter<"Message">
    createdAt?: DateTimeFilter<"Message"> | Date | string
  }

  export type MessageUpsertWithWhereUniqueWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutReceiverInput, MessageUncheckedUpdateWithoutReceiverInput>
    create: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutReceiverInput, MessageUncheckedUpdateWithoutReceiverInput>
  }

  export type MessageUpdateManyWithWhereWithoutReceiverInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutReceiverInput>
  }

  export type ConnectionEventUpsertWithWhereUniqueWithoutUserInput = {
    where: ConnectionEventWhereUniqueInput
    update: XOR<ConnectionEventUpdateWithoutUserInput, ConnectionEventUncheckedUpdateWithoutUserInput>
    create: XOR<ConnectionEventCreateWithoutUserInput, ConnectionEventUncheckedCreateWithoutUserInput>
  }

  export type ConnectionEventUpdateWithWhereUniqueWithoutUserInput = {
    where: ConnectionEventWhereUniqueInput
    data: XOR<ConnectionEventUpdateWithoutUserInput, ConnectionEventUncheckedUpdateWithoutUserInput>
  }

  export type ConnectionEventUpdateManyWithWhereWithoutUserInput = {
    where: ConnectionEventScalarWhereInput
    data: XOR<ConnectionEventUpdateManyMutationInput, ConnectionEventUncheckedUpdateManyWithoutUserInput>
  }

  export type ConnectionEventScalarWhereInput = {
    AND?: ConnectionEventScalarWhereInput | ConnectionEventScalarWhereInput[]
    OR?: ConnectionEventScalarWhereInput[]
    NOT?: ConnectionEventScalarWhereInput | ConnectionEventScalarWhereInput[]
    id?: StringFilter<"ConnectionEvent"> | string
    userId?: StringFilter<"ConnectionEvent"> | string
    connectionId?: StringFilter<"ConnectionEvent"> | string
    eventType?: EnumEventTypeFilter<"ConnectionEvent"> | $Enums.EventType
    platform?: EnumPlatformFilter<"ConnectionEvent"> | $Enums.Platform
    timestamp?: DateTimeFilter<"ConnectionEvent"> | Date | string
    metadata?: JsonNullableFilter<"ConnectionEvent">
    createdAt?: DateTimeFilter<"ConnectionEvent"> | Date | string
  }

  export type NetworkStatsUpsertWithoutUserInput = {
    update: XOR<NetworkStatsUpdateWithoutUserInput, NetworkStatsUncheckedUpdateWithoutUserInput>
    create: XOR<NetworkStatsCreateWithoutUserInput, NetworkStatsUncheckedCreateWithoutUserInput>
    where?: NetworkStatsWhereInput
  }

  export type NetworkStatsUpdateToOneWithWhereWithoutUserInput = {
    where?: NetworkStatsWhereInput
    data: XOR<NetworkStatsUpdateWithoutUserInput, NetworkStatsUncheckedUpdateWithoutUserInput>
  }

  export type NetworkStatsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalConnections?: IntFieldUpdateOperationsInput | number
    averageStrength?: NullableFloatFieldUpdateOperationsInput | number | null
    lastCalculated?: DateTimeFieldUpdateOperationsInput | Date | string
    connectionsPerPlatform?: NullableJsonNullValueInput | InputJsonValue
    topTags?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NetworkStatsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalConnections?: IntFieldUpdateOperationsInput | number
    averageStrength?: NullableFloatFieldUpdateOperationsInput | number | null
    lastCalculated?: DateTimeFieldUpdateOperationsInput | Date | string
    connectionsPerPlatform?: NullableJsonNullValueInput | InputJsonValue
    topTags?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutPlatformAccountsInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    connections?: ConnectionCreateNestedManyWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    interactions?: ConnectionEventCreateNestedManyWithoutUserInput
    networkStats?: NetworkStatsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPlatformAccountsInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    connections?: ConnectionUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    interactions?: ConnectionEventUncheckedCreateNestedManyWithoutUserInput
    networkStats?: NetworkStatsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPlatformAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPlatformAccountsInput, UserUncheckedCreateWithoutPlatformAccountsInput>
  }

  export type UserUpsertWithoutPlatformAccountsInput = {
    update: XOR<UserUpdateWithoutPlatformAccountsInput, UserUncheckedUpdateWithoutPlatformAccountsInput>
    create: XOR<UserCreateWithoutPlatformAccountsInput, UserUncheckedCreateWithoutPlatformAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPlatformAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPlatformAccountsInput, UserUncheckedUpdateWithoutPlatformAccountsInput>
  }

  export type UserUpdateWithoutPlatformAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    connections?: ConnectionUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    interactions?: ConnectionEventUpdateManyWithoutUserNestedInput
    networkStats?: NetworkStatsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPlatformAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    connections?: ConnectionUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    interactions?: ConnectionEventUncheckedUpdateManyWithoutUserNestedInput
    networkStats?: NetworkStatsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutConnectionsInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    platformAccounts?: PlatformAccountCreateNestedManyWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    interactions?: ConnectionEventCreateNestedManyWithoutUserInput
    networkStats?: NetworkStatsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutConnectionsInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    platformAccounts?: PlatformAccountUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    interactions?: ConnectionEventUncheckedCreateNestedManyWithoutUserInput
    networkStats?: NetworkStatsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutConnectionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutConnectionsInput, UserUncheckedCreateWithoutConnectionsInput>
  }

  export type ConnectionEventCreateWithoutConnectionInput = {
    id?: string
    eventType: $Enums.EventType
    platform: $Enums.Platform
    timestamp: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutInteractionsInput
  }

  export type ConnectionEventUncheckedCreateWithoutConnectionInput = {
    id?: string
    userId: string
    eventType: $Enums.EventType
    platform: $Enums.Platform
    timestamp: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ConnectionEventCreateOrConnectWithoutConnectionInput = {
    where: ConnectionEventWhereUniqueInput
    create: XOR<ConnectionEventCreateWithoutConnectionInput, ConnectionEventUncheckedCreateWithoutConnectionInput>
  }

  export type ConnectionEventCreateManyConnectionInputEnvelope = {
    data: ConnectionEventCreateManyConnectionInput | ConnectionEventCreateManyConnectionInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutConnectionInput = {
    id?: string
    platform: $Enums.Platform
    externalId?: string | null
    content: string
    timestamp: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutSentMessagesInput
    receiver: UserCreateNestedOneWithoutReceivedMessagesInput
  }

  export type MessageUncheckedCreateWithoutConnectionInput = {
    id?: string
    senderId: string
    receiverId: string
    platform: $Enums.Platform
    externalId?: string | null
    content: string
    timestamp: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutConnectionInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutConnectionInput, MessageUncheckedCreateWithoutConnectionInput>
  }

  export type MessageCreateManyConnectionInputEnvelope = {
    data: MessageCreateManyConnectionInput | MessageCreateManyConnectionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutConnectionsInput = {
    update: XOR<UserUpdateWithoutConnectionsInput, UserUncheckedUpdateWithoutConnectionsInput>
    create: XOR<UserCreateWithoutConnectionsInput, UserUncheckedCreateWithoutConnectionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutConnectionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutConnectionsInput, UserUncheckedUpdateWithoutConnectionsInput>
  }

  export type UserUpdateWithoutConnectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    platformAccounts?: PlatformAccountUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    interactions?: ConnectionEventUpdateManyWithoutUserNestedInput
    networkStats?: NetworkStatsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutConnectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    platformAccounts?: PlatformAccountUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    interactions?: ConnectionEventUncheckedUpdateManyWithoutUserNestedInput
    networkStats?: NetworkStatsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ConnectionEventUpsertWithWhereUniqueWithoutConnectionInput = {
    where: ConnectionEventWhereUniqueInput
    update: XOR<ConnectionEventUpdateWithoutConnectionInput, ConnectionEventUncheckedUpdateWithoutConnectionInput>
    create: XOR<ConnectionEventCreateWithoutConnectionInput, ConnectionEventUncheckedCreateWithoutConnectionInput>
  }

  export type ConnectionEventUpdateWithWhereUniqueWithoutConnectionInput = {
    where: ConnectionEventWhereUniqueInput
    data: XOR<ConnectionEventUpdateWithoutConnectionInput, ConnectionEventUncheckedUpdateWithoutConnectionInput>
  }

  export type ConnectionEventUpdateManyWithWhereWithoutConnectionInput = {
    where: ConnectionEventScalarWhereInput
    data: XOR<ConnectionEventUpdateManyMutationInput, ConnectionEventUncheckedUpdateManyWithoutConnectionInput>
  }

  export type MessageUpsertWithWhereUniqueWithoutConnectionInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutConnectionInput, MessageUncheckedUpdateWithoutConnectionInput>
    create: XOR<MessageCreateWithoutConnectionInput, MessageUncheckedCreateWithoutConnectionInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutConnectionInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutConnectionInput, MessageUncheckedUpdateWithoutConnectionInput>
  }

  export type MessageUpdateManyWithWhereWithoutConnectionInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutConnectionInput>
  }

  export type UserCreateWithoutInteractionsInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    connections?: ConnectionCreateNestedManyWithoutUserInput
    platformAccounts?: PlatformAccountCreateNestedManyWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    networkStats?: NetworkStatsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInteractionsInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    connections?: ConnectionUncheckedCreateNestedManyWithoutUserInput
    platformAccounts?: PlatformAccountUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    networkStats?: NetworkStatsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInteractionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInteractionsInput, UserUncheckedCreateWithoutInteractionsInput>
  }

  export type ConnectionCreateWithoutEventsInput = {
    id?: string
    platformType: $Enums.Platform
    connectionId: string
    name: string
    jobTitle?: string | null
    company?: string | null
    email?: string | null
    phoneNumber?: string | null
    profileUrl?: string | null
    imageUrl?: string | null
    connectionLevel?: number | null
    location?: string | null
    bio?: string | null
    tags?: ConnectionCreatetagsInput | string[]
    notes?: string | null
    firstConnected?: Date | string | null
    lastInteraction?: Date | string | null
    strength?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutConnectionsInput
    messages?: MessageCreateNestedManyWithoutConnectionInput
  }

  export type ConnectionUncheckedCreateWithoutEventsInput = {
    id?: string
    userId: string
    platformType: $Enums.Platform
    connectionId: string
    name: string
    jobTitle?: string | null
    company?: string | null
    email?: string | null
    phoneNumber?: string | null
    profileUrl?: string | null
    imageUrl?: string | null
    connectionLevel?: number | null
    location?: string | null
    bio?: string | null
    tags?: ConnectionCreatetagsInput | string[]
    notes?: string | null
    firstConnected?: Date | string | null
    lastInteraction?: Date | string | null
    strength?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutConnectionInput
  }

  export type ConnectionCreateOrConnectWithoutEventsInput = {
    where: ConnectionWhereUniqueInput
    create: XOR<ConnectionCreateWithoutEventsInput, ConnectionUncheckedCreateWithoutEventsInput>
  }

  export type UserUpsertWithoutInteractionsInput = {
    update: XOR<UserUpdateWithoutInteractionsInput, UserUncheckedUpdateWithoutInteractionsInput>
    create: XOR<UserCreateWithoutInteractionsInput, UserUncheckedCreateWithoutInteractionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInteractionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInteractionsInput, UserUncheckedUpdateWithoutInteractionsInput>
  }

  export type UserUpdateWithoutInteractionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    connections?: ConnectionUpdateManyWithoutUserNestedInput
    platformAccounts?: PlatformAccountUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    networkStats?: NetworkStatsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInteractionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    connections?: ConnectionUncheckedUpdateManyWithoutUserNestedInput
    platformAccounts?: PlatformAccountUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    networkStats?: NetworkStatsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ConnectionUpsertWithoutEventsInput = {
    update: XOR<ConnectionUpdateWithoutEventsInput, ConnectionUncheckedUpdateWithoutEventsInput>
    create: XOR<ConnectionCreateWithoutEventsInput, ConnectionUncheckedCreateWithoutEventsInput>
    where?: ConnectionWhereInput
  }

  export type ConnectionUpdateToOneWithWhereWithoutEventsInput = {
    where?: ConnectionWhereInput
    data: XOR<ConnectionUpdateWithoutEventsInput, ConnectionUncheckedUpdateWithoutEventsInput>
  }

  export type ConnectionUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    platformType?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    connectionId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    connectionLevel?: NullableIntFieldUpdateOperationsInput | number | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ConnectionUpdatetagsInput | string[]
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    firstConnected?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastInteraction?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    strength?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutConnectionsNestedInput
    messages?: MessageUpdateManyWithoutConnectionNestedInput
  }

  export type ConnectionUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    platformType?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    connectionId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    connectionLevel?: NullableIntFieldUpdateOperationsInput | number | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ConnectionUpdatetagsInput | string[]
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    firstConnected?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastInteraction?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    strength?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutConnectionNestedInput
  }

  export type UserCreateWithoutSentMessagesInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    connections?: ConnectionCreateNestedManyWithoutUserInput
    platformAccounts?: PlatformAccountCreateNestedManyWithoutUserInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    interactions?: ConnectionEventCreateNestedManyWithoutUserInput
    networkStats?: NetworkStatsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSentMessagesInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    connections?: ConnectionUncheckedCreateNestedManyWithoutUserInput
    platformAccounts?: PlatformAccountUncheckedCreateNestedManyWithoutUserInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    interactions?: ConnectionEventUncheckedCreateNestedManyWithoutUserInput
    networkStats?: NetworkStatsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSentMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
  }

  export type UserCreateWithoutReceivedMessagesInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    connections?: ConnectionCreateNestedManyWithoutUserInput
    platformAccounts?: PlatformAccountCreateNestedManyWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    interactions?: ConnectionEventCreateNestedManyWithoutUserInput
    networkStats?: NetworkStatsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReceivedMessagesInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    connections?: ConnectionUncheckedCreateNestedManyWithoutUserInput
    platformAccounts?: PlatformAccountUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    interactions?: ConnectionEventUncheckedCreateNestedManyWithoutUserInput
    networkStats?: NetworkStatsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReceivedMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
  }

  export type ConnectionCreateWithoutMessagesInput = {
    id?: string
    platformType: $Enums.Platform
    connectionId: string
    name: string
    jobTitle?: string | null
    company?: string | null
    email?: string | null
    phoneNumber?: string | null
    profileUrl?: string | null
    imageUrl?: string | null
    connectionLevel?: number | null
    location?: string | null
    bio?: string | null
    tags?: ConnectionCreatetagsInput | string[]
    notes?: string | null
    firstConnected?: Date | string | null
    lastInteraction?: Date | string | null
    strength?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutConnectionsInput
    events?: ConnectionEventCreateNestedManyWithoutConnectionInput
  }

  export type ConnectionUncheckedCreateWithoutMessagesInput = {
    id?: string
    userId: string
    platformType: $Enums.Platform
    connectionId: string
    name: string
    jobTitle?: string | null
    company?: string | null
    email?: string | null
    phoneNumber?: string | null
    profileUrl?: string | null
    imageUrl?: string | null
    connectionLevel?: number | null
    location?: string | null
    bio?: string | null
    tags?: ConnectionCreatetagsInput | string[]
    notes?: string | null
    firstConnected?: Date | string | null
    lastInteraction?: Date | string | null
    strength?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: ConnectionEventUncheckedCreateNestedManyWithoutConnectionInput
  }

  export type ConnectionCreateOrConnectWithoutMessagesInput = {
    where: ConnectionWhereUniqueInput
    create: XOR<ConnectionCreateWithoutMessagesInput, ConnectionUncheckedCreateWithoutMessagesInput>
  }

  export type UserUpsertWithoutSentMessagesInput = {
    update: XOR<UserUpdateWithoutSentMessagesInput, UserUncheckedUpdateWithoutSentMessagesInput>
    create: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentMessagesInput, UserUncheckedUpdateWithoutSentMessagesInput>
  }

  export type UserUpdateWithoutSentMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    connections?: ConnectionUpdateManyWithoutUserNestedInput
    platformAccounts?: PlatformAccountUpdateManyWithoutUserNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    interactions?: ConnectionEventUpdateManyWithoutUserNestedInput
    networkStats?: NetworkStatsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSentMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    connections?: ConnectionUncheckedUpdateManyWithoutUserNestedInput
    platformAccounts?: PlatformAccountUncheckedUpdateManyWithoutUserNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    interactions?: ConnectionEventUncheckedUpdateManyWithoutUserNestedInput
    networkStats?: NetworkStatsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserUpsertWithoutReceivedMessagesInput = {
    update: XOR<UserUpdateWithoutReceivedMessagesInput, UserUncheckedUpdateWithoutReceivedMessagesInput>
    create: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedMessagesInput, UserUncheckedUpdateWithoutReceivedMessagesInput>
  }

  export type UserUpdateWithoutReceivedMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    connections?: ConnectionUpdateManyWithoutUserNestedInput
    platformAccounts?: PlatformAccountUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    interactions?: ConnectionEventUpdateManyWithoutUserNestedInput
    networkStats?: NetworkStatsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    connections?: ConnectionUncheckedUpdateManyWithoutUserNestedInput
    platformAccounts?: PlatformAccountUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    interactions?: ConnectionEventUncheckedUpdateManyWithoutUserNestedInput
    networkStats?: NetworkStatsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ConnectionUpsertWithoutMessagesInput = {
    update: XOR<ConnectionUpdateWithoutMessagesInput, ConnectionUncheckedUpdateWithoutMessagesInput>
    create: XOR<ConnectionCreateWithoutMessagesInput, ConnectionUncheckedCreateWithoutMessagesInput>
    where?: ConnectionWhereInput
  }

  export type ConnectionUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ConnectionWhereInput
    data: XOR<ConnectionUpdateWithoutMessagesInput, ConnectionUncheckedUpdateWithoutMessagesInput>
  }

  export type ConnectionUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    platformType?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    connectionId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    connectionLevel?: NullableIntFieldUpdateOperationsInput | number | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ConnectionUpdatetagsInput | string[]
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    firstConnected?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastInteraction?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    strength?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutConnectionsNestedInput
    events?: ConnectionEventUpdateManyWithoutConnectionNestedInput
  }

  export type ConnectionUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    platformType?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    connectionId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    connectionLevel?: NullableIntFieldUpdateOperationsInput | number | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ConnectionUpdatetagsInput | string[]
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    firstConnected?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastInteraction?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    strength?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: ConnectionEventUncheckedUpdateManyWithoutConnectionNestedInput
  }

  export type UserCreateWithoutNetworkStatsInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    connections?: ConnectionCreateNestedManyWithoutUserInput
    platformAccounts?: PlatformAccountCreateNestedManyWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    interactions?: ConnectionEventCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNetworkStatsInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    connections?: ConnectionUncheckedCreateNestedManyWithoutUserInput
    platformAccounts?: PlatformAccountUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    interactions?: ConnectionEventUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNetworkStatsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNetworkStatsInput, UserUncheckedCreateWithoutNetworkStatsInput>
  }

  export type UserUpsertWithoutNetworkStatsInput = {
    update: XOR<UserUpdateWithoutNetworkStatsInput, UserUncheckedUpdateWithoutNetworkStatsInput>
    create: XOR<UserCreateWithoutNetworkStatsInput, UserUncheckedCreateWithoutNetworkStatsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNetworkStatsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNetworkStatsInput, UserUncheckedUpdateWithoutNetworkStatsInput>
  }

  export type UserUpdateWithoutNetworkStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    connections?: ConnectionUpdateManyWithoutUserNestedInput
    platformAccounts?: PlatformAccountUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    interactions?: ConnectionEventUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNetworkStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    connections?: ConnectionUncheckedUpdateManyWithoutUserNestedInput
    platformAccounts?: PlatformAccountUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    interactions?: ConnectionEventUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ConnectionCreateManyUserInput = {
    id?: string
    platformType: $Enums.Platform
    connectionId: string
    name: string
    jobTitle?: string | null
    company?: string | null
    email?: string | null
    phoneNumber?: string | null
    profileUrl?: string | null
    imageUrl?: string | null
    connectionLevel?: number | null
    location?: string | null
    bio?: string | null
    tags?: ConnectionCreatetagsInput | string[]
    notes?: string | null
    firstConnected?: Date | string | null
    lastInteraction?: Date | string | null
    strength?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlatformAccountCreateManyUserInput = {
    id?: string
    platformType: $Enums.Platform
    platformId: string
    accessToken?: string | null
    refreshToken?: string | null
    tokenExpiry?: Date | string | null
    lastSynced?: Date | string | null
    username?: string | null
    profileUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageCreateManySenderInput = {
    id?: string
    receiverId: string
    connectionId?: string | null
    platform: $Enums.Platform
    externalId?: string | null
    content: string
    timestamp: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type MessageCreateManyReceiverInput = {
    id?: string
    senderId: string
    connectionId?: string | null
    platform: $Enums.Platform
    externalId?: string | null
    content: string
    timestamp: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ConnectionEventCreateManyUserInput = {
    id?: string
    connectionId: string
    eventType: $Enums.EventType
    platform: $Enums.Platform
    timestamp: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ConnectionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    platformType?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    connectionId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    connectionLevel?: NullableIntFieldUpdateOperationsInput | number | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ConnectionUpdatetagsInput | string[]
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    firstConnected?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastInteraction?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    strength?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: ConnectionEventUpdateManyWithoutConnectionNestedInput
    messages?: MessageUpdateManyWithoutConnectionNestedInput
  }

  export type ConnectionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    platformType?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    connectionId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    connectionLevel?: NullableIntFieldUpdateOperationsInput | number | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ConnectionUpdatetagsInput | string[]
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    firstConnected?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastInteraction?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    strength?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: ConnectionEventUncheckedUpdateManyWithoutConnectionNestedInput
    messages?: MessageUncheckedUpdateManyWithoutConnectionNestedInput
  }

  export type ConnectionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    platformType?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    connectionId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    connectionLevel?: NullableIntFieldUpdateOperationsInput | number | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ConnectionUpdatetagsInput | string[]
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    firstConnected?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastInteraction?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    strength?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlatformAccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    platformType?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    platformId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSynced?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlatformAccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    platformType?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    platformId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSynced?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlatformAccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    platformType?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    platformId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSynced?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
    connection?: ConnectionUpdateOneWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    connectionId?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    connectionId?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
    connection?: ConnectionUpdateOneWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    connectionId?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    connectionId?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectionEventUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    connection?: ConnectionUpdateOneRequiredWithoutEventsNestedInput
  }

  export type ConnectionEventUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    connectionId?: StringFieldUpdateOperationsInput | string
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectionEventUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    connectionId?: StringFieldUpdateOperationsInput | string
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectionEventCreateManyConnectionInput = {
    id?: string
    userId: string
    eventType: $Enums.EventType
    platform: $Enums.Platform
    timestamp: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type MessageCreateManyConnectionInput = {
    id?: string
    senderId: string
    receiverId: string
    platform: $Enums.Platform
    externalId?: string | null
    content: string
    timestamp: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ConnectionEventUpdateWithoutConnectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutInteractionsNestedInput
  }

  export type ConnectionEventUncheckedUpdateWithoutConnectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectionEventUncheckedUpdateManyWithoutConnectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutConnectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutConnectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutConnectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
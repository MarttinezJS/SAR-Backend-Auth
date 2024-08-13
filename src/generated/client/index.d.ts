
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
 * Model Usuarios
 * 
 */
export type Usuarios = $Result.DefaultSelection<Prisma.$UsuariosPayload>
/**
 * Model Noticias
 * 
 */
export type Noticias = $Result.DefaultSelection<Prisma.$NoticiasPayload>
/**
 * Model Devocionales
 * 
 */
export type Devocionales = $Result.DefaultSelection<Prisma.$DevocionalesPayload>
/**
 * Model Eventos
 * 
 */
export type Eventos = $Result.DefaultSelection<Prisma.$EventosPayload>
/**
 * Model Usuario_Eventos
 * 
 */
export type Usuario_Eventos = $Result.DefaultSelection<Prisma.$Usuario_EventosPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Rol: {
  USUARIO: 'USUARIO',
  ADMIN: 'ADMIN'
};

export type Rol = (typeof Rol)[keyof typeof Rol]


export const Evento_Estado: {
  REALIZADO: 'REALIZADO',
  PROGRAMADO: 'PROGRAMADO',
  EN_PROCESO: 'EN_PROCESO',
  CANCELADO: 'CANCELADO',
  REPROGRAMADO: 'REPROGRAMADO'
};

export type Evento_Estado = (typeof Evento_Estado)[keyof typeof Evento_Estado]

}

export type Rol = $Enums.Rol

export const Rol: typeof $Enums.Rol

export type Evento_Estado = $Enums.Evento_Estado

export const Evento_Estado: typeof $Enums.Evento_Estado

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuarios.findMany()
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
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuarios.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.usuarios`: Exposes CRUD operations for the **Usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuarios.findMany()
    * ```
    */
  get usuarios(): Prisma.UsuariosDelegate<ExtArgs>;

  /**
   * `prisma.noticias`: Exposes CRUD operations for the **Noticias** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Noticias
    * const noticias = await prisma.noticias.findMany()
    * ```
    */
  get noticias(): Prisma.NoticiasDelegate<ExtArgs>;

  /**
   * `prisma.devocionales`: Exposes CRUD operations for the **Devocionales** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Devocionales
    * const devocionales = await prisma.devocionales.findMany()
    * ```
    */
  get devocionales(): Prisma.DevocionalesDelegate<ExtArgs>;

  /**
   * `prisma.eventos`: Exposes CRUD operations for the **Eventos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Eventos
    * const eventos = await prisma.eventos.findMany()
    * ```
    */
  get eventos(): Prisma.EventosDelegate<ExtArgs>;

  /**
   * `prisma.usuario_Eventos`: Exposes CRUD operations for the **Usuario_Eventos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuario_Eventos
    * const usuario_Eventos = await prisma.usuario_Eventos.findMany()
    * ```
    */
  get usuario_Eventos(): Prisma.Usuario_EventosDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.18.0
   * Query Engine version: 4c784e32044a8a016d99474bd02a3b6123742169
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Usuarios: 'Usuarios',
    Noticias: 'Noticias',
    Devocionales: 'Devocionales',
    Eventos: 'Eventos',
    Usuario_Eventos: 'Usuario_Eventos'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "usuarios" | "noticias" | "devocionales" | "eventos" | "usuario_Eventos"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuarios: {
        payload: Prisma.$UsuariosPayload<ExtArgs>
        fields: Prisma.UsuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          findFirst: {
            args: Prisma.UsuariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          findMany: {
            args: Prisma.UsuariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>[]
          }
          create: {
            args: Prisma.UsuariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          createMany: {
            args: Prisma.UsuariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuariosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>[]
          }
          delete: {
            args: Prisma.UsuariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          update: {
            args: Prisma.UsuariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          deleteMany: {
            args: Prisma.UsuariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          aggregate: {
            args: Prisma.UsuariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarios>
          }
          groupBy: {
            args: Prisma.UsuariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuariosCountArgs<ExtArgs>
            result: $Utils.Optional<UsuariosCountAggregateOutputType> | number
          }
        }
      }
      Noticias: {
        payload: Prisma.$NoticiasPayload<ExtArgs>
        fields: Prisma.NoticiasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NoticiasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NoticiasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiasPayload>
          }
          findFirst: {
            args: Prisma.NoticiasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NoticiasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiasPayload>
          }
          findMany: {
            args: Prisma.NoticiasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiasPayload>[]
          }
          create: {
            args: Prisma.NoticiasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiasPayload>
          }
          createMany: {
            args: Prisma.NoticiasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NoticiasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiasPayload>[]
          }
          delete: {
            args: Prisma.NoticiasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiasPayload>
          }
          update: {
            args: Prisma.NoticiasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiasPayload>
          }
          deleteMany: {
            args: Prisma.NoticiasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NoticiasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NoticiasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiasPayload>
          }
          aggregate: {
            args: Prisma.NoticiasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNoticias>
          }
          groupBy: {
            args: Prisma.NoticiasGroupByArgs<ExtArgs>
            result: $Utils.Optional<NoticiasGroupByOutputType>[]
          }
          count: {
            args: Prisma.NoticiasCountArgs<ExtArgs>
            result: $Utils.Optional<NoticiasCountAggregateOutputType> | number
          }
        }
      }
      Devocionales: {
        payload: Prisma.$DevocionalesPayload<ExtArgs>
        fields: Prisma.DevocionalesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DevocionalesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevocionalesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DevocionalesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevocionalesPayload>
          }
          findFirst: {
            args: Prisma.DevocionalesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevocionalesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DevocionalesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevocionalesPayload>
          }
          findMany: {
            args: Prisma.DevocionalesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevocionalesPayload>[]
          }
          create: {
            args: Prisma.DevocionalesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevocionalesPayload>
          }
          createMany: {
            args: Prisma.DevocionalesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DevocionalesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevocionalesPayload>[]
          }
          delete: {
            args: Prisma.DevocionalesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevocionalesPayload>
          }
          update: {
            args: Prisma.DevocionalesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevocionalesPayload>
          }
          deleteMany: {
            args: Prisma.DevocionalesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DevocionalesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DevocionalesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevocionalesPayload>
          }
          aggregate: {
            args: Prisma.DevocionalesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDevocionales>
          }
          groupBy: {
            args: Prisma.DevocionalesGroupByArgs<ExtArgs>
            result: $Utils.Optional<DevocionalesGroupByOutputType>[]
          }
          count: {
            args: Prisma.DevocionalesCountArgs<ExtArgs>
            result: $Utils.Optional<DevocionalesCountAggregateOutputType> | number
          }
        }
      }
      Eventos: {
        payload: Prisma.$EventosPayload<ExtArgs>
        fields: Prisma.EventosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventosPayload>
          }
          findFirst: {
            args: Prisma.EventosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventosPayload>
          }
          findMany: {
            args: Prisma.EventosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventosPayload>[]
          }
          create: {
            args: Prisma.EventosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventosPayload>
          }
          createMany: {
            args: Prisma.EventosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventosPayload>[]
          }
          delete: {
            args: Prisma.EventosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventosPayload>
          }
          update: {
            args: Prisma.EventosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventosPayload>
          }
          deleteMany: {
            args: Prisma.EventosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventosPayload>
          }
          aggregate: {
            args: Prisma.EventosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventos>
          }
          groupBy: {
            args: Prisma.EventosGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventosGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventosCountArgs<ExtArgs>
            result: $Utils.Optional<EventosCountAggregateOutputType> | number
          }
        }
      }
      Usuario_Eventos: {
        payload: Prisma.$Usuario_EventosPayload<ExtArgs>
        fields: Prisma.Usuario_EventosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Usuario_EventosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Usuario_EventosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Usuario_EventosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Usuario_EventosPayload>
          }
          findFirst: {
            args: Prisma.Usuario_EventosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Usuario_EventosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Usuario_EventosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Usuario_EventosPayload>
          }
          findMany: {
            args: Prisma.Usuario_EventosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Usuario_EventosPayload>[]
          }
          create: {
            args: Prisma.Usuario_EventosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Usuario_EventosPayload>
          }
          createMany: {
            args: Prisma.Usuario_EventosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Usuario_EventosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Usuario_EventosPayload>[]
          }
          delete: {
            args: Prisma.Usuario_EventosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Usuario_EventosPayload>
          }
          update: {
            args: Prisma.Usuario_EventosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Usuario_EventosPayload>
          }
          deleteMany: {
            args: Prisma.Usuario_EventosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Usuario_EventosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Usuario_EventosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Usuario_EventosPayload>
          }
          aggregate: {
            args: Prisma.Usuario_EventosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario_Eventos>
          }
          groupBy: {
            args: Prisma.Usuario_EventosGroupByArgs<ExtArgs>
            result: $Utils.Optional<Usuario_EventosGroupByOutputType>[]
          }
          count: {
            args: Prisma.Usuario_EventosCountArgs<ExtArgs>
            result: $Utils.Optional<Usuario_EventosCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
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
   * Count Type UsuariosCountOutputType
   */

  export type UsuariosCountOutputType = {
    eventsSupported: number
  }

  export type UsuariosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventsSupported?: boolean | UsuariosCountOutputTypeCountEventsSupportedArgs
  }

  // Custom InputTypes
  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosCountOutputType
     */
    select?: UsuariosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountEventsSupportedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Usuario_EventosWhereInput
  }


  /**
   * Count Type EventosCountOutputType
   */

  export type EventosCountOutputType = {
    usersSupport: number
  }

  export type EventosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usersSupport?: boolean | EventosCountOutputTypeCountUsersSupportArgs
  }

  // Custom InputTypes
  /**
   * EventosCountOutputType without action
   */
  export type EventosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventosCountOutputType
     */
    select?: EventosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventosCountOutputType without action
   */
  export type EventosCountOutputTypeCountUsersSupportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Usuario_EventosWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuarios
   */

  export type AggregateUsuarios = {
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  export type UsuariosAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuariosSumAggregateOutputType = {
    id: number | null
  }

  export type UsuariosMinAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    role: $Enums.Rol | null
    password: string | null
    name: string | null
    chagePassword: boolean | null
    active: boolean | null
  }

  export type UsuariosMaxAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    role: $Enums.Rol | null
    password: string | null
    name: string | null
    chagePassword: boolean | null
    active: boolean | null
  }

  export type UsuariosCountAggregateOutputType = {
    id: number
    email: number
    username: number
    role: number
    password: number
    name: number
    chagePassword: number
    active: number
    _all: number
  }


  export type UsuariosAvgAggregateInputType = {
    id?: true
  }

  export type UsuariosSumAggregateInputType = {
    id?: true
  }

  export type UsuariosMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    role?: true
    password?: true
    name?: true
    chagePassword?: true
    active?: true
  }

  export type UsuariosMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    role?: true
    password?: true
    name?: true
    chagePassword?: true
    active?: true
  }

  export type UsuariosCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    role?: true
    password?: true
    name?: true
    chagePassword?: true
    active?: true
    _all?: true
  }

  export type UsuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to aggregate.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariosMaxAggregateInputType
  }

  export type GetUsuariosAggregateType<T extends UsuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarios[P]>
      : GetScalarType<T[P], AggregateUsuarios[P]>
  }




  export type UsuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuariosWhereInput
    orderBy?: UsuariosOrderByWithAggregationInput | UsuariosOrderByWithAggregationInput[]
    by: UsuariosScalarFieldEnum[] | UsuariosScalarFieldEnum
    having?: UsuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariosCountAggregateInputType | true
    _avg?: UsuariosAvgAggregateInputType
    _sum?: UsuariosSumAggregateInputType
    _min?: UsuariosMinAggregateInputType
    _max?: UsuariosMaxAggregateInputType
  }

  export type UsuariosGroupByOutputType = {
    id: number
    email: string
    username: string
    role: $Enums.Rol
    password: string
    name: string
    chagePassword: boolean | null
    active: boolean | null
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  type GetUsuariosGroupByPayload<T extends UsuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
        }
      >
    >


  export type UsuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    role?: boolean
    password?: boolean
    name?: boolean
    chagePassword?: boolean
    active?: boolean
    eventsSupported?: boolean | Usuarios$eventsSupportedArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios"]>

  export type UsuariosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    role?: boolean
    password?: boolean
    name?: boolean
    chagePassword?: boolean
    active?: boolean
  }, ExtArgs["result"]["usuarios"]>

  export type UsuariosSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    role?: boolean
    password?: boolean
    name?: boolean
    chagePassword?: boolean
    active?: boolean
  }

  export type UsuariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventsSupported?: boolean | Usuarios$eventsSupportedArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuariosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuarios"
    objects: {
      eventsSupported: Prisma.$Usuario_EventosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      username: string
      role: $Enums.Rol
      password: string
      name: string
      chagePassword: boolean | null
      active: boolean | null
    }, ExtArgs["result"]["usuarios"]>
    composites: {}
  }

  type UsuariosGetPayload<S extends boolean | null | undefined | UsuariosDefaultArgs> = $Result.GetResult<Prisma.$UsuariosPayload, S>

  type UsuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UsuariosFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsuariosCountAggregateInputType | true
    }

  export interface UsuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuarios'], meta: { name: 'Usuarios' } }
    /**
     * Find zero or one Usuarios that matches the filter.
     * @param {UsuariosFindUniqueArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuariosFindUniqueArgs>(args: SelectSubset<T, UsuariosFindUniqueArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Usuarios that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UsuariosFindUniqueOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuariosFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosFindFirstArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuariosFindFirstArgs>(args?: SelectSubset<T, UsuariosFindFirstArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosFindFirstOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuariosFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuarios.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuarios.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuariosFindManyArgs>(args?: SelectSubset<T, UsuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Usuarios.
     * @param {UsuariosCreateArgs} args - Arguments to create a Usuarios.
     * @example
     * // Create one Usuarios
     * const Usuarios = await prisma.usuarios.create({
     *   data: {
     *     // ... data to create a Usuarios
     *   }
     * })
     * 
     */
    create<T extends UsuariosCreateArgs>(args: SelectSubset<T, UsuariosCreateArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Usuarios.
     * @param {UsuariosCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuariosCreateManyArgs>(args?: SelectSubset<T, UsuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuariosCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuariosCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuariosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Usuarios.
     * @param {UsuariosDeleteArgs} args - Arguments to delete one Usuarios.
     * @example
     * // Delete one Usuarios
     * const Usuarios = await prisma.usuarios.delete({
     *   where: {
     *     // ... filter to delete one Usuarios
     *   }
     * })
     * 
     */
    delete<T extends UsuariosDeleteArgs>(args: SelectSubset<T, UsuariosDeleteArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Usuarios.
     * @param {UsuariosUpdateArgs} args - Arguments to update one Usuarios.
     * @example
     * // Update one Usuarios
     * const usuarios = await prisma.usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuariosUpdateArgs>(args: SelectSubset<T, UsuariosUpdateArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuariosDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuariosDeleteManyArgs>(args?: SelectSubset<T, UsuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuariosUpdateManyArgs>(args: SelectSubset<T, UsuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuarios.
     * @param {UsuariosUpsertArgs} args - Arguments to update or create a Usuarios.
     * @example
     * // Update or create a Usuarios
     * const usuarios = await prisma.usuarios.upsert({
     *   create: {
     *     // ... data to create a Usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarios we want to update
     *   }
     * })
     */
    upsert<T extends UsuariosUpsertArgs>(args: SelectSubset<T, UsuariosUpsertArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuarios.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuariosCountArgs>(
      args?: Subset<T, UsuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuariosAggregateArgs>(args: Subset<T, UsuariosAggregateArgs>): Prisma.PrismaPromise<GetUsuariosAggregateType<T>>

    /**
     * Group by Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosGroupByArgs} args - Group by arguments.
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
      T extends UsuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuariosGroupByArgs['orderBy'] }
        : { orderBy?: UsuariosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuarios model
   */
  readonly fields: UsuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    eventsSupported<T extends Usuarios$eventsSupportedArgs<ExtArgs> = {}>(args?: Subset<T, Usuarios$eventsSupportedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Usuario_EventosPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Usuarios model
   */ 
  interface UsuariosFieldRefs {
    readonly id: FieldRef<"Usuarios", 'Int'>
    readonly email: FieldRef<"Usuarios", 'String'>
    readonly username: FieldRef<"Usuarios", 'String'>
    readonly role: FieldRef<"Usuarios", 'Rol'>
    readonly password: FieldRef<"Usuarios", 'String'>
    readonly name: FieldRef<"Usuarios", 'String'>
    readonly chagePassword: FieldRef<"Usuarios", 'Boolean'>
    readonly active: FieldRef<"Usuarios", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Usuarios findUnique
   */
  export type UsuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios findUniqueOrThrow
   */
  export type UsuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios findFirst
   */
  export type UsuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * Usuarios findFirstOrThrow
   */
  export type UsuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * Usuarios findMany
   */
  export type UsuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * Usuarios create
   */
  export type UsuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuarios.
     */
    data: XOR<UsuariosCreateInput, UsuariosUncheckedCreateInput>
  }

  /**
   * Usuarios createMany
   */
  export type UsuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuariosCreateManyInput | UsuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuarios createManyAndReturn
   */
  export type UsuariosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuariosCreateManyInput | UsuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuarios update
   */
  export type UsuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuarios.
     */
    data: XOR<UsuariosUpdateInput, UsuariosUncheckedUpdateInput>
    /**
     * Choose, which Usuarios to update.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios updateMany
   */
  export type UsuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuariosUpdateManyMutationInput, UsuariosUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuariosWhereInput
  }

  /**
   * Usuarios upsert
   */
  export type UsuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuarios to update in case it exists.
     */
    where: UsuariosWhereUniqueInput
    /**
     * In case the Usuarios found by the `where` argument doesn't exist, create a new Usuarios with this data.
     */
    create: XOR<UsuariosCreateInput, UsuariosUncheckedCreateInput>
    /**
     * In case the Usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuariosUpdateInput, UsuariosUncheckedUpdateInput>
  }

  /**
   * Usuarios delete
   */
  export type UsuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter which Usuarios to delete.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios deleteMany
   */
  export type UsuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuariosWhereInput
  }

  /**
   * Usuarios.eventsSupported
   */
  export type Usuarios$eventsSupportedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario_Eventos
     */
    select?: Usuario_EventosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Usuario_EventosInclude<ExtArgs> | null
    where?: Usuario_EventosWhereInput
    orderBy?: Usuario_EventosOrderByWithRelationInput | Usuario_EventosOrderByWithRelationInput[]
    cursor?: Usuario_EventosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Usuario_EventosScalarFieldEnum | Usuario_EventosScalarFieldEnum[]
  }

  /**
   * Usuarios without action
   */
  export type UsuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
  }


  /**
   * Model Noticias
   */

  export type AggregateNoticias = {
    _count: NoticiasCountAggregateOutputType | null
    _avg: NoticiasAvgAggregateOutputType | null
    _sum: NoticiasSumAggregateOutputType | null
    _min: NoticiasMinAggregateOutputType | null
    _max: NoticiasMaxAggregateOutputType | null
  }

  export type NoticiasAvgAggregateOutputType = {
    id: number | null
  }

  export type NoticiasSumAggregateOutputType = {
    id: number | null
  }

  export type NoticiasMinAggregateOutputType = {
    id: number | null
    imageUrl: string | null
    title: string | null
    text: string | null
    createdDate: Date | null
  }

  export type NoticiasMaxAggregateOutputType = {
    id: number | null
    imageUrl: string | null
    title: string | null
    text: string | null
    createdDate: Date | null
  }

  export type NoticiasCountAggregateOutputType = {
    id: number
    imageUrl: number
    title: number
    text: number
    createdDate: number
    _all: number
  }


  export type NoticiasAvgAggregateInputType = {
    id?: true
  }

  export type NoticiasSumAggregateInputType = {
    id?: true
  }

  export type NoticiasMinAggregateInputType = {
    id?: true
    imageUrl?: true
    title?: true
    text?: true
    createdDate?: true
  }

  export type NoticiasMaxAggregateInputType = {
    id?: true
    imageUrl?: true
    title?: true
    text?: true
    createdDate?: true
  }

  export type NoticiasCountAggregateInputType = {
    id?: true
    imageUrl?: true
    title?: true
    text?: true
    createdDate?: true
    _all?: true
  }

  export type NoticiasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Noticias to aggregate.
     */
    where?: NoticiasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Noticias to fetch.
     */
    orderBy?: NoticiasOrderByWithRelationInput | NoticiasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NoticiasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Noticias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Noticias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Noticias
    **/
    _count?: true | NoticiasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NoticiasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NoticiasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoticiasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoticiasMaxAggregateInputType
  }

  export type GetNoticiasAggregateType<T extends NoticiasAggregateArgs> = {
        [P in keyof T & keyof AggregateNoticias]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNoticias[P]>
      : GetScalarType<T[P], AggregateNoticias[P]>
  }




  export type NoticiasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoticiasWhereInput
    orderBy?: NoticiasOrderByWithAggregationInput | NoticiasOrderByWithAggregationInput[]
    by: NoticiasScalarFieldEnum[] | NoticiasScalarFieldEnum
    having?: NoticiasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoticiasCountAggregateInputType | true
    _avg?: NoticiasAvgAggregateInputType
    _sum?: NoticiasSumAggregateInputType
    _min?: NoticiasMinAggregateInputType
    _max?: NoticiasMaxAggregateInputType
  }

  export type NoticiasGroupByOutputType = {
    id: number
    imageUrl: string | null
    title: string
    text: string
    createdDate: Date | null
    _count: NoticiasCountAggregateOutputType | null
    _avg: NoticiasAvgAggregateOutputType | null
    _sum: NoticiasSumAggregateOutputType | null
    _min: NoticiasMinAggregateOutputType | null
    _max: NoticiasMaxAggregateOutputType | null
  }

  type GetNoticiasGroupByPayload<T extends NoticiasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NoticiasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoticiasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoticiasGroupByOutputType[P]>
            : GetScalarType<T[P], NoticiasGroupByOutputType[P]>
        }
      >
    >


  export type NoticiasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    title?: boolean
    text?: boolean
    createdDate?: boolean
  }, ExtArgs["result"]["noticias"]>

  export type NoticiasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    title?: boolean
    text?: boolean
    createdDate?: boolean
  }, ExtArgs["result"]["noticias"]>

  export type NoticiasSelectScalar = {
    id?: boolean
    imageUrl?: boolean
    title?: boolean
    text?: boolean
    createdDate?: boolean
  }


  export type $NoticiasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Noticias"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      imageUrl: string | null
      title: string
      text: string
      createdDate: Date | null
    }, ExtArgs["result"]["noticias"]>
    composites: {}
  }

  type NoticiasGetPayload<S extends boolean | null | undefined | NoticiasDefaultArgs> = $Result.GetResult<Prisma.$NoticiasPayload, S>

  type NoticiasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NoticiasFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NoticiasCountAggregateInputType | true
    }

  export interface NoticiasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Noticias'], meta: { name: 'Noticias' } }
    /**
     * Find zero or one Noticias that matches the filter.
     * @param {NoticiasFindUniqueArgs} args - Arguments to find a Noticias
     * @example
     * // Get one Noticias
     * const noticias = await prisma.noticias.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NoticiasFindUniqueArgs>(args: SelectSubset<T, NoticiasFindUniqueArgs<ExtArgs>>): Prisma__NoticiasClient<$Result.GetResult<Prisma.$NoticiasPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Noticias that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NoticiasFindUniqueOrThrowArgs} args - Arguments to find a Noticias
     * @example
     * // Get one Noticias
     * const noticias = await prisma.noticias.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NoticiasFindUniqueOrThrowArgs>(args: SelectSubset<T, NoticiasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NoticiasClient<$Result.GetResult<Prisma.$NoticiasPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Noticias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticiasFindFirstArgs} args - Arguments to find a Noticias
     * @example
     * // Get one Noticias
     * const noticias = await prisma.noticias.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NoticiasFindFirstArgs>(args?: SelectSubset<T, NoticiasFindFirstArgs<ExtArgs>>): Prisma__NoticiasClient<$Result.GetResult<Prisma.$NoticiasPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Noticias that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticiasFindFirstOrThrowArgs} args - Arguments to find a Noticias
     * @example
     * // Get one Noticias
     * const noticias = await prisma.noticias.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NoticiasFindFirstOrThrowArgs>(args?: SelectSubset<T, NoticiasFindFirstOrThrowArgs<ExtArgs>>): Prisma__NoticiasClient<$Result.GetResult<Prisma.$NoticiasPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Noticias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticiasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Noticias
     * const noticias = await prisma.noticias.findMany()
     * 
     * // Get first 10 Noticias
     * const noticias = await prisma.noticias.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const noticiasWithIdOnly = await prisma.noticias.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NoticiasFindManyArgs>(args?: SelectSubset<T, NoticiasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoticiasPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Noticias.
     * @param {NoticiasCreateArgs} args - Arguments to create a Noticias.
     * @example
     * // Create one Noticias
     * const Noticias = await prisma.noticias.create({
     *   data: {
     *     // ... data to create a Noticias
     *   }
     * })
     * 
     */
    create<T extends NoticiasCreateArgs>(args: SelectSubset<T, NoticiasCreateArgs<ExtArgs>>): Prisma__NoticiasClient<$Result.GetResult<Prisma.$NoticiasPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Noticias.
     * @param {NoticiasCreateManyArgs} args - Arguments to create many Noticias.
     * @example
     * // Create many Noticias
     * const noticias = await prisma.noticias.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NoticiasCreateManyArgs>(args?: SelectSubset<T, NoticiasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Noticias and returns the data saved in the database.
     * @param {NoticiasCreateManyAndReturnArgs} args - Arguments to create many Noticias.
     * @example
     * // Create many Noticias
     * const noticias = await prisma.noticias.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Noticias and only return the `id`
     * const noticiasWithIdOnly = await prisma.noticias.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NoticiasCreateManyAndReturnArgs>(args?: SelectSubset<T, NoticiasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoticiasPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Noticias.
     * @param {NoticiasDeleteArgs} args - Arguments to delete one Noticias.
     * @example
     * // Delete one Noticias
     * const Noticias = await prisma.noticias.delete({
     *   where: {
     *     // ... filter to delete one Noticias
     *   }
     * })
     * 
     */
    delete<T extends NoticiasDeleteArgs>(args: SelectSubset<T, NoticiasDeleteArgs<ExtArgs>>): Prisma__NoticiasClient<$Result.GetResult<Prisma.$NoticiasPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Noticias.
     * @param {NoticiasUpdateArgs} args - Arguments to update one Noticias.
     * @example
     * // Update one Noticias
     * const noticias = await prisma.noticias.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NoticiasUpdateArgs>(args: SelectSubset<T, NoticiasUpdateArgs<ExtArgs>>): Prisma__NoticiasClient<$Result.GetResult<Prisma.$NoticiasPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Noticias.
     * @param {NoticiasDeleteManyArgs} args - Arguments to filter Noticias to delete.
     * @example
     * // Delete a few Noticias
     * const { count } = await prisma.noticias.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NoticiasDeleteManyArgs>(args?: SelectSubset<T, NoticiasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Noticias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticiasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Noticias
     * const noticias = await prisma.noticias.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NoticiasUpdateManyArgs>(args: SelectSubset<T, NoticiasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Noticias.
     * @param {NoticiasUpsertArgs} args - Arguments to update or create a Noticias.
     * @example
     * // Update or create a Noticias
     * const noticias = await prisma.noticias.upsert({
     *   create: {
     *     // ... data to create a Noticias
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Noticias we want to update
     *   }
     * })
     */
    upsert<T extends NoticiasUpsertArgs>(args: SelectSubset<T, NoticiasUpsertArgs<ExtArgs>>): Prisma__NoticiasClient<$Result.GetResult<Prisma.$NoticiasPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Noticias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticiasCountArgs} args - Arguments to filter Noticias to count.
     * @example
     * // Count the number of Noticias
     * const count = await prisma.noticias.count({
     *   where: {
     *     // ... the filter for the Noticias we want to count
     *   }
     * })
    **/
    count<T extends NoticiasCountArgs>(
      args?: Subset<T, NoticiasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoticiasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Noticias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticiasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NoticiasAggregateArgs>(args: Subset<T, NoticiasAggregateArgs>): Prisma.PrismaPromise<GetNoticiasAggregateType<T>>

    /**
     * Group by Noticias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticiasGroupByArgs} args - Group by arguments.
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
      T extends NoticiasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoticiasGroupByArgs['orderBy'] }
        : { orderBy?: NoticiasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NoticiasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoticiasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Noticias model
   */
  readonly fields: NoticiasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Noticias.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NoticiasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Noticias model
   */ 
  interface NoticiasFieldRefs {
    readonly id: FieldRef<"Noticias", 'Int'>
    readonly imageUrl: FieldRef<"Noticias", 'String'>
    readonly title: FieldRef<"Noticias", 'String'>
    readonly text: FieldRef<"Noticias", 'String'>
    readonly createdDate: FieldRef<"Noticias", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Noticias findUnique
   */
  export type NoticiasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticias
     */
    select?: NoticiasSelect<ExtArgs> | null
    /**
     * Filter, which Noticias to fetch.
     */
    where: NoticiasWhereUniqueInput
  }

  /**
   * Noticias findUniqueOrThrow
   */
  export type NoticiasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticias
     */
    select?: NoticiasSelect<ExtArgs> | null
    /**
     * Filter, which Noticias to fetch.
     */
    where: NoticiasWhereUniqueInput
  }

  /**
   * Noticias findFirst
   */
  export type NoticiasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticias
     */
    select?: NoticiasSelect<ExtArgs> | null
    /**
     * Filter, which Noticias to fetch.
     */
    where?: NoticiasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Noticias to fetch.
     */
    orderBy?: NoticiasOrderByWithRelationInput | NoticiasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Noticias.
     */
    cursor?: NoticiasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Noticias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Noticias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Noticias.
     */
    distinct?: NoticiasScalarFieldEnum | NoticiasScalarFieldEnum[]
  }

  /**
   * Noticias findFirstOrThrow
   */
  export type NoticiasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticias
     */
    select?: NoticiasSelect<ExtArgs> | null
    /**
     * Filter, which Noticias to fetch.
     */
    where?: NoticiasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Noticias to fetch.
     */
    orderBy?: NoticiasOrderByWithRelationInput | NoticiasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Noticias.
     */
    cursor?: NoticiasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Noticias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Noticias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Noticias.
     */
    distinct?: NoticiasScalarFieldEnum | NoticiasScalarFieldEnum[]
  }

  /**
   * Noticias findMany
   */
  export type NoticiasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticias
     */
    select?: NoticiasSelect<ExtArgs> | null
    /**
     * Filter, which Noticias to fetch.
     */
    where?: NoticiasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Noticias to fetch.
     */
    orderBy?: NoticiasOrderByWithRelationInput | NoticiasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Noticias.
     */
    cursor?: NoticiasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Noticias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Noticias.
     */
    skip?: number
    distinct?: NoticiasScalarFieldEnum | NoticiasScalarFieldEnum[]
  }

  /**
   * Noticias create
   */
  export type NoticiasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticias
     */
    select?: NoticiasSelect<ExtArgs> | null
    /**
     * The data needed to create a Noticias.
     */
    data: XOR<NoticiasCreateInput, NoticiasUncheckedCreateInput>
  }

  /**
   * Noticias createMany
   */
  export type NoticiasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Noticias.
     */
    data: NoticiasCreateManyInput | NoticiasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Noticias createManyAndReturn
   */
  export type NoticiasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticias
     */
    select?: NoticiasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Noticias.
     */
    data: NoticiasCreateManyInput | NoticiasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Noticias update
   */
  export type NoticiasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticias
     */
    select?: NoticiasSelect<ExtArgs> | null
    /**
     * The data needed to update a Noticias.
     */
    data: XOR<NoticiasUpdateInput, NoticiasUncheckedUpdateInput>
    /**
     * Choose, which Noticias to update.
     */
    where: NoticiasWhereUniqueInput
  }

  /**
   * Noticias updateMany
   */
  export type NoticiasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Noticias.
     */
    data: XOR<NoticiasUpdateManyMutationInput, NoticiasUncheckedUpdateManyInput>
    /**
     * Filter which Noticias to update
     */
    where?: NoticiasWhereInput
  }

  /**
   * Noticias upsert
   */
  export type NoticiasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticias
     */
    select?: NoticiasSelect<ExtArgs> | null
    /**
     * The filter to search for the Noticias to update in case it exists.
     */
    where: NoticiasWhereUniqueInput
    /**
     * In case the Noticias found by the `where` argument doesn't exist, create a new Noticias with this data.
     */
    create: XOR<NoticiasCreateInput, NoticiasUncheckedCreateInput>
    /**
     * In case the Noticias was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NoticiasUpdateInput, NoticiasUncheckedUpdateInput>
  }

  /**
   * Noticias delete
   */
  export type NoticiasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticias
     */
    select?: NoticiasSelect<ExtArgs> | null
    /**
     * Filter which Noticias to delete.
     */
    where: NoticiasWhereUniqueInput
  }

  /**
   * Noticias deleteMany
   */
  export type NoticiasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Noticias to delete
     */
    where?: NoticiasWhereInput
  }

  /**
   * Noticias without action
   */
  export type NoticiasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticias
     */
    select?: NoticiasSelect<ExtArgs> | null
  }


  /**
   * Model Devocionales
   */

  export type AggregateDevocionales = {
    _count: DevocionalesCountAggregateOutputType | null
    _avg: DevocionalesAvgAggregateOutputType | null
    _sum: DevocionalesSumAggregateOutputType | null
    _min: DevocionalesMinAggregateOutputType | null
    _max: DevocionalesMaxAggregateOutputType | null
  }

  export type DevocionalesAvgAggregateOutputType = {
    id: number | null
  }

  export type DevocionalesSumAggregateOutputType = {
    id: number | null
  }

  export type DevocionalesMinAggregateOutputType = {
    id: number | null
    imageUrl: string | null
    createdDate: Date | null
  }

  export type DevocionalesMaxAggregateOutputType = {
    id: number | null
    imageUrl: string | null
    createdDate: Date | null
  }

  export type DevocionalesCountAggregateOutputType = {
    id: number
    imageUrl: number
    createdDate: number
    _all: number
  }


  export type DevocionalesAvgAggregateInputType = {
    id?: true
  }

  export type DevocionalesSumAggregateInputType = {
    id?: true
  }

  export type DevocionalesMinAggregateInputType = {
    id?: true
    imageUrl?: true
    createdDate?: true
  }

  export type DevocionalesMaxAggregateInputType = {
    id?: true
    imageUrl?: true
    createdDate?: true
  }

  export type DevocionalesCountAggregateInputType = {
    id?: true
    imageUrl?: true
    createdDate?: true
    _all?: true
  }

  export type DevocionalesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Devocionales to aggregate.
     */
    where?: DevocionalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devocionales to fetch.
     */
    orderBy?: DevocionalesOrderByWithRelationInput | DevocionalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DevocionalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devocionales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devocionales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Devocionales
    **/
    _count?: true | DevocionalesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DevocionalesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DevocionalesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DevocionalesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DevocionalesMaxAggregateInputType
  }

  export type GetDevocionalesAggregateType<T extends DevocionalesAggregateArgs> = {
        [P in keyof T & keyof AggregateDevocionales]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevocionales[P]>
      : GetScalarType<T[P], AggregateDevocionales[P]>
  }




  export type DevocionalesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DevocionalesWhereInput
    orderBy?: DevocionalesOrderByWithAggregationInput | DevocionalesOrderByWithAggregationInput[]
    by: DevocionalesScalarFieldEnum[] | DevocionalesScalarFieldEnum
    having?: DevocionalesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DevocionalesCountAggregateInputType | true
    _avg?: DevocionalesAvgAggregateInputType
    _sum?: DevocionalesSumAggregateInputType
    _min?: DevocionalesMinAggregateInputType
    _max?: DevocionalesMaxAggregateInputType
  }

  export type DevocionalesGroupByOutputType = {
    id: number
    imageUrl: string
    createdDate: Date | null
    _count: DevocionalesCountAggregateOutputType | null
    _avg: DevocionalesAvgAggregateOutputType | null
    _sum: DevocionalesSumAggregateOutputType | null
    _min: DevocionalesMinAggregateOutputType | null
    _max: DevocionalesMaxAggregateOutputType | null
  }

  type GetDevocionalesGroupByPayload<T extends DevocionalesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DevocionalesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DevocionalesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DevocionalesGroupByOutputType[P]>
            : GetScalarType<T[P], DevocionalesGroupByOutputType[P]>
        }
      >
    >


  export type DevocionalesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    createdDate?: boolean
  }, ExtArgs["result"]["devocionales"]>

  export type DevocionalesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    createdDate?: boolean
  }, ExtArgs["result"]["devocionales"]>

  export type DevocionalesSelectScalar = {
    id?: boolean
    imageUrl?: boolean
    createdDate?: boolean
  }


  export type $DevocionalesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Devocionales"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      imageUrl: string
      createdDate: Date | null
    }, ExtArgs["result"]["devocionales"]>
    composites: {}
  }

  type DevocionalesGetPayload<S extends boolean | null | undefined | DevocionalesDefaultArgs> = $Result.GetResult<Prisma.$DevocionalesPayload, S>

  type DevocionalesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DevocionalesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DevocionalesCountAggregateInputType | true
    }

  export interface DevocionalesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Devocionales'], meta: { name: 'Devocionales' } }
    /**
     * Find zero or one Devocionales that matches the filter.
     * @param {DevocionalesFindUniqueArgs} args - Arguments to find a Devocionales
     * @example
     * // Get one Devocionales
     * const devocionales = await prisma.devocionales.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DevocionalesFindUniqueArgs>(args: SelectSubset<T, DevocionalesFindUniqueArgs<ExtArgs>>): Prisma__DevocionalesClient<$Result.GetResult<Prisma.$DevocionalesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Devocionales that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DevocionalesFindUniqueOrThrowArgs} args - Arguments to find a Devocionales
     * @example
     * // Get one Devocionales
     * const devocionales = await prisma.devocionales.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DevocionalesFindUniqueOrThrowArgs>(args: SelectSubset<T, DevocionalesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DevocionalesClient<$Result.GetResult<Prisma.$DevocionalesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Devocionales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevocionalesFindFirstArgs} args - Arguments to find a Devocionales
     * @example
     * // Get one Devocionales
     * const devocionales = await prisma.devocionales.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DevocionalesFindFirstArgs>(args?: SelectSubset<T, DevocionalesFindFirstArgs<ExtArgs>>): Prisma__DevocionalesClient<$Result.GetResult<Prisma.$DevocionalesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Devocionales that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevocionalesFindFirstOrThrowArgs} args - Arguments to find a Devocionales
     * @example
     * // Get one Devocionales
     * const devocionales = await prisma.devocionales.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DevocionalesFindFirstOrThrowArgs>(args?: SelectSubset<T, DevocionalesFindFirstOrThrowArgs<ExtArgs>>): Prisma__DevocionalesClient<$Result.GetResult<Prisma.$DevocionalesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Devocionales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevocionalesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Devocionales
     * const devocionales = await prisma.devocionales.findMany()
     * 
     * // Get first 10 Devocionales
     * const devocionales = await prisma.devocionales.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const devocionalesWithIdOnly = await prisma.devocionales.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DevocionalesFindManyArgs>(args?: SelectSubset<T, DevocionalesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevocionalesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Devocionales.
     * @param {DevocionalesCreateArgs} args - Arguments to create a Devocionales.
     * @example
     * // Create one Devocionales
     * const Devocionales = await prisma.devocionales.create({
     *   data: {
     *     // ... data to create a Devocionales
     *   }
     * })
     * 
     */
    create<T extends DevocionalesCreateArgs>(args: SelectSubset<T, DevocionalesCreateArgs<ExtArgs>>): Prisma__DevocionalesClient<$Result.GetResult<Prisma.$DevocionalesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Devocionales.
     * @param {DevocionalesCreateManyArgs} args - Arguments to create many Devocionales.
     * @example
     * // Create many Devocionales
     * const devocionales = await prisma.devocionales.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DevocionalesCreateManyArgs>(args?: SelectSubset<T, DevocionalesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Devocionales and returns the data saved in the database.
     * @param {DevocionalesCreateManyAndReturnArgs} args - Arguments to create many Devocionales.
     * @example
     * // Create many Devocionales
     * const devocionales = await prisma.devocionales.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Devocionales and only return the `id`
     * const devocionalesWithIdOnly = await prisma.devocionales.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DevocionalesCreateManyAndReturnArgs>(args?: SelectSubset<T, DevocionalesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevocionalesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Devocionales.
     * @param {DevocionalesDeleteArgs} args - Arguments to delete one Devocionales.
     * @example
     * // Delete one Devocionales
     * const Devocionales = await prisma.devocionales.delete({
     *   where: {
     *     // ... filter to delete one Devocionales
     *   }
     * })
     * 
     */
    delete<T extends DevocionalesDeleteArgs>(args: SelectSubset<T, DevocionalesDeleteArgs<ExtArgs>>): Prisma__DevocionalesClient<$Result.GetResult<Prisma.$DevocionalesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Devocionales.
     * @param {DevocionalesUpdateArgs} args - Arguments to update one Devocionales.
     * @example
     * // Update one Devocionales
     * const devocionales = await prisma.devocionales.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DevocionalesUpdateArgs>(args: SelectSubset<T, DevocionalesUpdateArgs<ExtArgs>>): Prisma__DevocionalesClient<$Result.GetResult<Prisma.$DevocionalesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Devocionales.
     * @param {DevocionalesDeleteManyArgs} args - Arguments to filter Devocionales to delete.
     * @example
     * // Delete a few Devocionales
     * const { count } = await prisma.devocionales.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DevocionalesDeleteManyArgs>(args?: SelectSubset<T, DevocionalesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devocionales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevocionalesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Devocionales
     * const devocionales = await prisma.devocionales.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DevocionalesUpdateManyArgs>(args: SelectSubset<T, DevocionalesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Devocionales.
     * @param {DevocionalesUpsertArgs} args - Arguments to update or create a Devocionales.
     * @example
     * // Update or create a Devocionales
     * const devocionales = await prisma.devocionales.upsert({
     *   create: {
     *     // ... data to create a Devocionales
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Devocionales we want to update
     *   }
     * })
     */
    upsert<T extends DevocionalesUpsertArgs>(args: SelectSubset<T, DevocionalesUpsertArgs<ExtArgs>>): Prisma__DevocionalesClient<$Result.GetResult<Prisma.$DevocionalesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Devocionales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevocionalesCountArgs} args - Arguments to filter Devocionales to count.
     * @example
     * // Count the number of Devocionales
     * const count = await prisma.devocionales.count({
     *   where: {
     *     // ... the filter for the Devocionales we want to count
     *   }
     * })
    **/
    count<T extends DevocionalesCountArgs>(
      args?: Subset<T, DevocionalesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DevocionalesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Devocionales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevocionalesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DevocionalesAggregateArgs>(args: Subset<T, DevocionalesAggregateArgs>): Prisma.PrismaPromise<GetDevocionalesAggregateType<T>>

    /**
     * Group by Devocionales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevocionalesGroupByArgs} args - Group by arguments.
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
      T extends DevocionalesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DevocionalesGroupByArgs['orderBy'] }
        : { orderBy?: DevocionalesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DevocionalesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDevocionalesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Devocionales model
   */
  readonly fields: DevocionalesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Devocionales.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DevocionalesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Devocionales model
   */ 
  interface DevocionalesFieldRefs {
    readonly id: FieldRef<"Devocionales", 'Int'>
    readonly imageUrl: FieldRef<"Devocionales", 'String'>
    readonly createdDate: FieldRef<"Devocionales", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Devocionales findUnique
   */
  export type DevocionalesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devocionales
     */
    select?: DevocionalesSelect<ExtArgs> | null
    /**
     * Filter, which Devocionales to fetch.
     */
    where: DevocionalesWhereUniqueInput
  }

  /**
   * Devocionales findUniqueOrThrow
   */
  export type DevocionalesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devocionales
     */
    select?: DevocionalesSelect<ExtArgs> | null
    /**
     * Filter, which Devocionales to fetch.
     */
    where: DevocionalesWhereUniqueInput
  }

  /**
   * Devocionales findFirst
   */
  export type DevocionalesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devocionales
     */
    select?: DevocionalesSelect<ExtArgs> | null
    /**
     * Filter, which Devocionales to fetch.
     */
    where?: DevocionalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devocionales to fetch.
     */
    orderBy?: DevocionalesOrderByWithRelationInput | DevocionalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devocionales.
     */
    cursor?: DevocionalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devocionales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devocionales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devocionales.
     */
    distinct?: DevocionalesScalarFieldEnum | DevocionalesScalarFieldEnum[]
  }

  /**
   * Devocionales findFirstOrThrow
   */
  export type DevocionalesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devocionales
     */
    select?: DevocionalesSelect<ExtArgs> | null
    /**
     * Filter, which Devocionales to fetch.
     */
    where?: DevocionalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devocionales to fetch.
     */
    orderBy?: DevocionalesOrderByWithRelationInput | DevocionalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devocionales.
     */
    cursor?: DevocionalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devocionales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devocionales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devocionales.
     */
    distinct?: DevocionalesScalarFieldEnum | DevocionalesScalarFieldEnum[]
  }

  /**
   * Devocionales findMany
   */
  export type DevocionalesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devocionales
     */
    select?: DevocionalesSelect<ExtArgs> | null
    /**
     * Filter, which Devocionales to fetch.
     */
    where?: DevocionalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devocionales to fetch.
     */
    orderBy?: DevocionalesOrderByWithRelationInput | DevocionalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Devocionales.
     */
    cursor?: DevocionalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devocionales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devocionales.
     */
    skip?: number
    distinct?: DevocionalesScalarFieldEnum | DevocionalesScalarFieldEnum[]
  }

  /**
   * Devocionales create
   */
  export type DevocionalesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devocionales
     */
    select?: DevocionalesSelect<ExtArgs> | null
    /**
     * The data needed to create a Devocionales.
     */
    data: XOR<DevocionalesCreateInput, DevocionalesUncheckedCreateInput>
  }

  /**
   * Devocionales createMany
   */
  export type DevocionalesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Devocionales.
     */
    data: DevocionalesCreateManyInput | DevocionalesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Devocionales createManyAndReturn
   */
  export type DevocionalesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devocionales
     */
    select?: DevocionalesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Devocionales.
     */
    data: DevocionalesCreateManyInput | DevocionalesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Devocionales update
   */
  export type DevocionalesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devocionales
     */
    select?: DevocionalesSelect<ExtArgs> | null
    /**
     * The data needed to update a Devocionales.
     */
    data: XOR<DevocionalesUpdateInput, DevocionalesUncheckedUpdateInput>
    /**
     * Choose, which Devocionales to update.
     */
    where: DevocionalesWhereUniqueInput
  }

  /**
   * Devocionales updateMany
   */
  export type DevocionalesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Devocionales.
     */
    data: XOR<DevocionalesUpdateManyMutationInput, DevocionalesUncheckedUpdateManyInput>
    /**
     * Filter which Devocionales to update
     */
    where?: DevocionalesWhereInput
  }

  /**
   * Devocionales upsert
   */
  export type DevocionalesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devocionales
     */
    select?: DevocionalesSelect<ExtArgs> | null
    /**
     * The filter to search for the Devocionales to update in case it exists.
     */
    where: DevocionalesWhereUniqueInput
    /**
     * In case the Devocionales found by the `where` argument doesn't exist, create a new Devocionales with this data.
     */
    create: XOR<DevocionalesCreateInput, DevocionalesUncheckedCreateInput>
    /**
     * In case the Devocionales was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DevocionalesUpdateInput, DevocionalesUncheckedUpdateInput>
  }

  /**
   * Devocionales delete
   */
  export type DevocionalesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devocionales
     */
    select?: DevocionalesSelect<ExtArgs> | null
    /**
     * Filter which Devocionales to delete.
     */
    where: DevocionalesWhereUniqueInput
  }

  /**
   * Devocionales deleteMany
   */
  export type DevocionalesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Devocionales to delete
     */
    where?: DevocionalesWhereInput
  }

  /**
   * Devocionales without action
   */
  export type DevocionalesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devocionales
     */
    select?: DevocionalesSelect<ExtArgs> | null
  }


  /**
   * Model Eventos
   */

  export type AggregateEventos = {
    _count: EventosCountAggregateOutputType | null
    _avg: EventosAvgAggregateOutputType | null
    _sum: EventosSumAggregateOutputType | null
    _min: EventosMinAggregateOutputType | null
    _max: EventosMaxAggregateOutputType | null
  }

  export type EventosAvgAggregateOutputType = {
    id: number | null
    daysDuration: number | null
  }

  export type EventosSumAggregateOutputType = {
    id: number | null
    daysDuration: number | null
  }

  export type EventosMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    status: $Enums.Evento_Estado | null
    scheduledDate: Date | null
    daysDuration: number | null
  }

  export type EventosMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    status: $Enums.Evento_Estado | null
    scheduledDate: Date | null
    daysDuration: number | null
  }

  export type EventosCountAggregateOutputType = {
    id: number
    title: number
    description: number
    status: number
    scheduledDate: number
    daysDuration: number
    _all: number
  }


  export type EventosAvgAggregateInputType = {
    id?: true
    daysDuration?: true
  }

  export type EventosSumAggregateInputType = {
    id?: true
    daysDuration?: true
  }

  export type EventosMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    scheduledDate?: true
    daysDuration?: true
  }

  export type EventosMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    scheduledDate?: true
    daysDuration?: true
  }

  export type EventosCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    scheduledDate?: true
    daysDuration?: true
    _all?: true
  }

  export type EventosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Eventos to aggregate.
     */
    where?: EventosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventosOrderByWithRelationInput | EventosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Eventos
    **/
    _count?: true | EventosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventosMaxAggregateInputType
  }

  export type GetEventosAggregateType<T extends EventosAggregateArgs> = {
        [P in keyof T & keyof AggregateEventos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventos[P]>
      : GetScalarType<T[P], AggregateEventos[P]>
  }




  export type EventosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventosWhereInput
    orderBy?: EventosOrderByWithAggregationInput | EventosOrderByWithAggregationInput[]
    by: EventosScalarFieldEnum[] | EventosScalarFieldEnum
    having?: EventosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventosCountAggregateInputType | true
    _avg?: EventosAvgAggregateInputType
    _sum?: EventosSumAggregateInputType
    _min?: EventosMinAggregateInputType
    _max?: EventosMaxAggregateInputType
  }

  export type EventosGroupByOutputType = {
    id: number
    title: string
    description: string
    status: $Enums.Evento_Estado
    scheduledDate: Date
    daysDuration: number
    _count: EventosCountAggregateOutputType | null
    _avg: EventosAvgAggregateOutputType | null
    _sum: EventosSumAggregateOutputType | null
    _min: EventosMinAggregateOutputType | null
    _max: EventosMaxAggregateOutputType | null
  }

  type GetEventosGroupByPayload<T extends EventosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventosGroupByOutputType[P]>
            : GetScalarType<T[P], EventosGroupByOutputType[P]>
        }
      >
    >


  export type EventosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    scheduledDate?: boolean
    daysDuration?: boolean
    usersSupport?: boolean | Eventos$usersSupportArgs<ExtArgs>
    _count?: boolean | EventosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventos"]>

  export type EventosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    scheduledDate?: boolean
    daysDuration?: boolean
  }, ExtArgs["result"]["eventos"]>

  export type EventosSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    scheduledDate?: boolean
    daysDuration?: boolean
  }

  export type EventosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usersSupport?: boolean | Eventos$usersSupportArgs<ExtArgs>
    _count?: boolean | EventosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EventosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Eventos"
    objects: {
      usersSupport: Prisma.$Usuario_EventosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      status: $Enums.Evento_Estado
      scheduledDate: Date
      daysDuration: number
    }, ExtArgs["result"]["eventos"]>
    composites: {}
  }

  type EventosGetPayload<S extends boolean | null | undefined | EventosDefaultArgs> = $Result.GetResult<Prisma.$EventosPayload, S>

  type EventosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EventosFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EventosCountAggregateInputType | true
    }

  export interface EventosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Eventos'], meta: { name: 'Eventos' } }
    /**
     * Find zero or one Eventos that matches the filter.
     * @param {EventosFindUniqueArgs} args - Arguments to find a Eventos
     * @example
     * // Get one Eventos
     * const eventos = await prisma.eventos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventosFindUniqueArgs>(args: SelectSubset<T, EventosFindUniqueArgs<ExtArgs>>): Prisma__EventosClient<$Result.GetResult<Prisma.$EventosPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Eventos that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EventosFindUniqueOrThrowArgs} args - Arguments to find a Eventos
     * @example
     * // Get one Eventos
     * const eventos = await prisma.eventos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventosFindUniqueOrThrowArgs>(args: SelectSubset<T, EventosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventosClient<$Result.GetResult<Prisma.$EventosPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Eventos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventosFindFirstArgs} args - Arguments to find a Eventos
     * @example
     * // Get one Eventos
     * const eventos = await prisma.eventos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventosFindFirstArgs>(args?: SelectSubset<T, EventosFindFirstArgs<ExtArgs>>): Prisma__EventosClient<$Result.GetResult<Prisma.$EventosPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Eventos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventosFindFirstOrThrowArgs} args - Arguments to find a Eventos
     * @example
     * // Get one Eventos
     * const eventos = await prisma.eventos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventosFindFirstOrThrowArgs>(args?: SelectSubset<T, EventosFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventosClient<$Result.GetResult<Prisma.$EventosPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Eventos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Eventos
     * const eventos = await prisma.eventos.findMany()
     * 
     * // Get first 10 Eventos
     * const eventos = await prisma.eventos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventosWithIdOnly = await prisma.eventos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventosFindManyArgs>(args?: SelectSubset<T, EventosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventosPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Eventos.
     * @param {EventosCreateArgs} args - Arguments to create a Eventos.
     * @example
     * // Create one Eventos
     * const Eventos = await prisma.eventos.create({
     *   data: {
     *     // ... data to create a Eventos
     *   }
     * })
     * 
     */
    create<T extends EventosCreateArgs>(args: SelectSubset<T, EventosCreateArgs<ExtArgs>>): Prisma__EventosClient<$Result.GetResult<Prisma.$EventosPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Eventos.
     * @param {EventosCreateManyArgs} args - Arguments to create many Eventos.
     * @example
     * // Create many Eventos
     * const eventos = await prisma.eventos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventosCreateManyArgs>(args?: SelectSubset<T, EventosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Eventos and returns the data saved in the database.
     * @param {EventosCreateManyAndReturnArgs} args - Arguments to create many Eventos.
     * @example
     * // Create many Eventos
     * const eventos = await prisma.eventos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Eventos and only return the `id`
     * const eventosWithIdOnly = await prisma.eventos.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventosCreateManyAndReturnArgs>(args?: SelectSubset<T, EventosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventosPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Eventos.
     * @param {EventosDeleteArgs} args - Arguments to delete one Eventos.
     * @example
     * // Delete one Eventos
     * const Eventos = await prisma.eventos.delete({
     *   where: {
     *     // ... filter to delete one Eventos
     *   }
     * })
     * 
     */
    delete<T extends EventosDeleteArgs>(args: SelectSubset<T, EventosDeleteArgs<ExtArgs>>): Prisma__EventosClient<$Result.GetResult<Prisma.$EventosPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Eventos.
     * @param {EventosUpdateArgs} args - Arguments to update one Eventos.
     * @example
     * // Update one Eventos
     * const eventos = await prisma.eventos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventosUpdateArgs>(args: SelectSubset<T, EventosUpdateArgs<ExtArgs>>): Prisma__EventosClient<$Result.GetResult<Prisma.$EventosPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Eventos.
     * @param {EventosDeleteManyArgs} args - Arguments to filter Eventos to delete.
     * @example
     * // Delete a few Eventos
     * const { count } = await prisma.eventos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventosDeleteManyArgs>(args?: SelectSubset<T, EventosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Eventos
     * const eventos = await prisma.eventos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventosUpdateManyArgs>(args: SelectSubset<T, EventosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Eventos.
     * @param {EventosUpsertArgs} args - Arguments to update or create a Eventos.
     * @example
     * // Update or create a Eventos
     * const eventos = await prisma.eventos.upsert({
     *   create: {
     *     // ... data to create a Eventos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Eventos we want to update
     *   }
     * })
     */
    upsert<T extends EventosUpsertArgs>(args: SelectSubset<T, EventosUpsertArgs<ExtArgs>>): Prisma__EventosClient<$Result.GetResult<Prisma.$EventosPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventosCountArgs} args - Arguments to filter Eventos to count.
     * @example
     * // Count the number of Eventos
     * const count = await prisma.eventos.count({
     *   where: {
     *     // ... the filter for the Eventos we want to count
     *   }
     * })
    **/
    count<T extends EventosCountArgs>(
      args?: Subset<T, EventosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventosAggregateArgs>(args: Subset<T, EventosAggregateArgs>): Prisma.PrismaPromise<GetEventosAggregateType<T>>

    /**
     * Group by Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventosGroupByArgs} args - Group by arguments.
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
      T extends EventosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventosGroupByArgs['orderBy'] }
        : { orderBy?: EventosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Eventos model
   */
  readonly fields: EventosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Eventos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usersSupport<T extends Eventos$usersSupportArgs<ExtArgs> = {}>(args?: Subset<T, Eventos$usersSupportArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Usuario_EventosPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Eventos model
   */ 
  interface EventosFieldRefs {
    readonly id: FieldRef<"Eventos", 'Int'>
    readonly title: FieldRef<"Eventos", 'String'>
    readonly description: FieldRef<"Eventos", 'String'>
    readonly status: FieldRef<"Eventos", 'Evento_Estado'>
    readonly scheduledDate: FieldRef<"Eventos", 'DateTime'>
    readonly daysDuration: FieldRef<"Eventos", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Eventos findUnique
   */
  export type EventosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos
     */
    select?: EventosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventosInclude<ExtArgs> | null
    /**
     * Filter, which Eventos to fetch.
     */
    where: EventosWhereUniqueInput
  }

  /**
   * Eventos findUniqueOrThrow
   */
  export type EventosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos
     */
    select?: EventosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventosInclude<ExtArgs> | null
    /**
     * Filter, which Eventos to fetch.
     */
    where: EventosWhereUniqueInput
  }

  /**
   * Eventos findFirst
   */
  export type EventosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos
     */
    select?: EventosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventosInclude<ExtArgs> | null
    /**
     * Filter, which Eventos to fetch.
     */
    where?: EventosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventosOrderByWithRelationInput | EventosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Eventos.
     */
    cursor?: EventosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Eventos.
     */
    distinct?: EventosScalarFieldEnum | EventosScalarFieldEnum[]
  }

  /**
   * Eventos findFirstOrThrow
   */
  export type EventosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos
     */
    select?: EventosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventosInclude<ExtArgs> | null
    /**
     * Filter, which Eventos to fetch.
     */
    where?: EventosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventosOrderByWithRelationInput | EventosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Eventos.
     */
    cursor?: EventosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Eventos.
     */
    distinct?: EventosScalarFieldEnum | EventosScalarFieldEnum[]
  }

  /**
   * Eventos findMany
   */
  export type EventosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos
     */
    select?: EventosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventosInclude<ExtArgs> | null
    /**
     * Filter, which Eventos to fetch.
     */
    where?: EventosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventosOrderByWithRelationInput | EventosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Eventos.
     */
    cursor?: EventosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    distinct?: EventosScalarFieldEnum | EventosScalarFieldEnum[]
  }

  /**
   * Eventos create
   */
  export type EventosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos
     */
    select?: EventosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventosInclude<ExtArgs> | null
    /**
     * The data needed to create a Eventos.
     */
    data: XOR<EventosCreateInput, EventosUncheckedCreateInput>
  }

  /**
   * Eventos createMany
   */
  export type EventosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Eventos.
     */
    data: EventosCreateManyInput | EventosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Eventos createManyAndReturn
   */
  export type EventosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos
     */
    select?: EventosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Eventos.
     */
    data: EventosCreateManyInput | EventosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Eventos update
   */
  export type EventosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos
     */
    select?: EventosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventosInclude<ExtArgs> | null
    /**
     * The data needed to update a Eventos.
     */
    data: XOR<EventosUpdateInput, EventosUncheckedUpdateInput>
    /**
     * Choose, which Eventos to update.
     */
    where: EventosWhereUniqueInput
  }

  /**
   * Eventos updateMany
   */
  export type EventosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Eventos.
     */
    data: XOR<EventosUpdateManyMutationInput, EventosUncheckedUpdateManyInput>
    /**
     * Filter which Eventos to update
     */
    where?: EventosWhereInput
  }

  /**
   * Eventos upsert
   */
  export type EventosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos
     */
    select?: EventosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventosInclude<ExtArgs> | null
    /**
     * The filter to search for the Eventos to update in case it exists.
     */
    where: EventosWhereUniqueInput
    /**
     * In case the Eventos found by the `where` argument doesn't exist, create a new Eventos with this data.
     */
    create: XOR<EventosCreateInput, EventosUncheckedCreateInput>
    /**
     * In case the Eventos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventosUpdateInput, EventosUncheckedUpdateInput>
  }

  /**
   * Eventos delete
   */
  export type EventosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos
     */
    select?: EventosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventosInclude<ExtArgs> | null
    /**
     * Filter which Eventos to delete.
     */
    where: EventosWhereUniqueInput
  }

  /**
   * Eventos deleteMany
   */
  export type EventosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Eventos to delete
     */
    where?: EventosWhereInput
  }

  /**
   * Eventos.usersSupport
   */
  export type Eventos$usersSupportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario_Eventos
     */
    select?: Usuario_EventosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Usuario_EventosInclude<ExtArgs> | null
    where?: Usuario_EventosWhereInput
    orderBy?: Usuario_EventosOrderByWithRelationInput | Usuario_EventosOrderByWithRelationInput[]
    cursor?: Usuario_EventosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Usuario_EventosScalarFieldEnum | Usuario_EventosScalarFieldEnum[]
  }

  /**
   * Eventos without action
   */
  export type EventosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Eventos
     */
    select?: EventosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventosInclude<ExtArgs> | null
  }


  /**
   * Model Usuario_Eventos
   */

  export type AggregateUsuario_Eventos = {
    _count: Usuario_EventosCountAggregateOutputType | null
    _avg: Usuario_EventosAvgAggregateOutputType | null
    _sum: Usuario_EventosSumAggregateOutputType | null
    _min: Usuario_EventosMinAggregateOutputType | null
    _max: Usuario_EventosMaxAggregateOutputType | null
  }

  export type Usuario_EventosAvgAggregateOutputType = {
    userId: number | null
    eventId: number | null
  }

  export type Usuario_EventosSumAggregateOutputType = {
    userId: number | null
    eventId: number | null
  }

  export type Usuario_EventosMinAggregateOutputType = {
    userId: number | null
    eventId: number | null
  }

  export type Usuario_EventosMaxAggregateOutputType = {
    userId: number | null
    eventId: number | null
  }

  export type Usuario_EventosCountAggregateOutputType = {
    userId: number
    eventId: number
    _all: number
  }


  export type Usuario_EventosAvgAggregateInputType = {
    userId?: true
    eventId?: true
  }

  export type Usuario_EventosSumAggregateInputType = {
    userId?: true
    eventId?: true
  }

  export type Usuario_EventosMinAggregateInputType = {
    userId?: true
    eventId?: true
  }

  export type Usuario_EventosMaxAggregateInputType = {
    userId?: true
    eventId?: true
  }

  export type Usuario_EventosCountAggregateInputType = {
    userId?: true
    eventId?: true
    _all?: true
  }

  export type Usuario_EventosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario_Eventos to aggregate.
     */
    where?: Usuario_EventosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuario_Eventos to fetch.
     */
    orderBy?: Usuario_EventosOrderByWithRelationInput | Usuario_EventosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Usuario_EventosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuario_Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuario_Eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuario_Eventos
    **/
    _count?: true | Usuario_EventosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Usuario_EventosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Usuario_EventosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Usuario_EventosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Usuario_EventosMaxAggregateInputType
  }

  export type GetUsuario_EventosAggregateType<T extends Usuario_EventosAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario_Eventos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario_Eventos[P]>
      : GetScalarType<T[P], AggregateUsuario_Eventos[P]>
  }




  export type Usuario_EventosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Usuario_EventosWhereInput
    orderBy?: Usuario_EventosOrderByWithAggregationInput | Usuario_EventosOrderByWithAggregationInput[]
    by: Usuario_EventosScalarFieldEnum[] | Usuario_EventosScalarFieldEnum
    having?: Usuario_EventosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Usuario_EventosCountAggregateInputType | true
    _avg?: Usuario_EventosAvgAggregateInputType
    _sum?: Usuario_EventosSumAggregateInputType
    _min?: Usuario_EventosMinAggregateInputType
    _max?: Usuario_EventosMaxAggregateInputType
  }

  export type Usuario_EventosGroupByOutputType = {
    userId: number
    eventId: number
    _count: Usuario_EventosCountAggregateOutputType | null
    _avg: Usuario_EventosAvgAggregateOutputType | null
    _sum: Usuario_EventosSumAggregateOutputType | null
    _min: Usuario_EventosMinAggregateOutputType | null
    _max: Usuario_EventosMaxAggregateOutputType | null
  }

  type GetUsuario_EventosGroupByPayload<T extends Usuario_EventosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Usuario_EventosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Usuario_EventosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Usuario_EventosGroupByOutputType[P]>
            : GetScalarType<T[P], Usuario_EventosGroupByOutputType[P]>
        }
      >
    >


  export type Usuario_EventosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    eventId?: boolean
    usersSupport?: boolean | UsuariosDefaultArgs<ExtArgs>
    eventsSupported?: boolean | EventosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario_Eventos"]>

  export type Usuario_EventosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    eventId?: boolean
    usersSupport?: boolean | UsuariosDefaultArgs<ExtArgs>
    eventsSupported?: boolean | EventosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario_Eventos"]>

  export type Usuario_EventosSelectScalar = {
    userId?: boolean
    eventId?: boolean
  }

  export type Usuario_EventosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usersSupport?: boolean | UsuariosDefaultArgs<ExtArgs>
    eventsSupported?: boolean | EventosDefaultArgs<ExtArgs>
  }
  export type Usuario_EventosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usersSupport?: boolean | UsuariosDefaultArgs<ExtArgs>
    eventsSupported?: boolean | EventosDefaultArgs<ExtArgs>
  }

  export type $Usuario_EventosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario_Eventos"
    objects: {
      usersSupport: Prisma.$UsuariosPayload<ExtArgs>
      eventsSupported: Prisma.$EventosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      eventId: number
    }, ExtArgs["result"]["usuario_Eventos"]>
    composites: {}
  }

  type Usuario_EventosGetPayload<S extends boolean | null | undefined | Usuario_EventosDefaultArgs> = $Result.GetResult<Prisma.$Usuario_EventosPayload, S>

  type Usuario_EventosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Usuario_EventosFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Usuario_EventosCountAggregateInputType | true
    }

  export interface Usuario_EventosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario_Eventos'], meta: { name: 'Usuario_Eventos' } }
    /**
     * Find zero or one Usuario_Eventos that matches the filter.
     * @param {Usuario_EventosFindUniqueArgs} args - Arguments to find a Usuario_Eventos
     * @example
     * // Get one Usuario_Eventos
     * const usuario_Eventos = await prisma.usuario_Eventos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Usuario_EventosFindUniqueArgs>(args: SelectSubset<T, Usuario_EventosFindUniqueArgs<ExtArgs>>): Prisma__Usuario_EventosClient<$Result.GetResult<Prisma.$Usuario_EventosPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Usuario_Eventos that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {Usuario_EventosFindUniqueOrThrowArgs} args - Arguments to find a Usuario_Eventos
     * @example
     * // Get one Usuario_Eventos
     * const usuario_Eventos = await prisma.usuario_Eventos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Usuario_EventosFindUniqueOrThrowArgs>(args: SelectSubset<T, Usuario_EventosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Usuario_EventosClient<$Result.GetResult<Prisma.$Usuario_EventosPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Usuario_Eventos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Usuario_EventosFindFirstArgs} args - Arguments to find a Usuario_Eventos
     * @example
     * // Get one Usuario_Eventos
     * const usuario_Eventos = await prisma.usuario_Eventos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Usuario_EventosFindFirstArgs>(args?: SelectSubset<T, Usuario_EventosFindFirstArgs<ExtArgs>>): Prisma__Usuario_EventosClient<$Result.GetResult<Prisma.$Usuario_EventosPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Usuario_Eventos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Usuario_EventosFindFirstOrThrowArgs} args - Arguments to find a Usuario_Eventos
     * @example
     * // Get one Usuario_Eventos
     * const usuario_Eventos = await prisma.usuario_Eventos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Usuario_EventosFindFirstOrThrowArgs>(args?: SelectSubset<T, Usuario_EventosFindFirstOrThrowArgs<ExtArgs>>): Prisma__Usuario_EventosClient<$Result.GetResult<Prisma.$Usuario_EventosPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Usuario_Eventos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Usuario_EventosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuario_Eventos
     * const usuario_Eventos = await prisma.usuario_Eventos.findMany()
     * 
     * // Get first 10 Usuario_Eventos
     * const usuario_Eventos = await prisma.usuario_Eventos.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const usuario_EventosWithUserIdOnly = await prisma.usuario_Eventos.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends Usuario_EventosFindManyArgs>(args?: SelectSubset<T, Usuario_EventosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Usuario_EventosPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Usuario_Eventos.
     * @param {Usuario_EventosCreateArgs} args - Arguments to create a Usuario_Eventos.
     * @example
     * // Create one Usuario_Eventos
     * const Usuario_Eventos = await prisma.usuario_Eventos.create({
     *   data: {
     *     // ... data to create a Usuario_Eventos
     *   }
     * })
     * 
     */
    create<T extends Usuario_EventosCreateArgs>(args: SelectSubset<T, Usuario_EventosCreateArgs<ExtArgs>>): Prisma__Usuario_EventosClient<$Result.GetResult<Prisma.$Usuario_EventosPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Usuario_Eventos.
     * @param {Usuario_EventosCreateManyArgs} args - Arguments to create many Usuario_Eventos.
     * @example
     * // Create many Usuario_Eventos
     * const usuario_Eventos = await prisma.usuario_Eventos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Usuario_EventosCreateManyArgs>(args?: SelectSubset<T, Usuario_EventosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuario_Eventos and returns the data saved in the database.
     * @param {Usuario_EventosCreateManyAndReturnArgs} args - Arguments to create many Usuario_Eventos.
     * @example
     * // Create many Usuario_Eventos
     * const usuario_Eventos = await prisma.usuario_Eventos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuario_Eventos and only return the `userId`
     * const usuario_EventosWithUserIdOnly = await prisma.usuario_Eventos.createManyAndReturn({ 
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Usuario_EventosCreateManyAndReturnArgs>(args?: SelectSubset<T, Usuario_EventosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Usuario_EventosPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Usuario_Eventos.
     * @param {Usuario_EventosDeleteArgs} args - Arguments to delete one Usuario_Eventos.
     * @example
     * // Delete one Usuario_Eventos
     * const Usuario_Eventos = await prisma.usuario_Eventos.delete({
     *   where: {
     *     // ... filter to delete one Usuario_Eventos
     *   }
     * })
     * 
     */
    delete<T extends Usuario_EventosDeleteArgs>(args: SelectSubset<T, Usuario_EventosDeleteArgs<ExtArgs>>): Prisma__Usuario_EventosClient<$Result.GetResult<Prisma.$Usuario_EventosPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Usuario_Eventos.
     * @param {Usuario_EventosUpdateArgs} args - Arguments to update one Usuario_Eventos.
     * @example
     * // Update one Usuario_Eventos
     * const usuario_Eventos = await prisma.usuario_Eventos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Usuario_EventosUpdateArgs>(args: SelectSubset<T, Usuario_EventosUpdateArgs<ExtArgs>>): Prisma__Usuario_EventosClient<$Result.GetResult<Prisma.$Usuario_EventosPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Usuario_Eventos.
     * @param {Usuario_EventosDeleteManyArgs} args - Arguments to filter Usuario_Eventos to delete.
     * @example
     * // Delete a few Usuario_Eventos
     * const { count } = await prisma.usuario_Eventos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Usuario_EventosDeleteManyArgs>(args?: SelectSubset<T, Usuario_EventosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuario_Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Usuario_EventosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuario_Eventos
     * const usuario_Eventos = await prisma.usuario_Eventos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Usuario_EventosUpdateManyArgs>(args: SelectSubset<T, Usuario_EventosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario_Eventos.
     * @param {Usuario_EventosUpsertArgs} args - Arguments to update or create a Usuario_Eventos.
     * @example
     * // Update or create a Usuario_Eventos
     * const usuario_Eventos = await prisma.usuario_Eventos.upsert({
     *   create: {
     *     // ... data to create a Usuario_Eventos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario_Eventos we want to update
     *   }
     * })
     */
    upsert<T extends Usuario_EventosUpsertArgs>(args: SelectSubset<T, Usuario_EventosUpsertArgs<ExtArgs>>): Prisma__Usuario_EventosClient<$Result.GetResult<Prisma.$Usuario_EventosPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Usuario_Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Usuario_EventosCountArgs} args - Arguments to filter Usuario_Eventos to count.
     * @example
     * // Count the number of Usuario_Eventos
     * const count = await prisma.usuario_Eventos.count({
     *   where: {
     *     // ... the filter for the Usuario_Eventos we want to count
     *   }
     * })
    **/
    count<T extends Usuario_EventosCountArgs>(
      args?: Subset<T, Usuario_EventosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Usuario_EventosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario_Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Usuario_EventosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Usuario_EventosAggregateArgs>(args: Subset<T, Usuario_EventosAggregateArgs>): Prisma.PrismaPromise<GetUsuario_EventosAggregateType<T>>

    /**
     * Group by Usuario_Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Usuario_EventosGroupByArgs} args - Group by arguments.
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
      T extends Usuario_EventosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Usuario_EventosGroupByArgs['orderBy'] }
        : { orderBy?: Usuario_EventosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Usuario_EventosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuario_EventosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario_Eventos model
   */
  readonly fields: Usuario_EventosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario_Eventos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Usuario_EventosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usersSupport<T extends UsuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuariosDefaultArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    eventsSupported<T extends EventosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventosDefaultArgs<ExtArgs>>): Prisma__EventosClient<$Result.GetResult<Prisma.$EventosPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Usuario_Eventos model
   */ 
  interface Usuario_EventosFieldRefs {
    readonly userId: FieldRef<"Usuario_Eventos", 'Int'>
    readonly eventId: FieldRef<"Usuario_Eventos", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Usuario_Eventos findUnique
   */
  export type Usuario_EventosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario_Eventos
     */
    select?: Usuario_EventosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Usuario_EventosInclude<ExtArgs> | null
    /**
     * Filter, which Usuario_Eventos to fetch.
     */
    where: Usuario_EventosWhereUniqueInput
  }

  /**
   * Usuario_Eventos findUniqueOrThrow
   */
  export type Usuario_EventosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario_Eventos
     */
    select?: Usuario_EventosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Usuario_EventosInclude<ExtArgs> | null
    /**
     * Filter, which Usuario_Eventos to fetch.
     */
    where: Usuario_EventosWhereUniqueInput
  }

  /**
   * Usuario_Eventos findFirst
   */
  export type Usuario_EventosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario_Eventos
     */
    select?: Usuario_EventosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Usuario_EventosInclude<ExtArgs> | null
    /**
     * Filter, which Usuario_Eventos to fetch.
     */
    where?: Usuario_EventosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuario_Eventos to fetch.
     */
    orderBy?: Usuario_EventosOrderByWithRelationInput | Usuario_EventosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuario_Eventos.
     */
    cursor?: Usuario_EventosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuario_Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuario_Eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuario_Eventos.
     */
    distinct?: Usuario_EventosScalarFieldEnum | Usuario_EventosScalarFieldEnum[]
  }

  /**
   * Usuario_Eventos findFirstOrThrow
   */
  export type Usuario_EventosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario_Eventos
     */
    select?: Usuario_EventosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Usuario_EventosInclude<ExtArgs> | null
    /**
     * Filter, which Usuario_Eventos to fetch.
     */
    where?: Usuario_EventosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuario_Eventos to fetch.
     */
    orderBy?: Usuario_EventosOrderByWithRelationInput | Usuario_EventosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuario_Eventos.
     */
    cursor?: Usuario_EventosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuario_Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuario_Eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuario_Eventos.
     */
    distinct?: Usuario_EventosScalarFieldEnum | Usuario_EventosScalarFieldEnum[]
  }

  /**
   * Usuario_Eventos findMany
   */
  export type Usuario_EventosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario_Eventos
     */
    select?: Usuario_EventosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Usuario_EventosInclude<ExtArgs> | null
    /**
     * Filter, which Usuario_Eventos to fetch.
     */
    where?: Usuario_EventosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuario_Eventos to fetch.
     */
    orderBy?: Usuario_EventosOrderByWithRelationInput | Usuario_EventosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuario_Eventos.
     */
    cursor?: Usuario_EventosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuario_Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuario_Eventos.
     */
    skip?: number
    distinct?: Usuario_EventosScalarFieldEnum | Usuario_EventosScalarFieldEnum[]
  }

  /**
   * Usuario_Eventos create
   */
  export type Usuario_EventosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario_Eventos
     */
    select?: Usuario_EventosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Usuario_EventosInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario_Eventos.
     */
    data: XOR<Usuario_EventosCreateInput, Usuario_EventosUncheckedCreateInput>
  }

  /**
   * Usuario_Eventos createMany
   */
  export type Usuario_EventosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuario_Eventos.
     */
    data: Usuario_EventosCreateManyInput | Usuario_EventosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario_Eventos createManyAndReturn
   */
  export type Usuario_EventosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario_Eventos
     */
    select?: Usuario_EventosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Usuario_Eventos.
     */
    data: Usuario_EventosCreateManyInput | Usuario_EventosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Usuario_EventosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario_Eventos update
   */
  export type Usuario_EventosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario_Eventos
     */
    select?: Usuario_EventosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Usuario_EventosInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario_Eventos.
     */
    data: XOR<Usuario_EventosUpdateInput, Usuario_EventosUncheckedUpdateInput>
    /**
     * Choose, which Usuario_Eventos to update.
     */
    where: Usuario_EventosWhereUniqueInput
  }

  /**
   * Usuario_Eventos updateMany
   */
  export type Usuario_EventosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuario_Eventos.
     */
    data: XOR<Usuario_EventosUpdateManyMutationInput, Usuario_EventosUncheckedUpdateManyInput>
    /**
     * Filter which Usuario_Eventos to update
     */
    where?: Usuario_EventosWhereInput
  }

  /**
   * Usuario_Eventos upsert
   */
  export type Usuario_EventosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario_Eventos
     */
    select?: Usuario_EventosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Usuario_EventosInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario_Eventos to update in case it exists.
     */
    where: Usuario_EventosWhereUniqueInput
    /**
     * In case the Usuario_Eventos found by the `where` argument doesn't exist, create a new Usuario_Eventos with this data.
     */
    create: XOR<Usuario_EventosCreateInput, Usuario_EventosUncheckedCreateInput>
    /**
     * In case the Usuario_Eventos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Usuario_EventosUpdateInput, Usuario_EventosUncheckedUpdateInput>
  }

  /**
   * Usuario_Eventos delete
   */
  export type Usuario_EventosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario_Eventos
     */
    select?: Usuario_EventosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Usuario_EventosInclude<ExtArgs> | null
    /**
     * Filter which Usuario_Eventos to delete.
     */
    where: Usuario_EventosWhereUniqueInput
  }

  /**
   * Usuario_Eventos deleteMany
   */
  export type Usuario_EventosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario_Eventos to delete
     */
    where?: Usuario_EventosWhereInput
  }

  /**
   * Usuario_Eventos without action
   */
  export type Usuario_EventosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario_Eventos
     */
    select?: Usuario_EventosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Usuario_EventosInclude<ExtArgs> | null
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


  export const UsuariosScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    role: 'role',
    password: 'password',
    name: 'name',
    chagePassword: 'chagePassword',
    active: 'active'
  };

  export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum]


  export const NoticiasScalarFieldEnum: {
    id: 'id',
    imageUrl: 'imageUrl',
    title: 'title',
    text: 'text',
    createdDate: 'createdDate'
  };

  export type NoticiasScalarFieldEnum = (typeof NoticiasScalarFieldEnum)[keyof typeof NoticiasScalarFieldEnum]


  export const DevocionalesScalarFieldEnum: {
    id: 'id',
    imageUrl: 'imageUrl',
    createdDate: 'createdDate'
  };

  export type DevocionalesScalarFieldEnum = (typeof DevocionalesScalarFieldEnum)[keyof typeof DevocionalesScalarFieldEnum]


  export const EventosScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    status: 'status',
    scheduledDate: 'scheduledDate',
    daysDuration: 'daysDuration'
  };

  export type EventosScalarFieldEnum = (typeof EventosScalarFieldEnum)[keyof typeof EventosScalarFieldEnum]


  export const Usuario_EventosScalarFieldEnum: {
    userId: 'userId',
    eventId: 'eventId'
  };

  export type Usuario_EventosScalarFieldEnum = (typeof Usuario_EventosScalarFieldEnum)[keyof typeof Usuario_EventosScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Rol'
   */
  export type EnumRolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rol'>
    


  /**
   * Reference to a field of type 'Rol[]'
   */
  export type ListEnumRolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rol[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Evento_Estado'
   */
  export type EnumEvento_EstadoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Evento_Estado'>
    


  /**
   * Reference to a field of type 'Evento_Estado[]'
   */
  export type ListEnumEvento_EstadoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Evento_Estado[]'>
    


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


  export type UsuariosWhereInput = {
    AND?: UsuariosWhereInput | UsuariosWhereInput[]
    OR?: UsuariosWhereInput[]
    NOT?: UsuariosWhereInput | UsuariosWhereInput[]
    id?: IntFilter<"Usuarios"> | number
    email?: StringFilter<"Usuarios"> | string
    username?: StringFilter<"Usuarios"> | string
    role?: EnumRolFilter<"Usuarios"> | $Enums.Rol
    password?: StringFilter<"Usuarios"> | string
    name?: StringFilter<"Usuarios"> | string
    chagePassword?: BoolNullableFilter<"Usuarios"> | boolean | null
    active?: BoolNullableFilter<"Usuarios"> | boolean | null
    eventsSupported?: Usuario_EventosListRelationFilter
  }

  export type UsuariosOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    role?: SortOrder
    password?: SortOrder
    name?: SortOrder
    chagePassword?: SortOrderInput | SortOrder
    active?: SortOrderInput | SortOrder
    eventsSupported?: Usuario_EventosOrderByRelationAggregateInput
  }

  export type UsuariosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    username?: string
    AND?: UsuariosWhereInput | UsuariosWhereInput[]
    OR?: UsuariosWhereInput[]
    NOT?: UsuariosWhereInput | UsuariosWhereInput[]
    role?: EnumRolFilter<"Usuarios"> | $Enums.Rol
    password?: StringFilter<"Usuarios"> | string
    name?: StringFilter<"Usuarios"> | string
    chagePassword?: BoolNullableFilter<"Usuarios"> | boolean | null
    active?: BoolNullableFilter<"Usuarios"> | boolean | null
    eventsSupported?: Usuario_EventosListRelationFilter
  }, "id" | "email" | "username">

  export type UsuariosOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    role?: SortOrder
    password?: SortOrder
    name?: SortOrder
    chagePassword?: SortOrderInput | SortOrder
    active?: SortOrderInput | SortOrder
    _count?: UsuariosCountOrderByAggregateInput
    _avg?: UsuariosAvgOrderByAggregateInput
    _max?: UsuariosMaxOrderByAggregateInput
    _min?: UsuariosMinOrderByAggregateInput
    _sum?: UsuariosSumOrderByAggregateInput
  }

  export type UsuariosScalarWhereWithAggregatesInput = {
    AND?: UsuariosScalarWhereWithAggregatesInput | UsuariosScalarWhereWithAggregatesInput[]
    OR?: UsuariosScalarWhereWithAggregatesInput[]
    NOT?: UsuariosScalarWhereWithAggregatesInput | UsuariosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuarios"> | number
    email?: StringWithAggregatesFilter<"Usuarios"> | string
    username?: StringWithAggregatesFilter<"Usuarios"> | string
    role?: EnumRolWithAggregatesFilter<"Usuarios"> | $Enums.Rol
    password?: StringWithAggregatesFilter<"Usuarios"> | string
    name?: StringWithAggregatesFilter<"Usuarios"> | string
    chagePassword?: BoolNullableWithAggregatesFilter<"Usuarios"> | boolean | null
    active?: BoolNullableWithAggregatesFilter<"Usuarios"> | boolean | null
  }

  export type NoticiasWhereInput = {
    AND?: NoticiasWhereInput | NoticiasWhereInput[]
    OR?: NoticiasWhereInput[]
    NOT?: NoticiasWhereInput | NoticiasWhereInput[]
    id?: IntFilter<"Noticias"> | number
    imageUrl?: StringNullableFilter<"Noticias"> | string | null
    title?: StringFilter<"Noticias"> | string
    text?: StringFilter<"Noticias"> | string
    createdDate?: DateTimeNullableFilter<"Noticias"> | Date | string | null
  }

  export type NoticiasOrderByWithRelationInput = {
    id?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    title?: SortOrder
    text?: SortOrder
    createdDate?: SortOrderInput | SortOrder
  }

  export type NoticiasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NoticiasWhereInput | NoticiasWhereInput[]
    OR?: NoticiasWhereInput[]
    NOT?: NoticiasWhereInput | NoticiasWhereInput[]
    imageUrl?: StringNullableFilter<"Noticias"> | string | null
    title?: StringFilter<"Noticias"> | string
    text?: StringFilter<"Noticias"> | string
    createdDate?: DateTimeNullableFilter<"Noticias"> | Date | string | null
  }, "id">

  export type NoticiasOrderByWithAggregationInput = {
    id?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    title?: SortOrder
    text?: SortOrder
    createdDate?: SortOrderInput | SortOrder
    _count?: NoticiasCountOrderByAggregateInput
    _avg?: NoticiasAvgOrderByAggregateInput
    _max?: NoticiasMaxOrderByAggregateInput
    _min?: NoticiasMinOrderByAggregateInput
    _sum?: NoticiasSumOrderByAggregateInput
  }

  export type NoticiasScalarWhereWithAggregatesInput = {
    AND?: NoticiasScalarWhereWithAggregatesInput | NoticiasScalarWhereWithAggregatesInput[]
    OR?: NoticiasScalarWhereWithAggregatesInput[]
    NOT?: NoticiasScalarWhereWithAggregatesInput | NoticiasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Noticias"> | number
    imageUrl?: StringNullableWithAggregatesFilter<"Noticias"> | string | null
    title?: StringWithAggregatesFilter<"Noticias"> | string
    text?: StringWithAggregatesFilter<"Noticias"> | string
    createdDate?: DateTimeNullableWithAggregatesFilter<"Noticias"> | Date | string | null
  }

  export type DevocionalesWhereInput = {
    AND?: DevocionalesWhereInput | DevocionalesWhereInput[]
    OR?: DevocionalesWhereInput[]
    NOT?: DevocionalesWhereInput | DevocionalesWhereInput[]
    id?: IntFilter<"Devocionales"> | number
    imageUrl?: StringFilter<"Devocionales"> | string
    createdDate?: DateTimeNullableFilter<"Devocionales"> | Date | string | null
  }

  export type DevocionalesOrderByWithRelationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    createdDate?: SortOrderInput | SortOrder
  }

  export type DevocionalesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DevocionalesWhereInput | DevocionalesWhereInput[]
    OR?: DevocionalesWhereInput[]
    NOT?: DevocionalesWhereInput | DevocionalesWhereInput[]
    imageUrl?: StringFilter<"Devocionales"> | string
    createdDate?: DateTimeNullableFilter<"Devocionales"> | Date | string | null
  }, "id">

  export type DevocionalesOrderByWithAggregationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    createdDate?: SortOrderInput | SortOrder
    _count?: DevocionalesCountOrderByAggregateInput
    _avg?: DevocionalesAvgOrderByAggregateInput
    _max?: DevocionalesMaxOrderByAggregateInput
    _min?: DevocionalesMinOrderByAggregateInput
    _sum?: DevocionalesSumOrderByAggregateInput
  }

  export type DevocionalesScalarWhereWithAggregatesInput = {
    AND?: DevocionalesScalarWhereWithAggregatesInput | DevocionalesScalarWhereWithAggregatesInput[]
    OR?: DevocionalesScalarWhereWithAggregatesInput[]
    NOT?: DevocionalesScalarWhereWithAggregatesInput | DevocionalesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Devocionales"> | number
    imageUrl?: StringWithAggregatesFilter<"Devocionales"> | string
    createdDate?: DateTimeNullableWithAggregatesFilter<"Devocionales"> | Date | string | null
  }

  export type EventosWhereInput = {
    AND?: EventosWhereInput | EventosWhereInput[]
    OR?: EventosWhereInput[]
    NOT?: EventosWhereInput | EventosWhereInput[]
    id?: IntFilter<"Eventos"> | number
    title?: StringFilter<"Eventos"> | string
    description?: StringFilter<"Eventos"> | string
    status?: EnumEvento_EstadoFilter<"Eventos"> | $Enums.Evento_Estado
    scheduledDate?: DateTimeFilter<"Eventos"> | Date | string
    daysDuration?: IntFilter<"Eventos"> | number
    usersSupport?: Usuario_EventosListRelationFilter
  }

  export type EventosOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    scheduledDate?: SortOrder
    daysDuration?: SortOrder
    usersSupport?: Usuario_EventosOrderByRelationAggregateInput
  }

  export type EventosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EventosWhereInput | EventosWhereInput[]
    OR?: EventosWhereInput[]
    NOT?: EventosWhereInput | EventosWhereInput[]
    title?: StringFilter<"Eventos"> | string
    description?: StringFilter<"Eventos"> | string
    status?: EnumEvento_EstadoFilter<"Eventos"> | $Enums.Evento_Estado
    scheduledDate?: DateTimeFilter<"Eventos"> | Date | string
    daysDuration?: IntFilter<"Eventos"> | number
    usersSupport?: Usuario_EventosListRelationFilter
  }, "id">

  export type EventosOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    scheduledDate?: SortOrder
    daysDuration?: SortOrder
    _count?: EventosCountOrderByAggregateInput
    _avg?: EventosAvgOrderByAggregateInput
    _max?: EventosMaxOrderByAggregateInput
    _min?: EventosMinOrderByAggregateInput
    _sum?: EventosSumOrderByAggregateInput
  }

  export type EventosScalarWhereWithAggregatesInput = {
    AND?: EventosScalarWhereWithAggregatesInput | EventosScalarWhereWithAggregatesInput[]
    OR?: EventosScalarWhereWithAggregatesInput[]
    NOT?: EventosScalarWhereWithAggregatesInput | EventosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Eventos"> | number
    title?: StringWithAggregatesFilter<"Eventos"> | string
    description?: StringWithAggregatesFilter<"Eventos"> | string
    status?: EnumEvento_EstadoWithAggregatesFilter<"Eventos"> | $Enums.Evento_Estado
    scheduledDate?: DateTimeWithAggregatesFilter<"Eventos"> | Date | string
    daysDuration?: IntWithAggregatesFilter<"Eventos"> | number
  }

  export type Usuario_EventosWhereInput = {
    AND?: Usuario_EventosWhereInput | Usuario_EventosWhereInput[]
    OR?: Usuario_EventosWhereInput[]
    NOT?: Usuario_EventosWhereInput | Usuario_EventosWhereInput[]
    userId?: IntFilter<"Usuario_Eventos"> | number
    eventId?: IntFilter<"Usuario_Eventos"> | number
    usersSupport?: XOR<UsuariosRelationFilter, UsuariosWhereInput>
    eventsSupported?: XOR<EventosRelationFilter, EventosWhereInput>
  }

  export type Usuario_EventosOrderByWithRelationInput = {
    userId?: SortOrder
    eventId?: SortOrder
    usersSupport?: UsuariosOrderByWithRelationInput
    eventsSupported?: EventosOrderByWithRelationInput
  }

  export type Usuario_EventosWhereUniqueInput = Prisma.AtLeast<{
    userId_eventId?: Usuario_EventosUserIdEventIdCompoundUniqueInput
    AND?: Usuario_EventosWhereInput | Usuario_EventosWhereInput[]
    OR?: Usuario_EventosWhereInput[]
    NOT?: Usuario_EventosWhereInput | Usuario_EventosWhereInput[]
    userId?: IntFilter<"Usuario_Eventos"> | number
    eventId?: IntFilter<"Usuario_Eventos"> | number
    usersSupport?: XOR<UsuariosRelationFilter, UsuariosWhereInput>
    eventsSupported?: XOR<EventosRelationFilter, EventosWhereInput>
  }, "userId_eventId">

  export type Usuario_EventosOrderByWithAggregationInput = {
    userId?: SortOrder
    eventId?: SortOrder
    _count?: Usuario_EventosCountOrderByAggregateInput
    _avg?: Usuario_EventosAvgOrderByAggregateInput
    _max?: Usuario_EventosMaxOrderByAggregateInput
    _min?: Usuario_EventosMinOrderByAggregateInput
    _sum?: Usuario_EventosSumOrderByAggregateInput
  }

  export type Usuario_EventosScalarWhereWithAggregatesInput = {
    AND?: Usuario_EventosScalarWhereWithAggregatesInput | Usuario_EventosScalarWhereWithAggregatesInput[]
    OR?: Usuario_EventosScalarWhereWithAggregatesInput[]
    NOT?: Usuario_EventosScalarWhereWithAggregatesInput | Usuario_EventosScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"Usuario_Eventos"> | number
    eventId?: IntWithAggregatesFilter<"Usuario_Eventos"> | number
  }

  export type UsuariosCreateInput = {
    email: string
    username: string
    role: $Enums.Rol
    password: string
    name: string
    chagePassword?: boolean | null
    active?: boolean | null
    eventsSupported?: Usuario_EventosCreateNestedManyWithoutUsersSupportInput
  }

  export type UsuariosUncheckedCreateInput = {
    id?: number
    email: string
    username: string
    role: $Enums.Rol
    password: string
    name: string
    chagePassword?: boolean | null
    active?: boolean | null
    eventsSupported?: Usuario_EventosUncheckedCreateNestedManyWithoutUsersSupportInput
  }

  export type UsuariosUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    chagePassword?: NullableBoolFieldUpdateOperationsInput | boolean | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    eventsSupported?: Usuario_EventosUpdateManyWithoutUsersSupportNestedInput
  }

  export type UsuariosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    chagePassword?: NullableBoolFieldUpdateOperationsInput | boolean | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    eventsSupported?: Usuario_EventosUncheckedUpdateManyWithoutUsersSupportNestedInput
  }

  export type UsuariosCreateManyInput = {
    id?: number
    email: string
    username: string
    role: $Enums.Rol
    password: string
    name: string
    chagePassword?: boolean | null
    active?: boolean | null
  }

  export type UsuariosUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    chagePassword?: NullableBoolFieldUpdateOperationsInput | boolean | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type UsuariosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    chagePassword?: NullableBoolFieldUpdateOperationsInput | boolean | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type NoticiasCreateInput = {
    imageUrl?: string | null
    title: string
    text: string
    createdDate?: Date | string | null
  }

  export type NoticiasUncheckedCreateInput = {
    id?: number
    imageUrl?: string | null
    title: string
    text: string
    createdDate?: Date | string | null
  }

  export type NoticiasUpdateInput = {
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NoticiasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NoticiasCreateManyInput = {
    id?: number
    imageUrl?: string | null
    title: string
    text: string
    createdDate?: Date | string | null
  }

  export type NoticiasUpdateManyMutationInput = {
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NoticiasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DevocionalesCreateInput = {
    imageUrl: string
    createdDate?: Date | string | null
  }

  export type DevocionalesUncheckedCreateInput = {
    id?: number
    imageUrl: string
    createdDate?: Date | string | null
  }

  export type DevocionalesUpdateInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DevocionalesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DevocionalesCreateManyInput = {
    id?: number
    imageUrl: string
    createdDate?: Date | string | null
  }

  export type DevocionalesUpdateManyMutationInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DevocionalesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EventosCreateInput = {
    title: string
    description: string
    status: $Enums.Evento_Estado
    scheduledDate: Date | string
    daysDuration: number
    usersSupport?: Usuario_EventosCreateNestedManyWithoutEventsSupportedInput
  }

  export type EventosUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    status: $Enums.Evento_Estado
    scheduledDate: Date | string
    daysDuration: number
    usersSupport?: Usuario_EventosUncheckedCreateNestedManyWithoutEventsSupportedInput
  }

  export type EventosUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumEvento_EstadoFieldUpdateOperationsInput | $Enums.Evento_Estado
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    daysDuration?: IntFieldUpdateOperationsInput | number
    usersSupport?: Usuario_EventosUpdateManyWithoutEventsSupportedNestedInput
  }

  export type EventosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumEvento_EstadoFieldUpdateOperationsInput | $Enums.Evento_Estado
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    daysDuration?: IntFieldUpdateOperationsInput | number
    usersSupport?: Usuario_EventosUncheckedUpdateManyWithoutEventsSupportedNestedInput
  }

  export type EventosCreateManyInput = {
    id?: number
    title: string
    description: string
    status: $Enums.Evento_Estado
    scheduledDate: Date | string
    daysDuration: number
  }

  export type EventosUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumEvento_EstadoFieldUpdateOperationsInput | $Enums.Evento_Estado
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    daysDuration?: IntFieldUpdateOperationsInput | number
  }

  export type EventosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumEvento_EstadoFieldUpdateOperationsInput | $Enums.Evento_Estado
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    daysDuration?: IntFieldUpdateOperationsInput | number
  }

  export type Usuario_EventosCreateInput = {
    usersSupport: UsuariosCreateNestedOneWithoutEventsSupportedInput
    eventsSupported: EventosCreateNestedOneWithoutUsersSupportInput
  }

  export type Usuario_EventosUncheckedCreateInput = {
    userId: number
    eventId: number
  }

  export type Usuario_EventosUpdateInput = {
    usersSupport?: UsuariosUpdateOneRequiredWithoutEventsSupportedNestedInput
    eventsSupported?: EventosUpdateOneRequiredWithoutUsersSupportNestedInput
  }

  export type Usuario_EventosUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
  }

  export type Usuario_EventosCreateManyInput = {
    userId: number
    eventId: number
  }

  export type Usuario_EventosUpdateManyMutationInput = {

  }

  export type Usuario_EventosUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
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

  export type EnumRolFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolFilter<$PrismaModel> | $Enums.Rol
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type Usuario_EventosListRelationFilter = {
    every?: Usuario_EventosWhereInput
    some?: Usuario_EventosWhereInput
    none?: Usuario_EventosWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type Usuario_EventosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuariosCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    role?: SortOrder
    password?: SortOrder
    name?: SortOrder
    chagePassword?: SortOrder
    active?: SortOrder
  }

  export type UsuariosAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuariosMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    role?: SortOrder
    password?: SortOrder
    name?: SortOrder
    chagePassword?: SortOrder
    active?: SortOrder
  }

  export type UsuariosMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    role?: SortOrder
    password?: SortOrder
    name?: SortOrder
    chagePassword?: SortOrder
    active?: SortOrder
  }

  export type UsuariosSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnumRolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolWithAggregatesFilter<$PrismaModel> | $Enums.Rol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolFilter<$PrismaModel>
    _max?: NestedEnumRolFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type NoticiasCountOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    title?: SortOrder
    text?: SortOrder
    createdDate?: SortOrder
  }

  export type NoticiasAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NoticiasMaxOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    title?: SortOrder
    text?: SortOrder
    createdDate?: SortOrder
  }

  export type NoticiasMinOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    title?: SortOrder
    text?: SortOrder
    createdDate?: SortOrder
  }

  export type NoticiasSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type DevocionalesCountOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    createdDate?: SortOrder
  }

  export type DevocionalesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DevocionalesMaxOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    createdDate?: SortOrder
  }

  export type DevocionalesMinOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    createdDate?: SortOrder
  }

  export type DevocionalesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumEvento_EstadoFilter<$PrismaModel = never> = {
    equals?: $Enums.Evento_Estado | EnumEvento_EstadoFieldRefInput<$PrismaModel>
    in?: $Enums.Evento_Estado[] | ListEnumEvento_EstadoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Evento_Estado[] | ListEnumEvento_EstadoFieldRefInput<$PrismaModel>
    not?: NestedEnumEvento_EstadoFilter<$PrismaModel> | $Enums.Evento_Estado
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

  export type EventosCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    scheduledDate?: SortOrder
    daysDuration?: SortOrder
  }

  export type EventosAvgOrderByAggregateInput = {
    id?: SortOrder
    daysDuration?: SortOrder
  }

  export type EventosMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    scheduledDate?: SortOrder
    daysDuration?: SortOrder
  }

  export type EventosMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    scheduledDate?: SortOrder
    daysDuration?: SortOrder
  }

  export type EventosSumOrderByAggregateInput = {
    id?: SortOrder
    daysDuration?: SortOrder
  }

  export type EnumEvento_EstadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Evento_Estado | EnumEvento_EstadoFieldRefInput<$PrismaModel>
    in?: $Enums.Evento_Estado[] | ListEnumEvento_EstadoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Evento_Estado[] | ListEnumEvento_EstadoFieldRefInput<$PrismaModel>
    not?: NestedEnumEvento_EstadoWithAggregatesFilter<$PrismaModel> | $Enums.Evento_Estado
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEvento_EstadoFilter<$PrismaModel>
    _max?: NestedEnumEvento_EstadoFilter<$PrismaModel>
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

  export type UsuariosRelationFilter = {
    is?: UsuariosWhereInput
    isNot?: UsuariosWhereInput
  }

  export type EventosRelationFilter = {
    is?: EventosWhereInput
    isNot?: EventosWhereInput
  }

  export type Usuario_EventosUserIdEventIdCompoundUniqueInput = {
    userId: number
    eventId: number
  }

  export type Usuario_EventosCountOrderByAggregateInput = {
    userId?: SortOrder
    eventId?: SortOrder
  }

  export type Usuario_EventosAvgOrderByAggregateInput = {
    userId?: SortOrder
    eventId?: SortOrder
  }

  export type Usuario_EventosMaxOrderByAggregateInput = {
    userId?: SortOrder
    eventId?: SortOrder
  }

  export type Usuario_EventosMinOrderByAggregateInput = {
    userId?: SortOrder
    eventId?: SortOrder
  }

  export type Usuario_EventosSumOrderByAggregateInput = {
    userId?: SortOrder
    eventId?: SortOrder
  }

  export type Usuario_EventosCreateNestedManyWithoutUsersSupportInput = {
    create?: XOR<Usuario_EventosCreateWithoutUsersSupportInput, Usuario_EventosUncheckedCreateWithoutUsersSupportInput> | Usuario_EventosCreateWithoutUsersSupportInput[] | Usuario_EventosUncheckedCreateWithoutUsersSupportInput[]
    connectOrCreate?: Usuario_EventosCreateOrConnectWithoutUsersSupportInput | Usuario_EventosCreateOrConnectWithoutUsersSupportInput[]
    createMany?: Usuario_EventosCreateManyUsersSupportInputEnvelope
    connect?: Usuario_EventosWhereUniqueInput | Usuario_EventosWhereUniqueInput[]
  }

  export type Usuario_EventosUncheckedCreateNestedManyWithoutUsersSupportInput = {
    create?: XOR<Usuario_EventosCreateWithoutUsersSupportInput, Usuario_EventosUncheckedCreateWithoutUsersSupportInput> | Usuario_EventosCreateWithoutUsersSupportInput[] | Usuario_EventosUncheckedCreateWithoutUsersSupportInput[]
    connectOrCreate?: Usuario_EventosCreateOrConnectWithoutUsersSupportInput | Usuario_EventosCreateOrConnectWithoutUsersSupportInput[]
    createMany?: Usuario_EventosCreateManyUsersSupportInputEnvelope
    connect?: Usuario_EventosWhereUniqueInput | Usuario_EventosWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRolFieldUpdateOperationsInput = {
    set?: $Enums.Rol
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type Usuario_EventosUpdateManyWithoutUsersSupportNestedInput = {
    create?: XOR<Usuario_EventosCreateWithoutUsersSupportInput, Usuario_EventosUncheckedCreateWithoutUsersSupportInput> | Usuario_EventosCreateWithoutUsersSupportInput[] | Usuario_EventosUncheckedCreateWithoutUsersSupportInput[]
    connectOrCreate?: Usuario_EventosCreateOrConnectWithoutUsersSupportInput | Usuario_EventosCreateOrConnectWithoutUsersSupportInput[]
    upsert?: Usuario_EventosUpsertWithWhereUniqueWithoutUsersSupportInput | Usuario_EventosUpsertWithWhereUniqueWithoutUsersSupportInput[]
    createMany?: Usuario_EventosCreateManyUsersSupportInputEnvelope
    set?: Usuario_EventosWhereUniqueInput | Usuario_EventosWhereUniqueInput[]
    disconnect?: Usuario_EventosWhereUniqueInput | Usuario_EventosWhereUniqueInput[]
    delete?: Usuario_EventosWhereUniqueInput | Usuario_EventosWhereUniqueInput[]
    connect?: Usuario_EventosWhereUniqueInput | Usuario_EventosWhereUniqueInput[]
    update?: Usuario_EventosUpdateWithWhereUniqueWithoutUsersSupportInput | Usuario_EventosUpdateWithWhereUniqueWithoutUsersSupportInput[]
    updateMany?: Usuario_EventosUpdateManyWithWhereWithoutUsersSupportInput | Usuario_EventosUpdateManyWithWhereWithoutUsersSupportInput[]
    deleteMany?: Usuario_EventosScalarWhereInput | Usuario_EventosScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Usuario_EventosUncheckedUpdateManyWithoutUsersSupportNestedInput = {
    create?: XOR<Usuario_EventosCreateWithoutUsersSupportInput, Usuario_EventosUncheckedCreateWithoutUsersSupportInput> | Usuario_EventosCreateWithoutUsersSupportInput[] | Usuario_EventosUncheckedCreateWithoutUsersSupportInput[]
    connectOrCreate?: Usuario_EventosCreateOrConnectWithoutUsersSupportInput | Usuario_EventosCreateOrConnectWithoutUsersSupportInput[]
    upsert?: Usuario_EventosUpsertWithWhereUniqueWithoutUsersSupportInput | Usuario_EventosUpsertWithWhereUniqueWithoutUsersSupportInput[]
    createMany?: Usuario_EventosCreateManyUsersSupportInputEnvelope
    set?: Usuario_EventosWhereUniqueInput | Usuario_EventosWhereUniqueInput[]
    disconnect?: Usuario_EventosWhereUniqueInput | Usuario_EventosWhereUniqueInput[]
    delete?: Usuario_EventosWhereUniqueInput | Usuario_EventosWhereUniqueInput[]
    connect?: Usuario_EventosWhereUniqueInput | Usuario_EventosWhereUniqueInput[]
    update?: Usuario_EventosUpdateWithWhereUniqueWithoutUsersSupportInput | Usuario_EventosUpdateWithWhereUniqueWithoutUsersSupportInput[]
    updateMany?: Usuario_EventosUpdateManyWithWhereWithoutUsersSupportInput | Usuario_EventosUpdateManyWithWhereWithoutUsersSupportInput[]
    deleteMany?: Usuario_EventosScalarWhereInput | Usuario_EventosScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type Usuario_EventosCreateNestedManyWithoutEventsSupportedInput = {
    create?: XOR<Usuario_EventosCreateWithoutEventsSupportedInput, Usuario_EventosUncheckedCreateWithoutEventsSupportedInput> | Usuario_EventosCreateWithoutEventsSupportedInput[] | Usuario_EventosUncheckedCreateWithoutEventsSupportedInput[]
    connectOrCreate?: Usuario_EventosCreateOrConnectWithoutEventsSupportedInput | Usuario_EventosCreateOrConnectWithoutEventsSupportedInput[]
    createMany?: Usuario_EventosCreateManyEventsSupportedInputEnvelope
    connect?: Usuario_EventosWhereUniqueInput | Usuario_EventosWhereUniqueInput[]
  }

  export type Usuario_EventosUncheckedCreateNestedManyWithoutEventsSupportedInput = {
    create?: XOR<Usuario_EventosCreateWithoutEventsSupportedInput, Usuario_EventosUncheckedCreateWithoutEventsSupportedInput> | Usuario_EventosCreateWithoutEventsSupportedInput[] | Usuario_EventosUncheckedCreateWithoutEventsSupportedInput[]
    connectOrCreate?: Usuario_EventosCreateOrConnectWithoutEventsSupportedInput | Usuario_EventosCreateOrConnectWithoutEventsSupportedInput[]
    createMany?: Usuario_EventosCreateManyEventsSupportedInputEnvelope
    connect?: Usuario_EventosWhereUniqueInput | Usuario_EventosWhereUniqueInput[]
  }

  export type EnumEvento_EstadoFieldUpdateOperationsInput = {
    set?: $Enums.Evento_Estado
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type Usuario_EventosUpdateManyWithoutEventsSupportedNestedInput = {
    create?: XOR<Usuario_EventosCreateWithoutEventsSupportedInput, Usuario_EventosUncheckedCreateWithoutEventsSupportedInput> | Usuario_EventosCreateWithoutEventsSupportedInput[] | Usuario_EventosUncheckedCreateWithoutEventsSupportedInput[]
    connectOrCreate?: Usuario_EventosCreateOrConnectWithoutEventsSupportedInput | Usuario_EventosCreateOrConnectWithoutEventsSupportedInput[]
    upsert?: Usuario_EventosUpsertWithWhereUniqueWithoutEventsSupportedInput | Usuario_EventosUpsertWithWhereUniqueWithoutEventsSupportedInput[]
    createMany?: Usuario_EventosCreateManyEventsSupportedInputEnvelope
    set?: Usuario_EventosWhereUniqueInput | Usuario_EventosWhereUniqueInput[]
    disconnect?: Usuario_EventosWhereUniqueInput | Usuario_EventosWhereUniqueInput[]
    delete?: Usuario_EventosWhereUniqueInput | Usuario_EventosWhereUniqueInput[]
    connect?: Usuario_EventosWhereUniqueInput | Usuario_EventosWhereUniqueInput[]
    update?: Usuario_EventosUpdateWithWhereUniqueWithoutEventsSupportedInput | Usuario_EventosUpdateWithWhereUniqueWithoutEventsSupportedInput[]
    updateMany?: Usuario_EventosUpdateManyWithWhereWithoutEventsSupportedInput | Usuario_EventosUpdateManyWithWhereWithoutEventsSupportedInput[]
    deleteMany?: Usuario_EventosScalarWhereInput | Usuario_EventosScalarWhereInput[]
  }

  export type Usuario_EventosUncheckedUpdateManyWithoutEventsSupportedNestedInput = {
    create?: XOR<Usuario_EventosCreateWithoutEventsSupportedInput, Usuario_EventosUncheckedCreateWithoutEventsSupportedInput> | Usuario_EventosCreateWithoutEventsSupportedInput[] | Usuario_EventosUncheckedCreateWithoutEventsSupportedInput[]
    connectOrCreate?: Usuario_EventosCreateOrConnectWithoutEventsSupportedInput | Usuario_EventosCreateOrConnectWithoutEventsSupportedInput[]
    upsert?: Usuario_EventosUpsertWithWhereUniqueWithoutEventsSupportedInput | Usuario_EventosUpsertWithWhereUniqueWithoutEventsSupportedInput[]
    createMany?: Usuario_EventosCreateManyEventsSupportedInputEnvelope
    set?: Usuario_EventosWhereUniqueInput | Usuario_EventosWhereUniqueInput[]
    disconnect?: Usuario_EventosWhereUniqueInput | Usuario_EventosWhereUniqueInput[]
    delete?: Usuario_EventosWhereUniqueInput | Usuario_EventosWhereUniqueInput[]
    connect?: Usuario_EventosWhereUniqueInput | Usuario_EventosWhereUniqueInput[]
    update?: Usuario_EventosUpdateWithWhereUniqueWithoutEventsSupportedInput | Usuario_EventosUpdateWithWhereUniqueWithoutEventsSupportedInput[]
    updateMany?: Usuario_EventosUpdateManyWithWhereWithoutEventsSupportedInput | Usuario_EventosUpdateManyWithWhereWithoutEventsSupportedInput[]
    deleteMany?: Usuario_EventosScalarWhereInput | Usuario_EventosScalarWhereInput[]
  }

  export type UsuariosCreateNestedOneWithoutEventsSupportedInput = {
    create?: XOR<UsuariosCreateWithoutEventsSupportedInput, UsuariosUncheckedCreateWithoutEventsSupportedInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutEventsSupportedInput
    connect?: UsuariosWhereUniqueInput
  }

  export type EventosCreateNestedOneWithoutUsersSupportInput = {
    create?: XOR<EventosCreateWithoutUsersSupportInput, EventosUncheckedCreateWithoutUsersSupportInput>
    connectOrCreate?: EventosCreateOrConnectWithoutUsersSupportInput
    connect?: EventosWhereUniqueInput
  }

  export type UsuariosUpdateOneRequiredWithoutEventsSupportedNestedInput = {
    create?: XOR<UsuariosCreateWithoutEventsSupportedInput, UsuariosUncheckedCreateWithoutEventsSupportedInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutEventsSupportedInput
    upsert?: UsuariosUpsertWithoutEventsSupportedInput
    connect?: UsuariosWhereUniqueInput
    update?: XOR<XOR<UsuariosUpdateToOneWithWhereWithoutEventsSupportedInput, UsuariosUpdateWithoutEventsSupportedInput>, UsuariosUncheckedUpdateWithoutEventsSupportedInput>
  }

  export type EventosUpdateOneRequiredWithoutUsersSupportNestedInput = {
    create?: XOR<EventosCreateWithoutUsersSupportInput, EventosUncheckedCreateWithoutUsersSupportInput>
    connectOrCreate?: EventosCreateOrConnectWithoutUsersSupportInput
    upsert?: EventosUpsertWithoutUsersSupportInput
    connect?: EventosWhereUniqueInput
    update?: XOR<XOR<EventosUpdateToOneWithWhereWithoutUsersSupportInput, EventosUpdateWithoutUsersSupportInput>, EventosUncheckedUpdateWithoutUsersSupportInput>
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

  export type NestedEnumRolFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolFilter<$PrismaModel> | $Enums.Rol
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type NestedEnumRolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolWithAggregatesFilter<$PrismaModel> | $Enums.Rol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolFilter<$PrismaModel>
    _max?: NestedEnumRolFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type NestedEnumEvento_EstadoFilter<$PrismaModel = never> = {
    equals?: $Enums.Evento_Estado | EnumEvento_EstadoFieldRefInput<$PrismaModel>
    in?: $Enums.Evento_Estado[] | ListEnumEvento_EstadoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Evento_Estado[] | ListEnumEvento_EstadoFieldRefInput<$PrismaModel>
    not?: NestedEnumEvento_EstadoFilter<$PrismaModel> | $Enums.Evento_Estado
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

  export type NestedEnumEvento_EstadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Evento_Estado | EnumEvento_EstadoFieldRefInput<$PrismaModel>
    in?: $Enums.Evento_Estado[] | ListEnumEvento_EstadoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Evento_Estado[] | ListEnumEvento_EstadoFieldRefInput<$PrismaModel>
    not?: NestedEnumEvento_EstadoWithAggregatesFilter<$PrismaModel> | $Enums.Evento_Estado
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEvento_EstadoFilter<$PrismaModel>
    _max?: NestedEnumEvento_EstadoFilter<$PrismaModel>
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

  export type Usuario_EventosCreateWithoutUsersSupportInput = {
    eventsSupported: EventosCreateNestedOneWithoutUsersSupportInput
  }

  export type Usuario_EventosUncheckedCreateWithoutUsersSupportInput = {
    eventId: number
  }

  export type Usuario_EventosCreateOrConnectWithoutUsersSupportInput = {
    where: Usuario_EventosWhereUniqueInput
    create: XOR<Usuario_EventosCreateWithoutUsersSupportInput, Usuario_EventosUncheckedCreateWithoutUsersSupportInput>
  }

  export type Usuario_EventosCreateManyUsersSupportInputEnvelope = {
    data: Usuario_EventosCreateManyUsersSupportInput | Usuario_EventosCreateManyUsersSupportInput[]
    skipDuplicates?: boolean
  }

  export type Usuario_EventosUpsertWithWhereUniqueWithoutUsersSupportInput = {
    where: Usuario_EventosWhereUniqueInput
    update: XOR<Usuario_EventosUpdateWithoutUsersSupportInput, Usuario_EventosUncheckedUpdateWithoutUsersSupportInput>
    create: XOR<Usuario_EventosCreateWithoutUsersSupportInput, Usuario_EventosUncheckedCreateWithoutUsersSupportInput>
  }

  export type Usuario_EventosUpdateWithWhereUniqueWithoutUsersSupportInput = {
    where: Usuario_EventosWhereUniqueInput
    data: XOR<Usuario_EventosUpdateWithoutUsersSupportInput, Usuario_EventosUncheckedUpdateWithoutUsersSupportInput>
  }

  export type Usuario_EventosUpdateManyWithWhereWithoutUsersSupportInput = {
    where: Usuario_EventosScalarWhereInput
    data: XOR<Usuario_EventosUpdateManyMutationInput, Usuario_EventosUncheckedUpdateManyWithoutUsersSupportInput>
  }

  export type Usuario_EventosScalarWhereInput = {
    AND?: Usuario_EventosScalarWhereInput | Usuario_EventosScalarWhereInput[]
    OR?: Usuario_EventosScalarWhereInput[]
    NOT?: Usuario_EventosScalarWhereInput | Usuario_EventosScalarWhereInput[]
    userId?: IntFilter<"Usuario_Eventos"> | number
    eventId?: IntFilter<"Usuario_Eventos"> | number
  }

  export type Usuario_EventosCreateWithoutEventsSupportedInput = {
    usersSupport: UsuariosCreateNestedOneWithoutEventsSupportedInput
  }

  export type Usuario_EventosUncheckedCreateWithoutEventsSupportedInput = {
    userId: number
  }

  export type Usuario_EventosCreateOrConnectWithoutEventsSupportedInput = {
    where: Usuario_EventosWhereUniqueInput
    create: XOR<Usuario_EventosCreateWithoutEventsSupportedInput, Usuario_EventosUncheckedCreateWithoutEventsSupportedInput>
  }

  export type Usuario_EventosCreateManyEventsSupportedInputEnvelope = {
    data: Usuario_EventosCreateManyEventsSupportedInput | Usuario_EventosCreateManyEventsSupportedInput[]
    skipDuplicates?: boolean
  }

  export type Usuario_EventosUpsertWithWhereUniqueWithoutEventsSupportedInput = {
    where: Usuario_EventosWhereUniqueInput
    update: XOR<Usuario_EventosUpdateWithoutEventsSupportedInput, Usuario_EventosUncheckedUpdateWithoutEventsSupportedInput>
    create: XOR<Usuario_EventosCreateWithoutEventsSupportedInput, Usuario_EventosUncheckedCreateWithoutEventsSupportedInput>
  }

  export type Usuario_EventosUpdateWithWhereUniqueWithoutEventsSupportedInput = {
    where: Usuario_EventosWhereUniqueInput
    data: XOR<Usuario_EventosUpdateWithoutEventsSupportedInput, Usuario_EventosUncheckedUpdateWithoutEventsSupportedInput>
  }

  export type Usuario_EventosUpdateManyWithWhereWithoutEventsSupportedInput = {
    where: Usuario_EventosScalarWhereInput
    data: XOR<Usuario_EventosUpdateManyMutationInput, Usuario_EventosUncheckedUpdateManyWithoutEventsSupportedInput>
  }

  export type UsuariosCreateWithoutEventsSupportedInput = {
    email: string
    username: string
    role: $Enums.Rol
    password: string
    name: string
    chagePassword?: boolean | null
    active?: boolean | null
  }

  export type UsuariosUncheckedCreateWithoutEventsSupportedInput = {
    id?: number
    email: string
    username: string
    role: $Enums.Rol
    password: string
    name: string
    chagePassword?: boolean | null
    active?: boolean | null
  }

  export type UsuariosCreateOrConnectWithoutEventsSupportedInput = {
    where: UsuariosWhereUniqueInput
    create: XOR<UsuariosCreateWithoutEventsSupportedInput, UsuariosUncheckedCreateWithoutEventsSupportedInput>
  }

  export type EventosCreateWithoutUsersSupportInput = {
    title: string
    description: string
    status: $Enums.Evento_Estado
    scheduledDate: Date | string
    daysDuration: number
  }

  export type EventosUncheckedCreateWithoutUsersSupportInput = {
    id?: number
    title: string
    description: string
    status: $Enums.Evento_Estado
    scheduledDate: Date | string
    daysDuration: number
  }

  export type EventosCreateOrConnectWithoutUsersSupportInput = {
    where: EventosWhereUniqueInput
    create: XOR<EventosCreateWithoutUsersSupportInput, EventosUncheckedCreateWithoutUsersSupportInput>
  }

  export type UsuariosUpsertWithoutEventsSupportedInput = {
    update: XOR<UsuariosUpdateWithoutEventsSupportedInput, UsuariosUncheckedUpdateWithoutEventsSupportedInput>
    create: XOR<UsuariosCreateWithoutEventsSupportedInput, UsuariosUncheckedCreateWithoutEventsSupportedInput>
    where?: UsuariosWhereInput
  }

  export type UsuariosUpdateToOneWithWhereWithoutEventsSupportedInput = {
    where?: UsuariosWhereInput
    data: XOR<UsuariosUpdateWithoutEventsSupportedInput, UsuariosUncheckedUpdateWithoutEventsSupportedInput>
  }

  export type UsuariosUpdateWithoutEventsSupportedInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    chagePassword?: NullableBoolFieldUpdateOperationsInput | boolean | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type UsuariosUncheckedUpdateWithoutEventsSupportedInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    chagePassword?: NullableBoolFieldUpdateOperationsInput | boolean | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type EventosUpsertWithoutUsersSupportInput = {
    update: XOR<EventosUpdateWithoutUsersSupportInput, EventosUncheckedUpdateWithoutUsersSupportInput>
    create: XOR<EventosCreateWithoutUsersSupportInput, EventosUncheckedCreateWithoutUsersSupportInput>
    where?: EventosWhereInput
  }

  export type EventosUpdateToOneWithWhereWithoutUsersSupportInput = {
    where?: EventosWhereInput
    data: XOR<EventosUpdateWithoutUsersSupportInput, EventosUncheckedUpdateWithoutUsersSupportInput>
  }

  export type EventosUpdateWithoutUsersSupportInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumEvento_EstadoFieldUpdateOperationsInput | $Enums.Evento_Estado
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    daysDuration?: IntFieldUpdateOperationsInput | number
  }

  export type EventosUncheckedUpdateWithoutUsersSupportInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumEvento_EstadoFieldUpdateOperationsInput | $Enums.Evento_Estado
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    daysDuration?: IntFieldUpdateOperationsInput | number
  }

  export type Usuario_EventosCreateManyUsersSupportInput = {
    eventId: number
  }

  export type Usuario_EventosUpdateWithoutUsersSupportInput = {
    eventsSupported?: EventosUpdateOneRequiredWithoutUsersSupportNestedInput
  }

  export type Usuario_EventosUncheckedUpdateWithoutUsersSupportInput = {
    eventId?: IntFieldUpdateOperationsInput | number
  }

  export type Usuario_EventosUncheckedUpdateManyWithoutUsersSupportInput = {
    eventId?: IntFieldUpdateOperationsInput | number
  }

  export type Usuario_EventosCreateManyEventsSupportedInput = {
    userId: number
  }

  export type Usuario_EventosUpdateWithoutEventsSupportedInput = {
    usersSupport?: UsuariosUpdateOneRequiredWithoutEventsSupportedNestedInput
  }

  export type Usuario_EventosUncheckedUpdateWithoutEventsSupportedInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type Usuario_EventosUncheckedUpdateManyWithoutEventsSupportedInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UsuariosCountOutputTypeDefaultArgs instead
     */
    export type UsuariosCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsuariosCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EventosCountOutputTypeDefaultArgs instead
     */
    export type EventosCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EventosCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsuariosDefaultArgs instead
     */
    export type UsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsuariosDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NoticiasDefaultArgs instead
     */
    export type NoticiasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NoticiasDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DevocionalesDefaultArgs instead
     */
    export type DevocionalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DevocionalesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EventosDefaultArgs instead
     */
    export type EventosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EventosDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Usuario_EventosDefaultArgs instead
     */
    export type Usuario_EventosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Usuario_EventosDefaultArgs<ExtArgs>

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
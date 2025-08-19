/* eslint-disable ts/no-use-before-define */
/* eslint-disable ts/no-unused-expressions */
/* eslint-disable unused-imports/no-unused-vars */
import { z } from 'zod'

// ##### 基本类型
z.string()
z.number()
z.bigint()
z.boolean()
z.symbol()
z.undefined()
z.void() // 等效z.undefined()
z.null()
z.literal('tuna') // 字面量
const colors = z.literal(['red', 'green', 'blue']) // 多个字面量，3值选1
const setColors = colors.values // 提取字面量 => Set<'red' | 'green' | 'blue'>

// ##### 强制转换类型
const schema = z.coerce.string() // 无论什么类型，强制转换成string
schema.parse(42) // => "42"

// ##### 字符串
// 验证
z.string().max(5)
z.string().min(5)
z.string().length(5)
z.string().regex(/^[a-z]+$/)
z.string().startsWith('aaa')
z.string().endsWith('zzz')
z.string().includes('---')
z.string().uppercase()
z.string().lowercase()
z.stringbool() // 字符串布尔，将字符串转换为布尔值 z.stringbool().parse('true') / z.stringbool().parse('false')
z.stringbool({
  truthy: ['true', '1', 'yes', 'on', 'y', 'enabled'],
  falsy: ['false', '0', 'no', 'off', 'n', 'disabled'],
}) // 自定义哪些字符串代表true，哪些字符串代表false
// 变换
z.string().trim()
z.string().toLowerCase()
z.string().toUpperCase()
z.string().normalize()
// 常见格式
z.email() // 自定义邮箱规则 z.email({ pattern: /your regex here/ });
// zod导出了几个邮箱的正则：z.email({ pattern: z.regexes.email });、z.regexes.html5Email......
z.uuid()
z.url()
z.hostname()
z.emoji() // validates a single emoji character
z.base64()
z.base64url()
z.jwt()
z.nanoid()
z.cuid()
z.cuid2()
z.ulid()
z.ipv4()
z.ipv6()
z.cidrv4() // ipv4 CIDR block
z.cidrv6() // ipv6 CIDR block
z.iso.date()
z.iso.time()
z.iso.datetime()
z.iso.duration()

// ##### 模板文字
const schemaTemplate = z.templateLiteral(['hello, ', z.string(), '!'])
// => `hello, ${string}!`

// ##### 数字
z.number().gt(5)
z.number().gte(5) // alias .min(5)
z.number().lt(5)
z.number().lte(5) // alias .max(5)
z.number().positive()
z.number().nonnegative()
z.number().negative()
z.number().nonpositive()
z.number().multipleOf(5) // alias .step(5)
z.nan() // 验证NaN
z.int()
z.int32()
z.bigint()

// 布尔值
z.boolean()

// 日期
z.date()
z.date().min(new Date('1900-01-01'), { error: 'Too old!' })
z.date().max(new Date(), { error: 'Too young!' })

// 枚举
z.enum(['Salmon', 'Tuna', 'Trout'])
const FishEnum = z.enum(['Salmon', 'Tuna', 'Trout'])
FishEnum.enum // 提取枚举对象
// => { Salmon: "Salmon", Tuna: "Tuna", Trout: "Trout" }
const SalmonAndTroutOnly = FishEnum.extract(['Salmon', 'Trout']) // 提取枚举项
const TunaOnly = FishEnum.exclude(['Salmon', 'Trout']) // 排除某些枚举项

// ##### 可选项
z.literal('yoda').optional()

// ##### 允许空输入
z.literal('yoda').nullable()

// ##### 可选并且可空
z.literal('yoda').nullish()

// any、unknown、never
z.any()
z.unknown()
z.never()

// ##### Object对象
const Dog = z.object({
  name: z.string(), // 字符串
  age: z.number().optional(), // 数字，可选
})

Dog.parse({ name: 'Yeller', extraKey: true }) // extraKey键会被删除
// => { name: "Yeller" }

// strictObject严格模式，如果有多余的键，会报错
const StrictDog = z.strictObject({
  name: z.string(),
})

// looseObject允许未知键通过
const LooseDog = z.looseObject({
  name: z.string(),
})
Dog.parse({ name: 'Yeller', extraKey: true })
// => { name: "Yeller", extraKey: true }

// .catchall验证未识别的键
const DogWithStrings = z.object({
  name: z.string(),
  age: z.number().optional(),
}).catchall(z.string()) // 未识别的键是字符串类型，数字会报错

DogWithStrings.parse({ name: 'Yeller', extraKey: 'extraValue' }) // ✅
DogWithStrings.parse({ name: 'Yeller', extraKey: 42 }) // ❌

// .shape 访问内部模式
Dog.shape.name // => string schema

// .keyof() 根据对象模式的键创建 ZodEnum 模式
const keySchema = Dog.keyof()
// => ZodEnum<["name", "age"]>

// .extend() 为对象模式添加附加字段 ⚠️会覆盖字段
const DogWithBreed = Dog.extend({
  breed: z.string(),
})

// 方法二：附加字段
const DogWithBreed2 = z.object({
  ...Dog.shape,
  breed: z.string(),
})

// .pick选键、omit排除键
Dog.pick({ name: true })
Dog.omit({ name: true })

// .partial所有字段可选, .required用法类似，所有字段必需
const PartialRecipe = Dog.partial()
Dog.partial({ // 使name可选
  name: true,
})

// ##### 递归对象、自引用类型（需要使用getter）
const Category = z.object({
  name: z.string(),
  get subcategories() {
    return z.array(Category)
  },
})

type CategoryT = z.infer<typeof Category>
// { name: string; subcategories: Category[] }

// 标识相互递归的类型
const User = z.object({
  email: z.email(),
  get posts() {
    return z.array(Post)
  },
})

const Post = z.object({
  title: z.string(),
  get author() {
    return User
  },
})

// ##### 数组
const stringArray = z.array(z.string()) // or z.string().array()
z.array(z.string()).min(5) // must contain 5 or more items
z.array(z.string()).max(5) // must contain 5 or fewer items
z.array(z.string()).length(5) // must contain 5 items exactly

// ##### 元组
const MyTuple = z.tuple([
  z.string(),
  z.number(),
  z.boolean(),
])

type MyTupleT = z.infer<typeof MyTuple>
// [string, number, boolean]

// Union联合类型
const stringOrNumber = z.union([z.string(), z.number()])
// string | number

stringOrNumber.parse('foo') // passes
stringOrNumber.parse(14) // passes

// discriminatedUnion联合类型
const Person = z.object({
  type: z.literal('person'), // 判别字段
  name: z.string(),
  age: z.number(),
})

const Company = z.object({
  type: z.literal('company'), // 判别字段
  legalName: z.string(),
  employees: z.number(),
})

const Entity = z.discriminatedUnion('type', [Person, Company])
// discriminatedUnion跟联合类型的区别是，会根据type收紧类型，对于大型联合运算，它更快

// 交叉类型 intersection
const a = z.union([z.number(), z.string()])
const b = z.union([z.number(), z.boolean()])
const c = z.intersection(a, b)

type CT = z.infer<typeof c> // => number

// Record
const IdCache = z.record(z.string(), z.string())
type IdCacheT = z.infer<typeof IdCache> // Record<string, string>
// 可选属性
const Keys = z.enum(['id', 'name', 'email']).or(z.never())
const PersonT = z.partialRecord(Keys, z.string())
// { id?: string; name?: string; email?: string }

// ##### Map
const StringNumberMap = z.map(z.string(), z.number())
type StringNumberMapT = z.infer<typeof StringNumberMap> // Map<string, number>

const myMap: StringNumberMapT = new Map()
myMap.set('one', 1)
StringNumberMap.parse(myMap)

// ##### Set
const NumberSet = z.set(z.number())
type NumberSetT = z.infer<typeof NumberSet> // Set<number>
const mySet: NumberSetT = new Set()
mySet.add(1)
mySet.add(2)
NumberSet.parse(mySet)

// File类型
const fileSchema = z.file()
fileSchema.min(10_000) // minimum .size (bytes)
fileSchema.max(1_000_000) // maximum .size (bytes)
fileSchema.mime('image/png') // MIME type
fileSchema.mime(['image/png', 'image/jpeg']) // multiple MIME types

// Instanceof 实例
class Test {
  name: string | undefined
}

const TestSchema = z.instanceof(Test)

TestSchema.parse(new Test()) // ✅
TestSchema.parse('whatever') // ❌

// property，限制数据的属性
const blobSchema = z.string().check(
  z.property('length', z.number().min(10)),
)
blobSchema.parse('hello there!') // ✅
blobSchema.parse('hello.') // ❌

// ##### 自定义验证.refine()
const myString = z.string().refine(val => val.length <= 255)

// 自定义错误信息error
const myString2 = z.string().refine(val => val.length > 8, {
  error: 'Too short!',
})

// 默认遇到错误会继续后续的自定义验证（可以设置abort，跳过后续验证）
const myString3 = z.string()
  .refine(val => val.length > 8, { error: 'Too short!', abort: true })
  .refine(val => val === val.toLowerCase(), { error: 'Must be lowercase', abort: true })

const result = myString.safeParse('OH NO')
result.error!.issues
// => [{ "code": "custom", "message": "Too short!" }]

// 自定义错误路径
const passwordForm = z
  .object({
    password: z.string(),
    confirm: z.string(),
  })
  .refine(data => data.password === data.confirm, {
    message: 'Passwords don\'t match',
    path: ['confirm'], // path of error
  })

// ⚠️ refine可以定义为async异步，如果定义为异步，必须使用parseAsync
// ⚠️ refine的报错会导致后面的字段校验终止,要设置when字段
const schema = z
  .object({
    password: z.string().min(8),
    confirmPassword: z.string(),
    anotherField: z.string(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],

    // run if password & confirmPassword are valid
    when(payload) {
      return schema
        .pick({ password: true, confirmPassword: true })
        .safeParse(payload.value)
        .success
    },
  })

schema.parse({
  password: 'asdf',
  confirmPassword: 'asdf',
  anotherField: 1234, // ❌ this error will not prevent the password check from running
})

// ##### transform和pipe

// transform转换(可以是异步的)
const castToString = z.transform(val => String(val))

castToString.parse('asdf') // => "asdf"
castToString.parse(123) // => "123"
castToString.parse(true) // => "true"

// pipe管道
const stringToLength = z.string().pipe(z.transform(val => val.length))

stringToLength.parse('hello') // => 5

export default function ZodDemo() {
  return (
    <>
    </>
  )
}

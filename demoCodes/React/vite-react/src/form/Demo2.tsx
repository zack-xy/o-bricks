import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

// 1. 定义 zod schema
const loginSchema = z.object({
  email: z.email('邮箱格式不正确'),
  password: z.string().min(6, '密码至少6位'),
})

// 2. 自动推导 TS 类型
type LoginFormInputs = z.infer<typeof loginSchema>

export default function FormDemo() {
  // 3. 使用 zodResolver 连接 RHF
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  })

  // 4. 提交处理函数
  const onSubmit = (data: LoginFormInputs) => {
    // eslint-disable-next-line no-console
    console.log('表单数据', data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Email */}
      <div>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" {...register('email')} />
        {
          errors.email && (
            <p style={{ color: 'red' }}>{errors.email.message}</p>
          )
        }
      </div>
      {/* Password   */}
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" {...register('password')} />
        {
          errors.password && (
            <p style={{ color: 'red' }}>{errors.password.message}</p>
          )
        }
      </div>

      <button type="submit">登陆</button>
    </form>
  )
}

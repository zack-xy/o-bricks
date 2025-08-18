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
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange', // 实时校验
  })

  // 4. 提交处理函数
  const onSubmit = (data: LoginFormInputs) => {
    // eslint-disable-next-line no-console
    console.log('表单数据', data)
    // 提交成功后重置表单
    reset()
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
        <input id="password" type="password" {...register('password')} />
        {
          errors.password && (
            <p style={{ color: 'red' }}>{errors.password.message}</p>
          )
        }
      </div>

      {/* 按钮 */}
      <div style={{ display: 'flex', gap: '8px' }}>
        <button type="submit" disabled={!isValid}>登陆</button>
        <button
          type="button"
          onClick={() => reset({
            email: '',
            password: '',
          })}
        >
          重置
        </button>
      </div>
    </form>
  )
}

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

// 1. 定义Zod schema(含跨字段验证)
const registerSchema = z
  .object({
    username: z.string().min(3, '用户名至少3个字符'),
    email: z.email('邮箱格式不正确'),
    password: z.string().min(6, '密码至少6位'),
    confirmPassword: z.string().min(6, '请确认密码'),
    age: z
      .number('年龄必须是数字')
      .refine(num => num >= 18, '必须年满18岁')
      .refine(num => num <= 120, '年龄不得超过120岁'),
    agree: z.literal(true, {
      error: () => ({ message: '必须同意用户协议' }),
    }),
  })
  .refine(data => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: '两次输入的密码不一致',
  })

// 2. 自动推导TS类型
type RegisterFormInputs = z.infer<typeof registerSchema>

export default function FormDemo() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<RegisterFormInputs>({
    resolver: zodResolver(registerSchema),
    mode: 'onChange',
  })

  // 3. 提交
  const onSubmit = (data: RegisterFormInputs) => {
    // eslint-disable-next-line no-console
    console.log('注册成功: ', data)
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: 'grid', gap: '12px', maxWidth: '350px' }}
    >
      <h2>注册表单</h2>

      {/* 用户名 */}
      <div>
        <label htmlFor="">用户名：</label>
        <input {...register('username')} />
        {errors.username && <p style={{ color: 'red' }}>{errors.username.message}</p>}
      </div>

      {/* 邮箱 */}
      <div>
        <label htmlFor="">邮箱：</label>
        <input type="email" {...register('email')} />
        {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
      </div>

      {/* 密码 */}
      <div>
        <label htmlFor="">密码</label>
        <input type="password" {...register('password')} />
        {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
      </div>

      {/* 确认密码 */}
      <div>
        <label htmlFor="">确认密码：</label>
        <input type="password" {...register('confirmPassword')} />
        {errors.confirmPassword && <p style={{ color: 'red' }}>{errors.confirmPassword.message}</p>}
      </div>

      {/* 年龄 */}
      <div>
        <label htmlFor="">年龄：</label>
        <input type="number" {...register('age', { valueAsNumber: true })} />
        {errors.age && <p style={{ color: 'red' }}>{errors.age.message}</p>}
      </div>

      {/* 协议 */}
      <div>
        <label htmlFor="">
          <input type="checkbox" {...register('agree')} />
          {' '}
          我同意用户协议
          {errors.agree && <p style={{ color: 'red' }}>{errors.agree.message}</p>}
        </label>
      </div>

      {/* 按钮 */}
      <div style={{ display: 'flex', gap: '8px' }}>
        <button type="submit" disabled={!isValid}>
          注册
        </button>
        <button type="button" onClick={() => reset()}>
          重置
        </button>
      </div>

    </form>
  )
}

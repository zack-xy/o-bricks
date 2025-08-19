import { zodResolver } from '@hookform/resolvers/zod'
import { useFieldArray, useForm } from 'react-hook-form'
import { z } from 'zod'

// 1. 定义schema
const experienceSchema = z.object({
  company: z.string().min(1, '公司不能为空'),
  role: z.string().min(1, '职位不能为空'),
  years: z
    .string()
    .refine(val => /^\d+$/.test(val), '请输入数字')
    .refine(num => Number(num) > 0, '必须大于0年'),
})

const formSchema = z.object({
  name: z.string().min(1, '姓名不能为空'),
  experiences: z.array(experienceSchema).min(1, '至少添加1条工作经历'),
})

type FormSchema = z.infer<typeof formSchema>

export default function DynamicForm() {
  // 2. useForm初始化
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      experiences: [{ company: '', role: '', years: '' }],
    },
  })

  // 3. useFieldArray 管理动态表单
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'experiences',
  })

  // 4. 提交
  const onSubmit = (data: FormSchema) => {
    // eslint-disable-next-line no-console
    console.log('提交结果：', data)
  }

  return (
    <>
      <h3>动态Form</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* 姓名 */}
        <div>
          <label>姓名：</label>
          <input {...register('name')} />
          {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
        </div>

        {/* 动态工作经历 */}
        <div>
          <h3>工作经历</h3>
          {
            fields.map((field, index) => (
              <div key={field.id}>
                <input
                  {...register(`experiences.${index}.company`)}
                  placeholder="公司"
                />
                {errors.experiences?.[index]?.company && (
                  <p style={{ color: 'red' }}>{errors.experiences[index]?.company?.message}</p>
                )}
                <input
                  {...register(`experiences.${index}.role`)}
                  placeholder="职位"
                />
                <input
                  {...register(`experiences.${index}.years`)}
                  placeholder="年限"
                />
                <button type="button" onClick={() => remove(index)}>删除</button>
              </div>
            ))
          }
          {errors.experiences && <p style={{ color: 'red' }}>{errors.experiences.message as string}</p>}

          {/* 添加按钮 */}
          <button type="button" onClick={() => append({ company: '', role: '', years: '' })}>添加经历</button>
        </div>

        {/* 提交 */}
        <button type="submit">提交</button>
      </form>
    </>
  )
}

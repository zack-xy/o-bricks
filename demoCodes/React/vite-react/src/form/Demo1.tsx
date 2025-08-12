import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";

interface LoginFormInputs {
  email: string,
  password: string
}

export default function Demo1() {
  // 1.初始化表单
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>()

  // 2.提交处理
  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    console.log("表单数据", data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          {...register("email", { required: "邮箱必填" })}
          id="email"
          type="email" />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          {...register("password", { required: "密码必填" })}
          id="password"
          type="password" />
        {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
      </div>

      <button type="submit">登陆</button>

    </form>
  )
}

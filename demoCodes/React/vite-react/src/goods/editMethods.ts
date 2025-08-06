import type { ActionFunctionArgs, LoaderFunctionArgs } from 'react-router-dom'

export interface LaderData {
  id: string
  context?: unknown
  list: Array<{ name: string, price: number, count: number }>
}

export async function loader({ params, context }: LoaderFunctionArgs): Promise<LaderData> {
  if (!params.id || params.id === 'error')
    return Promise.reject(new Error('需要一个id'))
  await new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve({})
      }, 2500)
    }
    catch (error) {
      reject(error)
    }
  })
  return Promise.resolve({ id: params.id, context, list: [
    {
      name: '黑武士',
      price: 12,
      count: 10,
    },
    {
      name: '罗衫',
      price: 40,
      count: 5,
    },
    {
      name: '矿泉水',
      price: 1,
      count: 100,
    },
  ] })
}

export async function action({ params, request }: ActionFunctionArgs) {
  const data = await request.formData()
  const response = await new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve({ code: 200, status: 'done' })
      }, 1000)
    }
    catch (error) {
      reject(error)
    }
  })
  return { data, response, params }
}

import type { FC } from 'react'
import React, { useEffect } from 'react'
import { makeAutoObservable } from 'mobx'
import { observer } from 'mobx-react'

class Timer {
  secondsPassed = 0
  constructor() {
    makeAutoObservable(this)
  }

  increase() {
    this.secondsPassed++
  }

  reset() {
    this.secondsPassed = 0
  }
}

const myTimer = new Timer()

interface PropsType { timer: Timer }
const TimerView = observer((props: PropsType) => {
  const { timer } = props

  return (
    <button onClick={() => timer.reset()}>
      Seconds passed:
      {timer.secondsPassed}
    </button>
  )
})

const BasicDemo: FC = () => {
  useEffect(() => {
    const id = setInterval(() => {
      myTimer.increase()
    }, 1000)

    return () => {
      clearInterval(id)
    }
  }, [])
  return (
    <>
      <h3>Mobx basic demo</h3>
      <TimerView timer={myTimer}></TimerView>
    </>
  )
}

export default BasicDemo

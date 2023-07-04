<script setup>
import { ref, reactive, onBeforeMount, onMounted, nextTick, toRefs } from 'vue';
const props = defineProps({
  lineWidth: {
    type: Number,
    default: 2
  },
  strokeStyle: {
    type: String,
    default: '#000'
  },
  imgType: {
    type: String,
    default: 'png'
  }
})
const emit = defineEmits(['confirm', 'clear'])

const canvas = ref(null)
const wrap = ref(null)
const state = reactive({
  canvasHeight: 0,
  canvasWidth: 0,
  ctx: null,
  isSupportTouch: 'ontouchstart' in window,
  events: 'ontouchstart' in window ? ['touchstart','touchmove','touchend','touchleave'] : ['mousedown','mousemove','mouseup','mouseleave']
})

const canvasSuported = () => {
  const ele = document.createElement('canvas');
  return !!(ele.getContext && ele.getContext('2d'))
}

const isBlank = () => {
  const blank = document.createElement('canvas')
  const ctx = blank.getContext('2d')
  const { canvasWidth, canvasHeight } = state
  blank.width = canvasWidth
  blank.height = canvasHeight
  ctx.fillStyle = state.ctx.fillStyle
  ctx.fillRect(0, 0, canvasWidth, canvasHeight)
  return blank.toDataURL() === canvas.value.toDataURL()
}

const startEvent = () => {
  canvas.value.addEventListener(state.events[0], startEventHandler, false)
}

const startEventHandler = e => {
  const {lineWidth, strokeStyle} = props
  e.preventDefault()
  state.ctx.beginPath()
  state.ctx.lineWidth = lineWidth
  state.ctx.strokeStyle = strokeStyle
  canvas.value.addEventListener(state.events[1], moveEventHandler, false)
  canvas.value.addEventListener(state.events[2], endEventHandler, false)
  canvas.value.addEventListener(state.events[3], leaveEventHandler, false)
}

const moveEventHandler = e => {
  e.preventDefault()
  const event = state.isSupportTouch ? e.touches[0] : e
  const pos = canvas.value.getBoundingClientRect()
  const mouseX = event.clientX - pos.left
  const mouseY = event.clientY - pos.top
  state.ctx.lineTo(mouseX, mouseY)
  state.ctx.stroke()
}

const endEventHandler = e => {
  e.preventDefault()
  canvas.value.removeEventListener(state.events[1], moveEventHandler, false)
  canvas.value.removeEventListener(state.events[2], endEventHandler, false)
}

const leaveEventHandler = e => {
  e.preventDefault()
  canvas.value.removeEventListener(state.events[1], moveEventHandler, false)
  canvas.value.removeEventListener(state.events[2], endEventHandler, false)
}

const clear = () => {
  canvas.value.addEventListener(state.events[2], endEventHandler, false)
  state.ctx.clearRect(0, 0, state.canvasWidth, state.canvasHeight)
  state.ctx.closePath()
  emit('clear')
  if(props.imgType = 'jpg') {
    nextTick(() => {
      state.ctx.fillStyle = '#fff'
      state.ctx.fillRect(0, 0, state.canvasWidth, state.canvasHeight)
    })
  }
}

const confirm = () => {
  if(isBlank()) return console.error('没有签名')
  let url
  switch (props.imgType) {
    case 'png':
      url = canvas.value.toDataURL('image/png')
      break;
    case 'jpg':
      url = canvas.value.toDataURL('image/jpeg', 0.8)
      break;
    default:
      break;
  }
  emit('confirm', canvas.value, url)
}

onBeforeMount(() => {
  state.canvasWidth = 500
  state.canvasHeight = 150
})

onMounted(() => {
  if(canvasSuported()) {
    state.ctx = canvas.value.getContext('2d')
    state.ctx.fillStyle = '#fff'
    state.ctx.fillRect(0, 0, state.canvasWidth, state.canvasHeight)
    startEvent()
  }
})
</script>

<template>
  <div class="signature">
    <div ref="wrap" class="sign-box">
      <canvas ref="canvas" :height="state.canvasHeight" :width="state.canvasWidth"></canvas>
    </div>
    <button @click="clear">重签</button>
    <button @click="confirm">确认</button>
  </div>
</template>

<style scoped>
.sign-box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10rem;
  margin-bottom: 1rem;
  border: 1px solid #4b4b4b;
}
</style>

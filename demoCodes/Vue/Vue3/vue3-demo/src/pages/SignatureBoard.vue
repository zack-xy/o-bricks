<template>
  <div>
    <Signature @confirm="confirm" @clear="clear" imgType="jpg"/>
    <div>
      <h3>签名导出的图片</h3>
      <img :src="imgUrl" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Signature from '@/components/Signature.vue'

let imgUrl = ref(null)

const confirm = (canvas, url) => {
  console.log('canvas', canvas);
  console.log('url', url);
  imgUrl.value = url
}

const clear = () => {
  imgUrl.value = ''
}
</script>

<style scoped>
</style>

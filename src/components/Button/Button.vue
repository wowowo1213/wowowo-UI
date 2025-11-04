<template>
  <button
    ref="woRef"
    class="vwo-button"
    :class="{
      [`vwo-button--${type}`]: type,
      [`vwo-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
    }"
    :disabled="disabled"
    :autofocus="autofocus"
    :type="nativeType"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'VwoButton',
})
</script>
<script lang="ts" setup>
import { ref } from 'vue'
import type { ButtonProps } from './types'

withDefaults(defineProps<ButtonProps>(), {
  nativeType: 'button',
})

const woRef = ref<HTMLButtonElement>()

defineExpose({
  ref: woRef,
})
</script>

<style>
.vwo-button {
  background-color: var(--vwo-color-primary);
}
</style>

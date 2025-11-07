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

<script lang="ts" setup>
import { ref } from 'vue';
import type { ButtonProps } from './types';

defineOptions({
  name: 'VWoButton',
});

withDefaults(defineProps<ButtonProps>(), {
  nativeType: 'button',
});

const woRef = ref<HTMLButtonElement>();

defineExpose({
  ref: woRef,
});
</script>

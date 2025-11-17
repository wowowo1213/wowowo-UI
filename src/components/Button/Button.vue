<template>
  <button
    ref="_ref"
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
    :type="nativeType"
    :autofocus="autofocus"
  >
    <span>
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { ButtonProps } from './types';
defineOptions({
  name: 'VWoButton',
});

withDefaults(defineProps<ButtonProps>(), {
  nativeType: 'button',
});

const _ref = ref<HTMLButtonElement>();

defineExpose({
  ref: _ref,
});
</script>

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
      'is-loading': loading,
    }"
    :disabled="disabled || loading"
    :type="nativeType"
    :autofocus="autofocus"
  >
    <Icon icon="spinner" spin v-if="loading" />
    <Icon :icon="icon" v-if="icon" />
    <span>
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { ButtonProps } from './types';
import Icon from '@/components/Icon/Icon.vue';
defineOptions({
  name: 'VWoButton',
});

withDefaults(defineProps<ButtonProps>(), {
  nativeType: 'button',
});

const _ref = ref<HTMLButtonElement>();

defineExpose({ ref: _ref });
</script>

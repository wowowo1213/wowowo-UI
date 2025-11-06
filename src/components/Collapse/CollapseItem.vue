<template>
  <div
    class="vwo-collapse-item"
    :class="{
      'is-disabled': disabled,
    }"
  >
    <div class="vwo-collapse-item__head" :id="`item-header-${name}`">
      <slot name="title">
        {{ title }}
      </slot>
    </div>
    <div class="vwo-collapse-item__content" :id="`item-content-${name}`">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CollapseItemProps } from './types';
defineOptions({
  name: 'VWoCollapseItem',
});
defineProps<CollapseItemProps>();
</script>

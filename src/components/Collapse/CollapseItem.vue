<template>
  <div
    class="vwo-collapse-item"
    :class="{
      'is-disabled': disabled,
    }"
  >
    <div
      class="vwo-collapse-item__head"
      :class="{
        'is-disabled': disabled,
        'is-active': isActive,
      }"
      :id="`item-header-${name}`"
      @click="handleClick"
    >
      <slot name="title">
        {{ title }}
      </slot>
    </div>
    <div class="vwo-collapse-item__content" :id="`item-content-${name}`" v-show="isActive">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue';
import type { CollapseItemProps } from './types';
import { collapseContextKey } from './types';

defineOptions({
  name: 'VWoCollapseItem',
});

const props = defineProps<CollapseItemProps>();
const collapseContext = inject(collapseContextKey);
const isActive = computed(() => {
  return collapseContext?.activeNames.value.includes(props.name);
});
const handleClick = () => {
  if (props.disabled) {
    return;
  }
  collapseContext?.handleItemClick(props.name);
};
</script>

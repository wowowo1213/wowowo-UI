<template>
  <div class="vwo-collapse">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue';
import type { NameType } from './types';
import { collapseContextKey } from './types';

defineOptions({
  name: 'VWoCollapse',
});

const activeNames = ref<NameType[]>([]);
const handleItemClick = (item: NameType) => {
  const index = activeNames.value.indexOf(item);
  if (index > -1) {
    // 存在的话就删除
    activeNames.value.splice(index, 1);
  } else {
    // 不存在就插入
    activeNames.value.push(item);
  }
};

provide(collapseContextKey, {
  activeNames,
  handleItemClick,
});
</script>

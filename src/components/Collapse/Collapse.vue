<template>
  <div class="vwo-collapse">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, provide, watch } from 'vue';
import type { NameType, CollapseProps, CollapseEmits } from './types';
import { collapseContextKey } from './types';
defineOptions({ name: 'VWoCollapse' });

const props = defineProps<CollapseProps>();
const emits = defineEmits<CollapseEmits>();

const activeNames = ref<NameType[]>(props.modelValue);

watch(
  // 这边主要是为了处理异步数据，不然的话activeNames不会更新
  () => props.modelValue,
  () => {
    activeNames.value = props.modelValue;
  }
);

const handleItemClick = (item: NameType) => {
  if (props.accordion) {
    // 手风琴模式下能激活的item只有一个
    activeNames.value = [activeNames.value[0] === item ? '' : item];
  } else {
    const index = activeNames.value.indexOf(item);
    if (index > -1) {
      // 存在的话就删除
      activeNames.value.splice(index, 1);
    } else {
      // 不存在就插入
      activeNames.value.push(item);
    }
  }

  emits('update:modelValue', activeNames.value);
};

provide(collapseContextKey, {
  activeNames,
  handleItemClick,
});
</script>

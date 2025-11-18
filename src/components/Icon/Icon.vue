<template>
  <i
    class="vwo-icon"
    :class="{ [`vwo-icon--${type}`]: type }"
    :style="customStyles"
    v-bind="$attrs"
  >
    <font-awesome-icon v-bind="filteredProps" />
  </i>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { omit } from 'lodash-es';
import type { IconProps } from './types';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
defineOptions({
  name: 'VwoIcon',
  // 下面这边会使得父组件使用Icon组件只能设置IconProps拥有的属性，其他设置无效，比如class的设置，但是可以通过$attrs来设置
  inheritAttrs: false,
});
const props = defineProps<IconProps>();
const filteredProps = computed(() => omit(props, ['type', 'color']));
// 计算属性计算后的color通过内联属性进行绑定，所以优先级高于type的设置
const customStyles = computed(() => {
  return props.color ? { color: props.color } : {};
});
</script>

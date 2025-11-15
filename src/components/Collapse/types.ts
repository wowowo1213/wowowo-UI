import type { Ref, InjectionKey } from 'vue';

export type NameType = string | number;

export interface CollapseItemProps {
  name: NameType; // name必须是不重复的，不然无法单独控制
  title?: string;
  disabled?: boolean; // 用来控制是否可打开
}

export interface CollapseProps {
  modelValue: NameType[]; // 使用v-model来控制打开的item
  accordion?: boolean; // 用来控制是否支持手风琴格式
}

export interface CollapseEmits {
  (e: 'update:modelValue', values: NameType[]): void;
}

export interface CollapseContext {
  activeNames: Ref<NameType[]>;
  handleItemClick: (name: NameType) => void;
}

export const collapseContextKey: InjectionKey<CollapseContext> = Symbol('collapseContextKey');

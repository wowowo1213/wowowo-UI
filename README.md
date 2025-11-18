# wowowo-UI - 基于 CSS 变量的 Vue 组件库

一个轻量级、可定制的 Vue 3 组件库，参考 Element-UI 设计风格，使用 CSS 变量实现主题统一管理。

## 特性

- **Element-UI 风格**：继承 Element-UI 的视觉设计语言
- **CSS 变量主题**：通过 CSS 变量统一管理样式，轻松切换主题
- **使用`PostCSS`作为CSS扩展**: 通过@each、@for、color-mix动态生成CSS变量，简化CSS代码
- **TypeScript 支持**：完整的类型定义，提升开发体验
- **手风琴模式**：`Collapse` 组件支持手风琴效果

## 安装

```bash
npm install wowowo-ui
```

## 🚀快速开始

### 1. 引入样式

在项目中引入全局样式和 CSS 变量：

```js
// main.js 或者 main.ts
import 'wowowo-ui/dist/styles/reset.css';
import 'wowowo-ui/dist/styles/var.css';
```

### 2、全局注册组件

```js
import { createApp } from 'vue';
import WowowoUI from 'wowowo-ui';

const app = createApp(App);
app.use(WowowoUI);
app.mount('#app');
```

### 3、按需引入

```js
<script setup>import {(Button, Collapse, CollapseItem)} from 'wowowo-ui';</script>
```

## 📚 组件文档

### 1. Button 组件

#### 使用展示

```vue
<template>
  <Button type="primary" @click="handleClick">主要按钮</Button>
</template>

<script setup lang="ts">
import { Button } from 'wowowo-ui';
const handleClick = () => console.log('按钮点击');
</script>
```

#### 属性

| 属性       | 说明         | 类型                                                          | 默认值     |
| ---------- | ------------ | ------------------------------------------------------------- | ---------- |
| type       | 按钮类型     | `'primary' \| 'success' \| 'warning' \| 'danger'   \| 'info'` | `''`       |
| size       | 按钮尺寸     | `'large'   \| 'medium'  \| 'small'`                           | `''`       |
| plain      | 朴素模式     | `boolean`                                                     | `false`    |
| round      | 圆角按钮     | `boolean`                                                     | `false`    |
| circle     | 圆形按钮     | `boolean`                                                     | `false`    |
| disabled   | 禁用状态     | `boolean`                                                     | `false`    |
| nativeType | 原生按钮类型 | `'button'  \| 'submit'  \| 'reset'`                           | `'button'` |
| loading    | 加载中状态   | `boolean`                                                     | `false`    |

---

### 2. Collapse 手风琴组件

展示多个可折叠的面板

点击标题可以关闭和展开内容

特定的手风琴模式：点击一个内容标题，则会关闭其他内容

#### 使用展示

```vue
<template>
  <Collapse v-model="openedValue" accordion>
    <CollapseItem name="a">
      <template #title>
        <h1>title A</h1>
      </template>
      <h1>headline title</h1>
      <div>this is content a aaa</div>
    </CollapseItem>
    <CollapseItem name="b" title="Title b">
      <div>this is bbbbb test</div>
    </CollapseItem>
    <CollapseItem name="c" title="Title c" disabled>
      <div>this is ccccc test</div>
    </CollapseItem>
  </Collapse>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Collapse, CollapseItem } from 'wowowo-ui';

const openedValue = ref(['a']);
</script>
```

#### 属性

##### Collapse Props

| 属性      | 说明                       | 类型      | 可选性 |
| --------- | -------------------------- | --------- | ------ |
| v-model   | 当前展开的面板 name        | `string`  | 必填   |
| accordion | 用来控制是否支持手风琴格式 | `boolean` | 选填   |

##### CollapseItem Props

| 属性     | 说明       | 类型      | 可选性 |
| -------- | ---------- | --------- | ------ |
| name     | 唯一标识符 | `string`  | 必填   |
| title    | 面板标题   | `string`  | 选填   |
| disabled | 是否可展开 | `boolean` | 选填   |

---

### 3.Icon 组件

#### 安装依赖

```bash
npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/vue-fontawesome
```

#### 使用展示

```vue
<template>
  <Icon icon="spinner" type="primary" color="red"></Icon>
</template>

<script>
import Icon from '@/components/Icon/Icon.vue';
</script>
```

#### 属性

`Icon` 组件支持以下属性：

| 属性名    | 类型                                                                    | 默认值  | 说明                                                 |
| --------- | ----------------------------------------------------------------------- | ------- | ---------------------------------------------------- |
| `icon`    | `string \| object \| Array<string> \| IconDefinition`                   | -       | **必填**，指定图标（如 `"home"` 或 `faHome`）        |
| `type`    | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'`             | -       | 图标类型（用于样式）                                 |
| `color`   | `string`                                                                | -       | 自定义图标颜色（如 `"red"` 或 `"#ff0000"`）          |
| `size`    | `'2xs' \| 'xs' \| 'sm' \| 'lg' \| 'xl' \| '2xl' \| '1x' \| '2x' \| ...` | -       | 图标大小（Font Awesome 标准）                        |
| `spin`    | `boolean`                                                               | `false` | 是否旋转动画                                         |
| `pulse`   | `boolean`                                                               | `false` | 是否脉冲动画                                         |
| `rotate`  | `90 \| 180 \| 270 \| '90' \| '180' \| '270'`                            | -       | 旋转角度                                             |
| `flip`    | `'horizontal' \| 'vertical' \| 'both' \| boolean`                       | -       | 翻转图标                                             |
| `border`  | `boolean`                                                               | `false` | 是否显示边框                                         |
| `inverse` | `boolean`                                                               | `false` | 反色（深色背景适用）                                 |
| `...`     | `...`                                                                   | `...`   | 其他 Font Awesome 原生属性（如 `mask`, `symbol` 等） |

## 开发指南

```bash
# 克隆仓库
git clone https://github.com/wowowo1213/wowowo-UI

# 选择仓库
cd wowowo-UI

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建组件库
npm run build
```

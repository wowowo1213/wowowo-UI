# wowowo-UI

一个基于 CSS 变量（参考 Element-UI 颜色和设计）的 Vue 组件库

## 特性

- 使用 CSS 变量统一主题样式
- 组件设计参考 Element-UI 的视觉风格
- 支持手风琴模式的 `Collapse` 组件

## 安装

```bash
npm install wowowo-ui
```

## 使用 CSS 变量

在项目中引入 `reset.css` 和主题变量

## 组件文档

### 1. Button 组件

```vue
<template>
  <Button type="primary" @click="handleClick">主要按钮</Button>
</template>

<script setup>
import { Button } from 'wowowo-ui';
const handleClick = () => console.log('按钮点击');
</script>
```

#### API

| 属性 | 说明     | 类型                                                        | 默认值      |
| ---- | -------- | ----------------------------------------------------------- | ----------- |
| type | 按钮类型 | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | `'primary'` |
| size | 按钮尺寸 | `'large' \| 'medium' \| 'small'`                            | `'medium'`  |

---

### 2. Collapse 手风琴组件

展示多个可折叠的面板

点击标题可以关闭和展开内容

特定的手风琴模式：点击一个内容标题，则会关闭另一个内容

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

<script setup>
import { ref } from 'vue';
import { Collapse, CollapseItem } from 'wowowo-ui';

const openedValue = ref(['a']);
</script>
```

#### API

##### Collapse Props

| 属性                 | 说明                       | 类型      | 可选性 |
| -------------------- | -------------------------- | --------- | ------ |
| modelValue / v-model | 当前展开的面板 name        | `string`  | 必填   |
| accordion            | 用来控制是否支持手风琴格式 | `boolean` | 选填   |

##### CollapseItem Props

| 属性     | 说明       | 类型      | 可选性 |
| -------- | ---------- | --------- | ------ |
| name     | 唯一标识符 | `string`  | 必填   |
| title    | 面板标题   | `string`  | 选填   |
| disabled | 是否可展开 | `boolean` | 选填   |

---

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

<template>
  <div>
    <div>
      <Button type="primary" plain ref="buttonRef">Text Button</Button>

      <div class="button-group">
        <h3>1. 默认按钮</h3>
        <Button>默认按钮</Button>
      </div>

      <div class="button-group">
        <h3>2. 类型测试</h3>
        <Button type="primary">主要按钮</Button>
        <Button type="success">成功按钮</Button>
        <Button type="warning">警告按钮</Button>
        <Button type="danger">危险按钮</Button>
        <Button type="info">信息按钮</Button>
      </div>

      <div class="button-group">
        <h3>3. 尺寸测试</h3>
        <Button size="large">大型按钮</Button>
        <Button size="medium">默认按钮</Button>
        <Button size="small">小型按钮</Button>
      </div>

      <div class="button-group">
        <h3>4. 朴素按钮</h3>
        <Button type="primary" plain>朴素按钮</Button>
        <Button type="success" plain>朴素按钮</Button>
      </div>

      <div class="button-group">
        <h3>5. 圆角 & 圆形按钮</h3>
        <Button type="primary" round>圆角按钮</Button>
        <Button type="success" circle>✓</Button>
      </div>

      <div class="button-group">
        <h3>6. 禁用状态</h3>
        <Button type="primary" disabled>禁用按钮</Button>
        <Button plain disabled>禁用朴素按钮</Button>
      </div>
    </div>

    <Collapse>
      <Item name="a">
        <template #title>
          <h1>nice title</h1>
        </template>
        <h1>headline title</h1>
        <div>this is content a aaa</div>
      </Item>
      <Item name="b" title="nice title b item b">
        <div>this is bbbbb test</div>
      </Item>
    </Collapse>
  </div>
</template>

<script lang="ts" setup name="App">
import { ref, onMounted } from 'vue';
import Button from './components/Button/Button.vue';
import type { ButtonInstance } from './components/Button/types';
import Item from './components/Collapse/CollapseItem.vue';
import Collapse from './components/Collapse/Collapse.vue';

const buttonRef = ref<ButtonInstance | null>(null);

onMounted(() => {
  if (buttonRef.value) {
    console.log(buttonRef.value.ref);
  }
});
</script>

<style scoped></style>

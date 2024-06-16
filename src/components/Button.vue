<script setup lang="ts">
import { toRefs } from 'vue'
import type { IButtonProps } from '@/types/components/button'

const props = withDefaults(defineProps<IButtonProps>(), {
  disabled: false
})

const emits = defineEmits<{
  (e: 'btnEvent', key: string): void
  (e: 'click'): void
}>()

const { disabled } = toRefs(props)

function handleClick() {
  if (disabled.value)
    return
  emits('click')
}
</script>

<template>
  <div btn :class="{ 'dis-btn': disabled }" @click="handleClick">
    <slot>
      Click Me
    </slot>
  </div>
</template>

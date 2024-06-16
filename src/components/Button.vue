<script setup lang="ts">
import { toRefs } from 'vue'
import type { IButtonProps } from '@/types/components/button'

const props = withDefaults(defineProps<IButtonProps>(), {
  btnText: 'Click Me'
})

const emits = defineEmits<{
  (e: 'btnEvent', key: string): void
}>()

const { btnText } = toRefs(props)
</script>

<template>
  <div btn>
    <slot>
      Click Me
    </slot>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
import type { ICardProps } from '@/types/components/card'

const props = withDefaults(defineProps<ICardProps>(), {
  name: 'Card Name',
  description: 'Card Description',
  quantity: 0
})

const { name, description, quantity } = toRefs(props)
</script>

<template>
  <div border="1 solid blue-300" h32 w-xs rounded-2xl p4>
    <div text-2xl font-black>
      {{ name }}
    </div>
    <div h-16 flex gap-2>
      <div line-clamp-3 w48 text-sm font-sans>
        {{ description }}
      </div>
      <div w24 flex items-center justify-center text-2xl font-bold>
        {{ quantity }}
      </div>
    </div>
  </div>
</template>

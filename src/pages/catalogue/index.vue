<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import Card from '@/components/Card.vue'
import type { ICatalog } from '@/types/pages/catalogue'

const firstCatalogueList = ref<ICatalog[]>()

function gotoCatalogue(name: string) {
  console.log(`Going to ${name}`)
}

onBeforeMount(() => {
  firstCatalogueList.value = [
    {
      name: 'Components',
      description: 'Some componets I created to use in my projects',
      quantity: 10
    },
    {
      name: 'Utils',
      description: 'Some utils I created to use in my projects',
      quantity: 20
    },
    {
      name: 'Others',
      description: 'Some other things',
      quantity: 120
    }
  ]
})
</script>

<template>
  <div flex="~" gap-4 p8>
    <Card
      v-for="catalogue in firstCatalogueList"
      :key="catalogue.name"
      :name="catalogue.name"
      :description="catalogue.description"
      :quantity="catalogue.quantity"
      hover:cursor-pointer
      hover:text-blue-300 @click="gotoCatalogue(catalogue.name)"
    />
  </div>
</template>

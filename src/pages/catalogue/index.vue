<script setup lang="ts">
import { onBeforeMount, onBeforeUpdate, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Card from '@/components/Card.vue'
import type { ICatalog } from '@/types/pages/catalogue'
import { componentsCatalogueList, firstCatalogueList, utilsCatalogueList } from '@/mock'

const router = useRouter()

const catalogueList = ref<ICatalog[]>()

function gotoTarget(key: string) {
  router.push({
    name: 'Catalogue',
    params: {
      key
    }
  })
}

const route = useRoute()

function getCatalogueList(key: string) {
  key === 'all' && (catalogueList.value = firstCatalogueList)
  key === 'components' && (catalogueList.value = componentsCatalogueList)
  key === 'utils' && (catalogueList.value = utilsCatalogueList)
}

onBeforeMount(() => {
  const key = Array.isArray(route.params.key) ? route.params.key[0] : route.params.key
  key && getCatalogueList(key)
})

onBeforeUpdate(() => {
  const key = Array.isArray(route.params.key) ? route.params.key[0] : route.params.key
  key && getCatalogueList(key)
})
</script>

<template>
  <div flex="~ wrap" gap-4 p8>
    <Card
      v-for="catalogue in catalogueList"
      :key="catalogue.key"
      :name="catalogue.name"
      :description="catalogue.description"
      :quantity="catalogue.quantity"
      hover:cursor-pointer
      hover:text-blue-300 @click="gotoTarget(catalogue.key)"
    />
  </div>
</template>

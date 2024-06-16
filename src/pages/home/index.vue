<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Button from '@/components/Button.vue'

const router = useRouter()

const name = ref('Merlin Alex')

function gotoCatalogue() {
  router.push({
    name: 'FirstCatalogue'
  })
}
</script>

<template>
  <div h="[100vh]" flex text-center>
    <div ma>
      <div text-12 text-blue>
        Hello {{ name }}
      </div>
      <Button @click="gotoCatalogue">
        <div i-hugeicons:catalogue mr-2 inline-block />Catalogue
      </Button>
    </div>
  </div>
</template>

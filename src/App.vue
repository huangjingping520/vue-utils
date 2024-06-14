<script setup lang="ts">
import { ref } from 'vue'

const name = ref('Vue')
</script>

<template>
  <div h="[100vh]" flex text-center>
    <div ma>
      <div text-12 text-emerald>
        Hello {{ name }}
      </div>
      <div text-8 op80>
        Utils
      </div>
    </div>
  </div>
</template>

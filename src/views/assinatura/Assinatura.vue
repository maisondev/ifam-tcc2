<script>
import BaseButton from "@/components/base/BaseButton.vue";

export default {
  name: "Assinatura",
  components: {BaseButton}
}
</script>

<template>
<div class="bg-blue-500 rounded h-full">
  <h1 class="text-gray-50 text-2xl p-4">Assinatura</h1>
  <div class="p-4">
    <BaseButton rotulo="Assinar"></BaseButton>
  </div>

</div>
</template>

<style scoped>

</style>
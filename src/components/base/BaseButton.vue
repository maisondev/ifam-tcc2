<script>
export default {
  name: "BaseButton",
  props:{
    rotulo:{
      type:String,
      required: true
    }
  },
  methods:{
    action(){
      console.log("emitAction")
      this.$emit("action")
    }
  }
}
</script>

<template>
  <div>
    <button class="bg-green-600 hover:bg-green-700 px-4 py-2 rounded" @click.prevent="action"><span class="text-gray-50">{{ rotulo }}</span></button>
  </div>
</template>

<style scoped>

</style>
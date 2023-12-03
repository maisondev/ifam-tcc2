<template>
  <div>
    <button :class="corBotao" class="xs:container xs:mx-auto bg-green-600 hover:bg-green-700 px-8 py-2 rounded" @click.prevent="action"><span class="text-gray-50 text-lg">{{ rotulo }}</span></button>
  </div>
</template>

<script>
export default {
  name: "BaseButton",
  props:{
    rotulo:{
      type:String,
      required: true
    },
    corBotao:{
      type:String,
      required: false
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



<style scoped>

</style>
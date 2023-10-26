<template>
<div class="flex flex-row justify-between items-center h-24 border third-color text-gray-50">
  <div class="flex w-full items-center justify-around">
    <div class="flex flex-row justify-around items-center">
      <div class="flex flex-row justify-end items-center">
        <a class="cursor-pointer items-center uppercase">
          portal dos servidores
        </a>
      </div>

    </div>
    <div class="flex flex-row justify-end items-center">
      <span v-if="getEmailUser" class="cursor-pointer items-center uppercase">
        Usuário: <span class="lowercase">{{getEmailUser}}</span>
      </span>
    </div>
  </div>

</div>
</template>

<script>
import firebase from "firebase/compat/app";
export default {
  name: "Header",
  computed:{
    getEmailUser(){
      if(firebase.auth().currentUser){
        return firebase.auth().currentUser.email;
      }

    }
  }
}
</script>

<style scoped>

</style>

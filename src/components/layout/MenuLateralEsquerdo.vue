<template>
  <div class="first-color sticky h-full top-0 left-0">
    <aside class="w-64 h-full" aria-label="Sidebar">
      <div class=" py-4 px-3 text-gray-50 rounded ">
        <ul class="space-y-2 ">
          <li>
            <router-link to="/home" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-500 hover:opacity-95 dark:hover:bg-gray-700">
              <svg class="w-6 h-6 text-gray-50 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
              <span class="ml-4 text-left text-gray-50">Home</span>
            </router-link>
          </li>
          <li>
            <router-link to="/servidores" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-500 hover:opacity-95 dark:hover:bg-gray-700">
              <svg class="w-6 h-6 text-gray-50 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"><path fill="currentColor" d="M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M16.5,16.25C16.5,14.75 13.5,14 12,14C10.5,14 7.5,14.75 7.5,16.25V17H16.5M12,12.25A2.25,2.25 0 0,0 14.25,10A2.25,2.25 0 0,0 12,7.75A2.25,2.25 0 0,0 9.75,10A2.25,2.25 0 0,0 12,12.25Z"></path></svg>
              <span class="ml-4 text-left text-gray-50">Servidores Federais</span>
            </router-link>
          </li>
          <li>
            <router-link to="/servidormunicipio" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-500 hover:opacity-95 dark:hover:bg-gray-700">
              <svg class="w-6 h-6 text-gray-50 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"><path fill="currentColor" d="M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M16.5,16.25C16.5,14.75 13.5,14 12,14C10.5,14 7.5,14.75 7.5,16.25V17H16.5M12,12.25A2.25,2.25 0 0,0 14.25,10A2.25,2.25 0 0,0 12,7.75A2.25,2.25 0 0,0 9.75,10A2.25,2.25 0 0,0 12,12.25Z"></path></svg>
              <span class="ml-4 text-left text-gray-50">Servidores Municipais</span>
            </router-link>
          </li>
          <li>
            <router-link to="/servidorestado" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-500 hover:opacity-95 dark:hover:bg-gray-700">
              <svg class="w-6 h-6 text-gray-50 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"><path fill="currentColor" d="M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M16.5,16.25C16.5,14.75 13.5,14 12,14C10.5,14 7.5,14.75 7.5,16.25V17H16.5M12,12.25A2.25,2.25 0 0,0 14.25,10A2.25,2.25 0 0,0 12,7.75A2.25,2.25 0 0,0 9.75,10A2.25,2.25 0 0,0 12,12.25Z"></path></svg>
              <span class="ml-4 text-left text-gray-50">Servidores Estado</span>
            </router-link>
          </li>
          <li>
            <router-link to="/dashboard" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-500 hover:opacity-95 dark:hover:bg-gray-700">
              <svg class="w-6 h-6 text-gray-50 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
              <span class="ml-4 text-left text-gray-50">Dashboard</span>
            </router-link>
          </li>
          <li>
            <router-link to="/rendimentos" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-500 dark:hover:bg-gray-700">
              <svg class="flex-shrink-0 w-6 h-6 text-gray-50 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
              <span class="flex-1 ml-4 text-left whitespace-nowrap text-gray-50">Meus Rendimentos</span>
            </router-link>
          </li>
          <li>
            <router-link to="/perfil" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-500 dark:hover:bg-gray-700">
              <svg class="flex-shrink-0 w-6 h-6 text-gray-50 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
              <span class="flex-1 ml-4 text-left whitespace-nowrap text-gray-50">Meu Perfil</span>
              <span class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">3</span>
            </router-link>
          </li>
          <li>
            <router-link to="/organizacoes" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-500 dark:hover:bg-gray-700">
              <svg class="flex-shrink-0 w-6 h-6 text-gray-50 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
              <span class="flex-1 ml-4 text-left whitespace-nowrap text-gray-50">Organizações</span>
            </router-link>
          </li>
          <li>
            <router-link to="/assinatura" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-500 dark:hover:bg-gray-700">
              <svg class="flex-shrink-0 w-6 h-6 text-gray-50 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
              <span class="flex-1 ml-4 text-left whitespace-nowrap text-gray-50">Assinatura</span>
            </router-link>
          </li>
          <li>
            <router-link to="/about" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-500 dark:hover:bg-gray-700">
              <svg class="flex-shrink-0 w-6 h-6 text-gray-50 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path></svg>
              <span class="flex-1 ml-4 text-left whitespace-nowrap text-gray-50">Sobre</span>
            </router-link>
          </li>
          <li>
            <a @click="logout" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-500 dark:hover:bg-gray-700">
              <svg class="flex-shrink-0 w-6 h-6 text-gray-50 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
              <span class="flex-1 ml-4 text-left whitespace-nowrap text-gray-50">Sair</span>
            </a>
          </li>

        </ul>
      </div>
    </aside>

  </div>

</template>

<script>
import firebase from "firebase/compat/app";
export default {
  name: "MenuLateralEsquerdo",
  methods:{
    async logout(){
      await firebase.auth().signOut().then(() => {
        this.$store.commit("login/setUsuario",null);
        this.$router.push("/");
      }).catch((error) => {
        // An error happened.
        console.log("Erro ao sair",error)
      });
    }
  }
}
</script>

<style scoped>

</style>

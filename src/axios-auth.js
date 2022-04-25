import Vue from "vue";
import axios from "axios";

const url = process.env.VUE_APP_BASE_URL;
const token = process.env.VUE_APP_KEY;

const instance = axios.create({
    baseURL : url,
    timeout: 20000,
    headers: {
        'chave-api-dados':token,}
})

// Adiciona um interceptador na requisição
axios.interceptors.request.use(function (config) {
    // Faz alguma coisa antes da requisição ser enviada
    return config;
}, function (error) {
    // Faz alguma coisa com o erro da requisição
    return Promise.reject(error);
});

// Adiciona um interceptador na resposta
axios.interceptors.response.use(function (response) {
    // Qualquer código de status que dentro do limite de 2xx faz com que está função seja acionada
    // Faz alguma coisa com os dados de resposta
    return response;
}, function (error) {
    // Qualquer código de status que não esteja no limite do código 2xx faz com que está função seja acionada
    // Faz alguma coisa com o erro da resposta
    return Promise.reject(error);
});

Vue.prototype.$http = instance

export default instance;

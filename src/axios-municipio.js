import Vue from "vue";
import axios from "axios";

const url = process.env.VUE_APP_BASE_URL_MUNICIPIO;
const token = process.env.VUE_APP_KEY;

const instance = axios.create({
    baseURL : url,
    timeout: 20000,
    headers: {
        "Content-Type": "application/json;charset=utf-8",
        "Accept": "*/*",
        "Cookie":"GX_SESSION_ID=97yyixfYCCghr9zohxypLHcg1EkOMlv8Q5FYUDrpVcw%3D; JSESSIONID=fefdcd5f78f91eedea530048c679; TS016609c9=016079ccbe1ac461b0331e55995d2776954fc9713229fb2bd2b3971fecfdf6628c48c955a4a02994125cb85026ea4b54f84ca9a47fd806a5c0d6d6b22ca202ab60ec1cc155; ROUTEID=.pirangi2; TS012ca9c1=016079ccbe076fb26b4537c66e423c6cb3fc68349e1fe2ec794635b64c1453471f38846d31369ee97a8a0f3c2c9cb7b2ccf753e7659725999af8ab285e0fd0251f703989403667ec202c26e7cc3e0c4aeccc555a69'"
    }
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

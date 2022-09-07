import axios from "../../../axios-auth"

const token = process.env.VUE_APP_KEY;

export const actions = {
    async serviceGetConsultaServidores({commit}, request) {
        console.log('serviceGetConsultaServidores',request)
        const url = "/api-de-dados/servidores";
        console.log(typeof token);
        try{
             return await axios.get(url, {params: {pagina:request.pagina,
                 cpf:request.cpf}})
                .then(function (response) {
                    console.log('response', response);
                    return response.data;
                })
                .catch(function (error) {
                    console.log('Erro', error)
                });
        }catch (e) {
            console.log('Erro ao consultar',e)

        }

    }

}

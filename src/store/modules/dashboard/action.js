import axios from "../../../axios-auth"

const token = process.env.VUE_APP_KEY;

export const actions = {

    async serviceGetConsultaRemuneracoesServidor({commit}, request) {
        console.log('serviceGetConsultaRemuneracoesServidor',request)
        const url = "/api-de-dados/servidores/remuneracao";
        try{
            return await axios.get(url, {params: {pagina:request.pagina,
                    orgaoServidorExercicio:request.orgaoServidorExercicio}})
                .then(function (response) {
                    console.log('response', response);
                    return response.data;
                })
                .catch(function (error) {
                    console.log('Erro', error)
                });
        }catch (e) {
            console.log('Erro ao consultar remuneração',e)

        }

    },
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

    },
    async serviceGetConsultaServidoresOrgaos({commit}, request) {
        console.log('serviceGetConsultaServidoresOrgaos',request)
        const url = "/api-de-dados/servidores";
        try{
            return await axios.get(url, {params: {pagina:request.pagina,
                    orgaoServidorExercicio:request.orgaoServidorExercicio}})
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

    },
    async serviceGetConsultaServidoresById({commit}, request) {
        console.log('serviceGetConsultaServidores',request)
        const url = `/api-de-dados/servidores/${request.id}`;
        console.log(typeof token);
        try{
            return await axios.get(url)
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

import axios from "../../../axios-auth"

const token = process.env.VUE_APP_KEY;

export const actions = {

    async serviceGetConsultaPepsServidor(context, request) {
        console.log('serviceGetConsultaPepsServidor',request)
        const url = "/api-de-dados/peps";
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
            console.log('Erro ao consultar peps',e)
        }

    },
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


    async serviceGetConsultaServidores(context, request) {
        console.log('serviceGetConsultaServidores',request)
        const url = "/api-de-dados/servidores";
        try{
             return await axios.get(url, {params: {pagina:request.pagina,
                 cpf:request.cpf, nome: request.nome}})
                .then(function (response) {
                    console.log('response', response.data);
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

    async serviceGetConsultaServidoresById(context, request) {
        console.log('serviceGetConsultaServidoresById',request)
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
            console.log('Erro ao consultar servidor pelo id',e)

        }

    }

}

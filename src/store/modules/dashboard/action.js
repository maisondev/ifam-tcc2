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

    },

    async serviceGetConsultaFuncoesCargos(context, request) {
        console.log('serviceGetConsultaFuncoesCargos',request)
        const url = `/api-de-dados/servidores/funcoes-e-cargos`;
        try{
            return await axios.get(url,{params: {pagina:request.pagina,
                    }} )
                .then(function (response) {
                    console.log('response axios', response.data);
                    return response.data;
                })
                .catch(function (error) {
                    console.log('Erro', error)
                });
        }catch (erro) {
            console.log(
                "Erro ao consultar cargos e funções",erro);

        }

    },

    async serviceGetConsultaServidoresByOrgaos(context, request) {
        console.log('serviceGetConsultaServidoresByOrgaos',request)
        const url = "/api-de-dados/servidores/por-orgao";
        try{
            return await axios.get(url, {params: {licenca:parseInt(request.licenca),
                        orgaoExercicio:request.orgaoExercicio,
                    orgaoLotacao: request.orgaoLotacao,
                    pagina:request.pagina,
                    tipoServidor: request.tipoServidor,
                    tipoVinculo: request.tipoVinculo}})
                .then(function (response) {
                    console.log('response', response);
                    return response.data;
                })
                .catch(function (error) {
                    console.log('Erro', error)
                });
        }catch (e) {
            console.log('Erro ao consultar servidores por orgão',e)

        }

    },



    async serviceGetConsultaRemuneracoesServidor(context, request) {
        console.log('serviceGetConsultaRemuneracoesServidor',request)
        const url = "/api-de-dados/servidores/remuneracao";
        try{
            return await axios.get(url, {params: {cpf: request.cpf,
                    id: request.id,
                    mesAno: request.mesAno,
                    pagina:request.pagina}})
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

}

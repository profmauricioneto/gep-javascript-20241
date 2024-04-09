/**
 * Você está desenvolvendo um sistema de
gerenciamento de membros de uma equipe. Crie um
programa em JavaScript que recebe um array de
nomes e exibe cada nome seguido pelo seu
respectivo número de caracteres. Implemente a
função listarNomesECaracteres(nomes) que recebe
um array de nomes como parâmetro e utiliza o método
forEach para exibir cada nome e seu número de
caracteres.
*/

const nomes = ['mauricio', 'joao', 'lucas', 'rafael'];

function listarNomesECaracteres(nomes) {
    nomes.forEach(nome => {
        console.log(`${nome} - ${nome.length} caracteres`);
    })
};

listarNomesECaracteres(nomes);
/**
 * 
 * @On(event = { "CREATE" }, entity = "programaDeFidelidadeSrv.Redemptions")
 * @param {cds.Request} request - User information, tenant-specific CDS model, headers and query parameters
 * @param {Function} next - Callback function to the next handler
 */
module.exports = async function(request, next) {
    // Obter os dados da requisição
    const { data } = request;
    const { customer_ID, redeemedAmount } = data;

    // Verificar se os dados necessários estão definidos
    if (!customer_ID || redeemedAmount === undefined) {
        return next();
    }

    // Obter a entidade Customers
    const { Customers } = cds.entities;

    // Selecionar o cliente específico
    const customer = await SELECT.one.from(Customers).where({ ID: customer_ID });

    // Verificar se o cliente foi encontrado
    if (!customer) {
        return next();
    }

    // Calcular os novos valores para os pontos de recompensa
    const newTotalRewardPoints = customer.totalRewardPoints - redeemedAmount;
    const newTotalRedeemedRewardPoints = customer.totalRedeemedRewardPoints + redeemedAmount;

    // Atualizar os pontos de recompensa do cliente
    await UPDATE(Customers).set({
        totalRewardPoints: newTotalRewardPoints,
        totalRedeemedRewardPoints: newTotalRedeemedRewardPoints
    }).where({ ID: customer_ID });

    // Continuar para o próximo manipulador
    return next();
}
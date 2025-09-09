/**
 * 
 * @On(event = { "CREATE" }, entity = "programaDeFidelidadeSrv.Purchases")
 * @param {cds.Request} request - User information, tenant-specific CDS model, headers and query parameters
 * @param {Function} next - Callback function to the next handler
*/
module.exports = async function(request, next) {
    // Obter as entidades globais
    const { Customers } = cds.entities;

    // Obter os dados da compra do request
    const purchaseData = request.data;

    // Verificar se os dados da compra estão definidos
    if (purchaseData && purchaseData.purchaseValue && purchaseData.customer_ID) {
        // Calcular os pontos de recompensa como um décimo do valor da compra
        const rewardPoints = Math.floor(purchaseData.purchaseValue / 10);

        // Atualizar os pontos de recompensa na compra
        purchaseData.rewardPoints = rewardPoints;

        const customer = await SELECT.one.from(Customers).where({ ID: purchaseData.customer_ID });

        if(!customer){
            return request.error(404, 'Cliente não encontrado.')
        }

        const updatedCustomer = {
            totalPurchaseValue: customer.totalPurchaseValue + purchaseData.purchaseValue,
            totalRewardPoints: customer.totalRewardPoints + rewardPoints
        };

        await UPDATE(Customers).set(updatedCustomer).where({ ID: purchaseData.customer_ID });

        return request;

    }
        return request.error(400, 'Dados da compra incompletos.');
}
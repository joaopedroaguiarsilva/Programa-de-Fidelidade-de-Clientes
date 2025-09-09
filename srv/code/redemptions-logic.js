/**
 * 
 * @On(event = { "CREATE" }, entity = "programaDeFidelidadeSrv.Redemptions")
 * @param {cds.Request} request - User information, tenant-specific CDS model, headers and query parameters
 * @param {Function} next - Callback function to the next handler
*/
module.exports = async function(request, next) {
	// Your code here
	return next();
}
const rp = require('request-promise');

async function resolve(request, graphQLParams){
    var options = {
        method: 'POST',
        uri: '',
        body: graphQLParams,
        json: true
    };
    return await rp(options)
}

module.exports = {
    resolve
}
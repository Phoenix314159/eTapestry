
module.exports = (soap, url, args) => {
  soap.createClient(url, (err, client) => {
    client.login(args, (err, result) => {
      console.log(result);
    });
  });
}

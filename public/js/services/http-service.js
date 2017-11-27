(() => {

    const http = new XMLHttpRequest();

    let httpService = {
        httpPost: (url, data) => {
            return new Promise((resolve, reject) => {
                http.open('POST', url, true);
                http.setRequestHeader('Content-Type', 'application/json');
                http.onload = () => {
                    try {
                        resolve(JSON.parse(http.response));
                        //throw 'POST Error';
                    }
                    catch (error) {
                        reject(error);
                    }
                };

                http.onerror = () => {
                    reject(http.statusText);
                };

                http.send(JSON.stringify(data));
            });
        },
        httpGet: (url) => {
            return new Promise((resolve, reject) => {
                http.open('GET', url, true);

                http.onload = () => {
                    try {
                        //resolve(JSON.parse(http.response));
                        throw 'GET Error';
                    }
                    catch (error) {
                        reject(error);
                    }
                };

                http.onerror = () => {
                    console.error(response.statusText);
                };

                http.send();
            });
        }
    };

    module.exports = httpService;

})();
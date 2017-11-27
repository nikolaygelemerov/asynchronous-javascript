(() => {

    let asyncAwait = {
        executeAsync: async (postRequest, getRequest) => {
            let resultPost,
                resultGet,
                errorPost,
                errorGet;

            try {
                resultPost = await postRequest();

                console.log('postResponse async-await: ', resultPost);
            }
            catch (error) {
                errorPost = new Error(`postError async-await: ${error}`);

                console.error(`postError async-await: ${error}`);
            }

            try {
                resultGet = await getRequest();

                console.log('getResponse async-await: ', resultPost);
            }
            catch (error) {
                errorGet = new Error(`getError async-await: ${error}`);

                console.error(`getError async-await: ${error}`);
            }

            return {
                resultPost: resultPost,
                resultGet: resultGet,
                errorPost: errorPost,
                errorGet: errorGet
            };
        },
        submitForm: function(postRequest, getRequest) {
            this.executeAsync(postRequest, getRequest)
                .then(response => {
                    let responseList = Object.getOwnPropertyNames(response).map(propertyName => {
                        return response[propertyName];
                    });

                    if (responseList.length) {
                        responseList.forEach(element => {
                            if (element instanceof Error) {
                                console.error(element);
                            }
                        });
                    }
                })
                .catch(error => console.error('asyncError: ', error));
        }
    };

    module.exports = asyncAwait;

})();
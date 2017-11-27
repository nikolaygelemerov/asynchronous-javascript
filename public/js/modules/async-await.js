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
                    if (response) {
                        for (let propertyName in response) {
                            if (response[propertyName] instanceof Error) {
                                console.error(response[propertyName]);
                            }
                        }
                    }
                })
                .catch(error => console.error('asyncError: ', error));
        }
    };

    module.exports = asyncAwait;

})();
(() => {

    let generator = {
        gen: function* (postRequest, getRequest) {
            let postResponse = yield {
                promise: postRequest(),
                resultMSg: 'postResult',
                errorMsg: 'postError'
            };
            let getResponse = yield {
                promise: getRequest(),
                resultMSg: 'getResult',
                errorMsg: 'getError'
            };
        },
        handleYielded: function(yielded, generator) {
            if (!yielded.done) {
                yielded.value.promise
                    .then(response => {
                        console.log(`${yielded.value.resultMSg}: `, response);

                        this.handleYielded(generator.next(), generator);
                    })
                    .catch(error => console.error(`${yielded.value.errorMsg}: ${error}`));
            }
        },
        submitForm: function(postRequest, getRequest) {
            let generator = this.gen(postRequest, getRequest);

            this.handleYielded(generator.next(), generator);
        }
    };

    module.exports = generator;

})();
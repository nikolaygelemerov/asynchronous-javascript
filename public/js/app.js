document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const promises = require('./modules/promises');
    const httpService = require('./services/http-service');
    const generator = require('./modules/generator');
    const asyncAwait = require('./modules/async-await');
    const constants = require('./constants/constants');

    let form = document.querySelector('form');
    let inputs = document.querySelectorAll('input');

    let init = () => {
        addEvents(form, 'submit', (e) => {
            e.preventDefault();

            let httpPost = httpService.httpPost.bind(null, constants.url.USER, {
                firstName: inputs[0].value,
                lastName: inputs[1].value
            });

            let httpGet = httpService.httpGet.bind(null, constants.url.USER);

            switch (e.target.target) {
                case 'promises':
                    promises.submitForm(httpPost, httpGet);
                    break;
                case 'generator':
                    generator.submitForm(httpPost, httpGet);
                    break;
                case 'async-await':
                    asyncAwait.submitForm(httpPost, httpGet);
            }

        });
    };

    let addEvents = (domElement, event, callback) => {
        domElement.addEventListener(event, callback);
    };

    init();

}, false);
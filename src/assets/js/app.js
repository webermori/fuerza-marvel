let CryptoJS = require('crypto-js'),
    PRIV_KEY = "ed09d964ea9baa31bd09b60dc4979fcd7cef48f1",
    PUBLIC_KEY = "020c8135bdd46af39055483d456ad085",
    ts = new Date().getTime(),
    hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString(),
    url = 'http://gateway.marvel.com:80/v1/public/characters';

var vm = new Vue({
    el: '#app',
    data: {
        search: '',
        persons: []
    },
    mounted() {
        this.getPersons();
    },
    created: function() {
        //this.getPersons();
    },

    methods: {
        getPersons: function() {
            var _this = this;

            config = {
                ts: ts,
                apikey: PUBLIC_KEY,
                hash: hash
            };

            $.getJSON(url, config)
                .done(function(response) {
                    vm.persons = response.data.results;
                    console.log(response);
                })
                .fail(function(err) {
                    console.log(err);
                });

        }
    }
});
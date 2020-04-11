import cookie from 'react-cookies';
export default class Service {
    constructor(module, template) {
        if (window.location.hostname.indexOf('localhost') < 0 && window.location.hostname.indexOf('masd01') < 0) {
            if (window.location.port > 0) {
                this.urlString = window.location.protocol + '//' + window.location.hostname + ':' + window.location.port + '/ords/masd01/' + module + '/' + template;
            } else {
                this.urlString = window.location.protocol + '//' + window.location.hostname + '/ords/masd01/' + module + '/' + template;
            }
        } else {
            this.urlString = 'http://brokers.mn:8080/ords/masd01/' + module + '/' + template;
        }
    }
    count(){
        var url = this.urlString;
        
            url += '/' + 'rowCount';
        
        return fetch(url, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.getToken()
            }
        });
    }
    query() {
        var url;
        if (arguments.length > 0) {
            var combine = (arr, to) => {
                var result = '';
                for (var i = 0; i < to; i++) {
                    result += '/' + arr[i];
                }
                return result;
            };
            if (typeof arguments[arguments.length - 1] === 'object') {
                url = new URL(this.urlString + combine(arguments, arguments.length - 1));
                var params = arguments[arguments.length - 1];
                Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
            } else {
                url = new URL(this.urlString + combine(arguments, arguments.length));
            }
        } else {
            url = new URL(this.urlString);
        }
        return fetch(url, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.getToken()
            }
        });
    }
    get() {
        var url = this.urlString;
        for (var i in arguments) {
            url += '/' + arguments[i];
        }
        return fetch(url, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.getToken()
            }
        });
    }
    add() {
        var url = this.urlString;
        for (var i = 0; i < arguments.length - 1; i++) {
            url += '/' + arguments[i];
        }
        return fetch(url, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.getToken()
            },
            body: JSON.stringify(arguments[arguments.length - 1])
        });
    }
    edit() {
        var url = this.urlString;
        for (var i = 0; i < arguments.length - 1; i++) {
            url += '/' + arguments[i];
        }
        return fetch(url, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.getToken()
            },
            body: JSON.stringify(arguments[arguments.length - 1])
        });
    }
    remove() {
        var url = this.urlString;
        for (var i in arguments) {
            url += '/' + arguments[i];
        }
        return fetch(url, {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.getToken()
            },
            body: '{}'
        });
    }
    setToken(token) {
        cookie.save('AUTH-TOKEN', token);
    }
    getToken() {
        return cookie.load('AUTH-TOKEN');
    }
    removeToken() {
        cookie.remove('AUTH-TOKEN');
    }
}
import { App } from '../../module';

export class AddPizzaService {
    constructor(http, resolveUrl) {
        this.http = http;
        this.resolveUrl = resolveUrl;
    }
    savePizza(data, picFile) {
        return this.http.post(
            this.resolveUrl.resolve('pizzas'),
            data
        );
        /*
        * This should be used to save the pizza with its image in the backend
        * but won't work with JSON-server. The Content-type is set to undefined
        * so it will be automatically set.
        *
            return this.http({
                method: 'POST',
                headers: { 'Content-Type': undefined },
                url: '/api/v1/pizzas/',
                data: {
                    name: data.name,
                    ingredients: JSON.stringify(data.ingredients),
                    image: picFile,
                },
                transformRequest: function (data, headersGetter) {
                    let formData = new FormData();
                    angular.forEach(data, function (value, key) {
                        if (key === 'image' && value) {
                            formData.append(key, value, value.name);
                        }
                        else formData.append(key, value);
                    });
                    return formData;
                    }
                });
            }
         */
    }
    getIngridients() {
        return this.http.get(
            this.resolveUrl.resolve('ingridients'),
        );
    }
}

AddPizzaService.$inject = ['$http', 'resolveUrl'];
App.service('addPizzaService', AddPizzaService);
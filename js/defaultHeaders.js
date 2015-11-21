var app = angular.module('fff');

app.factory('httpRequestInterceptor', function () {
  return {
    request: function (config) {
      config.headers = {
        'Ocp-Apim-Subscription-Key': 'c383f77169cf47d0b034cf187fe11bb1'
      };
      return config;
    }
  };
});
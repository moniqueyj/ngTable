'use strict';
require('./create-data-table.scss');
const angular = require('angular');
const sampleApp = angular.module('sampleApp');

sampleApp.component('createDataTable',{
  template: require('./create-data-table.html'),
  controller: ['$scope', '$http', 'NgTableParams', function CreateTableController($scope, $http, NgTableParams){
    $scope.listTable = new NgTableParams(
      {count: 5},
      {
        getData: function (params){
          var count = params.count();
          var page = params.page();
          var filter = params.filter();
          console.log('count', filter);
          console.log('page', page);
          console.log('count', count);
          console.log('aruguments', arguments );
          let url = 'https://gist.githubusercontent.com/evanjacobs/c150c0375030dc4de65e9b95784dc894/raw/35c5f455b147703db3989df0cb90f5781c3b312f/usage_data.json';
          return $http.get(url).then(res => {
            params.total(res.data.length);
            let data = res.data;
            data = data.filter(value => {
              if (value.users < 100) return true;
              return false;
            });
            return data.slice(page * count, page * count + count);
          });
        }
      }
    );
  }]
});

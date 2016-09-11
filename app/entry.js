'use strict';

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const ngTable = require('ng-table');

// npm modules
const angular = require('angular');

// angular modules
angular.module('sampleApp',['ngTable']);
require('./component/create-data-table');
// require('./component/table-list-data-chart');

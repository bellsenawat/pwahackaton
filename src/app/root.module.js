import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { rootComponent } from './root.component';
import { common } from './common/common.module';

import './root.scss';


export const root = angular
  .module('root', [
    uiRouter,
    common
  ])
  .component('root', rootComponent)
  .config(($locationProvider, $urlRouterProvider) => {
    'ngInject';

    $locationProvider.html5Mode(true);
  })
  .name;

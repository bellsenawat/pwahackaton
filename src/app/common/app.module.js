import uiRouter from 'angular-ui-router';
import { appComponent } from './app.component';
import { AssistantService } from './assistant.service';

import './app.scss';

export const app = angular
  .module('common.app', [
    uiRouter,
  ])
  .component('app', appComponent)
  .service('AssistantService', AssistantService)
  .config(($stateProvider) => {
    'ngInject';

    $stateProvider
      .state('app', {
        url: '/',
        component: 'app',
      });
  })
  .name;

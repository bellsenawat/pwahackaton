import uiRouter from 'angular-ui-router';
import { appComponent } from './app.component';
import { appNav } from './app-nav/app-nav.module';
import { appSidebar } from './app-sidebar/app-sidebar.module';
import { AssistantService } from './assistant.service';

import './app.scss';

export const app = angular
  .module('common.app', [
    uiRouter,
    appNav,
    appSidebar,
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

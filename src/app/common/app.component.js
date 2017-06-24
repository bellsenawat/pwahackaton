import templateUrl from './app.html';

export const appComponent = {
  templateUrl,
  controller: class AppComponent {
    constructor($state, AssistantService) {
      'ngInject';
      this.$state = $state;
      this.assistantService = AssistantService;
    }

    $onInit() {
      this.sayHi = this.assistantService.sayHi();
    }

  },
};

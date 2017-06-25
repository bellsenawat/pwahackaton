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
      this.isCompleteIntro = false;
      this.assistantSection = false;
      // this.sayHi = this.assistantService.sayHi();
      // this.time = this.assistantService.getCurrentDate();
    }

    userIntro() {
      this.isCompleteIntro = true;
      this.assistantSection = true;
      this.assistantService.setUser(this.user);
      this.sayHi = this.assistantService.sayHi();
    }

    

  },
};

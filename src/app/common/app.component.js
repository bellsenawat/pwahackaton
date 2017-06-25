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
      if(this.assistantService.isUserIntroYet() ) {
        this.isCompleteIntro = true;
        this.assistantSection = true;
        this.sayHiUser();
      } else {
        this.isCompleteIntro = false;
        this.assistantSection = false;
      }
     
    }

    userIntro() {
      this.isCompleteIntro = true;
      this.assistantSection = true;
      this.assistantService.setUser(this.user);
      this.sayHiUser();
    }

    sayHiUser() {
       this.sayHi = this.assistantService.sayHi();
    }

    

  },
};

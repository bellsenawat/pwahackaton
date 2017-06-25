import templateUrl from './app.html';

export const appComponent = {
  templateUrl,
  controller: class AppComponent {
    constructor($state, AssistantService, $window) {
      'ngInject';
      this.$state = $state;
      this.assistantService = AssistantService;
      this.$window = $window;
    }

    $onInit() {
      this.todlList = [];
      this.todlListActive = false;
      if(this.assistantService.isUserIntroYet() ) {
        this.isCompleteIntro = true;
        this.assistantSection = true;
        this.user = this.assistantService.getUser();
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

    serachFood() {
      let url = 'https://www.wongnai.com/businesses?q=' + this.searchtext;
      this.openInNewTab(url)
    }

    serachFlight() {
      let url = 'https://www.google.co.th/search?q=site+traveloka.com+' + this.searchtext;
      this.openInNewTab(url)
    }

    serachTodo() {
      this.todlListActive = true;
      let list = this.searchtext;
      this.todlList.push(list);
    }

    needToSleep() {
      this.message = 'จะไปนอนแล้วหรอคะ ' + this.user.name;
      this.modalSleepOpen = true;
    }

    confirmSleep() {
      this.message = 'กรุณาปิดเว็บแล้วไปนอนนะ ฝันดีนะคะ';
    }
                    

    openInNewTab(url) {
      var win = window.open(url, '_blank');
      win.focus();
    }
    

  },
};

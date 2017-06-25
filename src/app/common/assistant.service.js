
export class AssistantService {

  constructor() {
    'ngInject';
    this.periodTime = this.getTimeDuration();
    this.user = JSON.parse(localStorage.getItem("user"));
    console.log("this.user", this.user)
  }

  isUserIntroYet (){
     return ((this.user === null) ? false : true);
  }

  setUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
    this.user = user;
  }

  getUser() {
    return this.user;
  }

  getCurrentDate() {
    return new Date();
  }

  getCurrentTime() {
    return new Date().getHours();
  }

  getTimeDuration() {
    // Morning 
    let time = this.getCurrentTime();

    if(time >= 6 && time < 12) {
      return "MORNING";
    }
    // Afternoon 
    if(time >= 12 && time < 18) {
      return "AFTERNOON";
    }

    // Eve 
    if(time >= 18 && time <= 24) {
      return "EVENING";
    }

    // late night
    if(time >= 1 && time <= 6) {
      return "LATENIGHT";
    }
  }

  sayHi() {

    let user = this.getUser();
    console.log(user)
    // Morning 
    if(this.periodTime == 'MORNING') {
      return "Good morning " + user.name;
    }

    // Afternoon 
    if(this.periodTime == 'AFTERNOON') {
      return "Good afternoon " + user.name;
    }

    // Eve 
    if(this.periodTime == 'EVENING') {
      return "Good evening " + user.name;
    }

    // late night
    if(this.periodTime == 'LATENIGHT') {
      return "WTF!! " + user.name + " You have to go to sleep now !!!";
    }
    
  }

  askHelper() {
    return "Do you need me help ? Please select command";
  }

  addTodo() {

  }
 
}

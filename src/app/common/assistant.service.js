
export class AssistantService {

  constructor() {
    'ngInject';
    this.periodTime = this.getTimeDuration();
  }

  getUser() {
    let user =  {
      Name : '',
      Age : 25,
      Location : 'Bangkok',
      Wakeuptime : '10:00',
      Sleeptime : '02:00',
    }

    return user;
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
    // Morning 
    if(this.periodTime == 'MORNING') {
      return "Good morning " + user.Name;
    }

    // Afternoon 
    if(this.periodTime == 'AFTERNOON') {
      return "Good afternoon " + user.Name;
    }

    // Eve 
    if(this.periodTime == 'EVENING') {
      return "Good evening " + user.Name;
    }

    // late night
    if(this.periodTime == 'LATENIGHT') {
      return "WTF!! " + user.Name + " You have to go to sleep now !!!";
    }
    
  }

  askHelper() {

  }

  addTodo() {

  }
 
}

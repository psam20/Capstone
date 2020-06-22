import http from "../http-common";

class UserService {

    url = "http://localhost:5000/User/";
    userId;

 getAllUser()
 {
   return http.get(this.url);
 }
 getById(id) {
   return http.get(this.url + id)
 }

 setUserLoggedIn(Id) {
  this.userId = Id;
  console.log(this.userId);
}

getUserLoggedIn() {
  console.log(this.userId);
  return this.userId;
}

create(payLoad) {
   const httpOptions = {
     headers:{ 
       'Accept': 'application/json',
       'Content-Type':  'application/json'
     }
   }
   return http.post(this.url, payLoad, httpOptions);
  }

  delete(id) {
     return http.delete(this.url + id)
       .then((response) => response);
 }
}

export default new UserService();
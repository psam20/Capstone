//import http from "../http-common";
export const UserService = {
  login,
  logout,
  register,
  getAll,
  getById,
  update,
  delete: _delete
};

// class UserService {

   const url = "http://localhost:5000/User/";
    //const userId;

//   getAllUser()
//   {
//     return http.get(this.url);
//   }

//   getById(id) {
//     return http.get(this.url + '' + id)
//   }

//   login(username, password) {
//     const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, password })
//     };

//     return fetch(`${this.url}/users/authenticate`, requestOptions)
//         .then(handleResponse)
//         .then(user => {
//             // store user details and jwt token in local storage to keep user logged in between page refreshes
//             localStorage.setItem('user', JSON.stringify(user));

//             return user;
//         });
// }

//  create(payLoad) {
//     const httpOptions = {
//       headers:{ 
//         'Accept': 'application/json',
//         'Content-Type':  'application/json'
//       }
//     }
//     return http.post(this.url, payLoad, httpOptions);
//   }

// //   delete(id) {
// //     return http.delete(this.url + id).pipe(
// //       map((response) => response));
// //   }   

//   setUserLoggedIn(Id) {
//     this.userId = Id;
//     console.log(this.userId);
//   }

//   getUserLoggedIn() {
//     console.log(this.userId);
//     return this.userId;
//   }

//   handleResponse(response) {
//     return response.text().then(text => {
//         const data = text && JSON.parse(text);
//         if (!response.ok) {
//             if (response.status === 401) {
//                 // auto logout if 401 response returned from api
//                 logout();
//                 location.reload(true);
//             }

//             const error = (data && data.message) || response.statusText;
//             return Promise.reject(error);
//         }

//         return data;
//     });
// }

function login(email, password) {
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
  };

  return fetch(`url/authenticate`, requestOptions)
      .then(handleResponse)
      .then(user => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('user', JSON.stringify(user));

          return user;
      });
}


function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
}

function getAll() {
  const requestOptions = {
      method: 'GET',
      //headers: authHeader()
  };

  return fetch(url, requestOptions).then(handleResponse);
}

function getById(id) {
  const requestOptions = {
      method: 'GET',
      //headers: authHeader()
  };

  return fetch(`url/${id}`, requestOptions).then(handleResponse);
}

function register(user) {
  const requestOptions = {
      method: 'POST',
      //headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
  };

  return fetch(`url/register`, requestOptions).then(handleResponse);
}

function update(user) {
  const requestOptions = {
      method: 'PUT',
      //headers: { ...authHeader(), 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
  };

  return fetch(`url/${user.id}`, requestOptions).then(handleResponse);;
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
  const requestOptions = {
      method: 'DELETE',
      //headers: authHeader()
  };

  return fetch(`url/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
  return response.text().then(text => {
      const data = text && JSON.parse(text);
      if (!response.ok) {
          if (response.status === 401) {
              // auto logout if 401 response returned from api
              logout();
              //location.reload(true);
          }

          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
      }

      return data;
  });
}
//}

//export default new UserService();
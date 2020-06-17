import c from './constants';
import { UserService }  from '../Api/UserApi';
//import { history } from '../_helpers';

export const userActions = {
    login,
    logout,
    register,
    getAll
    //delete: _delete
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        UserService.login(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                    //history.push('/');
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(user) { return { type: c.LOGIN_REQUEST, user } }
    function success(user) { return { type: c.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: c.LOGIN_FAILURE, error } }
}

function logout() {
    UserService.logout();
    return { type: c.LOGOUT };
}

function register(user) {
    return dispatch => {
        dispatch(request(user));

        UserService.create(user)
            .then(
                user => { 
                    dispatch(success());
                    //history.push('/login');
                    //dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                   //dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: c.REGISTER_REQUEST, user } }
    function success(user) { return { type: c.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: c.REGISTER_FAILURE, error } }
}

function getAll() {
    return dispatch => {
        dispatch(request());

        UserService.getAllUser()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: c.GETALL_REQUEST } }
    function success(users) { return { type: c.GETALL_SUCCESS, users } }
    function failure(error) { return { type: c.GETALL_FAILURE, error } }
}

// prefixed function name with underscore because delete is a reserved word in javascript
// function _delete(id) {
//     return dispatch => {
//         dispatch(request(id));

//         userService.delete(id)
//             .then(
//                 user => dispatch(success(id)),
//                 error => dispatch(failure(id, error.toString()))
//             );
//     };

//     function request(id) { return { type: c.DELETE_REQUEST, id } }
//     function success(id) { return { type: c.DELETE_SUCCESS, id } }
//     function failure(id, error) { return { type: c.DELETE_FAILURE, id, error } }
// }
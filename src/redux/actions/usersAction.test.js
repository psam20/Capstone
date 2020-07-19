import * as actions from './usersAction'
import c from './constants';

describe('actions', () => {
  it('should create an action to set current User', () => {
    const user = []
    const expectedAction = ({
        type:c.SET_CURRENT_USER,
        payload:user
    })
    expect(actions.setCurrentUser(user)).toEqual(expectedAction)
  })

  it('should create an action to signout user', () => {
    const expectedAction = ({
        type:c.LOGOUT_USER
    })
    expect(actions.signOutUser()).toEqual(expectedAction)
  })

})
import reducer from './userReducer'
import c from '../actions/constants'

describe('user reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        currentUser:null,
        authBool:false
      }
    )
  })

  it('should handle SET_CURRENT_USER', () => {

    const state={
        currentUser:null,
        authBool:false
      }
    expect(
      reducer(state,
        {
          type: c.SET_CURRENT_USER
        })
    ).toMatchSnapshot()  
})

it('should handle LOG0UT_USER', () => {

    const state={
        currentUser:null,
        authBool:false
      }
    expect(
      reducer(state,
        {
          type: c.LOGOUT_USER
        })
    ).toMatchSnapshot()
})

})
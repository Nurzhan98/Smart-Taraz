export const SIGN_IN = 'SIGN_IN'
export const SIGN_OUT = 'SIGN_OUT'
export const SIGN_UP = 'SIGN_UP'

export function signIn(token) {
    return {
        type: SIGN_IN,
        data: token
    }
} 

export function signOut(token) {
    return {
        type: SIGN_OUT,
        data: token
    }
} 
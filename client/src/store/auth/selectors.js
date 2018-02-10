export const isSignedIn = state => state.getIn(['auth', 'isSignedIn']);
export const emailError = state => state.getIn(['auth', 'emailError']);
export const passwordError = state => state.getIn(['auth', 'passwordError']);

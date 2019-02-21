export const selectUser = (user) => {
    console.log('SelectUsers :' + user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
}

const user = {
    state:{
        token: '',
        name: '',
        avatar: ''
    },
    mutations:{
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_NAME: (state, name) => {
            state.name = name
        },
        SET_AVATAR: (state, avatar) => {
            state.avatar = avatar
        }
    },
    actions:{},
    getters:{
        avatar: state => state.avatar
    }
}

export default user;

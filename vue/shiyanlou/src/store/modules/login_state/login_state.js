const state = {
  sign_on:false,
  user_info:{
    id:1,
    avatar_url:'https://avatars2.githubusercontent.com/u/10172415?s=40&v=4',
    username:'美团'
  },
  show_login_dialog:false,
  on_or_up:'on'
}

const actions = {
  change_show_state(context,onOrUp){
    context.commit('change_show_state',onOrUp)
  }
}

const mutations = {
  change_show_state(state,onOrUp){
    state.show_login_dialog = !state.show_login_dialog
  }
}
export default {
  namespaced:true,
  state,
  actions,
  mutations
}
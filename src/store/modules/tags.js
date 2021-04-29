import tagApi from '@/api/tags'

const state = {
  data: null,
  isLoading: false,
  error: null
}

export const mutationTypes = {
  getTagStart: '[tag] Get tag Start',
  getTagSuccess: '[tag] Get tag Success',
  getTagFailed: '[tag] Get tag Failed'
}

export const actionTypes = {
  getTag: '[tag] Get tag'
}

const mutations = {
  [mutationTypes.getTagStart](state) {
    state.isLoading = true
    state.data = null
  },
  [mutationTypes.getTagSuccess](state, payload) {
    state.isLoading = false
    state.data = payload
  },
  [mutationTypes.getTagFailed](state) {
    state.isLoading = false
  }
}

const actions = {
  [actionTypes.getTag](context) {
    return new Promise(resolve => {
      context.commit(mutationTypes.getTagStart)
      tagApi
        .getTag()
        .then(tags => {
          context.commit(mutationTypes.getTagSuccess, tags)
          resolve(tags)
        })
        .catch(() => {
          context.commit(mutationTypes.getTagFailed)
        })
    })
  }
}

export default {
  state,
  mutations,
  actions
}

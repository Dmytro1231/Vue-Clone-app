import articleApi from '@/api/article'

const state = {
  data: null,
  isLoading: false,
  error: null
}

export const mutationTypes = {
  getArticleStart: '[article] Get Article Start',
  getArticleSuccess: '[article] Get Article Success',
  getArticleFailed: '[article] Get Article Failed',

  deleteArticleStart: '[article] delete Article Start',
  deleteArticleSuccess: '[article] delete Article Success',
  deleteArticleFailed: '[article] delete Article Failed'
}

export const actionTypes = {
  getArticle: '[article] Get Article',

  deleteArticle: '[article] delete Article'
}

const mutations = {
  [mutationTypes.getArticleStart](state) {
    state.isLoading = true
    state.data = null
  },
  [mutationTypes.getArticleSuccess](state, payload) {
    state.isLoading = false
    state.data = payload
  },
  [mutationTypes.getArticleFailed](state) {
    state.isLoading = false
  },
  [mutationTypes.deletetArticleStart]() {},
  [mutationTypes.deletetArticleSuccess]() {},
  [mutationTypes.deletetArticleFailed]() {}
}

const actions = {
  [actionTypes.getArticle](context, {slug}) {
    return new Promise(resolve => {
      context.commit(mutationTypes.getArticleStart, slug)
      articleApi
        .getArticle(slug)
        .then(article => {
          context.commit(mutationTypes.getArticleSuccess, article)
          resolve(article)
        })
        .catch(() => {
          context.commit(mutationTypes.getArticleFailed)
        })
    })
  },
  [actionTypes.deleteArticle](context, {slug}) {
    return new Promise(resolve => {
      context.commit(mutationTypes.deletetArticleStart, slug)
      articleApi
        .deleteArticle(slug)
        .then(() => {
          context.commit(mutationTypes.deletetArticleSuccess)
          resolve()
        })
        .catch(() => {
          context.commit(mutationTypes.deletetArticleFailed)
        })
    })
  }
}
export default {
  state,
  mutations,
  actions
}

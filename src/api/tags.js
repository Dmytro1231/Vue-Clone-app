import axios from '@/api/axios'

const getTag = () => {
  return axios.get('/tags').then(response => response.data.tags)
}

// const getTag = apiUrl => {
//   return axios.get(apiUrl)
// }

export default {
  getTag
}

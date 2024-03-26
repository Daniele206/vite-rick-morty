import { reactive } from "vue";

export const store = reactive({
  apiUrl: 'https://rickandmortyapi.com/api/character',
  cardList: [],
  respParams:{
    name: '',
    status: '',
    page: '1',
    totalPage: '0',
  }
})
export default class StateApi {
    constructor(rawData) {
     this.data = {
       articles: this.mapArrayToObject(rawData.articles),
       authors: this.mapArrayToObject(rawData.authors),
       searchTerm: ''
     }
    }
    mapArrayToObject(arr) {
      return arr.reduce((acc, cur) => {
        acc[cur.id] = cur;
        return acc;
      },{});
    }
    lookupAuthor(authorId) {
      return this.data.authors[authorId]
    }
    getState() {
      return this.data;
    }
}
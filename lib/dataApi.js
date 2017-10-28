export default class DataApi {
    constructor(rawData) {
      this.rawData = rawData;
    }
    mapArrayToObject(arr) {
      return arr.reduce((acc, cur) => {
        acc[cur.id] = cur;
        return acc;
      },{});
    }

    getArticles() {
      return this.mapArrayToObject(this.rawData.articles);
    }

    getAuthors() {
        return this.mapArrayToObject(this.rawData.authors);
    }
}
class SearchService {
    constructor({ repository }){
        this.SearchRepoistory = repository
    }

    async postSearch(searchValue){
        try {
            const [ subject, content, hash, startNumber, endNumber, totalPage ] = await this.SearchRepoistory.findSearch(searchValue)
            return { subject, content, hash, startNumber, endNumber, totalPage }
        } catch (error) {
            throw new Error(error)
        }
    }
}

module.exports = SearchService
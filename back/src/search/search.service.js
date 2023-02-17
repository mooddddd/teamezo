class SearchService {
    constructor({ repository }){
        this.SearchRepoistory = repository
    }

    async postSearch(searchValue){
        try {
            const [ subject, content, hash ] = await this.SearchRepoistory.findSearch(searchValue)
            return { subject, content, hash }
        } catch (error) {
            throw new Error(error)
        }
    }
}

module.exports = SearchService
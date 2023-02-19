class IndexService {
    constructor({ repository }){
        this.IndexRepoistory = repository
    }

    async getIndex(){
        try {
            const boardList = await this.IndexRepoistory.getIndexBoard()
            for(let i = 0; i <= boardList.fileUrlList.length - 1; i++){
                boardList.fileUrlList[i].liked = boardList.likedNumber[i]
            }
            
            const categoryList = await this.IndexRepoistory.getIndexCategory()
            let mainName = []
            categoryList.map((item) => {
                mainName.push(item.mainName)
            })

            const hashList = await this.IndexRepoistory.getIndexHashtag()
            let tagName = []
            hashList.map((item) => {
                tagName.push(item.tagName)
            })

            return { boardList: boardList.fileUrlList, mainName, tagName }
        } catch (error) {
            throw new Error(error)
        }
    }
}

module.exports = IndexService
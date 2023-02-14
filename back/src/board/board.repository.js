class BoardRepo {
    constructor({ models }) {
        this.models = models;
    }

    async getCategoryList() {
        try {
            const mainCategory = await this.models.MainCategory.findAll();
            const subCategory = await this.models.SubCategory.findAll();
            return { mainCategory, subCategory };
            // return mainCategory;
        } catch (e) {
            throw new Error(e);
        }
    }
    async getBoardList() {
        try {
            const listAll = await this.models.Board.findAll();
            return listAll;
        } catch (e) {
            throw new Error(e);
        }
    }

    async getLikedCount(boardId) {
        try {
            // boardId로 검색해서 갯수만 던져주면 됨, 좋아요 데이터가 들어가는 건 브라우저에서 js로 처리함
        } catch (e) {
            throw new Error(e);
        }
    }

    async getLiked(userid, boardId) {
        try {
            const result = await this.models.Liked.findOne({ where: { userid: `${userid}`, boardId: Number(boardId) } });
            return result; // 좋아요 리스트에 없으면 null
        } catch (e) {}
    }

    async postListLiked(userid, boardId) {
        try {
            const result = await this.models.Liked.findOne({ where: { userid: `${userid}`, boardId: Number(boardId) } });
            // console.log(result);
            if (result === null) {
                const insert = await this.models.Liked.create({ userid: `${userid}`, boardId: Number(boardId) });
                // console.log(insert.dataValues);
                return insert;
            } else {
                const destroy = await this.models.Liked.destroy({ where: { userid: `${userid}`, boardId: Number(boardId) } });
                console.log(destroy);
                return destroy; // 무조건 1
            }
            // console.log(userid, Number(boardId));
            // console.log(Number(boardId));
            // 찾아서 없으면 추가+return true, 있으면 삭제+return false
        } catch (e) {}
    }

    async getViewContent(id) {
        try {
            // const addHit = await this.models.Board.update()
            const result = await this.models.Board.findOne({ where: { id: `${id}` } });
            // console.log(result.dataValues);
            return result;
        } catch (e) {}
    }
}

module.exports = BoardRepo;

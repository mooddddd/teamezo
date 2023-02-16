const { raw } = require("mysql2");

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
    async getBoardList(page) {
        // limit 10
        try {
            const listAll = await this.models.Board.findAll({ raw: true });
            const listCount = listAll.length;
            const totalPage = Math.ceil(listAll.length / 10);
            let current = page * 10 - 9;

            let startNumber = current / 10 - ((current / 10) % 5) + 1;
            let endNumber = current / 10 - ((current / 10) % 5) + 5;
            if (endNumber > totalPage) {
                endNumber = totalPage;
            }

            const boardList = await this.models.Board.findAll({ offset: page * 10 - 10, limit: 10, order: [["id", "desc"]] });
            return { boardList, startNumber, endNumber, totalPage, listCount };
        } catch (e) {
            throw new Error(e);
        }
    }

    async getLikedCount(boardId) {
        // limit 10
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

    async getViewHashTag(id) {
        const tagResult = await this.models.HashTag.findAll({ raw: true, where: { boardId: `${id}` } });
        return tagResult;
    }

    async getViewFiles(id) {
        const filesResult = await this.models.File.findAll({ raw: true, where: { boardId: id } });
        return filesResult;
    }

    async insertContent(tagArr, rest, filenameArr) {
        const result = await this.models.Board.create(rest);

        const hashtags = tagArr.map((tagName) => this.models.HashName.findOrCreate({ raw: true, where: { tagName } }));
        const tags = await Promise.all(hashtags);
        await result.addHashNames(tags.map((v) => v[0]));

        const files = filenameArr.map((fileUrl) => this.models.File.create({ fileUrl, boardId: result.id }));
        const promiseFiles = await Promise.all(files);
        // 파일 넣어주고 끝, 빼올 때는 id 찾아서 fileUrl 가져오면 됨 // 배열에 담기겠지?

        return result.id; // 리턴값으로 board 테이블의 id를 반환
    }

    // async postBoardContent(body, file) {
    //     // 한 거
    //     // console.log(body.mainName); // {mainName: , subName: , subject: , content: }{tagName: ['','']}
    //     // const insertContent = await this.models.Board.create({ nameName: `${body.nameName}`, subName: `${body.subName}`, subject: `${body.subject}`, content: `${body.content}` });
    //     // 해야 할 거
    //     // const insertFileUrl = await this.models.File.create();
    //     // const isnsertTag = () => {};
    //     // 태그 create는 for문 돌려서 각 인덱스에 있는 애들 넣어주면 됨
    //     // console.log(insertContent.dataValues.id);
    //     // console.log(body.tagNames); // ['','']
    // }

    // async insertHashTag(tagArr) {
    //     // HashName에도 넣어줘야 하고,
    //     const hashtags = tagArr.map((tagName) => this.models.HashName.findOrCreate({ raw: true, where: { tagName } }));
    //     // 얘네는 프로미스 객체로 반환됨 그래서 밑에 Promise.all을 해줄 수 있는 것 [promise, promise, promise]
    //     const tags = await Promise.all(hashtags); // 들어감
    //     // console.log(tags[0]);

    //     // const hashTag =
    // }

    // async insertFile(filenameArr) {}
}

module.exports = BoardRepo;

/* 댓글 내용 없으면 알림창 뜸 */
const commentContentForm = document.querySelector(".writeCommentForm > form");
const commentBox = document.querySelector(".writeCommentForm > form > div > textarea");

commentContentForm.addEventListener("submit", (e) => {
    if (commentBox.value === "") {
        e.preventDefault();
        alert("댓글 내용을 입력해주세요!");
        return;
    }
});

/* 답글쓰기 버튼 누르면 답댓창 뜨는 기능 */
const commentAll = document.querySelectorAll(".commentCenterContent > ul > li > a");
const commentReplyBox = document.querySelectorAll(".commentReplyBox");
const commentAllArr = Object.values(commentAll);
const commentReplyBoxArr = Object.values(commentReplyBox);

// const reCommentClickHander = (e) => {
//     commentReplyBox.className = "commentReplyBox";
// };

for (let i = 0; i <= commentAllArr.length - 1; i++) {
    commentAllArr[i].addEventListener("click", (e) => {
        e.preventDefault();
        if (commentReplyBox[i].classList.contains("off")) {
            commentReplyBox[i].className = "commentReplyBox";
        } else {
            commentReplyBox[i].className = "off";
        }
    });
}

/* 답댓창 등록 기능 => 나중에 데이터 어떻게 오게 할 지 생각한 다음에 짜기 */
// const replyofcommentbtn = document.querySelectorAll(".commentReplyBox>form>div>button");
// const replyofcommentbtnArr = Object.values(replyofcommentbtn);

// const replyofcommentContent = document.querySelectorAll(".commentReplyBox>form>div>textarea");
// const replyofcommentContentArr = Object.values(replyofcommentContent);

// const replyTemplate = document.querySelector("#replyofComment");

// const insertReplyPlace = document.querySelectorAll(".replyplace");
// const insertReplyPlaceArr = Object.values(insertReplyPlace);

// for (let i = 0; i <= replyofcommentbtnArr.length - 1; i++) {
//     replyofcommentbtnArr[i].addEventListener("click", (e) => {
//         e.preventDefault();
//         let clone = document.importNode(replyTemplate.content, true);
//         const test = clone.querySelectorAll(".commentReply>.userCommnetContent>div");
//         const avatar = test[i].querySelector(".avatar>a>img");
//         // const commentWriter = clone.querySelector(".commentCenterContent>ul>li>.commentWriter");
//         // const commentDate = clone.querySelector(".commentCenterContent>ul>li>.commentDate");
//         // const testArr = Object.values(test);
//         // test[2];
//         // insertReplyPlaceArr[i] = clone.querySelectorAll
//     });
// }

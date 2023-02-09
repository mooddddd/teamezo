/* 댓글 등록 기능 => 데이터 내보내고 새로고침만 해주면 됨! */
const commentContentBox = document.querySelector(".writeCommentForm > form > div > textarea ");
const commentContentForm = document.querySelector(".writeCommentForm > form");

const commentClone = document.importNode(justComment.content, true);

commentContentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log(commentContentBox.value);
    // console.log(document.querySelector(".upperComment"));
});

/* 답글쓰기 버튼 누르면 답댓창 뜨는 기능 */
const commentAll = document.querySelectorAll(".commentCenterContent > ul > li > a");
const commentReplyBox = document.querySelectorAll(".commentReplyBox");
const commentAllArr = Object.values(commentAll);
const commentReplyBoxArr = Object.values(commentReplyBox);

// console.log(commentAllArr[0]);

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
//         // console.log(replyofcommentContent[i].value); // 댓글 내용 => 얘를 백으로 보내기
//         // console.log(insertReplyPlaceArr);
//         let clone = document.importNode(replyTemplate.content, true);
//         const test = clone.querySelectorAll(".commentReply>.userCommnetContent>div");
//         const avatar = test[i].querySelector(".avatar>a>img");
//         // const commentWriter = clone.querySelector(".commentCenterContent>ul>li>.commentWriter");
//         // const commentDate = clone.querySelector(".commentCenterContent>ul>li>.commentDate");
//         console.log(avatar);
//         // const testArr = Object.values(test);
//         // test[2];
//         // console.log(testArr);
//         // insertReplyPlaceArr[i] = clone.querySelectorAll
//     });
//     // console.log(replyofcommentbtnArr[i]);
// }

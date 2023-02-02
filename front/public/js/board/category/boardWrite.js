const categoryChange = (e) => {
    const subCategotyIT = ["javascript", "nodejs", "html", "css"];
    const subCategotyFood = ["한식", "중식", "일식", "양식", "기타"];
    const subCategotyETC = ["text1", "text2"];
    const target = document.querySelector(".subCategory");
    const category = e.value;
    target.options.length = 1;

    if (category === "IT") {
        for (let i = 0; i <= subCategotyIT.length - 1; i++) {
            const subOpt = document.createElement("option");
            subOpt.value = subCategotyIT[i];
            subOpt.innerHTML = subCategotyIT[i];
            target.append(subOpt);
            console.log(target.options);
        }
    } else if (category === "food") {
        for (let i = 0; i <= subCategotyFood.length - 1; i++) {
            const subOpt = document.createElement("option");
            subOpt.className = "food";
            subOpt.value = subCategotyFood[i];
            subOpt.innerHTML = subCategotyFood[i];
            target.append(subOpt);
        }
    }
};

// 버튼으로 만들 경우 버튼 누르면 인풋박스로 바뀌게 만든 코드!
// const hashtagBtn = document.querySelector(".hashtagBtn");
// const hashtagLi = document.querySelector(".hashtagLi");

// const createInputBox = (e) => {
//     e.preventDefault();
//     hashtagBtn.setAttribute("hidden", "hidden");

//     const hashtagBox = document.createElement("input");
//     hashtagBox.setAttribute("type", "text");
//     hashtagBox.setAttribute("name", "tagName");
//     hashtagBox.className = "hashtag";

//     hashtagLi.append(hashtagBox);
// };

// hashtagBtn.addEventListener("click", createInputBox);

// 처음부터 인풋박스인 경우! 여기에 CSS 먹여서 innerHTML 처리 시키기?
const hashtagLi = document.querySelector(".hashtagLi");
const hashtagBox = document.querySelector(".hashtagBox");

const addHashtag = (e) => {
    if (e.keyCode === 13) {
        e.preventDefault();
        const hashtag = e.target.value;
        if (hashtag === "") alert("해시태그를 입력하세요");
        // console.log(e.target.value); // 칸 안에 있는 밸류값 잘 찍힘
        // 그 다음에 엑시오스로 데이터 날림

        const hashtagSpan = document.createElement("a");
        hashtagSpan.setAttribute("style", "float:left; padding-right:1.5rem; color:grey");
        hashtagSpan.setAttribute("class", "hashtag");
        // hashtagSpan.setAttribute("href", "");

        hashtagSpan.innerHTML = `# ${hashtag}`;
        hashtagLi.append(hashtagSpan);
        hashtag = "";

        const a = document.querySelectorAll(".hashtag");
        console.log(a);
        const deleteHandler = (e) => {
            e.taret.remove();
        };
        a.forEach();
        a.addEventListener("click", (e) => {
            console.log(e.target);
        });
    }
};

hashtagBox.addEventListener("keydown", addHashtag);

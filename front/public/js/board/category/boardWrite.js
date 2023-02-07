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

// 처음부터 인풋박스인 경우! 여기에 CSS 먹여서 innerHTML 처리 시키기?
const hashtagLi = document.querySelector(".hashtagLi");
const hashtagBox = document.querySelector(".hashtagBox");
const arr = [];

const addHashtag = (e) => {
    if (e.keyCode === 13) {
        e.preventDefault();

        if (e.target.value === "") {
            alert("해시태그를 입력하세요");
            return;
        }

        const hashtagAll = document.querySelectorAll(".hashtagLi > a");
        for (let i = 0; i < hashtagAll.length; i++) {
            if (hashtagAll[i].innerHTML === `# ${e.target.value}`) {
                e.target.value = "";
                return alert("이미 사용한 해시태그입니다");
            }
        }

        const hashtagSpan = document.createElement("a");
        hashtagSpan.setAttribute("style", "float:left; margin-right:1.5rem; color:grey; cursor: pointer;");
        hashtagSpan.setAttribute("class", "tagName");
        // hashtagSpan.setAttribute("href", "");

        hashtagSpan.innerHTML = `# ${e.target.value}`;
        hashtagLi.append(hashtagSpan);
        e.target.value = "";

        const tagName = hashtagSpan.innerHTML;
        arr.push({ tagName });

        hashtagSpan.addEventListener("click", (e) => {
            e.target.remove();
        });
    }
};
hashtagBox.addEventListener("keydown", addHashtag);

// 전체 데이터 submit
const writeDataForm = document.querySelector(".write > form");
const submitHandler = async (e) => {
    e.preventDefault();

    const tagNameElement = document.querySelectorAll(".tagName");
    const tagArr = Object.values(tagNameElement);
    let tagNamesArr = [];
    for (let i = 0; i <= tagArr.length - 1; i++) {
        tagNamesArr.push(tagArr[i].innerHTML.split("# ")[1]);
    }
    const tagNames = { tagNames: tagNamesArr };

    const body = new FormData(e.target);

    // ** 얘 나중에 백이랑 연결해서 손보기
    // const response = await axios.post("http://localhost:3000/", body, {
    //     header: {
    //         ["Content-type"]: "multipart/form-data",
    //     },
    // }); // 반환되는 값으로 idx 받기
    // const sendtag = await axios.post("http://localhost:3000", tagNames);
    // // promise.all 공부해야 댐,,,,, 암튼 두개 보내서 처리하기
    // **

    location.href = "/board/view";
};
writeDataForm.addEventListener("submit", submitHandler);

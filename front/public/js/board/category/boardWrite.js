// const categoryChange = (e) => {
//     const subCategotyIT = ["javascript", "nodejs", "html", "css"]; // 서브카테고리를 불러오기
//     const subCategotyFood = ["한식", "중식", "일식", "양식", "기타"];
//     const subCategotyETC = ["text1", "text2"];
//     const target = document.querySelector(".subCategory");
//     const category = e.value;
//     target.options.length = 1;

//     if (category === "IT") {
//         for (let i = 0; i <= subCategotyIT.length - 1; i++) {
//             const subOpt = document.createElement("option");
//             subOpt.value = subCategotyIT[i];
//             subOpt.innerHTML = subCategotyIT[i];
//             target.append(subOpt);
//         }
//     } else if (category === "food") {
//         for (let i = 0; i <= subCategotyFood.length - 1; i++) {
//             const subOpt = document.createElement("option");
//             subOpt.className = "food";
//             subOpt.value = subCategotyFood[i];
//             subOpt.innerHTML = subCategotyFood[i];
//             target.append(subOpt);
//         }
//     }
// };

/* 카테고리 선택하기 */
const mainCategoryBox = document.querySelector(".mainCategorySelect");
const MainCategory = document.querySelectorAll(".mainCategorySelect > .mainCategory");
// const holeSubCategory = document.querySelectorAll(".subject > input");
const subCategory = document.querySelector(".subCategory");

const categoryArr = Object.values(MainCategory);

// const holeSubCategoryArr = Object.values(holeSubCategory); //[]
// console.log(Object.values(MainCategory)); // [{옵션1}, {옵션2}, {옵션3}]
// console.log(holeSubCategoryArr);

mainCategoryBox.addEventListener("change", (e) => {
    // console.log(e.target.value);
    subCategory.options.length = 1;
    for (i = 0; i <= MainCategory.length - 1; i++) {
        console.log(e.target.value);
        if (MainCategory[i].value === e.target.value) {
            const selectSubCategory = document.querySelectorAll(`.subject > div > .${MainCategory[i].value}`);
            const selectSubCategoryArr = Object.values(selectSubCategory);
            for (j = 0; j <= selectSubCategoryArr.length - 1; j++) {
                // console.log(selectSubCategoryArr[j].value);
                const subOpt = document.createElement("option");
                subOpt.value = `${selectSubCategoryArr[j].value}`;
                subOpt.innerHTML = `${selectSubCategoryArr[j].value}`;
                subCategory.append(subOpt);
            }
            // console.log(document.getElementsByClassName(`${MainCategory[i].value}`));
        }
    }
    // 백에서 데이터 받아와서 뿌리는 걸로 바꿔보기! (나중에,,,)
});

/* 해시태그 추가하기 */
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

/* 전체데이터 submit 하기(백으로 보내기) */
const writeDataForm = document.querySelector(".write > form");
const submitHandler = async (e) => {
    e.preventDefault();
    console.log(e.target.subName.value);

    const tagNameElement = document.querySelectorAll(".tagName");
    const tagArr = Object.values(tagNameElement);
    let tagNamesArr = [];
    for (let i = 0; i <= tagArr.length - 1; i++) {
        tagNamesArr.push(tagArr[i].innerHTML.split("# ")[1]);
    }
    const tagNames = { tagNames: tagNamesArr };

    const body = new FormData(e.target);

    const response = await Promise.all([
        axios.post("http://localhost:3000", body, {
            header: {
                ["Content-type"]: "multipart/form-data",
            },
        }),
        axios.post("http://localhost:3000", tagNames),
    ]); // response 값으로는 board_idx값 받아오기, 받아오면 로케이션에 넣기?
    // console.log(response[0].data.board_idx);

    // ** 얘 나중에 백이랑 연결해서 손보기
    // const response = await axios.post("http://localhost:3000/", body, {
    //     header: {
    //         ["Content-type"]: "multipart/form-data",
    //     },
    // }); await axios.post("http://localhost:3000", tagNames);
    // // promise.all 공부해야 댐,,,,, 암튼 두개 보내서 처리하기
    // **

    location.href = `/board/view?idx=${response[0].data.board_idx}`;
};
writeDataForm.addEventListener("submit", submitHandler);

//
//
//쓰레기통
/**
<!-- <script>
const categoryChange = (e) => {
{% for item in category %}
{% set subCate = item.subName %}
    // let subCategoty{{item.MainCategory}} = []
    let arr = []
arr.push({{subCate}})
// for(let i=0; i<pushsub.length; i++){
//     arr.push(`${pushsub[i]}`)
// }
    // const subCategotyFood = ["한식", "중식", "일식", "양식", "기타"];
    // const subCategotyETC = ["text1", "text2"];
    let target = document.querySelector(".subCategory");
    let category = "{{item.MainCategory}}";
    {% endfor %}
    target.options.length = 1;

    // if (category === "IT") {
    //     for (let i = 0; i <= subCategotyIT.length - 1; i++) {
    //         const subOpt = document.createElement("option");
    //         subOpt.value = subCategotyIT[i];
    //         subOpt.innerHTML = subCategotyIT[i];
    //         target.append(subOpt);
    //     }
    // }
    // } else if (category === "food") {
    //     for (let i = 0; i <= subCategotyIT.length - 1; i++) {
    //         const subOpt = document.createElement("option");
    //         subOpt.className = "food";
    //         subOpt.value = subCategotyIT[i];
    //         subOpt.innerHTML = subCategotyIT[i];
    //         target.append(subOpt);
    //     }
    // }
    // } else if (category === "food") {
    //     for (let i = 0; i <= subCategotyFood.length - 1; i++) {
    //         const subOpt = document.createElement("option");
    //         subOpt.className = "food";
    //         subOpt.value = subCategotyFood[i];
    //         subOpt.innerHTML = subCategotyFood[i];
    //         target.append(subOpt);
    //     }
    // }
};
</script> -->
 */

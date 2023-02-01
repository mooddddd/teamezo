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

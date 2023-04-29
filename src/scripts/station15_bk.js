async function getData() {
  // Promiseを使った実装をやってみましょう！APIとの通信でよく使う表現になります！
  // ３秒後にフルネームのリストを表示されるようにしましょう。
  // 最初から表示されていると、クリアになりません。
  const userList = [
    {
      id: 1,
      first_name: "優",
      family_name: "大木",
      affiliation: "TechTrain",
      is_student: false,
    },
    {
      id: 2,
      first_name: "太郎",
      family_name: "山田",
      affiliation: "HogeHoge大学",
      is_student: true,
    },
  ];
  const result = await userList.map(test);
  return await result;
}

async function test(userList) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const full_name = userList.family_name + " " + userList.first_name;
      userList.full_name = full_name;
      console.log("３秒たったよ");
      resolve(userList);
    }, 3000);
  });
  // 3秒後に実行
  // setTimeout(() => {
  //   const full_name = userList.family_name + " " + userList.first_name;
  //   userList.full_name = full_name;
  //   console.log("３秒たったよ");
  // }, 3000);
  // console.log(userList);
  //return userList;
}

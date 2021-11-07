const array = [2, 4, 7, 5, 4, 3, 8];

const fixedArray = array.filter((element, i, arr) => {
  // arr.indexOf(element)は配列の中で指定の値が最初から数えて何番目にみつかるかを取得できる
  // iはelementの配列内の順番
  // arr.indexOf(element)とiが一致するものだけ返すことで
  // ２つ目の4まで処理がきたときにarr.indexOf(element)が1、iが4になるので返されない。
  // この仕組みで値の重複を除くことが可能
  return arr.indexOf(element) === i;
});

console.log(fixedArray);

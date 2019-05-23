export function similar(str1, str2) {
  // 计算两个字符串的长度。
  var len1 = str1.length
  var len2 = str2.length
  var dif = []; var // 建立上面说的数组，比字符长度大一个空间
    temp; var i; var j; var a
  // 赋初值，步骤B
  for (a = 0; a <= len1; a++) {
    dif[a] = []
    dif[a][0] = a
  }
  for (a = 0; a <= len2; a++) {
    dif[0][a] = a
  }
  // 计算两个字符是否一样，计算左上的值
  // var temp;
  for (i = 1; i <= len1; i++) {
    for (j = 1; j <= len2; j++) {
      if (str1[i - 1] == str2[j - 1]) {
        temp = 0
      } else {
        temp = 1
      }
      dif[i][j] = Math.min(dif[i - 1][j - 1] + temp, dif[i][j - 1] + 1, dif[i - 1][j] + 1)
    }
  }
  // console.log("差异步骤：" + dif[len1][len2]);
  // 计算相似度
  // var similarity = 1 - dif[len1][len2] / Math.max(str1.length, str2.length);
  return 1 - dif[len1][len2] / Math.max(len1, len2)
}
export default {
  similar
}

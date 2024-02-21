function compareMaps(orignalMap, tempMap) {
  const entries1 = Object.entries(orignalMap);
  const entries2 = Object.entries(tempMap);

  if (entries1.length !== entries2.length) {
    return false;
  }

  for (const [key, value] of entries1) {
    if (tempMap[key] !== value) {
      return false;
    }
  }

  return true;
}

function search(pat, txt) {
  let orignalMap = {};

  for (let i = 0; i < pat.length; i++) {
    if (orignalMap[pat[i]] != undefined) {
      orignalMap[pat[i]] = orignalMap[pat[i]] + 1;
    } else {
      orignalMap[pat[i]] = 1;
    }
  }

  let i = 0,
    j = 0;
  let tempMap = {};
  let result = 0;

  while (j < txt.length) {
    if (tempMap[txt[j]] != undefined) {
      tempMap[txt[j]] = tempMap[txt[j]] + 1;
    } else {
      tempMap[txt[j]] = 1;
    }

    if (j - i + 1 == pat.length) {
      let res = this.compareMaps(orignalMap, tempMap);
      if (res) {
        result++;
      }
      if (tempMap[txt[i]] != undefined) {
        tempMap[txt[i]] = tempMap[txt[i]] - 1;
        if (tempMap[txt[i]] == 0) {
          delete tempMap[txt[i]];
        }
      }

      i++;
    }

    j++;
  }

  return result;
}

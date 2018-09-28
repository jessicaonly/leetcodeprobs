const checkPermutations = (str1, str2) => {
  let str1Array = str1.split('').sort().join('');
  let str2Array = str2.split('').sort().join('');

  if (str1Array === str2Array) return true;

  return false;

}

checkPermutations('dog', 'gdo');
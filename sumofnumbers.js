/**
 * solving experience E26
 * Created by hailingli on 2/5/2017.
 */
const nums = [1, 3, 5, 7, 9];
function sumFor(numl) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += numl[i];
  }
  return total;
}
function sumWhile(numl) {
  let total = 0;
  i = 0;
  while (i < nums.length) {
    total += numl[i];
    i++;
  }
  return total;
}
function sumRecursion(numl) {
  if (numl.length === 0) {
    return 0;
  }
  return numl[0] + sumRecursion(numl.slice(1, numl.length));

}
function sumTheSimpleWay (numl){
 return _.reduce(numl, function(memo, num){ return memo + num; }, 0)
}

console.log(sumFor(nums));
console.log(sumWhile(nums));
console.log(sumRecursion(nums));
console.log(sumTheSimpleWay (nums));
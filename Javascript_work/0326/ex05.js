const arr = [10, 20, 30, 40];

const result = arr.splice(2, 0, 100, 200, 300);
// 삭제하는건 인덱스번째꺼가 삭제되고, 100, 200, 300이 추가가 되고,
// 삭제하는게 없으면 기존 인덱스번째에 있던 숫자가 뒤로 밀려남.
console.log(arr);
console.log(result);
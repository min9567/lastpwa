function formatMemory(bytes) {
    return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
  }
  
  // 📦 배열 기반
  console.log("📦 배열 기반");
  
  const bigArr = Array.from({ length: 100_000_000 }, (_, i) => i);
  console.log(bigArr[bigArr.length - 1]); // 마지막 값 확인
  console.log(bigArr.length);
  
  const arrMem = process.memoryUsage();
  console.log(arrMem);
  console.log(`배열 heapUsed: ${formatMemory(arrMem.heapUsed)}`);
  console.log('---------------------------\n');


  // 🔄 이터러블 기반
console.log("🔄 이터러블 기반");

const bigIterable = {
  [Symbol.iterator]() {
    let i = 0;
    const max = 100_000_000;
    return {
      next() {
        if (i < max) return { value: i++, done: false };
        return { done: true };
      }
    };
  }
};

let last;
for (const x of bigIterable) last = x;
console.log(last); // 마지막 값 확인

const iterMem = process.memoryUsage();
console.log(`이터러블 heapUsed: ${formatMemory(iterMem.heapUsed)}`);
console.log('---------------------------');
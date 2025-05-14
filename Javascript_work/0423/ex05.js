const throttle = () => {
  return () => {
    console.log("test");
    let timerId;
    if (timerId) return;
    timerId = setTimeout(() => {
      console.log("콜배백");
      timerId = null;
    }, 300);
  };
};


const aa = throttle();

aa();
aa();
aa();
aa();
aa();
aa();
aa();
aa();
aa();
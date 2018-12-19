const sleep = m => new Promise(r => setTimeout(r, m));

const addAysnc = async (a, b) => {
  await sleep(100);
  return a + b;
};

const results = async params => {
  const res = await addAysnc(4, 5);
  // throw new Error('Error is results');
  console.log(res);
};

const addCallBack = (a, b) => {
  console.log('Callback is called');
  console.log(`params are ${a} & ${b}`);
  return a + b;
};

const addAsyncCallback = (a, b, callback) => {
  setTimeout(() => {
    callback(a, b);
  }, 1000);
};

addAsyncCallback(9, 10, addCallBack);


results()
  .then(() => {
    console.log('done');
  })
  .catch(err => {
    console.log(err);
  });

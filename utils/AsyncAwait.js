//Async and Await
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

results()
  .then(() => {
    console.log('done');
  })
  .catch(err => {
    console.log(err);
  });

//Callback
const addCallBack = (a, b) => {
  console.log('Callback is called');
  console.log(`params are ${a} & ${b}`);
  return a + b;
};

const addAsyncCallback = (a, b, timeout, callback) => {
  setTimeout(() => {
    console.log('Inside set timeout');
    callback(a, b);
  }, timeout);
};

addAsyncCallback(9, 10, 2000, addCallBack);

//Normal function

addAsyncCallback(4, 5, 100, (a, b) => {
  console.log('Executed using inline function');
  const sum = a + b;
  console.log('The sum is', sum);
});

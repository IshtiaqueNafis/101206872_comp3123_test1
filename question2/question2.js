const resolvedPromise = () => new Promise((resolve, reject) => { // eslint-disable-line no-unused-vars
    setTimeout(() => {
        resolve({"Success": "delayed Successes!"});
    }, 500);
});

const rejectedPromise = () => new Promise((resolve, reject) => { // eslint-disable-line no-unused-vars
    setTimeout(() => {
        reject({"error": "delayed exception!"});
    }, 500);
});

resolvedPromise().then(resolve => console.log(resolve))
rejectedPromise().catch(err => console.log(err))
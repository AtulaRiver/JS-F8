//* Promise
//* Sync: Đông bộ
//* Async: Bất đông bộ
//* setTimeout, setInterval, fetch, XMLHttpRequest, fileReading, requestAnimation fram

//* Callback hell
setTimeout(() => {
    console.log(1);
    setTimeout(() => {
        console.log(2);
        setTimeout(() => {
            console.log(3);
            setTimeout(() => {
                console.log(4);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
//* Pyramid of doom



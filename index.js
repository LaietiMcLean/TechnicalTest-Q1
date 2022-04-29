
function numbersList(num) {

    for (let i = 1; i <= num; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            document.write(`<p style="color:purple">${i}</p>`);
        } else if (i % 3 === 0) {
            document.write(`<p style="color:red">${i}</p>`);
        } else if (i % 5 === 0) {
            document.write(`<p style="color:blue">${i}</p>`);
        } else {
            document.write(`<p>${i}</p>`);
        }
    }

}

numbersList(112);




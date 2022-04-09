const type = (b) => {
    console.log(typeof b);
};

const number = (a) => {
    if(a % 2) {
        console.log('false'); // нечётное
    } else {
        console.log('true'); // чётное
    }
};

const value = (c) => {
    if(typeof c === "string") {
        console.log(c);
    } else if(typeof c === "number") {
        if(c % 2) {
            console.log('нечётное');
        } else {
            console.log('чётное');
        }
    }
};

const multi = (d) => {
    if(d % 2) {
        console.log(d * 3);
    } else {
        console.log(d * 2);
    }
};

const multiTer = (e) => {
    console.log(e % 2 ? e * 3 : e * 2);
};

const sum = (f, g) => {
    if ((!(+f % 2)) && (!(+g % 2))) {
        console.log(+f + +g);
    } else if ((!(+f % 2)) || (!(+g % 2))) {
        console.log(+f - +g);
    } else {
        console.log(+f * +g);
    }
};

value(5);
multi(5);
multiTer(5);
sum(5, '4');

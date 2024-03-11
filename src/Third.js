const passwordBox = document.getElementById('password');
const lenght = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]></-=";

const alChars = upperCase + lowerCase + number + symbol;

function createPassword() {
    let password = "";
    password = password + upperCase[Math.floor(Math.random() * upperCase.length)];
    password = password + lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password = password + number[Math.floor(Math.random() * number.length)];
    password = password + symbol[Math.floor(Math.random() * symbol.length)];

    while (lenght > password.length) {
        password = password + alChars[Math.floor(Math.random() * alChars.length)];
    }

    passwordBox.value = password;
    // passwordBox.innerText = password;
}

function copyPassword() {

    passwordBox.select();
    document.execCommand("copy");

    

}

createPassword2();
function createPassword2() {
    let pass = "";
    let a = Array.from(upperCase);
    console.log(`a is ${a}`);
    pass = pass + a[Math.floor(Math.random() * a.length)]

    let b = Array.from(lowerCase);
    console.log(`b is ${b}`);
    pass = pass + b[Math.floor(Math.random() * b.length)]

    let c = Array.from(number);
    console.log(`c is ${c}`);
    pass = pass + c[Math.floor(Math.random() * c.length)]

    let d = Array.from(symbol);
    console.log(`d is ${d}`);
    pass = pass + d[Math.floor(Math.random() * d.length)]

    console.log(`password2  is      ${pass}`);

    let e = a+b+c+d;

    console.log(`merging array = ${e}` );

    console.log(`2= ${e[1]}` );

    while (pass.length < 13) {
        pass = pass + a[Math.floor(Math.random() * a.length)];
        pass = pass + b[Math.floor(Math.random() * b.length)];
        pass = pass + c[Math.floor(Math.random() * c.length)];
        pass = pass + d[Math.floor(Math.random() * d.length)];


    }

    console.log(`password2 updated  is      ${pass}`);
}

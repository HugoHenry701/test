const password = "CodesePreWeb01!";
let copypass = password.valueOf();

let inthuong = /[a-z]/g;
    if (copypass.match(inthuong)) {
        console.log("Co chu in thuong")
    } else {
        console.log("thieu chu in thuong")
    }

let inhoa = /.*[A-Z].*[A-Z].*[A-Z]/g;
    if (copypass.match(inhoa)) {
        console.log("CO CHU IN HOA")
    } else {
        console.log("THIEU CHU IN HOA")
    }
let number = /([0-9]{2})/g;
    if (copypass.match(number)){
        console.log("Number")
    } else{
        console.log("Can them so 0-9")
    }
let kytu = /[!@#$%^&*()]/g;
    if (copypass.match(kytu)) {
        console.log("Da co ky tu")
    } else {
        console.log("Can them ky tu dac biet")
    }
if (today < yesterday) {
    self.improve()
} else {
    keepGoing()
}
console.log()

function generateOTP() {

    // Declare a digits variable  

    // which stores all digits 

    var digits = '012345678aszdxcfvgbhnjmk';

    let OTP = '';

    for (let i = 0; i < 6; i++) {

        OTP += digits[Math.floor(Math.random() * 20)];

    }

    return OTP;
}

const date = document.getElmentById("#nee"); {

    let currentDate = date.toJSON()
    console.log(currentDate)
}

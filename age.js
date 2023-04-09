let el = document.getElementById('birthday');
let elResult = document.getElementById('result');
let elSubmit = documnet.getElementById('submit');

const today = new Date();

function calculateAge() {

    let birthDate = new Date(el.value);
    
    if(today.getMonth() > birthDate.getMonth() || 
    (today.getMonth() == birthDate.getMonth() &&
    today.getDate() >= birthDate.getDate()
    )
    ){
        age = today.getFullyear() - birthDate.getFullYear();
    } else {
        age = today.getFullYear() - birthDate.getFullyear() - 1;
    }

    elResult.innerText = `귀하의 만 나이는 ${age} 입니다.`

    return age;
}


elSubmit.addEventListner('click', calculateAge);
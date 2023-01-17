const caculate = () => {
    let number1 = parseInt(document.getElementById("number1").value)
    let number2 = parseInt(document.getElementById("number2").value)
    const opt = document.getElementById("operator").value
    const result =document.getElementById("result")
    console.log(result);
    console.log(opt);
    // switch(opt){
    //     case "+":
    //         console.log(number1+number2);
    //         break;
    //     case "-":
    //         console.log(number1-number2);
    //         break;
    //     case "*":
    //         console.log(number1*number2);
    //         break;
    //     case "/":
    //         console.log(number1/number2);
    //         break;
    //         default:
    //             console.log("unknown opt");

    // }
    if (opt === "+") {
        console.log(number1 + number2);
        result.innerText= number1+ number2
    } else if (opt === "-") {
        console.log(number1 - number2);
        result.innerText= number1- number2
    } else if (opt === "*") {
        console.log(number1 * number2);
        result.innerText= number1* number2
    } else if (opt === "/") {
        console.log(number1 / number2);
        result.innerText= number1/number2
    } else {
        console.log("unknown opt");
        result.innerText="unknown opt"
        result.style.color="red"
        alert("unknown opt")
    }


}
const add = (a, b) => {
    return a + b
}
const minus = (a, b) => {
    return a - b
}

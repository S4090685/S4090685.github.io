function checkWeather() {
    let myTemp =  document.querySelector ("#myTemp");
    let body =  document.querySelector ("body");
    console.log(myTemp);
    let temp = myTemp.value;
    console.log(temp);
    if (temp < 10) {
        console.log("it is freezing");
        body.style.backgroundColor = "gray";
    } else if (temp >= 10 && temp < 20) {
        console.log("sunny and warm");
        body.style.backgroundColor = "aqua";
    } else if (temp >= 20 && temp < 25) {
        console.log("sunny and warm");
        body.style.backgroundColor = "aqua";
    } else if (temp > 35) {
        console.log("it is hot");
        body.style.backgroundColor = "red";
    }
}

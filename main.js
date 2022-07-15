
// set initial count

let count = 0;

// select value and buttons

const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");
const submitbtn = document.querySelectorAll(".btn2");
//const inputamnt = document.getElementById("inputamnt").value
//const sbmt = document.getElementById("submit")

btns.forEach(function (btn) {
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }
        else if(styles.contains('increase')){
            count++;
        }
        else{
            count = 0;
        }
        if(count > 0){
            value.style.color="green";
        }
        else if(count < 0){
            value.style.color="red";
        }
        else{
            value.style.color="#222";
        }
        value.textContent = count;
    })
});

submitbtn.forEach(function (subbtn) {
    subbtn.addEventListener('click', function(manualadj) {
        var inputamnt = Number(document.getElementById("inputamnt").value);
        if (isNaN(inputamnt)) {
            document.getElementById("inputamnt").textContent = "Enter a number.";
        } else {
            count = count + inputamnt;
            document.getElementById("inputamnt").value="";
        }
        if(count > 0){
            value.style.color="green";
        }
        else if(count < 0){
            value.style.color="red";
        }
        else{
            value.style.color="#222";
        }
        value.textContent = count;
        

});
});



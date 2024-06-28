const generateBtn = document.getElementById("generate-bill");
const billAmount = document.getElementById("bill-amount");
const numberPeople = document.getElementById("people-number");
const resultTip = document.getElementById("show-tip");
const totalAmount = document.getElementById("show-total");
const eachPersonResult = document.getElementById("show-each-person");
const btnContainer = document.querySelector(".tip-butttons");
const btn = document.querySelectorAll(".tip-btn");
const resetBtn = document.querySelector("#reset-btn");

btnContainer.addEventListener("click", (e) => {
    if(e.target !== btnContainer){
        [...btnContainer.children].forEach(element => {
            element.classList.remove("border-orange");
            e.target.classList.add("border-orange");
        });

        const tipAmount = parseInt( e.target.innerText);
        calculatePercentage(tipAmount);
    }
});


function calculatePercentage(tipAmount) {
    generateBtn.addEventListener("click", () => {
        if (billAmount.value.trim() < 0 || numberPeople.value.trim() < 0) {
            alert("Don't try negative value !!");
        }
        else { 
            let tip = parseInt(tipAmount) / 100 * parseInt(billAmount.value.trim());
            let total = parseInt(billAmount.value.trim()) + tip;
            let eachPerson = total / parseInt(numberPeople.value.trim());

            resultTip.innerText = `₹${tip}`;
            totalAmount.innerText = `₹${total}`;
            eachPersonResult.innerText = `₹${eachPerson}`;
        }
    });
}


resetBtn.addEventListener("click", () => {
    location.reload();
});


billAmount.addEventListener("keyup", () => {
    btnContainer.classList.add("show-tip-btns");
});

numberPeople.addEventListener("keyup", () => {
    generateBtn.classList.add("show-tip-btns");
});


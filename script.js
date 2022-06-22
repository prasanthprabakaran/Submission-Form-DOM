let submit = document.getElementById("submit");
submit.addEventListener("click",function(e){
    e.preventDefault();
    let address = [];
    address.push(address1.value);

    let gender = document.getElementsByName("gender");
    let genderValue;
    for(let i=0;i<gender.length;i++) {
        if(gender[i].checked){
            genderValue = gender[i].value;
        }
    }

    let food = document.getElementsByName("food")
    let foodList = [];
    let foodCount = 0;
    for(let i=0;i<food.length;i++) {
        if(food[i].checked){
            foodList.push(food[i].value);
            foodCount++;
        }
    }

    if(foodList.length>=2){
        result = foodList.join(", ");
    }else {
        result = alert("Choose atleast 2 options");
    }

    createTable(firstName.value,lastName.value,address,pin.value,genderValue,result,state.value,country.value);
    firstName.value = "";
    lastName.value = "";
    address1.value = "";
    pin.value = "";
    gender.value = "";
    foodList = [];
    state.value = "";
    country.value = "";
});

let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let address1 = document.getElementById("address1");
let pin = document.getElementById("pincode");
let gender = document.getElementById("gender");
let food = document.getElementById("food");
let state = document.getElementById("state");
let country = document.getElementById("country");

function createTable(firstName,lastName,address,pincode,gender,food,state,country) {
    let tbody = document.getElementById("tbody");
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");
    let td7 = document.createElement("td");
    let td8 = document.createElement("td");
    td1.innerHTML = firstName;
    td2.innerHTML = lastName;
    td3.innerHTML = address;
    td4.innerHTML = pincode;
    td5.innerHTML = gender;
    td6.innerHTML = food;
    td7.innerHTML = state;
    td8.innerHTML = country;
    tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
    tbody.append(tr);

}
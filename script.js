let margin = createElement("div","margin");
let rowDiv = createElement("div","row modified d-flex justify-content-between");
let colDiv1 = createElement("div","col-sm-12 col-md-12 col-lg-3");
let form1 = createElement2("form","mt-3 mb-5 form-style","form");
let h1 = createElement("h1");
h1.idName="title";
h1.innerHTML="Form Submission:";
let p = createElement("p");
p.idName="description";
p.innerHTML="Submission From using DOM";
let fname = createLabel("first-name","First Name:");
let fnameI = createInput("text","first-name","first-name","form-control","First Name");
let Lname = createLabel("last-name","last Name:");
let LnameI = createInput("text","last-name","last-name","form-control","last Name");
let addressLbl = createLabel("address1","Address :");
let addressTxt = createTextArea("address1","address1","form-control","Address","30","3");
let pinCodeLbl = createLabel("pincode","PIN:");
let pinNumber = createInput("number","pincode","pincode","form-control","PIN");
let genderLbl = createLabel("gender","Gender:");
let radio1 = createInput("radio","gender","gender","male","gender m-2 mb-2");
let radio2 = createInput("radio","gender","gender","female","gender m-2 mb-2");
let foodLbl = createLabel("food","Choice of Food:");
let spanCls = document.createElement("span");
spanCls.className="span";
spanCls.innerHTML="(must choose atleast 2 out of 5 options)";
let food1 = createCheckbox("checkbox","food","food","Continental","food m-2");
let fd1 = createLabel("Continental","Continental");
let food2 = createCheckbox("checkbox","food","food","North Indian","food m-2");
let fd2 = createLabel("North Indian","North Indian");
let food3 = createCheckbox("checkbox","food","food","South Indian","food m-2");
let fd3 = createLabel("South Indian","South Indian");
let food4 = createCheckbox("checkbox","food","food","Chinese","food m-2");
let fd4 = createLabel("Chinese","Chinese");
let food5 = createCheckbox("checkbox","food","food","British","food m-2");
let fd5 = createLabel("British","British");
let stateLbl = createLabel("state","State:");
let stateI = createInput("text","state","state","form-control","State");
let countryLbl = createLabel("country","Country:");
let countryI = createInput("text","country","country","form-control","Country");
let submitBtn = submitButton("submit","form-control btn btn-secondary","Submit");
let male = createLabel("male","Male");
let female = createLabel("female","Female");
let br1 = document.createElement("BR");
let br2 = document.createElement("BR");
let br3 = document.createElement("BR");
let br4 = document.createElement("BR");
let br5 = document.createElement("BR");
let br6 = document.createElement("BR");
let br7 = document.createElement("BR");
let br8 = document.createElement("BR");
let br9 = document.createElement("BR");
let br10 = document.createElement("BR");
let br11 = document.createElement("BR");
let br12 = document.createElement("BR");
let br13 = document.createElement("BR");
let br14 = document.createElement("BR");
let br15 = document.createElement("BR");

foodLbl.append(spanCls);
form1.append(h1,p,fname,fnameI,br1,Lname,LnameI,br2,addressLbl,addressTxt,br3,pinCodeLbl,pinNumber,br4,genderLbl,br5,
    radio1,male,radio2,female,br7,foodLbl,br8,food1,fd1,br9,food2,fd2,br10,food3,fd3,br11,food4,fd4,br12,food5,fd5,br13,stateLbl,stateI,br14,countryLbl,countryI,br15,submitBtn);
colDiv1.append(form1);
rowDiv.append(colDiv1);


let colDiv2 = createElement("div","col col-sm-12 col-md-12 col-lg-8");
let h2 = document.createElement("h1");
h2.innerHTML="Temporary Database";
let tbl = document.createElement("table");
tbl.className="table table-striped";
let thd = document.createElement("thead");
thd.className="bg-dark text-light";
let tr1 = document.createElement("tr");
let td01 = createTd("First Name");
let td02 = createTd("last Name");
let td03 = createTd("Address");
let td04 = createTd("Pincode");
let td05 = createTd("Gender");
let td06 = createTd("Food");
let td07 = createTd("State");
let td08 = createTd("Country");
let tBdy = document.createElement("tbody");
tBdy.className="tbody";
tBdy.id="tbody";

function createTd(value){
    let ele = document.createElement("td");
    ele.innerHTML = value;
    return ele;
};

tr1.append(td01,td02,td03,td04,td05,td06,td07,td08);
thd.append(tr1);
tbl.append(thd,tBdy);
colDiv2.append(h2,tbl);
rowDiv.append(colDiv1,colDiv2);
margin.append(rowDiv);
document.body.append(margin);




function createElement(elementName,className,){
    let ele = document.createElement(elementName);
    ele.className = className;
    return ele;
}

function createElement2(elementName,className,idName){
    let ele = document.createElement(elementName);
    ele.className = className;
    ele.id = idName;
    return ele;
}

function createLabel(forName,value){
    let ele = document.createElement("label");
    ele.setAttribute("for",forName);
    ele.innerHTML=value;
    return ele;
}

function createInput(type,name,idName,className,placeholderName){
    let ele = document.createElement("input");
    ele.setAttribute("type",type);
    ele.setAttribute("name",name);
    ele.id=idName;
    ele.className=className;
    ele.placeholderName=placeholderName;
    return ele;
}

function createTextArea(name,idName,className,placeholderName,col,row){
    let ele = document.createElement("textarea");
    ele.setAttribute("name",name);
    ele.id=idName;
    ele.className=className;
    ele.placeholderName=placeholderName;
    ele.setAttribute("cols",col);
    ele.setAttribute("rows",row);
    return ele;
}

function createRadio(type,name,idName,value,className) {
    let ele = document.createElement("input");
    ele.setAttribute("type",type);
    ele.setAttribute("name",name);
    ele.id=idName;
    ele.value=value;
    ele.className=className;
    return ele;
}

function createCheckbox(type,name,idName,valueName,className) {
    let ele = document.createElement("input");
    ele.setAttribute("type",type);
    ele.setAttribute("name",name);
    ele.id=idName;
    ele.value=valueName;
    ele.className=className;
    return ele;
}

function submitButton(type,className,value){
    let ele = document.createElement("button");
    ele.setAttribute("type",type);
    ele.setAttribute("id","submit")
    ele.className=className;
    ele.innerHTML=value;
    return ele;
}



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
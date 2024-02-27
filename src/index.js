let employees= [
    {
      "id": 1001,
      "imageUrl": "https://cdn-icons-png.flaticon.com/512/0/93.png",
      "firstName": "Thomas",
      "lastName": "Leannon",
      "email": "Thomas.Leannon@dummyapis.com",
      "contactNumber": "4121091095",
      "age": 43,
      "dob": "26/08/1979",
      "salary": 1,
      "address": "Address1"
    },
    {
      "id": 1002,
      "imageUrl": "https://cdn-icons-png.flaticon.com/512/0/93.png",
      "firstName": "Faye",
      "lastName": "Sauer",
      "email": "Faye.Sauer@dummyapis.com",
      "contactNumber": "4914696673",
      "age": 60,
      "dob": "28/06/1962",
      "salary": 2,
      "address": "Address2"
    },
    {
      "id": 1003,
      "imageUrl": "https://cdn-icons-png.flaticon.com/512/0/93.png",
      "firstName": "Deven",
      "lastName": "Halvorson",
      "email": "Deven.Halvorson@dummyapis.com",
      "contactNumber": "4479795571",
      "age": 29,
      "dob": "06/01/1993",
      "salary": 3,
      "address": "Address3"
    },
    {
      "id": 1004,
      "imageUrl": "https://cdn-icons-png.flaticon.com/512/0/93.png",
      "firstName": "Melisa",
      "lastName": "Schuppe",
      "email": "Melisa.Schuppe@dummyapis.com",
      "contactNumber": "4443995334",
      "age": 38,
      "dob": "06/09/1984",
      "salary": 4,
      "address": "Address4"
    },
    {
      "id": 1005,
      "imageUrl": "https://cdn-icons-png.flaticon.com/512/0/93.png",
      "firstName": "Dell",
      "lastName": "Kris",
      "email": "Dell.Kris@dummyapis.com",
      "contactNumber": "4505692843",
      "age": 89,
      "dob": "14/03/1933",
      "salary": 5,
      "address": "Address5"
    },
    {
      "id": 1006,
      "imageUrl": "https://cdn-icons-png.flaticon.com/512/0/93.png",
      "firstName": "Marcia",
      "lastName": "Gutmann",
      "email": "Marcia.Gutmann@dummyapis.com",
      "contactNumber": "4746199430",
      "age": 56,
      "dob": "24/07/1966",
      "salary": 6,
      "address": "Address6"
    },
    {
      "id": 1007,
      "imageUrl": "https://cdn-icons-png.flaticon.com/512/0/93.png",
      "firstName": "Jarrod",
      "lastName": "Ortiz",
      "email": "Jarrod.Ortiz@dummyapis.com",
      "contactNumber": "4859095720",
      "age": 82,
      "dob": "26/12/1940",
      "salary": 7,
      "address": "Address7"
    },
    {
      "id": 1008,
      "imageUrl": "https://cdn-icons-png.flaticon.com/512/0/93.png",
      "firstName": "Gabriella",
      "lastName": "Wilkinson",
      "email": "Gabriella.Wilkinson@dummyapis.com",
      "contactNumber": "4379190775",
      "age": 36,
      "dob": "24/06/1986",
      "salary": 8,
      "address": "Address8"
    },
    {
      "id": 1009,
      "imageUrl": "https://cdn-icons-png.flaticon.com/512/0/93.png",
      "firstName": "Elisabeth",
      "lastName": "Hayes",
      "email": "Elisabeth.Hayes@dummyapis.com",
      "contactNumber": "4394091994",
      "age": 66,
      "dob": "17/08/1956",
      "salary": 9,
      "address": "Address9"
    },
    {
      "id": 1010,
      "imageUrl": "https://cdn-icons-png.flaticon.com/512/0/93.png",
      "firstName": "Jaime",
      "lastName": "Reichel",
      "email": "Jaime.Reichel@dummyapis.com",
      "contactNumber": "4622392580",
      "age": 41,
      "dob": "21/01/1981",
      "salary": 10,
      "address": "Address10"
    }
  ];
// (async function(){
//     let employees = await fetch('./data.json');
//     employees = await employees.json();
//     console.log(employees);
// })();
    var employeeListContainer = null;
    var employeeInfoContainer = null;
    var activeEmployee=employees[0];
    var activeEmployeeId = activeEmployee.id;
(function(){
    console.log(employees);
    employeeListContainer = document.querySelector(".emp-list-container");
    employeeInfoContainer = document.querySelector(".emp-details-container");
    renderEmployeeList(employees);
    renderActiveEmployeeDetails(activeEmployee); 
    addDetailsEventListener();

    function renderEmployeeList(employees){
        employeeListContainer.innerHTML="";
        employees.forEach(emp => {
            let employee = document.createElement("div");
            employee.classList.add("emp-list--name");
            if(activeEmployee.id === emp.id){
                employee.classList.add("emp-list--active");
            }
            employee.setAttribute("id", emp.id);
            employee.innerHTML=`<span>${emp.firstName}   ${emp.lastName}</span>
            <i class="employee-delete">❌</i>`;  
            employeeListContainer.appendChild(employee);          
        });
    }
    function renderActiveEmployeeDetails(activeEmployee){
        employeeInfoContainer.innerHTML='';
        let employeeInfo=document.createElement("div");
        employeeInfo.innerHTML=`<div class="employee-info">
            <img src=${activeEmployee.imageUrl} alt="user_img" style="width:20%"/>
            <div><span class="employee-info--label">Name: </span>
                <span class="employee-info--details">${activeEmployee.firstName}  ${activeEmployee.lastName}</span>
            </div>
            <div><span class="employee-info--label">EmailId:</span>
                <span class="employee-info--details">${activeEmployee.lastName}</span>
            </div>
            <div><span class="employee-info--label">DOB:</span>
                <span class="employee-info--details">${activeEmployee.lastName}</span>
            </div>
        </div>`
        employeeInfoContainer.appendChild(employeeInfo);
    }

    function addDetailsEventListener(){
        employeeListContainer.addEventListener("click", (e) => {
            if(e.target.tagName.toLowerCase() == "span"){
                activeEmployeeId = e.target.parentElement.id;
                activeEmployee = employees.find(emp => emp.id == activeEmployeeId);
                renderEmployeeList(employees);
                renderActiveEmployeeDetails(activeEmployee);
            }
            if(e.target.tagName.toLowerCase() == "i"){
                let empIndex = employees.findIndex(emp => emp.id == e.target.parentNode.id);
                employees.splice(empIndex, 1);
                renderEmployeeList(employees);
                renderActiveEmployeeDetails(employees[0]);
            }
        });
    }

    const employeeModal = document.querySelector('.add-emp-modal');
    const employeeForm = document.querySelector('.add-employee-form');
    document.querySelector('.add-emp-btn').addEventListener('click', ()=>{
        employeeModal.style.display = 'flex';
    });
    
    employeeModal.addEventListener('click', (e)=>{
        console.log('modal background click');
        if(e.target.classList.contains('add-emp-modal')){
            employeeModal.style.display = 'none';
        }
    });

    employeeForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        let empFormData = new FormData(employeeForm);
        const values = [...empFormData.entries()];
        let empData = {};
        values.forEach((val) => {
        empData[val[0]] = val[1];
        });
        empData.id = employees[employees.length - 1].id + 1;
        console.log(empData);
        employeeForm.reset()
        employees.push(empData);
        renderEmployeeList(employees);
        renderActiveEmployeeDetails(activeEmployee);
        employeeModal.style.display = 'none';
    });
})();

    
let state = {
    india: ['Tamilnadu', 'Delhi', 'Mumbai', 'Kerala', 'Karnataka'],
    australia: ['New South Wales', 'Queensland', 'South Australia'],
    usa: ['Alabama', 'Delaware', 'California', 'Washington'],
    canada: ['Alberta', 'British Columbia', 'Northwest Territories']
}

document.getElementById('country').addEventListener('change', loadState);

document.getElementById('foodForm').addEventListener('submit', submitForm);





function loadState(e) {
    clearState();
    let stateDOM = document.getElementById('state');
    state[e.target.value].forEach(stateName => {
        let option = document.createElement('option');
        option.value = stateName.toLowerCase();
        option.innerHTML = stateName;
        stateDOM.appendChild(option);
    });
    stateDOM.focus();
}

function clearState() {
    let stateDOM = document.getElementById('state');
    stateDOM.innerHTML = '';
    let defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.innerHTML = 'Select..';
    defaultOption.selected = true;
    defaultOption.disabled = true;
    stateDOM.appendChild(defaultOption)
}



function submitForm(event) {

    event.preventDefault();
    let details = {
        firstName: document.getElementById('fname').value,
        lastName: document.getElementById('lname').value,
        address: document.getElementById('address').value,
        pincode: document.getElementById('pincode').value,
        gender: document.querySelector('.gender input:checked').value,
        country: document.getElementById('country').value,
        state: document.getElementById('state').value,
        EDUCATION:document.getElementById('education').value,
         button1:document.createElement('button').class,
         button2:document.createElement('button'),
         button3:document.createElement('button'),
        
    }
    

    addDetails(details);
    event.target.reset();
    clearState();
    return false;

}


function addDetails(details) {
    let table = document.getElementById('table').querySelector('table');
    let row = table.insertRow(-1);
    let col = row.insertCell(-1);
   // let button=document.createElement('button')
    col.innerHTML = details.firstName;
    col = row.insertCell(-1);
    col.innerHTML = details.lastName;
    col = row.insertCell(-1);
    col.innerHTML = details.address;
    col = row.insertCell(-1);
    col.innerHTML = details.pincode;
    col = row.insertCell(-1);
    col.innerHTML = details.gender;
    col = row.insertCell(-1);
    col.innerHTML = details.EDUCATION;
    col = row.insertCell(-1);
    col.innerHTML = details.country;
    col = row.insertCell(-1);
    col.innerHTML = details.state;
    col = row.insertCell(-1);
    col.innerHTML=details.button1;
    col = row.insertCell(-1);
    col.innerHTML=details.button2;
    col = row.insertCell(-1);
    col.innerHTML=details.button3;

}
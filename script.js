var submit = document.getElementById('submit');
submit.addEventListener("click", displayDetails);

var row = 1;


function displayDetails()
{

  var firstName = document.getElementById("fname").value;
  var lastName = document.getElementById("lname").value;
  var Address = document.getElementById("Address").value;
  var Pincode = document.getElementById("Pincode").value;
  var Gender = document.getElementById("Gender").value;
  var State = document.getElementById("State").value;
  var Country = document.getElementById("Country").value;

  var foodChoices = [];
  var selectedFoodOptions = document.getElementById("selctFood").selectedOptions;
  for (var i = 0; i < selectedFoodOptions.length; i++) {
      foodChoices.push(selectedFoodOptions[i].text);
  }


  if( !firstName || !lastName || !Address || !Pincode || !Gender || !foodChoices.length || !State || !Country)
  {
    alert("please fill all boxes");
    return;
  }

  var display = document.getElementById('display');

  var newRow = display.insertRow(row);

  var cel1 = newRow.insertCell(0);
  var cel2 = newRow.insertCell(1);
  var cel3 = newRow.insertCell(2);
  var cel4 = newRow.insertCell(3);
  var cel5 = newRow.insertCell(4);
  var cel6 = newRow.insertCell(5);
  var cel7 = newRow.insertCell(6);
  var cel8 = newRow.insertCell(7);
 
  cel1.innerHTML = firstName;
  cel2.innerHTML = lastName;
  cel3.innerHTML = Gender;
  cel4.innerHTML = Address;
  cel5.innerHTML = Pincode;
  cel6.innerHTML = State;
  cel7.innerHTML = Country;
  //cel8.innerHTML = FoodChoice;
  cel8.innerHTML = foodChoices.join(", ");


  row++;

  document.getElementById("display").style.display = "block";
}

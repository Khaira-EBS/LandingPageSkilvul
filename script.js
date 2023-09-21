// Soal 6
function handleGetFormData() {
  const name = document.getElementById("name").value;
  const city = document.getElementById("city").value;
  const email = document.getElementById("email").value;
  const zipCode = document.getElementById("zip-code").value;
  const status = document.getElementById("status").checked;

  return {
      name,
      city,
      email,
      zipCode,
      status,
  };
}

// Soal 7
function isNumber(inputString) {
  return !isNaN(inputString);
}

// Soal 8
function checkboxIsChecked() {
  return document.getElementById("status").checked;
}

// Soal 9
function validateFormData(formData) {
  if (
      formData !== null &&
      isNumber(formData.zipCode) &&
      checkboxIsChecked() === true
  ) {
      return true;
  }
  return false;
}

// Soal 10
function submit() {
  const formData = handleGetFormData();
  const warningDiv = document.getElementById("warning");

  if (!validateFormData(formData)) {
      warningDiv.textContent = "Periksa form anda sekali lagi";
  } else {
      warningDiv.textContent = "";
  }
}

const form = document.getElementById("myForm");

form.addEventListener("submit", function(event){
event.preventDefault();
submit()
});
const leadForm = document.getElementById('leadForm');

let formData = {}
leadForm.querySelectorAll('.form-control').forEach((inputElement) => {
    if (inputElement.name) {
        formData[inputElement.name] = formData[inputElement.value];
    }
})
function receiveMessage(e) {
    e.preventDefault();
    let params = {
        userName: leadForm.querySelector('.userName').value.trim(),
        userEmail: leadForm.querySelector('.userEmail').value.trim(),
        userNum: leadForm.querySelector('.userNum').value.trim(),
        userMsg: leadForm.querySelector('.userMsg').value.trim(),
    }
    const serviceId = "service_a1bbz8q";
    const templateId = "template_0f41xm6";
    emailjs.send(serviceId, templateId, params)
      .then(res => {
        leadForm.reset();
        window.location.href = "/thankyou.html";
      })
      .catch(error => {
        alert("Something went wrong, Try Again!!")
      })
}
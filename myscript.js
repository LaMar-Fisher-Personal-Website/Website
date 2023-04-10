function myFunction() {
    document.getElementById("demo").innerHTML = "Added Javascript"
    } 


      const form = document.querySelector("#form")
      const submitButton = document.querySelector("#submit")
      const scriptURL = 'https://script.google.com/macros/s/1XTaVdkdAnzhAHoLOA-x0K4svtJOB9RUnp2OgudFCNoEE4Lo8muDKOgSO/exec'
   
      form.addEventListener('submit', e => {
        console.log('Form submitted');
        submitButton.disabled = true
        e.preventDefault()
        let requestBody = new FormData(form)
        fetch(scriptURL, { method: 'POST', body: requestBody})
          .then(response => {
            console.log('Response received');
            if (response.ok) {
              alert('Success!');  
            } else {
              alert('Error!');
            }
             submitButton.disabled = false
          })
          .catch(error => {
            console.log('Error:', error);
            alert('Error!');
            submitButton.disabled = false;
          });
      });
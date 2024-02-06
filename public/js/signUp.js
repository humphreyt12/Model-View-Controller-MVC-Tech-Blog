//Creating the signup form 
const signupFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    //POST response to the API endpoint '/api/users'
    if (username && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      //If response is successful, redirect the browser to the dashboard page
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };

//Event listener for signup
document
 .querySelector('.signup-form')
 .addEventListener('submit', signupFormHandler);
//Creating the dashboard form
const newFormHandler = async (event) => {
  event.preventDefault();

  //Getting values from the dashboard form
  const title = document.querySelector('#blog-title').value.trim();
  const description = document.querySelector('#blog-desc').value.trim();
  
  //Posting a response from the API endpint '/api/blogs'
  if (title && description) {
    const response = await fetch(`/api/blogs`, {
      method: 'POST',
      body: JSON.stringify({ title, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    //If the response is good the page reloads back to the dashboard 
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create blog'); //If the response is bad, an alert pops up
    }
  }
};

//Deleting a response by blog id from the API endpint '/api/blogs'
const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/blogs/${id}`, {
      method: 'DELETE',
    });
    //If the response is good the page reloads back to the dashboard 
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete blog'); //If the response is bad, an alert pops up
    }
  }
};
//Event listener for submitting a new blog
document
  .querySelector('.new-blog-form')
  .addEventListener('submit', newFormHandler);
//Event listener for deleting a blog
document
  .querySelector('.blog-list')
  .addEventListener('click', delButtonHandler);

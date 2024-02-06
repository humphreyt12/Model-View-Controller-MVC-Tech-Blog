//Creating the comments form
const commentFormHandler = async function (event) {
    event.preventDefault();

    //Collect values from the comment form 
    const blog_id = document.querySelector('.new-comment-form').dataset.blogid;

	const comment_description = document.querySelector('#comment_description').value.trim();

    //Creating a fetch response to API comments endpoint
	if (comment_description) {
		await fetch('/api/comments', {
			method: 'POST',
			body: JSON.stringify({
				blog_id,
				comment_description,
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		document.location.reload();
	}
};
//When the page loads select the comments and submit them unto the blog
document
	.querySelector('.new-comment-form')
	.addEventListener('submit', commentFormHandler);
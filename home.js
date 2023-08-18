
  

    const likeButton = document.getElementById('likeButton');
    const dislikeButton = document.getElementById('dislikeButton');

    // Initialize like and dislike counts from Local Storage
    let likes = parseInt(localStorage.getItem('likes')) || 0;
    let dislikes = parseInt(localStorage.getItem('dislikes')) || 0;

    // Display initial counts
    updateCounts();

    // Add event listeners to buttons
    likeButton.addEventListener('click', () => {
      likes++;
      localStorage.setItem('likes', likes);
      updateCounts();
    });

    dislikeButton.addEventListener('click', () => {
      dislikes++;
      localStorage.setItem('dislikes', dislikes);
      updateCounts();
    });

    // Update counts in the UI
    function updateCounts() {
      likeButton.innerHTML = `<i class="fa fa-thumbs-up"></i><span> ${likes} </span> `;
      dislikeButton.innerHTML = `<i class="fa fa-thumbs-down"></i><span> ${dislikes} </span>`;
    }
 

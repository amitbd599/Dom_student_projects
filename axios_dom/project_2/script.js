// Fetch the data and populate the table when the page loads
function data() {
  const tableBody = document.querySelector('#tbody');

  // Fetch data from API using axios
  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      const posts = response.data;

      // Iterate over each post and add it to the table
      posts.map((post) => {
        tableBody.innerHTML = tableBody.innerHTML + `
            <tr>
              <td>${post.id}</td>
              <td>${post.title}</td>
              <td>${post.body}</td>
            </tr>
          `;
      });
    })
    .catch(error => {
      console.error('Error fetching posts:', error);
    });
};


window.onload = data
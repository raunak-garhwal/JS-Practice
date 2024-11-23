
// Two ways of handling API response

// Using Promise-Chaining
fetch('https://api.github.com/users/hiteshchoudhary')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(`GitHub Followers : ${data.followers}`);
    })
    .catch((error) => console.log(error));

    
// Using Async-Await
// (async () => {
//     try {
//         const response = await fetch('https://api.github.com/users/raunak-garhwal')
//         const data = await response.json()
//         console.log(data);
//         console.log(`GitHub-Account created on :- ${data.created_at.split('T')[0]}`);
//     } catch (error) {
//         console.log("Error");
//     }
// })()

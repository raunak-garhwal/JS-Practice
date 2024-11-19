
// fetch('https://api.github.com/users/hiteshchoudhary')
// .then((response) => {
//     return response.json()
// })
// .then((data) => {
//     console.log(data);
//     console.log(data.avatar_url);
// })
// .catch((error) => console.log(error))


(async () => {
    try {
        const response = await fetch('https://api.github.com/users/raunak-garhwal')
        const data = await response.json()
        console.log(data);
        console.log(data.created_at.split('T')[1]);
    } catch (error) {
        console.log("Error");
    }
})()

const randomFolks = document.querySelector(".random-peeps");

const getData = async () => {
    const usersRequest = await fetch('https://randomuser.me/api?results=5');
    const data = await usersRequest.json();
    const usersResults = data.results;
    // console.log(usersResults)
    displayUsers(usersResults)
}

getData()

const displayUsers = usersResults => {
    randomFolks.innerHTML = "";
    for (let user of usersResults) {
        const country = user.location.country;
        const name = user.name.first;
        const imageUrl = user.picture.medium;
       

        const userDiv = document.createElement("div");
        userDiv.innerHTML = `
            <h3>${name}</h3>
            <p>${country}</p>
            <img src=${imageUrl} alt="${name} avatar" />
        `;

        randomFolks.appendChild(userDiv)
    }
}

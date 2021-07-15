const randomFolks = document.querySelector(".random-peeps");
const selectUserNumber = document.querySelector("select")

// console.log(selectUserNumber); // test to see if the selectUserNumber is working

const getData = async (numUsers) => {
    const usersRequest = await fetch(`https://randomuser.me/api?results=${numUsers}`);
    const data = await usersRequest.json();
    const usersResults = data.results;
    // console.log(usersResults)
    displayUsers(usersResults)
}


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

selectUserNumber.addEventListener("change", event => {
    const numUsers = event.target.value;
    // console.log(numUsers); // test
    getData(numUsers)
})
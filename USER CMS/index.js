const getUsersBtn = document.getElementById('usersIntBtn');
const userCard = document.getElementById('userCard');
const userBtnContainer = document.querySelector('.userBtn');
const user1 = document.getElementById('usersCallBtn1');
const user2 = document.getElementById('usersCallBtn2');
const user3 = document.getElementById('usersCallBtn3');
const user4 = document.getElementById('usersCallBtn4');
const user5 = document.getElementById('usersCallBtn5');
const user6 = document.getElementById('usersCallBtn6');

getUsersBtn.addEventListener('click', showUserBtn);

function showUserBtn() {
    // Fetch the data from the API using fetch or any other method
    fetch('https://reqres.in/api/users?page=1')
        .then(response => response.json())
        .then(data => {
            const users = data.data;

            // Loop through the users and add first_name and last_name to each button
            users.forEach((user, index) => {
                const button = document.getElementById(`usersCallBtn${index + 1}`);
                button.innerHTML = `${user.first_name} ${user.last_name}`;
            });

            // Show the userBtn container
            userBtnContainer.classList.add('show');
            document.getElementById('usersCallBtn1').style.display = "block";
            document.getElementById('usersCallBtn2').style.display = "block";
            document.getElementById('usersCallBtn3').style.display = "block";
            document.getElementById('usersCallBtn4').style.display = "block";
            document.getElementById('usersCallBtn5').style.display = "block";
            document.getElementById('usersCallBtn6').style.display = "block";
        })
        .catch(error => {
            console.log("Error fetching users:", error);
        });
}

user1.addEventListener('click', showUser1);

function showUser1() {
    fetch('https://reqres.in/api/users?page=1')
        .then(response => response.json())
        .then(data => {
            const user = data.data[0]; // Get the first user from the API data

            // Set the innerHTML of the userCard element with the user details
            userCard.innerHTML = `
                <img src="${user.avatar}" alt="${user.first_name}">
                <p><b>First Name:</b> ${user.first_name} <br> <b>Last Name:</b> ${user.last_name}</p>
                <p><b>Email:</b> ${user.email}</p>
            `;
            userCard.classList.add('show');
        })
        .catch(error => {
            console.log("Error fetching users:", error);
        });
}

user2.addEventListener('click', showUser2);

function showUser2() {
    fetch('https://reqres.in/api/users?page=1')
        .then(response => response.json())
        .then(data => {
            const user = data.data[1]; // Get the first user from the API data

            // Set the innerHTML of the userCard element with the user details
            userCard.innerHTML = `
                <img src="${user.avatar}" alt="${user.first_name}">
                <p><b>First Name:</b> ${user.first_name} <br> <b>Last Name:</b> ${user.last_name}</p>
                <p><b>Email:</b> ${user.email}</p>
            `;
            userCard.classList.add('show');
        })
        .catch(error => {
            console.log("Error fetching users:", error);
        });
}

user3.addEventListener('click', showUser3);

function showUser3() {
    fetch('https://reqres.in/api/users?page=1')
        .then(response => response.json())
        .then(data => {
            const user = data.data[2]; // Get the first user from the API data

            // Set the innerHTML of the userCard element with the user details
            userCard.innerHTML = `
                <img src="${user.avatar}" alt="${user.first_name}">
                <p><b>First Name:</b> ${user.first_name} <br> <b>Last Name:</b> ${user.last_name}</p>
                <p><b>Email:</b> ${user.email}</p>
            `;
            userCard.classList.add('show');
        })
        .catch(error => {
            console.log("Error fetching users:", error);
        });
}

user4.addEventListener('click', showUser4);

function showUser4() {
    fetch('https://reqres.in/api/users?page=1')
        .then(response => response.json())
        .then(data => {
            const user = data.data[3]; // Get the first user from the API data

            // Set the innerHTML of the userCard element with the user details
            userCard.innerHTML = `
                <img src="${user.avatar}" alt="${user.first_name}">
                <p><b>First Name:</b> ${user.first_name} <br> <b>Last Name:</b> ${user.last_name}</p>
                <p><b>Email:</b> ${user.email}</p>
            `;
            userCard.classList.add('show');
        })
        .catch(error => {
            console.log("Error fetching users:", error);
        });
}

user5.addEventListener('click', showUser5);

function showUser5() {
    fetch('https://reqres.in/api/users?page=1')
        .then(response => response.json())
        .then(data => {
            const user = data.data[4]; // Get the first user from the API data

            // Set the innerHTML of the userCard element with the user details
            userCard.innerHTML = `
                <img src="${user.avatar}" alt="${user.first_name}">
                <p><b>First Name:</b> ${user.first_name} <br> <b>Last Name:</b> ${user.last_name}</p>
                <p><b>Email:</b> ${user.email}</p>
            `;
            userCard.classList.add('show');
        })
        .catch(error => {
            console.log("Error fetching users:", error);
        });
}

user6.addEventListener('click', showUser6);

function showUser6() {
    fetch('https://reqres.in/api/users?page=1')
        .then(response => response.json())
        .then(data => {
            const user = data.data[5]; // Get the first user from the API data

            // Set the innerHTML of the userCard element with the user details
            userCard.innerHTML = `
                <img src="${user.avatar}" alt="${user.first_name}">
                <p><b>First Name:</b> ${user.first_name} <br> <b>Last Name:</b> ${user.last_name}</p>
                <p><b>Email:</b> ${user.email}</p>
            `;
            userCard.classList.add('show');
        })
        .catch(error => {
            console.log("Error fetching users:", error);
        });
}
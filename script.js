/* ================= LOGIN ================= */

function login(){

    const role = document.getElementById("role").value;
    const message = document.getElementById("login-message");

    if(role === "admin"){

        window.location.href = "admin.html";

    }else{

        window.location.href = "index.html";

    }

}


/* ================= LOGOUT ================= */

function logout(){

    localStorage.removeItem("campusUser");

}


/* ================= ANNOUNCEMENT ================= */

function postAnnouncement(){

    const title =
        document.getElementById("announcementTitle").value;

    const message =
        document.getElementById("announcementMessage").value;

    const priority =
        document.getElementById("announcementPriority").value;


    if(title === "" || message === ""){

        alert("Please enter the announcement title and message.");

        return;

    }


    alert(
        "Announcement published successfully!\n\n" +
        "Title: " + title +
        "\nPriority: " + priority
    );


    document.getElementById("announcementTitle").value = "";

    document.getElementById("announcementMessage").value = "";

}


/* ================= EVENT ================= */

function addEvent(){

    const name =
        document.getElementById("eventName").value;

    const date =
        document.getElementById("eventDate").value;

    const venue =
        document.getElementById("eventVenue").value;

    const time =
        document.getElementById("eventTime").value;


    if(name === "" || date === "" || venue === ""){

        alert("Please complete the event details.");

        return;

    }


    alert(
        "Event added successfully!\n\n" +
        name +
        "\nDate: " + date +
        "\nVenue: " + venue +
        "\nTime: " + time
    );


    document.getElementById("eventName").value = "";

    document.getElementById("eventDate").value = "";

    document.getElementById("eventVenue").value = "";

    document.getElementById("eventTime").value = "";

}


/* ================= DEADLINE ================= */

function addDeadline(){

    const task =
        document.getElementById("deadlineTask").value;

    const date =
        document.getElementById("deadlineDate").value;


    if(task === "" || date === ""){

        alert("Please enter the task and due date.");

        return;

    }


    alert(
        "Deadline added successfully!\n\n" +
        "Task: " + task +
        "\nDue Date: " + date
    );


    document.getElementById("deadlineTask").value = "";

    document.getElementById("deadlineDate").value = "";

}


/* ================= SEARCH ================= */

const searchInput =
    document.querySelector(".search-box input");


if(searchInput){

    searchInput.addEventListener("keyup", function(){

        const search =
            this.value.toLowerCase();

        const announcements =
            document.querySelectorAll(".announcement");

        announcements.forEach(function(item){

            const text =
                item.innerText.toLowerCase();

            if(text.includes(search)){

                item.style.display = "flex";

            }else{

                item.style.display = "none";

            }

        });

    });

}

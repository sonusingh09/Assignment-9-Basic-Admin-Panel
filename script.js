var url = 'https://5eed1a8d4cbc340016330ede.mockapi.io/login';
var tableInfo = document.getElementById("tableBody");
var infoContent = document.getElementById("info-content");


function userEntry(id, first, last, mail, phone, address, description) {
    var tableRow = document.createElement("tr")
    tableRow.classList.add("data-row")
    tableRow.id = id
    tableRow.addEventListener("click", function () {
        var tablelement = document.getElementsByClassName("data-row");
        for (i = 0; i < tablelement.length; i++) {
            tablelement[i].style.backgroundColor = "white"
        }
        var bgColor=document.getElementById(id)
        bgColor.style.backgroundColor = "lightseagreen"
        var userName = "<div><b>User selected:</b>" + first + " " + last + "</div>"
        var userDescription = "<div><b> Description: </b><textarea cols='50' rows='5' readonly>" + description + "</textarea></div >"

        var street = "<div><b>Address:</b>" + address["streetAddress"] + "</div>"
        var city = "<div><b>City:</b>" + address["city"] + "</div>"
        var state = "<div><b>State:</b>" + address["state"] + "</div>"
        var zip = "<div><b>Zip:</b>" + address["zip"] + "</div>"
        var userDescriptionItems = userName + userDescription + street + city + state + zip
        infoContent.innerHTML = userDescriptionItems;
        infoContent.style.display = "block"



    })
    var column1 = document.createElement("td");
    column1.classList.add("column1");
    column1.innerText = id;

    var column2 = document.createElement("td");
    column2.classList.add("column2");
    column2.innerText = first;

    var column3 = document.createElement("td");
    column3.classList.add("column3");
    column3.innerText = last;

    var column4 = document.createElement("td");
    column4.classList.add("column4");
    column4.innerText = mail;

    var column5 = document.createElement("td");
    column5.classList.add("column5");
    column5.innerText = phone;

    tableRow.appendChild(column1);
    tableRow.appendChild(column2);
    tableRow.appendChild(column3);
    tableRow.appendChild(column4);
    tableRow.appendChild(column5);


    tableInfo.appendChild(tableRow);

}


var http= new XMLHttpRequest();
http.open("GET", url, true);
http.send();

http.onreadystatechange = function () {
    if (http.readyState == 4) {
        var response = JSON.parse(http.responseText)
        for (i = 0; i < response.length; i++) {
            var id = response[i]["id"];
            var first = response[i]["firstName"];
            var last = response[i]["lastName"];
            var mail = response[i]["email"];
            var phone = response[i]["phone"];
            var address = response[i]["address"];

            description = response[i]["description"];
            userEntry(id, first, last, mail, phone, address, description);

        }
    }
}




var searchBox = document.getElementById("search-box");
var tablelement = document.getElementsByClassName("data-row");



searchBox.addEventListener("input", function () {
    var enteredContent = searchBox.value;
    for (i = 0; i < tablelement.length; i++) {
        var name = tablelement[i].getElementsByClassName("column2")[0].innerText;
        name = name.toLowerCase()
        if (!(name.includes(enteredContent))) {
            tablelement[i].style.display = "none";
        }
        else {
            tablelement[i].style.display = "";
        }
    }

})
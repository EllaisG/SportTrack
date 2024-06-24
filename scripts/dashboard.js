const array = document.getElementById("array");
const fileInput = document.getElementById("file-input");
var data;


function updateData(d) {
    data = d;
    array.innerHTML = "";
    for (i in data.data) {
        var activity = data.data[i];

        array.innerHTML += `
        <tr>
            <td>${activity.time}</td>
            <td>${activity.cardio_frequency}</td>
            <td>${activity.latitude}</td>
            <td>${activity.longitude}</td>
            <td>${activity.altitude}</td>
        </tr>
        `
    }
}


fileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
        const text = e.target.result;
        const data = JSON.parse(text);
        updateData(data);
    };
    reader.readAsText(file);
});




fetch("../data.json").then((response) => {
    response.json().then((d) => {
        updateData(d);
    });
});


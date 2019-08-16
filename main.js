const table = document.createElement("table");

for (let i = 0; i < 30; i++) {
    let tableRow = document.createElement("tr");
    table.appendChild(tableRow);
    for (let j = 0; j <30; j++) {
        let tableSell = document.createElement("td");
        tableSell.classList.add("white-cell");
        tableRow.appendChild(tableSell);
    }
}

document.body.appendChild(table);

table.addEventListener("click", (event) => {
    if (event.target.classList.contains("white-cell")) {
        event.target.classList.toggle("black-cell");
    }
});

const tableChildren = Array.from(table.getElementsByTagName("*"));

document.body.addEventListener("click", (event) => {
    if (event.target!== table && !tableChildren.includes(event.target)) {
        table.classList.toggle("revert-cell-color");
    }
});

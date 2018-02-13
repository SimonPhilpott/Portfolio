/*Sortable table*/
var tableSort = document.getElementById("sortableTable");
if (tableSort) {
    var sortHeads = tableSort.getElementsByTagName("th");
    for (i = 0; i < sortHeads.length; ++i) {
        sortHeads[i].setAttribute("onClick", "sortTable(" + i + "); toggleSortClass(" + i + ")");
        sortHeads[i].setAttribute("class", "sortArrows");
        sortHeads[0].setAttribute("class", "dnSortArrow");

    }

    function toggleSortClass(col) {
        for (i = 0; i < sortHeads.length; ++i) {
            if (sortHeads[col].className == "dnSortArrow") {
                sortHeads[i].className = "sortArrows";
                sortHeads[col].className = "upSortArrow";
            } else {
                sortHeads[i].className = "sortArrows";
                sortHeads[col].className = "dnSortArrow"
            }
        }
    }

    function sortTable(n) {
        var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
        table = document.getElementById("sortableTable");
        switching = true; // Set the sorting direction to ascending:
        dir = "asc";
        while (switching) {
            switching = false;
            rows = table.getElementsByTagName("TR");
            for (i = 1; i < (rows.length - 1); i++) {
                shouldSwitch = false;
                x = rows[i].getElementsByTagName("TD")[n];
                y = rows[i + 1].getElementsByTagName("TD")[n];
                if (dir == "asc") {
                    if (x.textContent.toLowerCase() > y.textContent.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                } else if (dir == "desc") {
                    if (x.textContent.toLowerCase() < y.textContent.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                }
            }
            if (shouldSwitch) {
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
                switchcount++;
            } else {
                if (switchcount == 0 && dir == "asc") {
                    dir = "desc";
                    switching = true;
                }
            }
        }
    }
    sortTable(0);
}
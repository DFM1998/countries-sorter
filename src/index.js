import $ from "jquery";

// Fetch a list of countries from the following endpoint using ajax.
const url = "https://restcountries.com/v2/regionalbloc/eu";

$.getJSON(url, function (data) {
  let output = "";
  data.forEach((element) => {
    output += "<tr>";
    output +=
      "<td><img src='" + element.flag + "' style='max-width: 50px'></td>";
    output += "<td>" + element.name + "</td>";
    output += "<td>" + element.alpha2Code + "</td>";
    output += "<td>" + element.population + "</td>";
    output += "</tr>";
  });
  $("#mytable").append(output);
});

let order = true;
$("#populationHead").click(function () {
  if (order) {
    $("#populationHead").html("Population ↑");
    order = false;
    sortTable();
  } else {
    $("#populationHead").html("Population ↓");
    order = true;
    sortTable();
  }
});

// I found this method on the internet: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_sort_table
function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("mytable");
  switching = true;

  if (order) {
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < rows.length - 1; i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[3];
        y = rows[i + 1].getElementsByTagName("TD")[3];
        if (Number(x.innerHTML) > Number(y.innerHTML)) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  } else {
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < rows.length - 1; i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[3];
        y = rows[i + 1].getElementsByTagName("TD")[3];
        if (Number(x.innerHTML) < Number(y.innerHTML)) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }
}

/*
 * Create a table in #root of these countries containing country flag, name, code and population.
 * Clicking on the population table head should toggle the sort order between ascending ↑ and descending ↓.
 *
 * ! You are free to not use codesandbox and make this challenge locally, remember to send us the files or a github link. !
 */

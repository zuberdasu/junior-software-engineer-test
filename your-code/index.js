//Create references to DOM
const boroughsDomRef = document.getElementById("boroughs");
const boroughNameDomRef = document.getElementById("boroughName");
const revenueDomRef = document.getElementById("revenue");
const boroughDataDomRef = document.getElementById("boroughData");

//Add event listener for selection of borough
boroughsDomRef.addEventListener("change", handleSelectChange);

//Function to get and display list of boroughs
async function getBoroughData() {
  const result = await axios.get(`http://127.0.0.1:3000/allboroughs`);

  const boroughData = result.data.borough;

  const boroughList = [];

  boroughData.forEach((borough) => {
    boroughList.push(borough.borough);
  });

  let options = "";
  options += `<option></option>`;

  boroughList.forEach((op) => {
    options += `<option value="${op}";>${op}</option>`;
  });

  boroughsDomRef.innerHTML = options;
}

//Function to handle display of data once borough has been selected
async function handleSelectChange(event) {
  const currentValue = event.target.value;

  const result = await axios.get(`http://localhost:3000/coffeeshops`);
  const shopsList = result.data.coffeeshops;

  const selectedBoroughData = shopsList.filter(
    (shop) => shop.borough == currentValue
  );

  boroughNameDomRef.innerHTML = `<p>Borough: ${currentValue}</p>`;

  let table = "<table>";
  table += `<tr>
  <th>Coffee Shop</th>
  <th>Borough</th>
  <th>Revenue (£)</th>
</tr>`;

  let revenue = 0;

  selectedBoroughData.forEach((shop) => {
    table += `<tr>
    <td>${shop.shop}</td>
    <td>${currentValue}</td>
    <td>${shop.revenue}</td>
  </tr>`;

    revenue += shop.revenue;
  });

  table += "</table>";
  boroughDataDomRef.innerHTML = table;
  revenueDomRef.innerHTML = `<p id="revenue">Total Revenue: £${revenue}</p>`;
}

//Call function so that list of boroughs is fetched and displayed on web page
getBoroughData();

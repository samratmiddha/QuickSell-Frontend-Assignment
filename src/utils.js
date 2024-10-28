export const fetchData = (url, setData) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((error) => window.alert("Error  while Fetching data"))
}

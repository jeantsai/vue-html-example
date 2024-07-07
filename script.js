console.log('Hello!');

fetch("/common/header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("#header").innerHTML = data;
  });

fetch("/common/footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("#footer").innerHTML = data;
  });

document.querySelector('button').addEventListener('click', newFox)


function newFox(){

    fetch(`https://randomfox.ca/floof/`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            // document.querySelector(".quote").innerText = data[0].quote
            // document.querySelector(".author").innerText = data[0].author
            document.querySelector("img").src = data.image
        //   document.querySelector("h3").innerText = data.
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
 
}


fetch(`https://randomfox.ca/floof/`)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)
    // document.querySelector(".quote").innerText = data[0].quote
    // document.querySelector(".author").innerText = data[0].author
    document.querySelector("img").src = data.image
  //   document.querySelector("h3").innerText = data.
  })
  .catch(err => {
      console.log(`error ${err}`)
  });

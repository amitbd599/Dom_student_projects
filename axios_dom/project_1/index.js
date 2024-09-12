function getJoke() {
    let config = {
        headers: {
            Accept: 'application/json'
        }
    }

    axios.get("https://icanhazdadjoke.com", config).then((res) => {
        console.log(res.data);

        document.getElementById("joke").innerHTML = res.data.joke;
    }).catch(err => {
        console.error(err);
    });
}


window.onload = getJoke
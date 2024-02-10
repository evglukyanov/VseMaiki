function changeImage(e) {
    let img = document.getElementById('img');
    let path = e.attributes['src'].nodeValue
    img.src = path
    }
    
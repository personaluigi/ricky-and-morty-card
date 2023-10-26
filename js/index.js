const btn = document.getElementById('btn-submit');

function showCharacter() {
    const searchValue = document.getElementById('search-character').value;
    let nameChar = document.getElementById('name');
    let originChar = document.getElementById('origin')
    let statusChar = document.getElementById('status');
    let speciesChar = document.getElementById('species');
    let genderChar = document.getElementById('gender');
    let locationChar = document.getElementById('location')
    let imageChar = document.getElementById('image');

    fetch(`https://rickandmortyapi.com/api/character/${searchValue}`)
        .then((resp) => resp.json())
        .then((data) => {
            const { name, status, species, image, gender } = data;
            const origin = data.origin.name;
            const location = data.location.name;

            imageChar.src = `${image}`;
            nameChar.innerHTML = `${name}`;
            originChar.innerHTML = `<strong>Origin:</strong> ${origin}`;
            statusChar.innerHTML = `<strong>Status:</strong> ${status}`;
            speciesChar.innerHTML = `<strong>Species:</strong> ${species}`;
            genderChar.innerHTML = `<strong>Gender:</strong> ${gender}`;
            locationChar.innerHTML = `<strong>Location</strong>: ${location}`
        })
}

btn.addEventListener('click', showCharacter);
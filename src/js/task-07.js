
const refs = {
  input: document.querySelector("#font-size-control"),
  nameLabel: document.querySelector("#text"),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    refs.nameLabel.style.fontSize = `${event.currentTarget.value}px`;
}

console.log(refs.input);

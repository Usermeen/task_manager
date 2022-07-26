const blockForms = document.forms.myForm;
const formError = document.querySelector('.form-error')
const inputText = blockForms.elements.inputArea;
const list = document.querySelector('#myList')

const addButton = document.querySelector('#addButton')
const textElement = document.querySelector('.text')
const liFlex = document.querySelector('.li-flex');

function showError() {
	formError.style.visibility = 'visible';
	inputText.value = '';
	addButton.disabled = true;
	addButton.className = 'add-none-hover';
	inputText.style.borderColor = 'red';
}

inputText.addEventListener('focus', () => {
	addButton.style.cursor = 'pointer'
	inputText.style = '';
	addButton.disabled = false;
	formError.style.visibility = 'hidden';
	formError.innerHTML = '';
	addButton.className = 'add';
});

addButton.addEventListener('click', (event) => {
	event.preventDefault();
	if (!inputText.value.length) {
		addButton.style.cursor = 'default'
		showError();
		formError.innerHTML = 'New task is required';

	} else if (inputText.value.length < 3) {
		showError();
		addButton.style.cursor = 'default'
		formError.innerHTML = 'New task should have more than 3 symbols';

	} else {
		formError.style.visibility = 'hidden';
		list.insertAdjacentHTML("beforeEnd", `
		<li class='li-flex'>
		<div class='text'>${inputText.value}</div>
		<div class='delete'>&#10006</div>
		</li>`);
		inputText.value = '';
	}
});

list.addEventListener('click', (event) => {
	let { style, parentElement, className } = event.target;

	if (!style.length && className === 'text') {
		parentElement.style.backgroundColor = 'rgb(114 114 114)'
		style.textDecoration = 'line-through';
		style.color = 'white';
	} else {
		parentElement.style = '';
		style.textDecoration = '';
		style.color = '';


	} if (className === 'delete') {
		parentElement.remove();
	}
});

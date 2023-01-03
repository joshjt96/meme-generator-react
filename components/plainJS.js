// Write a function called double which takes in an array of numbers and returns a new array after doubling every item in that array – double([1,2,3]) // [2,4,6].

// Imperative code:
function double(array) {
    let newArray = [];
    for (let i = 0; i < 100, i++) {
    newArray.push(array[i] * 2);
    }
    return newArray;
};

// Declarative code:
function double(array) {
    return array.map((item) => item * 2);
};

<script>
(function(){
removeTooltips();
})();

function copyToClipboard(value) {
	navigator.clipboard.writeText(value);
}

function removeTooltips() {
var inputs = document.querySelectorAll("[data-ttip]");
for (var i = 0; i < inputs.length; i++) {
inputs[i].removeAttribute("data-ttip");
}
}

// Toggles the visibility of the element with the given ID
function toggle(id){
	var element = document.getElementById(id);
	// If currently hidden make visible and alert screenreader
	if (element.getAttribute("aria-hidden") == "true"){
		element.setAttribute("aria-hidden", "false");
		element.setAttribute("role", "alert");
	} else {
		element.setAttribute("aria-hidden", "true");
		element.removeAttribute("role");
	}
}

function toggleSelector(selector){
	var element = document.querySelector(selector);
	// If currently hidden make visible and alert screenreader
	if (element.getAttribute("aria-hidden") == "true"){
		element.setAttribute("aria-hidden", "false");
		element.setAttribute("role", "alert");
element.classList.remove("hidden");
	} else {
		element.setAttribute("aria-hidden", "true");
		element.removeAttribute("role");
element.classList.add("hidden");
	}
}

// Clicks the button inside the element with the given ID (because SITS assigns stupid IDs)
function clickButton(id){
	var button = document.querySelector("#" + id + "Button input");
	button.click();
}

// Clears any inputs inside a toggled (and now hidden) div
function clearInputs(toggleId){
	var toggleElement = document.querySelector("#" + toggleId);
		// Blank out value if input
		var toggledInput = toggleElement.querySelector("input");
		var toggledSelect = toggleElement.querySelector("select");
		var toggledTextArea = toggleElement.querySelector("textarea");
		var toggledRadio = toggleElement.querySelectorAll("input[type='radio']");
		if (toggledTextArea != null){
			toggledTextArea.value = "";
		} else if (toggledRadio.length != 0){
			for (var i=0; i < toggledRadio.length;i++){
				toggledRadio[i].checked = false;
			}
		} else if (toggledInput != null){
			toggledInput.value = "";
		} else if (toggledSelect != null){
			toggledSelect.value = "";
		}
	
}

// Toggles a div depending on a 'select' - and the one answer where a toggle isn't needed
function toggleInput(questionId, toggleDiv, notNeededAnswer){
	if (typeof notNeededAnswer === 'undefined') {notNeededAnswer = "default";}
	var questionAnswer = document.querySelector("#" + questionId + " select").value;	
	if (questionAnswer == "·=" | questionAnswer == "" | questionAnswer == notNeededAnswer){
		// Blank out optional question
		clearInputs(toggleDiv);
		document.getElementById(toggleDiv).setAttribute("aria-hidden", "true");
		return false;
	} else {
		document.getElementById(toggleDiv).setAttribute("aria-hidden", "false");
		return true;
	}
}

// Uses query selector instead
// Toggles a div depending on a 'select' - and the one answer where a toggle isn't needed
function toggleInputSelector(questionSelector, toggleDiv, notNeededAnswer){
	if (typeof notNeededAnswer === 'undefined') {notNeededAnswer = "default";}
	var questionAnswer = document.querySelector(questionSelector).value;	
	if (questionAnswer == "·=" | questionAnswer == "" | questionAnswer == notNeededAnswer){
		// Blank out optional question
		clearInputs(toggleDiv);
		document.getElementById(toggleDiv).setAttribute("aria-hidden", "true");
		return false;
	} else {
		document.getElementById(toggleDiv).setAttribute("aria-hidden", "false");
		return true;
	}
}

// Toggles depending on whether a checkbox is checked - if true, display
function toggleCheckbox(checkId, toggleId){
	var checkboxValue = document.querySelector("#" + checkId).checked;
	var toggleDiv = document.querySelector("#" + toggleId);
	var toggleInput = document.querySelector("#" + toggleId + " input");
	if (checkboxValue == true){
		toggleDiv.setAttribute("aria-hidden","false");
	} else {
		toggleDiv.setAttribute("aria-hidden","true");
		clearInputs(toggleId);
	}
}

// Toggles a div depending on a 'select' - if "Other" is selected, then display
function toggleInputOther(questionId, toggleDiv, otherAnswer){
	if (typeof otherAnswer === 'undefined') {otherAnswer = "default";}
	var questionAnswer = document.querySelector("#" + questionId + " select").value;	
	if (questionAnswer == otherAnswer){
		document.getElementById(toggleDiv).setAttribute("aria-hidden", "false");
		return true;
	} else {
		// Blank out optional question
		clearInputs(toggleDiv);
		document.getElementById(toggleDiv).setAttribute("aria-hidden", "true");
		return false;
	}
}

// Toggles if the radio button selected = Y
function radioToggle(radioId, toggleId) {
	var radioValue = getRadioButtonValue(radioId);
	var toggleElement = document.querySelector("#" + toggleId);
	
	if (radioValue == 'Y') {
		toggleElement.setAttribute("aria-hidden", "false");
		toggleElement.setAttribute("role", "alert");
	} else {		
		toggleElement.setAttribute("aria-hidden", "true");
		toggleElement.removeAttribute("role");
	}
}

// Toggles if the radio button selected = Y
function radioToggleDataId(radioId, toggleId) {
	var radioValue = radioDataIdSelector(radioId);
	var toggleElement = document.querySelector("#" + toggleId);
	
	if (radioValue == 'Y') {
		toggleElement.setAttribute("aria-hidden", "false");
		toggleElement.setAttribute("role", "alert");
	} else {		
		toggleElement.setAttribute("aria-hidden", "true");
		toggleElement.removeAttribute("role");
	}
}

// Gets the radio button value
function getRadioButtonValue(radioId){
	var radioButtons = document.querySelectorAll("#" + radioId + " input[type='radio']");
	var radioValue = "";
	for (var i=0; i < radioButtons.length; i++){
		if (radioButtons[i].checked){
			radioValue = radioButtons[i].value;
		}
	}
	return radioValue;
}

function radioDataIdSelector(dataId){
    var radioButtons = document.querySelectorAll("input[type='radio'][data-id='"+dataId+"']");
	var radioValue = "";
	for (var i=0; i < radioButtons.length; i++){
		if (radioButtons[i].checked){
			radioValue = radioButtons[i].value;
		}
	}
	return radioValue;
}

function setRequired(inputField, isRequired){
    if (isRequired) {
        inputField.setAttribute("required", "true");
		inputField.setAttribute("data-webvalidation", "on");
    } else {
        inputField.removeAttribute("required");
		inputField.removeAttribute("data-webvalidation");
    }
}
</script>
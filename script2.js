const groupMainContainer = document.getElementById("group-container");
const addGroupButton = document.getElementById("add-group-btn");

addGroupButton.addEventListener("click", () => {
  createGroupDiv();
});

function createGroupDiv() {
  const groupDiv = document.createElement("div");
  groupDiv.classList.add("group");

  const outerContainer = document.createElement("div");
  outerContainer.classList.add(
    "bg-light",
    "rounded-3",
    "overflow-hidden",
    "mb-3"
  );

  // Create the inner group div with the class "group p-3 bg-light"
  const innerGroup = document.createElement("div");
  innerGroup.classList.add("group", "p-3", "bg-light");

  // Create the header div with the class "py-1 d-flex align-items-center justify-content-between border-m"
  const headerDiv = document.createElement("div");
  headerDiv.classList.add(
    "py-1",
    "d-flex",
    "align-items-center",
    "justify-content-between",
    "border-m"
  );

  // Create the span element with the text "Group 1" and the class "text-purple fw-bold"
  const groupTitle = document.createElement("span");
  groupTitle.textContent = "Group 1";
  groupTitle.classList.add("text-purple", "fw-bold");

  // Create the trash icon with the class "fa-solid fa-trash text-purple"
  const trashIcon = document.createElement("i");
  trashIcon.classList.add("fa-solid", "fa-trash", "text-purple");

  // Add a click event listener to the trash icon
  trashIcon.addEventListener("click", () => {
    // Remove the outerContainer when the trash icon is clicked
    outerContainer.remove();
  });

  // Append the groupTitle and trashIcon to the headerDiv
  headerDiv.appendChild(groupTitle);
  headerDiv.appendChild(trashIcon);

  // Append the headerDiv to the innerGroup
  innerGroup.appendChild(headerDiv);

  // Append the innerGroup to the outerContainer
  outerContainer.appendChild(innerGroup);

  // Get the target element with id "addGroup" and append the outerContainer
  const targetElement = document.getElementById("group-container");
  targetElement.appendChild(outerContainer);

  const createRuleDiv = addRule(innerGroup);
  innerGroup.appendChild(createRuleDiv);
  console.log(innerGroup);
}

function createButton(text, onClick) {
  const button = document.createElement("button");
  button.setAttribute("type", "button");
  button.textContent = text;
  button.addEventListener("click", onClick);
  return button;
}

function addRule(ruleDiv) {
  const ruleBox = document.createElement("div");
  ruleBox.classList.add("rule-box");

  const ruleHeadingDiv = document.createElement("div");
  ruleHeadingDiv.classList.add("rule-heading");
  // ruleHeadingDiv.textContent = "Rule Heading";

  // Create the trash icon with the class "fa-solid fa-trash text-purple"
  const trashIcon = document.createElement("i");
  trashIcon.classList.add("fa-solid", "fa-trash", "text-purple");

  // Add a click event listener to the trash icon
  trashIcon.addEventListener("click", () => {
    // Remove the outerContainer when the trash icon is clicked
    ruleDiv.removeChild(ruleBox);
  });

  const conditionsPlaceholder = document.createElement("div");
  conditionsPlaceholder.classList.add("conditions-placeholder");

  // Create the outermost div with id="addRule"
  const addRuleDiv = document.createElement("div");
  addRuleDiv.classList.add(
    "px-4",
    "py-4",
    "background",
    "overflow-hidden",
    "rounded-3"
  );
  addRuleDiv.id = "addRule";

  // Create the first inner div with class="d-flex justify-content-between p-2 border-m rule bg-light"
  const firstInnerDiv = document.createElement("div");
  firstInnerDiv.classList.add(
    "d-flex",
    "justify-content-between",
    "p-2",
    "border-m",
    "rule",
    "bg-light",
    "align-items-center"
  );
  const secondInnerDiv = document.createElement("div");
  secondInnerDiv.classList.add(
    "d-flex",
    "justify-content-between",
    "align-items-center",
    "p-2",
    "gap-2"
  );

  // Create the first div within the first inner div
  const firstDivInFirstInnerDiv = document.createElement("div");
  firstDivInFirstInnerDiv.classList.add("py-2", "d-flex");

  // Create the select element within the first div
  const selectElement = document.createElement("select");
  selectElement.classList.add("selectpicker");
  firstDivInFirstInnerDiv.appendChild(selectElement);

  // Create and add options to the select element
  const options = ["ADD", "Include", "Exclude"];
  options.forEach((optionText) => {
    const option = document.createElement("option");
    option.value = optionText;
    option.textContent = optionText;
    selectElement.appendChild(option);
  });

  // Create the nested checkbox and label within the first div
  const checkboxDiv = document.createElement("div");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const label = document.createElement("label");
  label.classList.add("fs-6");
  label.textContent = " Nested";
  checkboxDiv.appendChild(checkbox);
  checkboxDiv.appendChild(label);
  firstDivInFirstInnerDiv.appendChild(checkboxDiv);

  // Create the second div within the first inner div
  const secondDivInFirstInnerDiv = document.createElement("div");
  secondDivInFirstInnerDiv.classList.add("d-flex", "gap-2");

  // Create the "Add Condition" button within the second div
  const addConditionButton = document.createElement("button");
  addConditionButton.id = "add-condition-btn";
  addConditionButton.innerHTML =
    '<i class="fa-solid fa-plus"></i> Add Condition';
  secondDivInFirstInnerDiv.appendChild(addConditionButton);

  // Create the "Add Rule" button within the second div
  const addRuleButton = document.createElement("button");
  addRuleButton.id = "add-rule-btn";
  addRuleButton.innerHTML = '<i class="fa-solid fa-plus"></i> Add Rule';
  secondDivInFirstInnerDiv.appendChild(addRuleButton);

  addRuleButton.addEventListener("click", () => addRule(ruleBox));
  addConditionButton.addEventListener("click", () => createCondition(ruleBox));

  // Append all the created elements to their respective parent elements
  firstInnerDiv.appendChild(firstDivInFirstInnerDiv);
  firstInnerDiv.appendChild(secondDivInFirstInnerDiv);
  addRuleDiv.appendChild(firstInnerDiv);

  // Create the "Condition" div
  const addConditionDiv = document.createElement("div");
  addConditionDiv.id = "addCondition";

  // Create the inner div within the "Condition" div
  const innerDivInConditionDiv = document.createElement("div");
  innerDivInConditionDiv.classList.add(
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );

  // Create the select elements and options within the inner div
  for (let i = 0; i < 3; i++) {
    const selectElement = document.createElement("select");
    selectElement.classList.add("selectpicker");

    options.forEach((optionText) => {
      const option = document.createElement("option");
      option.value = optionText;
      option.textContent = optionText;
      selectElement.appendChild(option);
    });

    innerDivInConditionDiv.appendChild(selectElement);
  }

  // Create the delete icon within the inner div
  const deleteIcon = document.createElement("i");
  deleteIcon.classList.add("fa-solid", "fa-trash", "text-purple");
  innerDivInConditionDiv.appendChild(deleteIcon);

  // Append the inner div to the "Condition" div
  addConditionDiv.appendChild(innerDivInConditionDiv);

  // Append the "Condition" div to the outermost div
  addRuleDiv.appendChild(addConditionDiv);

  // Append the final constructed structure to the document body
  // document.body.appendChild(addRuleDiv);

  ruleBox.appendChild(firstInnerDiv);
  firstInnerDiv.appendChild(secondInnerDiv);
  secondInnerDiv.appendChild(addRuleButton);
  secondInnerDiv.appendChild(addConditionButton);
  secondInnerDiv.appendChild(trashIcon);
  ruleBox.appendChild(conditionsPlaceholder);

  ruleDiv.appendChild(ruleBox);

  const createConditionDiv = createCondition(ruleBox);
  ruleBox.appendChild(createConditionDiv);
}

function createCondition(ruleDiv) {
  const conditionDiv = document.createElement("div");
  conditionDiv.classList.add(
    "d-flex",
    "justify-content-between",
    "align-items-center",
    "px-2"
  );

  const selectContainer = document.createElement("div");
  selectContainer.classList.add("py-3", "d-flex", "gap-3");

  for (let i = 0; i < 3; i++) {
    const select = document.createElement("select");
    select.classList.add("selectpicker");
    const options = ["ADD", "Include", "Exclude"];
    options.forEach((optionText) => {
      const option = document.createElement("option");
      option.value = optionText;
      option.textContent = optionText;
      select.appendChild(option);
    });
    selectContainer.appendChild(select);
  }

  const deleteIcon = document.createElement("i");
  deleteIcon.classList.add("fa-solid", "fa-trash", "text-purple");

  conditionDiv.appendChild(selectContainer);
  conditionDiv.appendChild(deleteIcon);

  // ruleDiv.querySelector(".conditions-placeholder").appendChild(conditionDiv);

  return conditionDiv;
}

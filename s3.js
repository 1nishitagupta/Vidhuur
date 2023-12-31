const array = [
  {
    id: "name",
    label: "Name",
    type: "string",
    operators: {
      equal: "equal",
      not_equal: "not_equal",
      in: "in",
      not_in: "not_in",
      is_null: "is_null",
      is_not_null: "is_not_null",
    },
  },

  {
    id: "category",
    label: "Category",
    type: "string",
    input: "select",
    values: {
      Books: "Books",
      Movies: "Movies",
      Music: "Music",
      Goodies: "Goodies",
    },
    operators: {
      equal: "equal",
      not_equal: "not_equal",
      in: "in",
      not_in: "not_in",
      is_null: "is_null",
      is_not_null: "is_not_null",
    },
  },

  {
    id: "category",
    label: "Category",
    type: "string",
    input: "select",
    values: {
      true: "True",
      false: "False",
    },
    operators: {
      equal: "equal",
      not_equal: "not_equal",
    },
  },

  {
    id: "age",
    label: "age",
    type: "integer",
    operators: {
      equal: "equal",
      not_equal: "not_equal",
      in: "in",
      not_in: "not_in",
      is_null: "is_null",
      is_not_null: "is_not_null",
      not_between: "not_between",
    },
  },

  {
    id: "date",
    label: "Date",
    type: "date",
    validation: {
      format: "YYYY/MM/DD",
    },
    operators: {
      equal: "equal",
      not_equal: "not_equal",
      between: "between",
      not_between: "not_between",
    },
  },
];

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

  const innerGroup = document.createElement("div");
  innerGroup.classList.add("group", "p-3", "bg-light");

  const headerDiv = document.createElement("div");
  headerDiv.classList.add(
    "py-1",
    "d-flex",
    "align-items-center",
    "justify-content-between",
    "border-m"
  );

  // const groupTitleInput = document.getElementById("group-title-input");
  const groupTitle = document.createElement("span");
  groupTitle.textContent = `Group ${groupCounter}`;
  groupTitle.classList.add("text-purple", "fw-bold");

  groupCounter++; // Increment the counter for the next group

  const trashIcon = createDeleteIcon(() => {
    groupMainContainer.removeChild(groupDiv);
    groupCounter--;
  });

  headerDiv.appendChild(groupTitle);
  headerDiv.appendChild(trashIcon);

  innerGroup.appendChild(headerDiv);
  outerContainer.appendChild(innerGroup);

  const createRuleDiv = addRule(innerGroup);
  innerGroup.appendChild(createRuleDiv);

  // const createConditionDiv = createCondition(createRuleDiv);
  const createConditionDiv = document.createElement("div");

  createRuleDiv.appendChild(createConditionDiv);

  groupDiv.appendChild(outerContainer);
  groupMainContainer.appendChild(groupDiv);

  mapArrayToConditions(array, createConditionDiv);
}

function addRule(ruleDiv) {
  const ruleBox = document.createElement("div");
  ruleBox.classList.add("rule-box");

  const ruleHeadingDiv = document.createElement("div");
  ruleHeadingDiv.classList.add("rule-heading");

  const trashIcon = createDeleteIcon(() => ruleDiv.removeChild(ruleBox));

  // const conditionsPlaceholder = document.createElement("div");
  // conditionsPlaceholder.classList.add("conditions-placeholder");

  const addRuleDiv = document.createElement("div");
  addRuleDiv.classList.add(
    "px-4",
    "py-4",
    "background",
    "overflow-hidden",
    "rounded-3"
  );
  addRuleDiv.id = "addRule";

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

  const firstDivInFirstInnerDiv = document.createElement("div");
  firstDivInFirstInnerDiv.classList.add("py-2", "d-flex");

  const selectElement = document.createElement("select");
  selectElement.classList.add("selectpicker");
  firstDivInFirstInnerDiv.appendChild(selectElement);

  const options = ["ADD", "Include", "Exclude"];
  options.forEach((optionText) => {
    const option = document.createElement("option");
    option.value = optionText;
    option.textContent = optionText;
    selectElement.appendChild(option);
  });

  const checkboxDiv = document.createElement("div");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const label = document.createElement("label");
  label.classList.add("fs-6");
  label.textContent = " Nested";
  checkboxDiv.appendChild(checkbox);
  checkboxDiv.appendChild(label);
  firstDivInFirstInnerDiv.appendChild(checkboxDiv);

  const secondDivInFirstInnerDiv = document.createElement("div");
  secondDivInFirstInnerDiv.classList.add("d-flex", "gap-2");

  //   const addConditionButton = document.createElement("button");
  //   addConditionButton.classList.add("add-condition-btn");
  //   addConditionButton.innerHTML =
  //     '<i class="fa-solid fa-plus"></i> Add Condition';

  const addRuleButton = createButton("Add Rule", () => addRule(ruleBox));
  const addConditionButton = createButton("Add Condition", () =>
    createCondition(ruleBox)
  );

  //   addRuleButton.addEventListener("click", () => addRule(ruleBox));
  //   addConditionButton.addEventListener("click", (e) => {
  //     e.preventDefault();
  //     createCondition(ruleBox);
  //   });

  firstInnerDiv.appendChild(firstDivInFirstInnerDiv);
  firstInnerDiv.appendChild(secondDivInFirstInnerDiv);
  addRuleDiv.appendChild(firstInnerDiv);

  const addConditionDiv = document.createElement("div");
  addConditionDiv.id = "addCondition";

  const innerDivInConditionDiv = document.createElement("div");
  innerDivInConditionDiv.classList.add(
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );

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

  const deleteIcon = createDeleteIcon(() =>
    addConditionDiv.removeChild(conditionDiv)
  );
  innerDivInConditionDiv.appendChild(deleteIcon);

  addConditionDiv.appendChild(innerDivInConditionDiv);

  addRuleDiv.appendChild(addConditionDiv);

  ruleBox.appendChild(firstInnerDiv);
  firstInnerDiv.appendChild(secondInnerDiv);
  secondInnerDiv.appendChild(addRuleButton);
  secondInnerDiv.appendChild(addConditionButton);
  secondInnerDiv.appendChild(trashIcon);
  // ruleBox.appendChild(conditionsPlaceholder);

  ruleDiv.appendChild(ruleBox);

  // const createCondition = createCondition(ruleBox);
  // ruleBox.appendChild(createCondition);

  return ruleBox;
}

function createCondition(ruleBox) {
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

  const deleteIcon = createDeleteIcon(() => {
    ruleBox.removeChild(conditionDiv);
  });
  conditionDiv.appendChild(selectContainer);
  conditionDiv.appendChild(deleteIcon);

  // Append the conditionDiv to the ruleBox
  ruleBox.appendChild(conditionDiv);

  return conditionDiv;
}

function createButton(text, onClick) {
  const button = document.createElement("button");
  button.setAttribute("type", "button");
  button.textContent = text;
  button.addEventListener("click", onClick);
  return button;
}

function createDeleteIcon(onClick) {
  const deleteIcon = document.createElement("i");
  deleteIcon.classList.add("fa-solid", "fa-trash", "text-purple");
  deleteIcon.addEventListener("click", onClick);
  return deleteIcon;
}

function mapArrayToConditions(array, ruleBox) {
  array.forEach((condition) => {
    const conditionDiv = document.createElement("div");
    conditionDiv.classList.add(
      "d-flex",
      "justify-content-between",
      "align-items-center",
      "px-2"
    );

    const selectContainer = document.createElement("div");
    selectContainer.classList.add("py-3", "d-flex", "gap-3");

    // Check if the type is "string" and create an input box with type "text"
    if (condition.type === "string") {
      const inputBox = document.createElement("input");
      inputBox.type = "text";
      inputBox.classList.add("form-control", "input-same-size");
      selectContainer.appendChild(inputBox);
    }
    // Check if the type is "number" and create an input box with type "number"
    else if (condition.type === "number") {
      const inputBox = document.createElement("input");
      inputBox.type = "number";
      inputBox.classList.add("form-control", "input-same-size");
      selectContainer.appendChild(inputBox);
    }
    // Check if the type is "date" and create an input box with type "date"
    else if (condition.type === "date") {
      const inputBox = document.createElement("input");
      inputBox.type = "date";
      inputBox.classList.add("form-control", "input-same-size");
      selectContainer.appendChild(inputBox);
    } else {
      // Create and populate the first select for ID
      const idSelect = document.createElement("select");
      idSelect.classList.add("selectpicker");
      for (const option of Object.keys(condition.values || {})) {
        const optionElement = document.createElement("option");
        optionElement.value = option;
        optionElement.textContent = condition.values[option];
        idSelect.appendChild(optionElement);
      }
      selectContainer.appendChild(idSelect);
    }

    // Create and populate the second select for operators
    const operatorsSelect = document.createElement("select");
    operatorsSelect.classList.add("selectpicker");
    for (const operator of Object.keys(condition.operators)) {
      const operatorElement = document.createElement("option");
      operatorElement.value = operator;
      operatorElement.textContent = condition.operators[operator];
      operatorsSelect.appendChild(operatorElement);
    }
    selectContainer.appendChild(operatorsSelect);

    // Create and populate the third select for values
    const valuesSelect = document.createElement("select");
    valuesSelect.classList.add("selectpicker");
    if (condition.values) {
      for (const option of Object.keys(condition.values)) {
        const optionElement = document.createElement("option");
        optionElement.value = option;
        optionElement.textContent = condition.values[option];
        valuesSelect.appendChild(optionElement);
      }
    }
    selectContainer.appendChild(valuesSelect);

    const deleteIcon = createDeleteIcon(() => {
      ruleBox.removeChild(conditionDiv);
    });

    conditionDiv.appendChild(selectContainer);
    conditionDiv.appendChild(deleteIcon);

    // Append the conditionDiv to the ruleBox
    ruleBox.appendChild(conditionDiv);
  });
}

const groupMainContainer = document.getElementById("group-container");
const addGroupButton = document.getElementById("add-group-btn");
let groupCounter = 1;

addGroupButton.addEventListener("click", () => {
  createGroupDiv();
});

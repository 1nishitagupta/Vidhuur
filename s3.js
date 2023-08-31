document.addEventListener("DOMContentLoaded", function () {
  let ruleCounter = 0;

  function addCondition(button) {
    button.preventDefault();
    const conditionDiv = document.createElement("div");
    conditionDiv.classList.add(
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );

    const conditionSelects = [];
    for (let i = 0; i < 3; i++) {
      const select = document.createElement("select");
      select.classList.add("selectpicker");
      select.name = "conditionSelect";
      const optionAdd = document.createElement("option");
      optionAdd.value = "";
      optionAdd.textContent = "ADD";
      const optionInclude = document.createElement("option");
      optionInclude.value = "include";
      optionInclude.textContent = "Include";
      const optionExclude = document.createElement("option");
      optionExclude.value = "exclude";
      optionExclude.textContent = "Exclude";

      select.appendChild(optionAdd);
      select.appendChild(optionInclude);
      select.appendChild(optionExclude);

      conditionSelects.push(select);
    }

    const trashIcon = document.createElement("i");
    trashIcon.classList.add("fa-solid", "fa-trash", "text-purple");

    conditionDiv.appendChild(conditionSelects[0]);
    conditionDiv.appendChild(conditionSelects[1]);
    conditionDiv.appendChild(conditionSelects[2]);
    conditionDiv.appendChild(trashIcon);

    ruleDiv.appendChild(conditionDiv);
  }

  function addRule(button) {
    button.preventDefault();
    ruleCounter++;

    const newRuleDiv = document.createElement("div");
    newRuleDiv.classList.add(
      "d-flex",
      "justify-content-between",
      "p-2",
      "border-m",
      "rule",
      "bg-light"
    );

    const conditionDiv = document.createElement("div");
    conditionDiv.classList.add("d-flex", "gap-3", "py-3");

    const conditionSelects = [];
    for (let i = 0; i < 3; i++) {
      const select = document.createElement("select");
      select.classList.add("selectpicker");
      select.name = "conditionSelect";
      const optionAdd = document.createElement("option");
      optionAdd.value = "";
      optionAdd.textContent = "ADD";
      const optionInclude = document.createElement("option");
      optionInclude.value = "include";
      optionInclude.textContent = "Include";
      const optionExclude = document.createElement("option");
      optionExclude.value = "exclude";
      optionExclude.textContent = "Exclude";

      select.appendChild(optionAdd);
      select.appendChild(optionInclude);
      select.appendChild(optionExclude);

      conditionSelects.push(select);
    }

    const nestedCheckbox = document.createElement("input");
    nestedCheckbox.type = "checkbox";
    nestedCheckbox.name = "nestedCheckbox";
    const nestedLabel = document.createElement("label");
    nestedLabel.classList.add("fs-6");
    nestedLabel.textContent = " Nested";

    conditionDiv.appendChild(conditionSelects[0]);
    conditionDiv.appendChild(conditionSelects[1]);
    conditionDiv.appendChild(conditionSelects[2]);
    conditionDiv.appendChild(nestedCheckbox);
    conditionDiv.appendChild(nestedLabel);

    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("d-flex", "gap-2");

    const addConditionBtn = document.createElement("button");
    addConditionBtn.id = "add-condition-btn";
    addConditionBtn.innerHTML =
      '<i class="fa-solid fa-plus"></i> Add Condition';
    addConditionBtn.addEventListener("click", (event) => addCondition(event));

    const addRuleBtn = document.createElement("button");
    addRuleBtn.id = "add-rule-btn";
    addRuleBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Add Rule';
    addRuleBtn.addEventListener("click", (event) => addRule(event));

    buttonsDiv.appendChild(addConditionBtn);
    buttonsDiv.appendChild(addRuleBtn);

    newRuleDiv.appendChild(conditionDiv);
    newRuleDiv.appendChild(buttonsDiv);

    ruleBoxContainer.appendChild(newRuleDiv);
  }

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

  const groupTitle = document.createElement("span");
  groupTitle.textContent = "Group 1";
  groupTitle.classList.add("text-purple", "fw-bold");

  const trashIcon = document.createElement("i");
  trashIcon.classList.add("fa-solid", "fa-trash", "text-purple");
  trashIcon.addEventListener("click", () => {
    outerContainer.remove();
  });

  headerDiv.appendChild(groupTitle);
  headerDiv.appendChild(trashIcon);

  innerGroup.appendChild(headerDiv);

  const ruleBoxContainer = document.createElement("div");
  ruleBoxContainer.classList.add(
    "px-4",
    "py-4",
    "background",
    "overflow-hidden",
    "rounded-3"
  );

  const ruleDiv = document.createElement("div");
  ruleDiv.classList.add(
    "d-flex",
    "justify-content-between",
    "p-2",
    "border-m",
    "rule",
    "bg-light"
  );

  const addConditionBtn = document.createElement("button");
  addConditionBtn.id = "add-condition-btn";
  addConditionBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Add Condition';
  addConditionBtn.addEventListener("click", (event) => addCondition(event));

  const addRuleBtn = document.createElement("button");
  addRuleBtn.id = "add-rule-btn";
  addRuleBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Add Rule';
  addRuleBtn.addEventListener("click", (event) => addRule(event));

  ruleDiv.appendChild(addConditionBtn);
  ruleDiv.appendChild(addRuleBtn);

  ruleBoxContainer.appendChild(ruleDiv);

  innerGroup.appendChild(ruleBoxContainer);

  outerContainer.appendChild(innerGroup);

  const targetElement = document.getElementById("addGroup");
  targetElement.appendChild(outerContainer);
});

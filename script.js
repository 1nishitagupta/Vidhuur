// const array = [
//   {
//     id: "name",
//     label: "Name",
//     type: "string",
//     operators: {
//       equal: "equal",
//       not_equal: "not_equal",
//       in: "in",
//       not_in: "not_in",
//       is_null: "is_null",
//       is_not_null: "is_not_null",
//     },
//   },

//   {
//     id: "category",
//     label: "Category",
//     type: "string",
//     input: "select",
//     values: {
//       Books: "Books",
//       Movies: "Movies",
//       Music: "Music",
//       Goodies: "Goodies",
//     },
//     operators: {
//       equal: "equal",
//       not_equal: "not_equal",
//       in: "in",
//       not_in: "not_in",
//       is_null: "is_null",
//       is_not_null: "is_not_null",
//     },
//   },

//   {
//     id: "category",
//     label: "Category",
//     type: "string",
//     input: "select",
//     values: {
//       true: "True",
//       false: "False",
//     },
//     operators: {
//       equal: "equal",
//       not_equal: "not_equal",
//     },
//   },

//   {
//     id: "age",
//     label: "age",
//     type: "integer",
//     operators: {
//       equal: "equal",
//       not_equal: "not_equal",
//       in: "in",
//       not_in: "not_in",
//       is_null: "is_null",
//       is_not_null: "is_not_null",
//       not_between: "not_between",
//     },
//   },

//   {
//     id: "date",
//     label: "Date",
//     type: "date",
//     validation: {
//       format: "YYYY/MM/DD",
//     },
//     operators: {
//       equal: "equal",
//       not_equal: "not_equal",
//       between: "between",
//       not_between: "not_between",
//     },
//   },
// ];

// let groupCounter = 0;
// let ruleCounter = 0;
// let conditionCounter = 0;
// const addGroupBtn = document.getElementById("add-group-btn");
// const addRuleBtn = document.getElementById("add-rule-btn");
// const addConditionBtn = document.getElementById("add-condition-btn");

// addGroupBtn.addEventListener("click", addGroup);
// addRuleBtn.addEventListener("click", addRule);
// addConditionBtn.addEventListener("click", addCondition);

// document.addEventListener("DOMContentLoaded", function () {
//   const groupContainer = document.getElementById("addGroup");

//   addGroupBtn.addEventListener("click", addGroup);

//   groupContainer.addEventListener("click", function (event) {
//     const target = event.target;

//     if (target.matches(".add-rule-btn")) {
//       addRule(target);
//     } else if (target.matches(".add-condition-btn")) {
//       addCondition(target);
//     }
//   });
// });
// function addGroup(e) {
//   e.preventDefault();
//   groupCounter++;
//   let groupDiv = document.createElement("div");
//   groupDiv.classList.add("group", "mb-3");

//   groupDiv.innerHTML = `
//   <div class="bg-light rounded-3 overflow-hidden ">
//   <div class="group p-3 bg-light">
//     <div
//       class="py-1 d-flex align-items-center justify-content-between border-m"
//     >
//       <span class="text-purple fw-bold">Group ${groupCounter}</span>
//       <i class="fa-solid fa-trash text-purple"></i>
//     </div>
//     <!-- Rule Box -->
//     <div class="p-3">
//       <div
//         class="px-4 py-4 background overflow-hidden rounded-3"
//       >
//         <div
//           class="d-flex justify-content-between p-2 border-m rule bg-light"
//         >
//           <div class="py-2 d-flex">
//             <div>
//               <select class="selectpicker" name="" id="">
//                 <option value="">ADD</option>
//                 <option value="">Include</option>
//                 <option value="">Exclude</option>
//               </select>
//             </div>
//             <div class="w-auto">
//               <input type="checkbox" name="" />
//               <label class="fs-6"> Nested</label>
//             </div>
//           </div>
//           <div class="d-flex gap-2">
//           <button id="add-condition-btn">
//           <i class="fa-solid fa-plus"></i> Add Condition</button
//         ><button id="add-rule-btn">
//           <i class="fa-solid fa-plus"></i> Add Rule
//         </button>
//           </div>
//         </div>
//         <!-- Condition -->
//         <div
//           class="d-flex justify-content-between align-items-center"
//         >
//           <div class="py-3 d-flex gap-3">
//             <select class="selectpicker" name="" id="">
//               <option value="">ADD</option>
//               <option value="">Include</option>
//               <option value="">Exclude</option>
//             </select>
//             <select class="selectpicker" name="" id="">
//               <option value="">ADD</option>
//               <option value="">Include</option>
//               <option value="">Exclude</option></select
//             ><select class="selectpicker" name="" id="">
//               <option value="">ADD</option>
//               <option value="">Include</option>
//               <option value="">Exclude</option>
//             </select>
//           </div>
//           <div>
//             <i class="fa-solid fa-trash text-purple"></i>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
//       `;

//   document.getElementById("addGroup").appendChild(groupDiv);
// }

// function addRule(button) {
//   button.preventDefault();
//   ruleCounter++;
//   let ruleDiv = document.createElement("div");
//   ruleDiv.classList.add("ruleDiv", "py-3");
//   ruleDiv.innerHTML = `<div class="" id="addRule">
//   <div
//     class="px-4 py-4 background overflow-hidden rounded-3"
//   >
//     <div
//       class="d-flex justify-content-between p-2 border-m rule bg-light"
//     >
//       <div class="py-2 d-flex">
//         <div>
//           <select class="selectpicker" name="" id="">
//             <option value="">ADD</option>
//             <option value="">Include</option>
//             <option value="">Exclude</option>
//           </select>
//         </div>
//         <div class="w-auto">
//           <input type="checkbox" name="" />
//           <label class="fs-6"> Nested</label>
//         </div>
//       </div>
//       <div class="d-flex gap-2">
//         <button id="add-condition-btn">
//           <i class="fa-solid fa-plus"></i> Add Condition</button
//         ><button id="add-rule-btn">
//           <i class="fa-solid fa-plus"></i> Add Rule
//         </button>
//       </div>
//     </div>
//     <!-- Condition -->
//     <div id="addCondition">
//       <div
//         class="d-flex justify-content-between align-items-center"
//       >
//         <div class="py-3 d-flex gap-3">
//           <select class="selectpicker" name="" id="">
//             <option value="">ADD</option>
//             <option value="">Include</option>
//             <option value="">Exclude</option>
//           </select>
//           <select class="selectpicker" name="" id="">
//             <option value="">ADD</option>
//             <option value="">Include</option>
//             <option value="">Exclude</option></select
//           ><select class="selectpicker" name="" id="">
//             <option value="">ADD</option>
//             <option value="">Include</option>
//             <option value="">Exclude</option>
//           </select>
//         </div>
//         <div>
//           <i class="fa-solid fa-trash text-purple"></i>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>`;
//   button.preventDefault();
//   // document.getElementById("addRule").appendChild(ruleDiv);
//   button.closest(".group").querySelector(".p-3").appendChild(ruleDiv);
// }

// function addCondition(button) {
//   button.preventDefault();
//   conditionCounter++;
//   let conditionDiv = document.createElement("div");
//   conditionDiv.classList.add("condition");
//   conditionDiv.innerHTML = `
//   <div id="addCondition">
//   <div
//     class="d-flex justify-content-between align-items-center"
//   >
//     <div class="py-3 d-flex gap-3">
//       <select class="selectpicker" name="" id="">
//         <option value="">ADD</option>
//         <option value="">Include</option>
//         <option value="">Exclude</option>
//       </select>
//       <select class="selectpicker" name="" id="">
//         <option value="">ADD</option>
//         <option value="">Include</option>
//         <option value="">Exclude</option></select
//       ><select class="selectpicker" name="" id="">
//         <option value="">ADD</option>
//         <option value="">Include</option>
//         <option value="">Exclude</option>
//       </select>
//     </div>
//     <div>
//       <i class="fa-solid fa-trash text-purple"></i>
//     </div>
//   </div>
// </div>`;
//   button.preventDefault();
//   // document.getElementById("addCondition").appendChild(conditionDiv);
//   button.closest(".rule").appendChild(conditionDiv);
// }

function addRule(ruleDiv) {
  const ruleBox = document.createElement("div");
  ruleBox.classList.add("rule-box");

  const ruleHeadingDiv = document.createElement("div");
  ruleHeadingDiv.classList.add("rule-heading");
  ruleHeadingDiv.textContent = "Rule Heading";

  // let ruleMainDiv = document.createElement("div");
  // ruleMainDiv.classList.add("ruleDiv", "py-3");
  // ruleMainDiv.innerHTML = `<div class="" id="addRule">
  //   <div
  //     class="px-4 py-4 background overflow-hidden rounded-3"
  //   >
  //     <div
  //       class="d-flex justify-content-between p-2 border-m rule bg-light"
  //     >
  //       <div class="py-2 d-flex">
  //         <div>
  //           <select class="selectpicker" name="" id="">
  //             <option value="">ADD</option>
  //             <option value="">Include</option>
  //             <option value="">Exclude</option>
  //           </select>
  //         </div>
  //         <div class="w-auto">
  //           <input type="checkbox" name="" />
  //           <label class="fs-6"> Nested</label>
  //         </div>
  //       </div>
  //       <div class="d-flex gap-2">
  //         <button id="add-condition-btn" type="button">
  //           <i class="fa-solid fa-plus"></i> Add Condition</button
  //         ><button id="add-rule-btn" onclick="addRule(ruleBox)" type="button">
  //           <i class="fa-solid fa-plus"></i> Add Rule
  //         </button>
  //       </div>
  //     </div>
  //     <!-- Condition -->
  //     <div id="addCondition">
  //       <div
  //         class="d-flex justify-content-between align-items-center"
  //       >
  //         <div class="py-3 d-flex gap-3">
  //           <select class="selectpicker" name="" id="">
  //             <option value="">ADD</option>
  //             <option value="">Include</option>
  //             <option value="">Exclude</option>
  //           </select>
  //           <select class="selectpicker" name="" id="">
  //             <option value="">ADD</option>
  //             <option value="">Include</option>
  //             <option value="">Exclude</option></select
  //           ><select class="selectpicker" name="" id="">
  //             <option value="">ADD</option>
  //             <option value="">Include</option>
  //             <option value="">Exclude</option>
  //           </select>
  //         </div>
  //         <div>
  //           <i class="fa-solid fa-trash text-purple"></i>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </div>`;

  const removeRuleButton = createButton("Remove Rule", () =>
    ruleDiv.removeChild(ruleBox)
  );

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
    "bg-light"
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
  addConditionButton.addEventListener("click", () => addCondition(ruleBox));

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

  ruleBox.appendChild(ruleMainDiv);

  ruleBox.appendChild(addRuleButton);
  ruleBox.appendChild(addConditionButton);
  ruleBox.appendChild(removeRuleButton);
  ruleBox.appendChild(conditionsPlaceholder);

  ruleDiv.appendChild(ruleBox);
}

function addCondition(ruleDiv) {
  const conditionDiv = document.createElement("div");
  conditionDiv.classList.add("condition");
  conditionDiv.textContent = "Condition Text";

  ruleDiv.querySelector(".conditions-placeholder").appendChild(conditionDiv);
}

function createButton(text, onClick) {
  const button = document.createElement("button");
  button.setAttribute("type", "button");
  button.textContent = text;
  button.addEventListener("click", onClick);
  return button;
}

const container = document.getElementById("container-group");
const addGroupButton = document.getElementById("add-group-btn");

addGroupButton.addEventListener("click", () => {
  const groupDiv = document.createElement("div");
  groupDiv.classList.add("group");

  groupDiv.innerHTML = `<div id="addGroup">
    <div class="bg-light rounded-3 overflow-hidden mb-3">
      <div class="group p-3 bg-light">
        <div
          class="py-1 d-flex align-items-center justify-content-between border-m"
        >
          <span class="text-purple fw-bold">Group 1</span>
          <i class="fa-solid fa-trash text-purple"></i>
        </div>
        <!-- Rule Box -->
        
    </div>
  </div>`;

  const group = document.getElementsByClassName("addGroup");

  // const addRuleButton = createButton("Add Rule", () => addRule(groupDiv));
  // const addConditionButton = createButton("Add Condition", () =>
  //   addCondition(groupDiv)
  // );

  // groupDiv.appendChild(addConditionButton);

  container.appendChild(groupDiv);
  // group.appendChild(addRule(groupDiv));
  const ruleDivv = document.createElement("div");
  ruleDivv.classList.add("rule");
  const rule = addRule(groupDiv);
  ruleDivv.appendChild(rule);
  console.log(groupDiv);
});

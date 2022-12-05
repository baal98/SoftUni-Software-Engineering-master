

//write the solve function
function solve() {
    //get the elements
    const form = document.querySelector("form");
    const formBtn = document.querySelector("#form-btn");
    const previewList = document.querySelector("#preview-list");
    const main = document.querySelector("#main");
    const firstName = document.querySelector("#first-name");
    const lastName = document.querySelector("#last-name");
    const age = document.querySelector("#age");
    const storyTitle = document.querySelector("#story-title");
    const genre = document.querySelector("#genre");
    const story = document.querySelector("#story");
  
    //add event listeners
    formBtn.addEventListener("click", publish);
    previewList.addEventListener("click", edit);
  
    function publish(e) {
      e.preventDefault();
      //check if all fields are filled
      if (
        firstName.value !== "" &&
        lastName.value !== "" &&
        age.value !== "" &&
        storyTitle.value !== "" &&
        genre.value !== "" &&
        story.value !== ""
      ) {
        //create the elements
        const li = document.createElement("li");
        li.classList.add("story-info");
        const article = document.createElement("article");
        const h4 = document.createElement("h4");
        h4.textContent = `Name: ${firstName.value} ${lastName.value}`;
        const p1 = document.createElement("p");
        p1.textContent = `Age: ${age.value}`;
        const p2 = document.createElement("p");
        p2.textContent = `Title: ${storyTitle.value}`;
        const p3 = document.createElement("p");
        p3.textContent = `Genre: ${genre.value}`;
        const p4 = document.createElement("p");
        p4.textContent = story.value;
        const saveBtn = document.createElement("button");
        saveBtn.classList.add("save-btn");
        saveBtn.textContent = "Save Story";
        const editBtn = document.createElement("button");
        editBtn.classList.add("edit-btn");
        editBtn.textContent = "Edit Story";
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.textContent = "Delete Story";
  
        //append the elements
        article.appendChild(h4);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(p3);
        article.appendChild(p4);
        li.appendChild(article);
        li.appendChild(saveBtn);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        previewList.appendChild(li);
  
        //clear the form
        form.reset();
        formBtn.disabled = true;
      }
    }
    function edit(e) {
      e.preventDefault();
      if (e.target.classList.contains("save-btn")) {
        e.target.parentElement.remove();
      } else if (e.target.classList.contains("edit-btn")) {
        const article = e.target.parentElement.querySelector("article");
        const h4 = article.querySelector("h4");
        const p1 = article.querySelector("p");
        const p2 = p1.nextElementSibling;
        const p3 = p2.nextElementSibling;
        const p4 = p3.nextElementSibling;
        firstName.value = h4.textContent.split(" ")[1];
        lastName.value = h4.textContent.split(" ")[2];
        age.value = p1.textContent.split(" ")[1];
        storyTitle.value = p2.textContent.split(" ")[1];
        genre.value = p3.textContent.split(" ")[1];
        story.value = p4.textContent;
        e.target.parentElement.remove();
      } else if (e.target.classList.contains("delete-btn")) {
        e.target.parentElement.remove();
      }
    }
  }
  
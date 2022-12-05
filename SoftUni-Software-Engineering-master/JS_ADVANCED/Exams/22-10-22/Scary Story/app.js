window.addEventListener("load", solve);

function solve() {
  let formBtn = document.getElementById("form-btn");
  let previewList = document.getElementById("preview-list");
  let saveBtn = document.getElementsByClassName("save-btn");
  let editBtn = document.getElementsByClassName("edit-btn");
  let deleteBtn = document.getElementsByClassName("delete-btn");
  let main = document.getElementById("main");

  formBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let age = document.getElementById("age").value;
    let storyTitle = document.getElementById("story-title").value;
    let genre = document.getElementById("genre").value;
    let story = document.getElementById("story").value;

    function IsNullOrWhiteSpace(value) {

      if (value == null) return true;

      return value.replace(/\s/g, '').length == 0;
    }
    if (!IsNullOrWhiteSpace(firstName)
      && !IsNullOrWhiteSpace(lastName)
      && !IsNullOrWhiteSpace(age)
      && !IsNullOrWhiteSpace(storyTitle)
      && !IsNullOrWhiteSpace(genre)
      && !IsNullOrWhiteSpace(story)
    // if (
    //   firstName.trim() !== "" &&
    //   lastName.trim() !== "" &&
    //   age.trim() !== "" &&
    //   storyTitle.trim() !== "" &&
    //   story.trim() !== ""
    ) {
      let li = document.createElement("li");
      li.classList.add("story-info");
      let article = document.createElement("article");
      let h4 = document.createElement("h4");
      h4.textContent = `Name: ${firstName} ${lastName}`;
      let p1 = document.createElement("p");
      p1.textContent = `Age: ${age}`;
      let p2 = document.createElement("p");
      p2.textContent = `Title: ${storyTitle}`;
      let p3 = document.createElement("p");
      p3.textContent = `Genre: ${genre}`;
      let p4 = document.createElement("p");
      p4.textContent = story;

      article.appendChild(h4);
      article.appendChild(p1);
      article.appendChild(p2);
      article.appendChild(p3);
      article.appendChild(p4);

      let saveBtn = document.createElement("button");
      saveBtn.classList.add("save-btn");
      saveBtn.textContent = "Save Story";

      let editBtn = document.createElement("button");
      editBtn.classList.add("edit-btn");
      editBtn.textContent = "Edit Story";

      let deleteBtn = document.createElement("button");
      deleteBtn.classList.add("delete-btn");
      deleteBtn.textContent = "Delete Story";

      li.appendChild(article);
      li.appendChild(saveBtn);
      li.appendChild(editBtn);
      li.appendChild(deleteBtn);

      previewList.appendChild(li);

      document.getElementById("first-name").value = "";
      document.getElementById("last-name").value = "";
      document.getElementById("age").value = "";
      document.getElementById("story-title").value = "";
      document.getElementById("genre").value = "";
      document.getElementById("story").value = "";

      formBtn.disabled = true;
    }
  });

  previewList.addEventListener("click", (e) => {
    if (e.target.className === "save-btn") {
      // main.innerHTML = "";
      while (main.firstChild) {
        main.removeChild(main.firstChild);
      }
      let h1 = document.createElement("h1");
      h1.textContent = "Your scary story is saved!";
      main.appendChild(h1);
    } else if (e.target.className === "edit-btn") {
      let article = e.target.parentNode.querySelector("article");
      let h4 = article.querySelector("h4");
      let p1 = article.querySelector("p");
      let p2 = article.querySelectorAll("p")[1];
      let p3 = article.querySelectorAll("p")[2];
      let p4 = article.querySelectorAll("p")[3];

      let firstName = h4.textContent.split(" ")[1];
      let lastName = h4.textContent.split(" ")[2];
      let age = p1.textContent.split(" ")[1];
      let storyTitle = p2.textContent.split(" ")[1];
      let genre = p3.textContent.split(" ")[1];
      let story = p4.textContent;

      document.getElementById("first-name").value = firstName;
      document.getElementById("last-name").value = lastName;
      document.getElementById("age").value = age;
      document.getElementById("story-title").value = storyTitle;
      document.getElementById("genre").value = genre;
      document.getElementById("story").value = story;

      e.target.parentNode.remove();
      formBtn.disabled = false;
    } else if (e.target.className === "delete-btn") {
      e.target.parentNode.remove();
      formBtn.disabled = false;
    }
  });
}

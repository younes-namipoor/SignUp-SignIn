const click1 = document.querySelector(".click1");
const formb = document.querySelector(".formb");
const signup = document.querySelector(".signup");
const form1 = document.querySelector(".form1");
const form2 = document.querySelector(".form2");
const form3 = document.querySelector(".form3");
const inp = document.querySelectorAll(".formb>input");
const arrow = document.querySelector(".bi-arrow-left-short");
const footer = document.querySelector("#footer");
const main = document.querySelector("main");
const fig = document.querySelector("#fig");
const addu1 = document.querySelector(".addu1");
const tabl = document.querySelectorAll(".tabl");
const not = document.querySelector(".not");
const edit = document.querySelector(".inputedit");

click1.addEventListener("click", () => {
  formb.style.width = "420" + "px";
  signup.style.display = "none";
  formb.style.overflow = "none";
  form1.style.width = "420" + "px";
  form1.style.height = "590" + "px";
  formb.style.transition = "1" + "s";
});
arrow.addEventListener("click", () => {
  formb.style.width = "0" + "px";
  signup.style.display = "flex";
  formb.style.overflow = "hidden";
  form1.style.width = "420" + "px";
  form1.style.height = "400" + "px";
  formb.style.transition = "0" + "s";
});

addu1.addEventListener("click", () => {
  const url = new URL("https://6748b0955801f5153591dd86.mockapi.io/myProject");
  url.searchParams.append("email", inp[0].value);
  url.searchParams.append("password", inp[1].value);
  fetch(url, {
    method: "GET",
    headers: { "content-type": "application/json" },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((tasks) => {
      if (tasks == undefined) {
        not.innerText = "the email or password is not correct please try again";
      } else {
        if (tasks[0].user == "user") {
          form1.style.display = "none";
          form2.style.display = "flex";
          tabl[0].innerHTML = `<img src="${tasks[0].image}">`;
          tabl[1].innerHTML = tasks[0].user + tasks.id;
          tabl[2].innerHTML = tasks[0].Name;
          tabl[3].innerHTML = tasks[0].LastName;
          tabl[4].innerHTML = tasks[0].email;
          tabl[5].innerHTML = tasks[0].password;
          tabl[6].innerHTML = tasks[0].age;
          tabl[8].innerHTML = `<button class="btn" onclick="myedit2(${tasks[0].id})">edit </button>`;
          tabl[8].style.display = "none";
        } else {
          form1.style.display = "none";
          form3.style.display = "block";
          main.classList.add("add6");
          superAdmin();
        }
      }
    })
    .catch((error) => {});
});

footer.addEventListener("click", () => {
  fig.classList.toggle("high");
});

function superAdmin() {
  fetch("https://6748b0955801f5153591dd86.mockapi.io/myProject", {
    method: "GET",
    headers: { "content-type": "application/json" },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((res) => {
      res.map((val, i) => {
        let temp = document.createElement("div");
        temp.innerHTML = `
            <span>${val.id}</span>
            <span><img src="${val.image}"></span>
            <span>${val.Name}</span>
            <span>${val.LastName}</span>
            <span>${val.email}</span>
            <span>${val.password}</span>
            <span>${val.age}</span>
            <button onclick="myDelete(${val.id})">Delete</button>
          
      
      `;
        form3.appendChild(temp);
      });
    })
    .catch((error) => {});
}

function myDelete(i) {
  form3.innerHTML = "";
  fetch("https://6748b0955801f5153591dd86.mockapi.io/myProject/" + i, {
    method: "DELETE",
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((tasks) => {
      console.log(tasks);
      superAdmin();
    })
    .catch((error) => {});
}

function myedit(i) {
  edit.style.display = "block";
  tabl[8].style.display = "block";
}

function myedit2(i) {
  fetch("https://6748b0955801f5153591dd86.mockapi.io/myProject/" + i, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ password: edit.value }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((task) => {
      console.log(task);

      location.reload();
    })
    .catch((error) => {});
}

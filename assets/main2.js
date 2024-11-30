const click1 = document.querySelector(".click1");
const formb = document.querySelector(".formb");
const signup = document.querySelector(".signup");
const form1 = document.querySelector(".form1");
const inp = document.querySelectorAll(".formb>input");
const arrow = document.querySelector(".bi-arrow-left-short");
const check = document.querySelectorAll(".bi-check2");
const span = document.querySelectorAll(".formb>span");
const addu = document.querySelector(".addu");
const footer = document.querySelector("#footer");
const fig = document.querySelector("#fig");
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

inp.forEach((val, i) => {
  inp[0].addEventListener("input", (e) => {
    valInp = inp[0].value;
    if (valInp.search(/^[a-zA-Z0-9]/) >= 0) {
      if (valInp.search(/[ا-ی]/) >= 0) {
        e.target.value = e.target.value.slice(0, e.target.value.length - 1);
      }

      if (valInp.length >= 3) {
        inp[0].classList.add("add1");
        inp[0].classList.remove("add4");
        check[0].style.opacity = "1";
        span[0].innerHTML = "Invalid UserName";
        span[0].classList.add("add2");
      } else if (valInp.length <= 3) {
        inp[0].classList.remove("add1");
        inp[0].classList.add("add4");
        check[0].style.opacity = "0";
        span[0].innerHTML = "Not Invalid UserName";
        span[0].classList.add("add3");
        span[0].classList.remove("add2");
      }
      console.log(valInp.length);

      if (valInp.length == 1) {
        inp[0].classList.remove("add4");
        span[0].innerHTML = "";
        span[0].classList.remove("add3");
      }
    } else {
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    }
  });
  inp[1].addEventListener("input", (e) => {
    valInp = inp[1].value;
    if (valInp.search(/^[a-zA-Z0-9]/) >= 0) {
      if (valInp.search(/[ا-ی]/) >= 0) {
        e.target.value = e.target.value.slice(0, e.target.value.length - 1);
      }

      if (valInp.length >= 3) {
        inp[1].classList.add("add1");
        inp[1].classList.remove("add4");
        check[1].style.opacity = "1";
        span[1].innerHTML = "Invalid UserName";
        span[1].classList.add("add2");
      } else if (valInp.length <= 3) {
        inp[1].classList.remove("add1");
        inp[1].classList.add("add4");
        check[1].style.opacity = "0";
        span[1].innerHTML = "Not Invalid UserName";
        span[1].classList.add("add3");
        span[1].classList.remove("add2");
      }

      if (valInp.length == 1) {
        inp[1].classList.remove("add4");
        span[1].innerHTML = "";
        span[1].classList.remove("add3");
      }
    } else {
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    }
  });
  inp[2].addEventListener("input", (e) => {
    valInp = inp[2].value;
    if (valInp.search(/^[a-zA-Z0-9@._-]/) >= 0) {
      if (valInp.search(/[ا-ی]/) >= 0) {
        e.target.value = e.target.value.slice(0, e.target.value.length - 1);
      }

      if (
        valInp.search(/[@]/) >= 0 &&
        valInp.search(/[.]/) >= 0 &&
        valInp.search(/[Com]/) >= 0
      ) {
        inp[2].classList.add("add1");
        inp[2].classList.remove("add4");
        check[2].style.opacity = "1";
        span[2].innerHTML = "Invalid UserName";
        span[2].classList.add("add2");
      } else if (valInp.search(/[.]/) <= 0) {
        inp[2].classList.remove("add1");
        inp[2].classList.add("add4");
        check[2].style.opacity = "0";
        span[2].innerHTML = "Not Invalid UserName";
        span[2].classList.add("add3");
        span[2].classList.remove("add2");
      }

      if (valInp.length == 1) {
        inp[2].classList.remove("add4");
        span[2].innerHTML = "";
        span[2].classList.remove("add3");
      }
    } else {
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    }
  });
  inp[3].addEventListener("input", (e) => {
    valInp = inp[3].value;
    if (valInp.search(/^[a-zA-Z0-9]/) >= 0) {
      console.log(inp);

      if (valInp.search(/[ا-ی]/) >= 0) {
        e.target.value = e.target.value.slice(0, e.target.value.length - 1);
      }

      if (
        valInp.search(/[A-Z]/) >= 0 &&
        valInp.search(/[0-9]/) >= 0 &&
        valInp.search(/[!@#$%^&*]/) >= 0 &&
        valInp.length >= 8
      ) {
        inp[3].classList.add("add1");
        inp[3].classList.remove("add4");
        check[3].style.opacity = "1";
        span[3].innerHTML = "Invalid UserName";
        span[3].classList.add("add2");
      } else if (
        valInp.search(/[A-Z]/) <= 0 &&
        valInp.search(/[0-9]/) <= 0 &&
        valInp.search(/[!@#$%^&*]/) <= 0 &&
        valInp.length <= 8
      ) {
        inp[3].classList.remove("add1");
        inp[3].classList.add("add4");
        check[3].style.opacity = "0";
        span[3].innerHTML = "a-x  <br>A-Z / !@#$%*& / 0-9 / 8 Word";
        span[3].classList.add("add3");
        span[3].classList.remove("add2");
      }

      if (valInp.length == 1) {
        inp[3].classList.remove("add4");
        span[3].innerHTML = "";
        span[3].classList.remove("add3");
      }
    } else {
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    }
  });
  inp[4].addEventListener("input", (e) => {
    valInp = inp[4].value;
    if (valInp.search(/^[a-zA-Z0-9]/) >= 0) {
      console.log(inp);

      if (valInp.search(/[ا-ی]/) >= 0) {
        e.target.value = e.target.value.slice(0, e.target.value.length - 1);
      }

      if (inp[4].value == inp[3].value) {
        inp[4].classList.add("add1");
        inp[4].classList.remove("add4");
        check[4].style.opacity = "1";
        span[4].innerHTML = "Invalid UserName";
        span[4].classList.add("add2");
      } else if (inp[4].value != inp[3].value) {
        inp[4].classList.remove("add1");
        inp[4].classList.add("add4");
        check[4].style.opacity = "0";
        span[4].innerHTML = "Not Invalid UserName";
        span[4].classList.add("add3");
        span[4].classList.remove("add2");
      }

      if (valInp.length == 1) {
        inp[4].classList.remove("add4");
        span[4].innerHTML = "";
        span[4].classList.remove("add3");
      }
    } else {
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    }
  });
  inp[5].addEventListener("input", (e) => {
    valInp = inp[5].value;

    if (valInp >= 18) {
      inp[5].classList.add("add1");
      inp[5].classList.remove("add4");
      check[5].style.opacity = "1";
      span[5].innerHTML = "Invalid UserName";
      span[5].classList.add("add2");
    } else if (valInp <= 18) {
      inp[5].classList.remove("add1");
      inp[5].classList.add("add4");
      check[5].style.opacity = "0";
      span[5].innerHTML = "Not Invalid UserName";
      span[5].classList.add("add3");
      span[5].classList.remove("add2");
    }

    if (valInp.length == 0) {
      inp[5].classList.remove("add4");
      span[5].innerHTML = "";
      span[5].classList.remove("add3");
    }
  });
});

addu.addEventListener("click", () => {
  let Name = inp[0].value;
  let LastName = inp[1].value;
  let email = inp[2].value;
  let password = inp[3].value;
  let age = inp[5].value;
  let user = "user";
  const setData = {
    LastName,
    email,
    password,
    age,
    Name,
    user,
  };

  const url = new URL("https://6748b0955801f5153591dd86.mockapi.io/myProject");
  url.searchParams.append("email", email);
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
      console.log(tasks);
      if (tasks == undefined || tasks.length == []) {
        const newTask = {
          content: "Check out mockapi.io",
          completed: false,
        };

        fetch("https://6748b0955801f5153591dd86.mockapi.io/myProject", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(setData),
        })
          .then((res) => {
            if (res.ok) {
              return res.json();
            }
          })
          .then((task) => {
            inp.forEach((val, i) => {
              val.value = null;
              check[i].style.opacity = "0";
              inp[i].classList.remove("add1");
              span[i].innerHTML = "";
            });
            inp[0].focus();
          })
          .catch((error) => {});
      } else {
        inp[2].classList.add("add4");
        span[2].innerHTML = "this email already exist";
        span[2].classList.add("add5");
        check[2].style.opacity = "0";
      }
    })
    .catch((error) => {});
});

footer.addEventListener("click", () => {
  fig.classList.toggle("high");
});

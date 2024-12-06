const form = document.querySelector("form");
const success = document.querySelector("#success");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  success.style.display = "block";
  console.log(data);
});

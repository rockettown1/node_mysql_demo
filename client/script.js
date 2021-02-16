const num = document.getElementById("number");
const form = document.getElementById("signup");
const input = document.getElementById("email");
const message = document.getElementById("message");

const getTotalUsers = async () => {
  const response = await fetch("http://localhost:3002/total");
  const data = await response.json();
  console.log(data);
  num.textContent = data.totalUsers;
};

getTotalUsers();

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (input.value) {
    const response = await fetch("http://localhost:3002/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: input.value,
      }),
    });
    const data = await response.json();
    message.textContent = data.message;
    input.value = "";
    getTotalUsers();
  } else {
    message.textContent = "Please enter an email";
  }
});

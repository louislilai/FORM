document.getElementById("openBtn").addEventListener("click", function () {
    document.querySelector(".sidebar").style.width = "250px";
});

document.getElementById("closeBtn").addEventListener("click", function () {
    document.querySelector(".sidebar").style.width = "0";
});

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    // Add your login logic here 
    alert("Login successful!"); // Replace with your actual login code
});

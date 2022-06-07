function toggleUserMenu() {
    var userMenuButton = document.getElementById("menu-list");
    userMenuButton.classList.toggle("hidden");
}

function validatePassword() {
    var form = document.getElementById("login-form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
    });
    var password = document.getElementById("password");
    var lowercase = /[a-z]/;
    var uppercase = /[A-Z]/;
    var specialcase = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    var containLowercase = lowercase.test(password.value);
    var containUppercase = uppercase.test(password.value);
    var containSpecialcase = specialcase.test(password.value);
    if (!containLowercase) {
        document.getElementById("password-error").innerHTML = "Password must contain at least one lowercase letter";
    }
    if (!containUppercase) {
        document.getElementById("password-error").innerHTML = "Password must contain at least one uppercase letter";
    }
    if (!containSpecialcase) {
        document.getElementById("password-error").innerHTML = "Password must contain at least one special character";
    }
    if (!containLowercase && !containUppercase) {
        document.getElementById("password-error").innerHTML = "Password must contain at least one lowercase letter and one uppercase letter";
    }
    if (!containLowercase && !containSpecialcase) {
        document.getElementById("password-error").innerHTML = "Password must contain at least one lowercase letter and one special character";
    }
    if (!containUppercase && !containSpecialcase) {
        document.getElementById("password-error").innerHTML = "Password must contain at least one uppercase letter and one special character";
    }
    if (!containLowercase && !containUppercase && !containSpecialcase) {
        document.getElementById("password-error").innerHTML = "Password must contain at least one lowercase letter, one uppercase letter and one special character";
    }
    if (containLowercase && containUppercase && containSpecialcase) {
        document.getElementById("password-error").innerHTML = "";
        var username = getUsername();
        location.replace("/employeeLoginPortal/success.html?data=" + username);
    }
}

function getUsername() {
    var username = document.getElementById("username");
    return username.value;
}

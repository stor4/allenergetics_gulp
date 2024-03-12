const label = document.querySelector(".register2__upload-label")
const nicknameInput = document.getElementById("nicknameInput");
const tickIcon = document.querySelector(".register2__nickname-tick");
const btn = document.getElementById("btn")

function setBackgroundImage(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            label.style.backgroundImage = "url('" + e.target.result + "')";
        };

        reader.readAsDataURL(input.files[0]);
    }
}

function checkNicknameLength() {
    if (nicknameInput.value.length >= 3) {
        tickIcon.style.display = "block";
        btn.classList = 'register2__btn2 btn-big register2__btn-hover'
        btn.disabled = true

    } else {
        tickIcon.style.display = "none";
        btn.classList = 'register2__btn2 btn-big-disabled'
        btn.disabled = false
    }
}

window.setBackgroundImage = setBackgroundImage
window.checkNicknameLength = checkNicknameLength
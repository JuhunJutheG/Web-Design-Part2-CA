"use strict";

// HTML öğelerini seç
const usercollage = document.querySelector(".usercollage");
const usercomment = document.querySelector(".usercomment");
const publishBtn = document.querySelector("#publish");
const comments = document.querySelector(".comments");
const commentCount = document.querySelector("#Comment");
const usernameInput = document.querySelector(".user"); // Kullanıcı adı alanı

// Yorum kutusu ve kolej seçim kontrolü
usercomment.addEventListener("input", () => {
    togglePublishButton();
});
usercollage.addEventListener("change", () => {
    togglePublishButton();
});

// Butonun durumunu kontrol eden fonksiyon
function togglePublishButton() {
    if (!usercomment.value.trim() || usercollage.value === "") {
        publishBtn.setAttribute("disabled", "disabled");
        publishBtn.classList.remove("abled");
    } else {
        publishBtn.removeAttribute("disabled");
        publishBtn.classList.add("abled");
    }
}

// Publish butonuna basıldığında işlem
publishBtn.addEventListener("click", () => {
    const commentText = usercomment.value.trim();
    const selectedCollage = usercollage.value;
    const username = usernameInput.value.trim() || "Anonymous";

    if (commentText && selectedCollage) {
        // Yorum divini oluştur
        const newComment = document.createElement("div");
        newComment.classList.add("comment");

        // Kolej adı
        const collageName = document.createElement("div");
        collageName.textContent = selectedCollage;
        collageName.classList.add("collage-name");

        // Kullanıcı adı ve yorumu
        const userAndComment = document.createElement("div");
        userAndComment.textContent = `${username} : ${commentText}`;
        userAndComment.classList.add("user-comment");

        // Öğeleri birleştir ve DOM'a ekle
        newComment.appendChild(collageName);
        newComment.appendChild(userAndComment);
        comments.appendChild(newComment);

        // Yorum kutusunu ve kolej seçimini sıfırla
        usercomment.value = "";
        usercollage.value = "";
        togglePublishButton();

        // Yorum sayısını güncelle
        commentCount.textContent = parseInt(commentCount.textContent) + 1;
    }
});

$(document).ready(function () {
            // Show butonuna tıklandığında sadece ilgili karttaki <p> öğesini göster
            $(".show-btn").click(function () {
                $(this).closest(".card-body").find("p").show();
            });

            // Hide butonuna tıklandığında sadece ilgili karttaki <p> öğesini gizle
            $(".hide-btn").click(function () {
                $(this).closest(".card-body").find("p.card-text").hide();
            });
            $(".card-text").html(function (_, html) {
                return html.replace("Anonymous", "<b>Anonymous</b>");
            });
        });
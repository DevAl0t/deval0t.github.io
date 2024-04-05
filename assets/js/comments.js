function commentProfileName(){

    if(!document.querySelector(".kroes-user-message")){
        return;
    }

    const userMessages = document.querySelectorAll(".kroes-user-message");

    userMessages.forEach(userMessage => {

        const messageWords = userMessage.textContent.trim().split(" ");
        const lastWord = messageWords[messageWords.length - 1];
        const firstLetterOfLastWord = lastWord.charAt(0);

        userMessage.previousElementSibling.innerHTML = firstLetterOfLastWord

    });

}
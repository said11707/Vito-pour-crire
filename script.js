const texts = document.querySelector(".texts");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");

recognition.addEventListener("result", (e) => {
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  p.innerText = text;
  if (e.results[0].isFinal) {
    if (
        text.includes("Bonjour")||
        text.includes("Vito")
      ) {
        p = document.createElement("p");
        p.classList.add("replay");
        p.innerText = "Bonjour Chef";
        texts.appendChild(p);
      }
    if (
      text.includes("comment ça va")||
      text.includes("ça va") ||
      text.includes("ça roule") 
    ) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Super Chef";
      texts.appendChild(p);
    }
    if (
      text.includes("what's your name") ||
      text.includes("what is your name") ||
      text.includes("comment tu t'appelles")
    ) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "My Name is Vito my creator is El ghazzali said ";
      texts.appendChild(p);
    }
    if (text.includes("music")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "ok Chef";
      texts.appendChild(p);
      console.log("youtube");
      window.open("https://www.youtube.com/watch?v=f4FmAPuaRCY");
    }
    p = document.createElement("p");
  }
});

recognition.addEventListener("end", () => {
  recognition.start();
});

recognition.start();

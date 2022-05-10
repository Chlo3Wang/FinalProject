// When the user scrolls the page, execute myFunction
window.onscroll = function() {
  myFunction()
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
}


let executeButton;
let outputParagraph;
let outputDiv;
let inputElement;
let executeButton2;
let outputParagraph2;
let outputDiv2;
let inputElement2;
let randomThing = ["— did't tag people", "— no cool caption", "— camera beauty off", "— always staying inside", "— post fast food pics"]


window.addEventListener('DOMContentLoaded', function() {
  outputAction1 = document.getElementById("action1");


  executeButton = document.getElementById("button1");
  outputParagraph = document.getElementById("outputText1");
  outputDiv = document.getElementById("welcomeMessage");
  inputElement = document.getElementById("name-input");
  executeButton.addEventListener("click", input);

  executeButton1 = document.getElementById("rate1");
  inputElement1 = document.getElementById("number-input1");
  showContinue1 = document.getElementsByClassName("continue")
  executeButton1.addEventListener("click", input1);

  executeButton2 = document.getElementById("rate2");
  inputElement2 = document.getElementById("number-input2");
  showContinue2 = document.getElementsByClassName("continue2")
  executeButton2.addEventListener("click", input2);

  executeButton3 = document.getElementById("rate3");
  inputElement3 = document.getElementById("number-input3");
  showContinue3 = document.getElementsByClassName("continue3")
  executeButton3.addEventListener("click", input3);

  executeButton31.addEventListener("click", input31);

  executeButton4 = document.getElementById("rate4");
  inputElement4 = document.getElementById("number-input4");
  showContinue4 = document.getElementsByClassName("continue4")
  executeButton4.addEventListener("click", input4);

  executeButton5 = document.getElementById("rate5");
  inputElement5 = document.getElementById("number-input5");
  showContinue5 = document.getElementsByClassName("continue5")
  executeButton5.addEventListener("click", input5);

  executeButton6 = document.getElementById("rate6");
  inputElement6 = document.getElementById("number-input6");
  showContinue6 = document.getElementsByClassName("continue6");

  endOutput = document.getElementById("finalscoreoutputText");
  executeButton6.addEventListener("click", input6);
})

let currentRate1;
let currentRate2;
let currentRate3;
let currentRate4;
let currentRate5;
let currentRate6;
let currentInputText4;
let currentInputText5;

function input() {
  let currentInputText = inputElement.value;
  let hi = "Hi "
  let rating = "there";
  let message1 = ", welcome to explore more possible ways of living here";
  let message2 = ", but rememer to like(1) or not(2) each post, just to let people know you care!";

  outputDiv.style.fontFamily = "CMedium";

  outputParagraph.innerText = hi + currentInputText + message1 + rating + message2;

}

function input1() {
  let currentInputText1 = inputElement1.value;
  var theirRating1;

  document.getElementById("continue").style.display = "block";
}

function input2() {
  let currentInputText2 = inputElement2.value;
  var theirRating2;

  document.getElementById("continue2").style.display = "block";


}

function input3() {
  let currentInputText3 = inputElement3.value;
  var theirRating3;


  document.getElementById("continue3").style.display = "block";
}



function input4() {
  let currentInputText4 = inputElement4.value;
  var theirRating4;


  document.getElementById("continue4").style.display = "block";

}

function input5() {
  let currentInputText5 = inputElement5.value;
  var theirRating5;


  document.getElementById("continue5").style.display = "block";
}

function input6() {
  let currentInputText6 = inputElement6.value;
  var theirRating6;


  outputParagraph6.innerText = theirRating6;
  theirRating6 = Math.floor(Math.random() * 10 + 90);
  document.getElementById("continue6").style.display = "block";
  console.log(theirRating6);

  endOutput.innerText = theirRating6;
}

/* PROF NOTE: This "observer" object we create with a special, new type of event listener
              that fires once the content has been scrolled into view.
              The "entries" represent anything that is listening using this observer.
              https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API */
let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log(entry);

      /* PROF NOTE: Getting the "h2"s inside your "info" box and enabling the animation */
      let infoH2s = info.querySelectorAll("h2");

      for (h2Elem of infoH2s) {
        console.log("Adding animation to:");
        console.log(h2Elem);
        /* PROF NOTE: Setting the individual animation properties EXCEPT for animation-delay,
                      which comes from your CSS */
        h2Elem.style.animationName = "blurFadeInOut";
        h2Elem.style.animationDuration = "3s";
        h2Elem.style.animationTimingFunction = "ease-in";
        h2Elem.style.animationFillMode = "backwards";

        /* PROF NOTE: Getting all of the spans inside your final "frame-5" element */
        let finalSpans = h2Elem.querySelectorAll("span");
        for (endSpanElem of finalSpans) {
          /* PROF NOTE: Setting the individual animation properties on the spans, EXCEPT the delay */
          endSpanElem.style.animationName = "blurFadeIn";
          endSpanElem.style.animationDuration = "3s";
          endSpanElem.style.animationTimingFunction = "ease-in";
          endSpanElem.style.animationFillMode = "forwards";
        }
      }

      /* PROF NOTE: Remove the observer so we don't accidentally run it again */
      observer.unobserve(entry.target);
    }
  });
}, {
  rootMargin: "-50px" /* PROF NOTE: Wait until the info box is at least 50px into our viewport */
});

/* PROF NOTE: Telling the "observer" to observe your final "info" element– this is like a special kind of "Event listener" */
observer.observe(document.getElementById("info"));

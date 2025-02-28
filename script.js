// How does image fetch work?
//1. User Type a Keyword into the input box
//2. Keyword is associated with Specific images
//“orange” -> color
//“cat” > Specific type of animal
//3. user gets appropriate image based on keyword

// LOGIC FOR OUR PROGRAM
// 1. tag images with keyword
// store the tags and images inside an javascript object
// key: key words, value: image path url

// when user input a sentence about their mood, we recommend an image with the appropriate flower

var images = {
    happy:"main-image-1.jpg",

    sad: "https://cdn.glitch.global/c59f9ed7-bb27-436b-bf86-5997e75d99e1/depressed.webp?v=1740536025711",

    angry:
      "https://cdn.glitch.global/c59f9ed7-bb27-436b-bf86-5997e75d99e1/angry.jpg?v=1740536029799",
    excited:
      "https://cdn.glitch.global/c59f9ed7-bb27-436b-bf86-5997e75d99e1/excited.jpg?v=1740536024053",
    anxious:
      "https://cdn.glitch.global/c59f9ed7-bb27-436b-bf86-5997e75d99e1/calm.webp?v=1740536027318",
    calm: "",
    gloomy: "",
    melancholy: "",
    joyful: "",
    serene: "",
  };
  
  // LOGIC FOR OUR PROGRAM
  // 1. image url bank mapped to keywords (done)
  // 2. get user input from input box
  // 3. check and see if user's input contained any of the keys (keywords)
  // 4. if the user's input contains the keys(keyword), show them the associated image
  
  function fetchImageBasedOnUserInput() {
    // get the image element in my html
    var image = document.getElementById("result");
  
    // get user input from the text field
    var userInput = document.getElementById("userInput").value.toLowerCase();
    // check for key words
    //if user's input contains a keyword, set image url to the one corresponding to that keyword
    if (userInput.includes("happy")) {
      // set my image url to the url from my images js object
      image.src = images["happy"];
    } else if (userInput.includes("sad")) {
      image.src = images["sad"];
    } else if (userInput.includes("angry")) {
      // set image
    }
    // if user's sentence does not containing keyword
    else {
      window.alert("please use keyword sentence!");
    }
  }
  
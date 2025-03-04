// Image mapping object
var images = {
    intrigue: "main-image-1.jpg", 
    focus: "main-image-2.jpg", 
    sweetness: "main-image-3.jpg", 
    reminiscence: "main-image-4.jpg", 
    flirtiness: "main-image-6.jpg",
    intensity: "main-image-7.jpg",
    chill: "main-image-8.jpg",
    admiration: "main-image-9.jpg",
    awe: "main-image-10.jpg",
    drama: "main-image-11.jpg",
    warmth: "main-image-12.jpg",
    serenity: "main-image-13.jpg",
    respect: "main-image-14.jpg",
    melancholy: "main-image-15.jpg",
    togetherness: "main-image-16.jpg",
    elegance: "main-image-17.jpg",
    overflow: "main-image-18.jpg",
    dedication: "main-image-19.jpg",
    revelry: "main-image-20.jpg",
    energy: "main-image-21.jpg",
    tradition: "main-image-22.jpg",
    mystery: "main-image-23.jpg",
    cozy: "main-image-24.jpg",
    majesty: "main-image-25.jpg",
    uncertainty: "main-image-26.jpg",
    stillness: "main-image-27.jpg",

  };
  
  function fetchImageBasedOnUserInput() {
    var image = document.getElementById("result");  
    var userInput = document.getElementById("userInput").value.toLowerCase();
  
    if (userInput.includes("intrigue")) {
      image.src = images["intrigue"];
    } else if (userInput.includes("focus")) {
      image.src = images["focus"];
    } else if (userInput.includes("sweetness")) {
      image.src = images["sweetness"];
    } else if (userInput.includes("reminiscence")) {
      image.src = images["reminiscence"];
    } else if (userInput.includes("calm")) {
      image.src = images["calm"];
    } else if (userInput.includes("flirtiness")) {
        image.src = images["flirtiness"];
    } else if (userInput.includes("intensity")) {
        image.src = images["intensity"];
    } else if (userInput.includes("chill")) {
        image.src = images["chill"];
    } else if (userInput.includes("admiration")) {
        image.src = images["admiration"];
    } else if (userInput.includes("awe")) {
        image.src = images["awe"];
    } else if (userInput.includes("drama")) {
        image.src = images["drama"];
    } else if (userInput.includes("warmth")) {
        image.src = images["warmth"];
    } else if (userInput.includes("serenity")) {
        image.src = images["serenity"];
    } else if (userInput.includes("respect")) {
        image.src = images["respect"];
    } else if (userInput.includes("melancholy")) {
        image.src = images["melancholy"];
    } else if (userInput.includes("togetherness")) {
        image.src = images["togetherness"];
    } else if (userInput.includes("elegance")) {
        image.src = images["elegance"];
    } else if (userInput.includes("overflow")) {
        image.src = images["overflow"];
    } else if (userInput.includes("dedication")) {
        image.src = images["dedication"];
    } else if (userInput.includes("revelry")) {
        image.src = images["revelry"];
    } else if (userInput.includes("energy")) {
        image.src = images["energy"];
    } else if (userInput.includes("tradition")) {
        image.src = images["tradition"];
    } else if (userInput.includes("mystery")) {
        image.src = images["mystery"];
    } else if (userInput.includes("cozy")) {
        image.src = images["cozy"];
    } else if (userInput.includes("majesty")) {
        image.src = images["majesty"];
    } else if (userInput.includes("uncertainty")) {
        image.src = images["uncertainty"];
    } else if (userInput.includes("stillness")) {
        image.src = images["stillness"];
    } else {
      window.alert("Please use a keyword in your sentence!");
    }
  }
  
  // Function to adjust image size
  function adjustImageSize() {
    var image = document.getElementById("result");
   
    var slider = document.getElementById("myRange");
    
    var size = slider.value * 5; // Scale up the size
    console.log("slider value:", slider.value); 
    
    image.style.width = size + "px";
    image.style.height = "auto";
    document.body.style.backgroundColor = "red";
  }
  
  // Function to apply image filter
  function applyImageFilter() {
    var image = document.getElementById("result");
    var filterSelect = document.getElementById("filterSelect");
    var filterValue = filterSelect.value;
    
    if (filterValue === "grayscale") {
      image.style.filter = "grayscale(100%)";
    } else if (filterValue === "invert") {
      image.style.filter = "invert(100%)";
    } else if (filterValue === "sepia") {
      image.style.filter = "sepia(100%)";
    } else {
      image.style.filter = "none";
    }
  }
  
  // Attach event listeners
  document.getElementById("myRange").addEventListener("input", adjustImageSize);
  document.getElementById("filterSelect").addEventListener("change", applyImageFilter);
  
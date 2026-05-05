$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.reset-button').dblclick(dblclickResetButton); // dblclick requires the user two click twice in quick succession
  

  
    
  })
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {name:"Mametchi", weight:20, happiness:10, isAlive:true};

    function dblclickResetButton() {
      location.reload();
      checkAndUpdatePetInfoInHtml();
    }

    function clickedTreatButton() {
      // Increase pet happiness
      pet_info.happiness++;
      // Increase pet weight
      pet_info.weight++;
      $('.pet-comment').text("Yum");
      $('.pet-avatar').text(petAscii.happy);
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedPlayButton() {
      // Increase pet happiness
      pet_info.happiness++;
      // Decrease pet weight
      pet_info.weight--;
      $('.pet-comment').text("Yay");
      $('.pet-avatar').text(petAscii.neutral);
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedExerciseButton() {
      // Decrease pet happiness
      pet_info.happiness--;
      // Decrease pet weight
      pet_info.weight--;
      $('.pet-comment').text("Pant...");
      $('.pet-avatar').text(petAscii.sad);
      checkAndUpdatePetInfoInHtml();
    }
  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      if(!pet_info.isAlive){
        petDies();
      }
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      // Add conditional so if weight is lower than zero.
      if(pet_info.happiness <= 0){
        pet_info.happiness = 0;
      }
      if(pet_info.weight <= 0){
        pet_info.weight = 0;
        pet_info.happiness = 0;
        pet_info.isAlive = false;
      }
    }
    
    function petDies() { 
        // Change pet appearance 
        $('.pet-image').remove();
        // Show message 
        pet_info.name += " has passed away..."; 
        $('.pet-avatar').text(pet_info.isAlive || petAscii.dead);
        $('.pet-comment').text("Double click the Reset Button to try again");
        $('.happy-text').remove(); // Removes the element
        // Disable buttons 
        $('button').prop('disabled', true); 
        $('.reset-button').prop('disabled', false); 
    
    }

    var petAscii = {
        happy: `
        /\\_/\\
        ( ^_^ )
        > ^ <
        Happy
        `,
        neutral: `
        /\\_/\\
        ( -_- )
        > ^ <
        Neutral
        `,
        sad: `
        /\\_/\\
        ( T_T )
        > ^ <
        Sad
        `,
        dead: `
        /\\_/\\
        ( x_x )
        > ^ <
        Dead
        `
    };
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
    }
  
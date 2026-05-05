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
      // Add conditional so if weight is less than zero.
      // if(pet_info.happiness = 0) This would serve as the bug off by 1 issue due to order of checks. 
      if(pet_info.happiness <= 0){ // And the solution.
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
  
// HW 10 Requirements

document.querySelector('#hello').addEventListener('click', () => {
  console.log('Take of your Pets');
});

document.querySelector('#dante').addEventListener('click', logWarning);

function logWarning() {
  petWarning();
}

function petWarning() {
  console.warn('Keep your pet alive');
}

document.querySelector('#hal').addEventListener('click', () => {
  console.error(`Unable to revive`);
});

document.querySelector('#table').addEventListener('click', () => {
  console.table([
    {
      first: 'Pet1',
      last: 'Pikachu',
    },
    {
      first: 'Pet2',
      last: 'Squirtle',
      birthday: '18930113',
    },
    {
      first: 'Pet3',
      last: 'Charmander',
    }
  ]);
});

document.querySelector('#group').addEventListener('click', () => {
  const label = 'Starter Pets';
  console.group(label);
  console.info('Leo');
  console.info('Mike');
  console.info('Don');
  console.info('Raph');
  console.groupEnd(label);
});

document.querySelector('#custom').addEventListener('click', () => {
  const spacing = '5px';
  const styles = 
        `padding: ${spacing}; background-color: darkblue; color: white; font-style: 
         italic; border: ${spacing} solid crimson; font-size: 2em;`;
  console.log('%cWatch Pokemon', styles);
});

document.querySelector('#error').addEventListener('click', () => {
  document.querySelector('#date').textContent = new Date();
});

document.querySelector('#violation').addEventListener('click', (e) => {
  const duration = 3000;
  const start = new Date().getTime();
  while (new Date().getTime() < start + duration) {
    // Block the main thread for 3 seconds.
    // This could happen if there are a lot of logged messages to filter through in #filter
  }
});

document.querySelector('#network').addEventListener('click', (e) => {
  fetch('/shelter');
});

const messages = [
  { level: "info", text: "Pet was fed", source: "owner", user: "root" },
  { level: "error", text: "Database failed", source: "db", user: "system" },
  { level: "warn", text: "Pet is about to die", source: "pet", user: "system" },
  { level: "info", text: "File uploaded", source: "storage", user: "pet" },
];

function filterMessages(messages, filters) {
  return messages.filter(msg => {
    // Filter by log level
    if (filters.level && msg.level !== filters.level) return false;

    // Filter by plain text (case-insensitive)
    if (filters.text &&
        !msg.text.toLowerCase().includes(filters.text.toLowerCase())) {
      return false;
    }

    // Filter by regex
    if (filters.regex) {
      const regex = new RegExp(filters.regex, "i");
      if (!regex.test(msg.text)) return false;
    }

    // Filter by message source
    if (filters.source && msg.source !== filters.source) return false;

    // Filter by user
    if (filters.user && msg.user !== filters.user) return false;

    return true;
  });
}

document.querySelector('#filter').addEventListener('click', (e) => {
const filters = {
  level: "info",
  text: "",
  regex: "",
  source: "",
  user: ""
};
const filters2 = {
  level: "",
  text: "Pet",
  regex: "",
  source: "",
  user: ""
};
const filters3 = {
  level: "",
  text: "",
  regex: "pet",
  source: "",
  user: ""
};
const filters4 = {
  level: "",
  text: "",
  regex: "",
  source: "pet",
  user: ""
};
const filters5 = {
  level: "",
  text: "",
  regex: "",
  source: "",
  user: "system"
};
console.log(filterMessages(messages, filters));
console.log(filterMessages(messages, filters2));
console.log(filterMessages(messages, filters3));
console.log(filterMessages(messages, filters4));
console.log(filterMessages(messages, filters5));

});
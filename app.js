const data = [
  {
    name: "Avi Asija",
    age: 20,
    gender: "male",
    lookingFor: "female",
    location: "India",
    picture: "https://randomuser.me/api/portraits/men/30.jpg"
  },
  {
    name: "Ekam Asija",
    age: 16,
    gender: "male",
    lookingFor: "female",
    location: "India",
    picture: "https://randomuser.me/api/portraits/men/31.jpg"
  },
  {
    name: "David",
    age: 55,
    gender: "male",
    lookingFor: "female",
    location: "UK",
    picture: "https://randomuser.me/api/portraits/men/77.jpg"
  }
];

const profiles = profileIterator(data);

// init
nextProfile();

//setup click event listener for button
document.getElementById("next").addEventListener("click", nextProfile);

//next profile display
function nextProfile() {
  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
    document.getElementById("profileDisplay").innerHTML = `
    <ul class="list-group">
    <li class="list-group-item">Name: ${currentProfile.name}</li>
    <li class="list-group-item">Age: ${currentProfile.age}</li>
    <li class="list-group-item">Gender: ${currentProfile.gender}</li>
    <li class="list-group-item">Looking For: ${currentProfile.lookingFor}</li>
    <li class="list-group-item">Country: ${currentProfile.location}</li>
    </ul>
    `;

    document.getElementById("imageDisplay").innerHTML = `
    <img src=${currentProfile.picture}> 
    `;
  } else {
    //No more profiles
    window.location.reload();
  }
}

//profile iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length
        ? {
            value: profiles[nextIndex++],
            done: false
          }
        : { done: true };
    }
  };
}

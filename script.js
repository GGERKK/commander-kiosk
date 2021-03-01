/*

- start with data structure
  - object (thumbnail, name, paragraph, etc.)
- put in array
- create function (render) that takes in obj data and
  set up for display + initial state
- map over data with render function

*/

let people = [{
    "firstName": "Richard",
    "middleInitial": "R.",
    "lastName": "Paul",
    "suffix": "",
    "rank": "Maj Gen",
    "title": "Dr.",
    "thumbnail": "img/richard-paul.jpg",
    "serviceStart": 1997,
    "serviceEnd": 2000,
    "bio": "Maj. Gen. Richard R. Paul is commander, Air Force Research Laboratory, Wright-Patterson Air Force Base, Ohio. He directs the Air Force's annual $1.4 billion science and technology program which is executed by more than 6,000 people in the laboratory's component technology directorates and the Air Force Office of Scientific Research. The general also is the Air Force's technology executive officer and as such, determines the investment strategy for the full spectrum of Air Force science and technology activities. The general plans basic research to ensure continued technological superiority; develop and transition new technologies for Air Force weapon systems and their supporting infrastructure; and ensure responsive technical support to time-urgent problems whenever and wherever they occur. The general entered the Air Force in 1967 as a distinguished graduate of Officer Training School, Lackland Air Force Base, Texas. He has served in two Air Force laboratories, a product center, two major command headquarters, Headquarters U.S. Air Force, Washington, D.C., and a joint staff assignment. Prior to his current assignment, he served as commander of Wright Laboratory, the largest aerospace laboratory complex in the Air Force prior to the 1997 formation of the Air Force Research Laboratory.",
    "education": "",
    "assignments": "",
    "jointAssignments": "",
    "flightInformation": "",
    "awards": "",
    "otherAchievements": "",
    "memberships": "",
    "promotions": ""
  },
  {
    "firstName": "Paul",
    "middleInitial": "D.",
    "lastName": "Nielsen",
    "suffix": "",
    "rank": "Maj Gen",
    "title": "",
    "thumbnail": "img/paul-nielsen.jpg",
    "serviceStart": 2000,
    "serviceEnd": 2004,
    "bio": "Maj. Gen. Paul D. Nielsen is Commander, Air Force Research Laboratory, Wright-Patterson Air Force Base, Ohio. He directs the Air Force's $1.7 billion science and technology budget plus an additional $1.3 billion from the laboratory's customers. Approximately 9,500 people in the laboratory's component technology directorates and the Air Force Office of Scientific Research execute the science and technology program. He also is the Air Force's technology executive officer and determines the investment strategy for the full spectrum of Air Force science and technology activities. The general plans basic research to ensure continued technological superiority; develops and transitions new technologies for Air Force weapon systems and their supporting infrastructure; and ensures responsive technical support to time-urgent problems.   General Nielsen entered the Air Force in 1972 as a distinguished graduate of the U.S. Air Force Academy. He has served in various jobs at headquarters level and in the field. He served at three product centers and three laboratories, including assignments at the Secretary of the Air Force's Office of Special Projects and the Department of Energy's Lawrence Livermore National Laboratory.   General Nielsen was a military assistant in the Office of the Secretary of Defense and the Commander of Rome Laboratory. He was Operations Chief for the Cheyenne Mountain Operations Center and Director of Plans for the North American Aerospace Defense Command. Prior to his current assignment, General Nielsen served as Vice Commander of the Aeronautical Systems Center. The ASC is the Air Force's largest product center responsible for developing fighters, bombers, transports, reconnaissance aircraft, training systems and unmanned aerospace vehicles. ",
    "education": " ",
    "assignments": " ",
    "jointAssignments": " ",
    "flightInformation": " ",
    "awards": " ",
    "otherAchievements": " ",
    "memberships": " ",
    "promotions": " "
  },
  {
    "firstName": "Perry",
    "middleInitial": "L.",
    "lastName": "Lamy",
    "suffix": "",
    "rank": "Maj Gen",
    "title": "",
    "thumbnail": "img/perry-lamy.jpg",
    "serviceStart": 2004,
    "serviceEnd": 2005,
    "bio": " ",
    "education": " ",
    "assignments": " ",
    "jointAssignments": " ",
    "flightInformation": " ",
    "awards": " ",
    "otherAchievements": " ",
    "memberships": " ",
    "promotions": " "
  },
  {
    "firstName": "Ted",
    "middleInitial": "F.",
    "lastName": "Bowlds",
    "suffix": "",
    "rank": "Lt",
    "title": "",
    "thumbnail": "img/ted-bowlds.jpg",
    "serviceStart": 2006,
    "serviceEnd": 2007,
    "bio": " ",
    "education": " ",
    "assignments": " ",
    "jointAssignments": " ",
    "flightInformation": " ",
    "awards": " ",
    "otherAchievements": " ",
    "memberships": " ",
    "promotions": " "
  },
  {
    "firstName": "Curtis",
    "middleInitial": "M.",
    "lastName": "Bedke",
    "suffix": "",
    "rank": "Maj Gen",
    "title": "",
    "thumbnail": "img/curtis-bedke.jpg",
    "serviceStart": 2007,
    "serviceEnd": 2010,
    "bio": " ",
    "education": " ",
    "assignments": " ",
    "jointAssignments": " ",
    "flightInformation": " ",
    "awards": " ",
    "otherAchievements": " ",
    "memberships": " ",
    "promotions": " "
  },
  {
    "firstName": "Ellen",
    "middleInitial": "M.",
    "lastName": "Pawlikowski",
    "suffix": "",
    "rank": "Gen",
    "title": "",
    "thumbnail": "img/ellen-pawlikowski.jpg",
    "serviceStart": 2010,
    "serviceEnd": 2011,
    "bio": " ",
    "education": " ",
    "assignments": " ",
    "jointAssignments": " ",
    "flightInformation": " ",
    "awards": " ",
    "otherAchievements": " ",
    "memberships": " ",
    "promotions": " "
  },
  {
    "firstName": "William",
    "middleInitial": "N.",
    "lastName": "McCasland",
    "suffix": "",
    "rank": "Maj Gen",
    "title": "",
    "thumbnail": "img/william-mccasland.jpg",
    "serviceStart": 2011,
    "serviceEnd": 2013,
    "bio": " ",
    "education": " ",
    "assignments": " ",
    "jointAssignments": " ",
    "flightInformation": " ",
    "awards": " ",
    "otherAchievements": " ",
    "memberships": " ",
    "promotions": " "
  },
  {
    "firstName": "Thomas",
    "middleInitial": "J.",
    "lastName": "Masiello",
    "suffix": "",
    "rank": "Maj Gen",
    "title": "",
    "thumbnail": "img/thomas-masiello.jpg",
    "serviceStart": 2013,
    "serviceEnd": 2016,
    "bio": " ",
    "education": " ",
    "assignments": " ",
    "jointAssignments": " ",
    "flightInformation": " ",
    "awards": " ",
    "otherAchievements": " ",
    "memberships": " ",
    "promotions": " "
  },
  {
    "firstName": "Robert",
    "middleInitial": "D.",
    "lastName": "McMurry",
    "suffix": "Jr.",
    "rank": "Lt Gen",
    "title": "",
    "thumbnail": "img/robert-mcmurry.jpg",
    "serviceStart": 2016,
    "serviceEnd": 2017,
    "bio": " ",
    "education": " ",
    "assignments": " ",
    "jointAssignments": " ",
    "flightInformation": " ",
    "awards": " ",
    "otherAchievements": " ",
    "memberships": " ",
    "promotions": " "
  },
  {
    "firstName": "William",
    "middleInitial": "T.",
    "lastName": "Cooley",
    "suffix": "",
    "rank": "Maj Gen",
    "title": "",
    "thumbnail": "img/william-cooley.jpg",
    "serviceStart": 2017,
    "serviceEnd": 2020,
    "bio": " ",
    "education": " ",
    "assignments": " ",
    "jointAssignments": " ",
    "flightInformation": " ",
    "awards": " ",
    "otherAchievements": " ",
    "memberships": " ",
    "promotions": " "
  },
  {
    "firstName": "Evan",
    "middleInitial": "C.",
    "lastName": "Dertien",
    "suffix": "",
    "rank": "Brig Gen",
    "title": "",
    "thumbnail": "img/evan-dietrien.jpg",
    "serviceStart": 2020,
    "serviceEnd": 2020,
    "bio": " ",
    "education": " ",
    "assignments": " ",
    "jointAssignments": " ",
    "flightInformation": " ",
    "awards": " ",
    "otherAchievements": " ",
    "memberships": " ",
    "promotions": " "
  },
  {
    "firstName": "",
    "middleInitial": "",
    "lastName": "",
    "suffix": "",
    "rank": "",
    "title": "",
    "thumbnail": "img/afrl-stands-up.jpg",
    "serviceStart": "",
    "serviceEnd": "",
    "bio": " ",
    "education": " ",
    "assignments": " ",
    "jointAssignments": " ",
    "flightInformation": " ",
    "awards": " ",
    "otherAchievements": " ",
    "memberships": " ",
    "promotions": " "
  }
]

function buildGrid(data) {
  let grid = document.getElementById("grid")
  let feature = document.getElementById("feature")

  for (let i = 0; i < data.length; i++) {
    let person = `<div class="person" id="p-${[i]}">
                    <img src="${data[i].thumbnail}" alt="${data[i].rank}
                                    ${data[i].title}
                                    ${data[i].firstName}
                                    ${data[i].middleInitial}
                                    ${data[i].lastName}"/>
                  </div>`
    grid.innerHTML += person

    let featured = `<div class="featured" id="f-${[i]}">
                    <img src="${data[i].thumbnail}" alt="${data[i].rank}
                          ${data[i].title}
                          ${data[i].firstName}
                          ${data[i].middleInitial}
                          ${data[i].lastName}"/>
                      <p>
                          ${data[i].bio}
                      </p>
                    </div>`
    feature.innerHTML += featured
  }
  $(".featured").hide()
  $("#f-0").fadeIn()

  $(".person").each(function(index) {
    $(this).click(function(event) {
      $(".featured").hide()
      // reveal 'featured' corresponding with index
      $("#f-" + $(this).index(".person")).fadeIn()
    })
  })
}

$(document).ready(function() {
  buildGrid(people)
})

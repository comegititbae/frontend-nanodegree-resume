/* Code format is like so: JSON object and then its encapsulated display function to show its contents, then a line
to actually display the content in the page. Where possible, certain code, particularly the use of jQuery selectors,
is only done once at the end to reduce repitition. After displaying all the objects, the iName function internationalises
the name at the top of the resume, and finally the button to internationalise and the map are added.
* */


/* The bio object contains name, role, contact info, picture, message and skills.
 */
var bio = {
    "name": "Nachi Mudgil",
    "role": "Web Developer",
    "contact": {
        "mobile": 696969,
        "email": "nachimudgil98@gmail.com",
        "gitub": "comegititbae",
        "twitter": "N/A",
        "location": "Sydney, NSW, Australia"
    },

    "picURL": "images/fry.jpg",
    "message": "Welcome to my humble abode",
    "skills": ["JS programming, ", "Web development, ", "Java programming, ",
        "HTML and CSS coding, ", "Responsive images/webpages designing"]
};


bio.display = function() {


    //I'm formatting the individual bio objects to the page in the order they're to be presented, as doing it
    //otherwise was found to be problematic, and this was the easiest way for me to do it.

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedName, formattedRole);


    //Simple for-in loop to sequentially append each of the skills to the top and bottom bars where contact details
    //are displayed, instead of coding each one manually.

    for (var contacts in bio.contact) {
        var formattedContact = HTMLcontactGeneric.replace("%contact%", contacts).replace("%data%", bio.contact[contacts]);
        $("#topContacts").append(formattedContact);
        $("#footerContacts").append(formattedContact);
    }

    var formattedMessage = HTMLWelcomeMsg.replace("%data%", bio.message);
    var formattedBiopic = HTMLbioPic.replace("%data%", bio.picURL);
    $("#header").append(formattedMessage, formattedBiopic);


    //As specified by Lesson 2 in Javascript Basics, I'm only appending to the section where skills are displayed if
    //there are any skills to begin with.

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#header").append(formattedSkill);
        }
    }
};

bio.display();

/* The work object contains an array of job objects, each with employer, title, location, dates and description.
 */
var work = {
    "jobs": [
        {
            "employer": "Dr Patrick Patradoon-Ho",
            "title": "Work experience in paediatrics",
            "location": "Mt Druitt Hospital, NSW, Australia",
            "datesWorked": "July 2012",
            "description": "1 week of work experience at a paediatrics ward at the given location, assisted and" +
            "learned about the various activities of the department, 9 am to 4 pm."
        },

        {
            "employer": "Batman",
            "title": "Robin, the Boy Wonder",
            "location": "Gotham City, USA",
            "datesWorked": "Ongoing",
            "description": "When Batsy's emo ass realised that working alone is highly impractical given the city " +
            "he patrols is a godforsaken cesspool, a wretched hive of scum and villany never found before, he hired " +
            "a sidekick to help in crimefighting."
        }
    ]
};


work.display = function () {


    //Simple for-in loop that appends each different element of each job object to the relevant section of the page.
    //All the elements are first formatted appropriately, and then the final line appends all of them to the work section
    //with a single jQuery selector, instead of appending each one individually.

    for (var job in work.jobs) {

        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].datesWorked);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedEmployerTitle, formattedLocation, formattedDates, formattedDescription);

    }
};

work.display();


/* The projects object contains an array of individual project objects, each with a title, dates, description, images.
 */
var projects = {
    "projects": [
        {
            "title": "Build a Portfolio Site",
            "datesWorked": "July-August 2015",
            "description": "You will be provided with a design mockup as a PDF-file and must replicate that design " +
            "in HTML and CSS. You will develop a responsive website that will display images, descriptions and " +
            "links to each of the portfolio projects you will complete throughout the course of the Front-End Web " +
            "Developer Nanodegree.",
            "images": ["images/Screen Shot 2015-11-29 at 4.08.51 pm.png",
                "images/Screen Shot 2015-11-30 at 4.13.42 pm.png", "images/Screen Shot 2015-11-30 at 4.14.00 pm.png" ]
        },

        {
            "title": "Online Resume",
            "datesWorked": "November-December 2015",
            "description": "Once you've mastered the skills of a front end web developer you'll want to make a great " +
            "first impression. You need a resume that stands out. The resume you build will not only help you build " +
            "important skills, but will also make it easy to show employers why you’re perfect for the job. " +
            "As you progress through this Nanodegree program you can update this resume with your new skills and " +
            "projects.",
            "images": ["images/Screen Shot 2015-11-30 at 4.02.21 pm.png",
                "images/Screen Shot 2015-11-30 at 5.41.26 pm.png", "images/Screen Shot 2015-12-02 at 3.37.28 pm.png"]
        }
    ]
};


projects.display = function() {


    //Simple for-in loop to append each individual element of the object to the projects section, formatting each first
    //then appending all at the end, similar to previous objects.

    for (var project in projects.projects) {

        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[project].datesWorked);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedTitle, formattedDate, formattedDescription);


        //Similar to bio.skills, I'm only appending images of the projects if any exist. That way, whenever new images
        //are added they're automatically displayed on the page; or if removed/none exist then the page automatically
        //removes them from display or displays nothing at all.

        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);

            }
        }
    }
};

projects.display();

/* The education object contains an array of schools objects, each with name, location, degree, majors, dates and link
   to their website. It also has an array of onlineCourses objects, each with title, school, dates, url.
 */
var education = {
    "schools": [
        {
            "name": "Penrith High School",
            "location": "Penrith, NSW, Australia",
            "degree": "N/A",
            "majors": "N/A",
            "datesAttended": "2009-2015",
            "url": "http://web3.penrith-h.schools.nsw.edu.au/index.php"
        },

        {
            "name": "University of Sydney",
            "location": "Redfern, NSW, Australia",
            "degree": "Software Engineering",
            "majors": "N/A",
            "datesAttended": "2015-",
            "url": "http://sydney.edu.au/"
        }
    ],

    "onlineCourses": [
        {
            "title": "Intro to HTML and CSS",
            "school": "Udacity",
            "datesAttended": "June 2015",
            "url": "https://www.udacity.com/course/viewer#!/c-ud304/l-3063988721/m-3289678549"
        },

        {
            "title": "Responsive Web Design Fundamentals",
            "school": "Udacity",
            "datesAttended": "June 2015",
            "url": "https://www.udacity.com/course/viewer#!/c-ud893-nd/l-3581758575/m-3575058641"
        },

        {
            "title": "Responsive Images",
            "school": "Udacity",
            "datesAttended": "June 2015",
            "url": "https://www.udacity.com/course/viewer#!/c-ud882-nd/l-3574748851/m-3573228854"
        },

        {
            "title": "Javascript Basics",
            "school": "Udacity",
            "datesAttended": "November 2015",
            "url": "https://www.udacity.com/course/viewer#!/c-ud804-nd/l-1930528550"
        },

        {
            "title": "Intro to JQuery",
            "school": "Udacity",
            "datesAttended": "June 2015",
            "url": "https://www.udacity.com/course/viewer#!/c-ud245-nd/l-3314378535"
        }
    ]
};

education.display = function() {

    //Again, similar to all other objects, a simple for-in each to format each of the elements of the object and
    //append them to the education section in this case. This process repeats to append the title Online Classes and
    //each of the online objects to the page.
    for (var school in education.schools) {

        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].datesAttended);
        var schoolURL = education.schools[school].url;
        $(".education-entry:last").append(formattedName, formattedLocation, formattedDegree, formattedMajors,formattedDates);

    }

    $(".education-entry:last").append(HTMLonlineClasses);

    for (var course in education.onlineCourses) {
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        var formattedDatesAttended = HTMLonlineDates.replace("%data%", education.onlineCourses[course].datesAttended);
        var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
        $(".education-entry:last").append(formattedTitle, formattedSchool, formattedDatesAttended, formattedURL);

    }
};
education.display();

/* From Lesson 2 in Javascript Basics, this function internationalises the name displayed at the top of the page -
   first name starts with a capital letter, and last name becomes all caps.
 */
function inName(name){
    console.log(name);
    var newName = name;
    newName = newName[0].toUpperCase() + newName.slice(1,newName.indexOf(" ") + 1).toLowerCase()
        + newName.slice(newName.indexOf(" ") + 1).toUpperCase();
    console.log(newName);
    return newName;
}



//Finally, the button and map are added to the page to complete it.
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);





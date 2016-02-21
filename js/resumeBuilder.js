/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var bio = {
 	"name" : "Caroline David",
 	"role" : "webdesigner",
 	"welcomeMessage" : "Hello, this is my interactive resume",
 	"contacts" : {
 		"mobile" : "(333)-444-5555",
 		"email" : "carolladavid@gmail.com",
 		"github" : "carolineglanzmann",
 		"twitter" : "@carolglanzmann",
 		"location" : "Vancouver"
 	},
 	"skills" : ["friendly", "yoga advocate", "mobilegame fan", "doglover"],
 	"bioPic" : "images/brand.jpg"
 };
var work = {
	"jobs" : [
		{
			"employer" : "MonkeyMediaSoftware",
			"title" : "Graphic/webdesigner",
			"location" : "Vancouver -  Canada",
			"dates" : "Feb 2015 - Jan 2016",
			"description" : "worked as a graphic and webdesigner for both the Catering Institute and MonkeyMedia Software"
		},
		{
			"employer" : "Evolution of Gaming Exhibit",
			"title" : "UI Designer",
			"location" : "Vancouver - Canada",
			"dates" : "Jan 2014 - Aug 2014",
			"description" : "worked as a UI designer for a virtual reality game that was showcased at the event"
		},
		{
			"employer" : "Desigual Propaganda",
			"title" : "Designer - Contract",
			"location" : "Goiania - Brazil",
			"dates" : "Jan 2012 - Apr 2012",
			"description" : "worked as a contractor for design projects for upscale architecture/construction brands such as opus"
		},
		{
			"employer" : "Curve Communications",
			"title" : "Designer - Intern",
			"location" : "Vancouver - Canada",
			"dates" : "Jan 2011 - May 2011",
			"description" : "worked during my internship period generating assets for both online and offline medias for the agency"
		}
	]
};
var education = {
	"schools" : [
		{
			"name" : "Center of Digital Media - CDM",
			"location" : "Vancouver - Canada",
			"degree" : "Masters",
			"major" : "Digital Media",
			"date" : " Sept 2013 - Apr 2015",
			"url" : "http://thecdm.ca/"
		},
		{
			"name" : "PUC - GO",
			"location" : "Goiania - Brazil",
			"degree" : "BA",
			"major" : "Architecture",
			"date" : "Jan 2000 - Jul 2006",
			"url" : "http://sites.pucgoias.edu.br/home/"
		}

	],
	
	"onlineSchools" : [
		{
			"name" : "Udacity",
			"location" : "online",
			"degree" : "Nano Degree",
			"major" : "Front-end web development",
			"date" : "Jan 2016 - current",
			"url" : "https://www.udacity.com/"
		}
	]	
};
var projects = {
	"projects" : [
		{
			"title" : "MonkeyMedia Website Design",
			"dates" : "Feb 2015 - Dec 2015",
			"description" : "This was an ongoing webproject where I worked on the main banner design and other updates/fixes",
			"images" : ["images/website.jpg"]
		},
		{	
			"title" : "Sweet Cloud Website",
			"dates" : "Aug 2014 - Dec 2014",
			"description" : "This is a website project created for a sweet factory company",
			"images" : ["images/cloud.jpg"]			
		},
		{
			"title" : "Astro-Nom-Nom Game",
			"dates" : "Jan 2014 - Jul 2014",
			"description" : "This was a browser game created and published at the FGL site",
			"images" : ["images/game.jpg"]
		}

	]
};

 
bio.displayBio = function(){

	var heroRole = HTMLheaderRole.replace("%data%", bio.role);
	var heroName = HTMLheaderName.replace("%data%", bio.name);
	$('#header').prepend(heroRole).prepend(heroName);



	var heroPic = HTMLbioPic.replace ("%data%", bio.bioPic);
	var initialMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

	$('#header').append(heroPic, initialMessage);

	if(bio.skills.length > 0) {
		$('#header').append(HTMLskillsStart);
		for (var skill in bio.skills){
			var heroSkills = HTMLskills.replace("%data%", bio.skills[skill]);
			$('#skills').append(heroSkills);
		}
	
	}

	var mobileContact = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var emailContact = HTMLemail.replace("%data%", bio.contacts.email);
	var githubContact = HTMLgithub.replace("%data%", bio.contacts.github);
	var twitterContact = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var locationContact = HTMLlocation.replace("%data%",bio.contacts.location);
	$("#footerContacts").append(mobileContact,emailContact,githubContact,twitterContact,locationContact);

};

work.displayWork = function(){
	for (var job in work.jobs){
		$('#workExperience').append(HTMLworkStart);

		var jobEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
		var jobTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);

		var jobConcatenation = jobEmployer + jobTitle;
		$('.work-entry:last').append(jobConcatenation);

		var jobLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$('.work-entry:last').append(jobLocation);

		var jobDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$('.work-entry:last').append(jobDates);

		var jobDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$('.work-entry:last').append(jobDescription); 
	}
};

projects.displayProjects = function(){

	for (var project in projects.projects) {
		$('#projects').append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		var formattedDate = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedTitle,formattedDate,formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (var image in projects.projects[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$('.project-entry:last').append(formattedImage);
			}
		}
	}
};

education.displayEducation = function(){
	
	for (var school in education.schools){
		$("#education").append(HTMLschoolStart);

		var educationTitle = HTMLschoolName.replace('%data%', education.schools[school].name);
		var educationDate = HTMLschoolDates.replace("%data%", education.schools[school].date);
		var educationLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var educationMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		var educationDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(educationTitle,educationDate,educationLocation,educationMajor,educationDegree);

	}

	for(var onlineclass in education.onlineSchools){
		$('.education-entry:last').append(HTMLonlineClasses);

		var onlineschoolTitle = HTMLonlineTitle.replace("%data%", education.onlineSchools[onlineclass].name);
		var onlineschoolCourse = HTMLonlineSchool.replace("%data%", education.onlineSchools[onlineclass].major);
		var onlineschoolURL = HTMLonlineURL.replace("%data%", education.onlineSchools[onlineclass].url);
		$(".education-entry:last").append(onlineschoolTitle,onlineschoolCourse,onlineschoolURL);
	}
};

bio.displayBio();
work.displayWork();
education.displayEducation();
projects.displayProjects();

// INTERNATIONALIZE BUTTON //
function inName (name){
	var givenName = name;

	var splitName = givenName.split(" ");
	splitName[0] = splitName[0].slice(0,1).toUpperCase() + splitName[0].slice(1).toLowerCase();
	splitName[1] = splitName[1].toUpperCase();

	givenName = splitName[0] + " " + splitName[1];
	console.log(givenName);

	return givenName;
}

$('#main').append(internationalizeButton);
$('#mapDiv').append(googleMap);

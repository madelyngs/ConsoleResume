let firstName = "Madelyn";
let lastName = "Spray";
let fullName = firstName + "  " + lastName;
let fullNameCaps = fullName.toUpperCase();

displayDescription(fullNameCaps);

function displayDescription(myName, myCareer, myDescription) {
    console.log("Name: " + myName);
    console.log("Career: " + myCareer);
    console.log("Description: " + myDescription + ".");
}


console.log("My Interests: ");

displayInterests("Music"); 
displayInterests("Cats"); 
displayInterests("Cooking"); 
displayInterests("Watching 'Little Women LA' "); 

function displayInterests(myInterest) {
    console.log("*  " + myInterest); 
}

console.log("My Previous Experiences: ");

displayPosition("Roots & Revelry" , "Server" , "Fulfilled guests' requests and maintained daily tasks along with persistant communication.");

displayPosition("Grandmother's House Restaurant" , "Sous-Chef" ,"Assisted chef with daily preperations as well as plating food.");


function displayPosition(companyName, jobTitle, jobDescription) {
    console.log("*  " + companyName + ", " + jobTitle + " - " + jobDescription + ". ");
};


console.log("My Skills: ");

displaySkill("Telekinesis", true); 
displaySkill("HTML", false); 
displaySkill("CSS", false); 
displaySkill("JavaScript", true); 
displaySkill("Customer Service", false); 
displaySkill("Git / GitHub", false); 


function displaySkill(mySkill, bamBam) {
    if(bamBam == true) { 
        console.log("*  BAM: " + mySkill);
    } else if(bamBam == false) {
        console.log("*  " + mySkill); 
    };
}










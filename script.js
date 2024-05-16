function listSkills() {
    // Get all elements with class 'skills'
    const skillsElements = document.querySelectorAll('.skills');

    // Create an empty array to store skills
    let skills = [];

    // Iterate through each element with class 'skills'
    skillsElements.forEach(skillElement => {
        // Get the text content of the skill element
        const skillText = skillElement.textContent.trim();
        // If the skill text is not empty, push it to the skills array
        if (skillText !== "") {
            skills.push(skillText);
        }
    });

    // Get the skillsList div
    const skillsListDiv = document.getElementById('skillsList');

    // Create a new unordered list
    const ul = document.createElement('ul');

    // Add each skill as a list item to the unordered list
    skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        ul.appendChild(li);
    });

    // Append the unordered list to the skillsList div
    skillsListDiv.appendChild(ul);
} 

function clearSkillsList() {
    // Get the skillsList div
    const skillsListDiv = document.getElementById('skillsList');
        
    // Remove all children of the skillsList div
    while (skillsListDiv.firstChild) {
        skillsListDiv.removeChild(skillsListDiv.firstChild);
    }

}
// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub License](https://img.shields.io/badge/license-${license}-blue)`;
  }
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    //returns the actuation link for the license in table of contents
    return `* [License](#license)`;
  }
  return "";
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
  This project is licensed with ${license}.`;
  }
  return "";
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  
  * [Installation](#installation)

  * [Usage](#usage)

  ${renderLicenseLink()}

  * [Contributors](#contributor)

  * [Tests](#tests)

  * [Questions](#questions)
  
   ## Installation
   ${data.installation}
  
   ## Usage
   ${data.usage}
   
   ## License
   ${renderLicenseSection(data.license)}
   
   ## Contributors
   ${data.contributor}
  
   ## Tests
  ${data.test}
  
  ## Questions
  ${data.questions}
  </br>
  My Github: [${data.github}](https://github.com/${data.github})<br/>
  Questions? Email me: ${data.email}<br/>
`;
}

module.exports = generateMarkdown;

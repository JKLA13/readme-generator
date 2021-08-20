// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub License](https://img.shields.io/badge/license-${license}-blue)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    //where returns the actuation link of the license
    return `* [License](#license)`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
  This project is licensed with ${license}.`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  
  * [Installation](#installation)

  * [Usage](#usage)

   ${renderLicenseLink(data.license)}

  * [Contributors](#contributor)

  * [Tests](#tests)

  * [Questions](#questions)
  
   ## Installation
   ${data.installation}
  
   ## Usage
   ${data.usage}
   
   ## License
   ${data.license}
   
   ## Contributors
   ${data.contributor}
  
   ## Tests
  ${data.test}
  
  ## Questions
  ${data.questions}

  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;

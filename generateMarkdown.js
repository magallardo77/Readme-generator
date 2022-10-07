// License Badge function
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    case "Apache":
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    case "Mozilla":
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    default:
      break;
  }
}
// License Link Function
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return `https://opensource.org/licenses/MIT`
    case "Apache":
      return `https://www.apache.org/licenses/LICENSE-2.0`
    case "Mozilla":
      return `https://www.mozilla.org/en-US/MPL/`
    default:
      break;
  }
}


// License indicator function
let renderLicenseSection = (license) => license!=="none" ? (`This uses a ${license}`) : "N/A"
   

// Function that generates a README
function generateMarkdown(data) {
  
  return `
  # ${data.project}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
    * [Description](#Description)
    * [Installation](#Installation)
    * [Usage](#Usage)
    * [Contact](#Contact)
    * [Contribute](#Contriibute)
    * [License](#License)

  ## Installation 
  ${data.dependencies}

  ##Usage
  ${data.info}

  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ## Contribute 
  ${data.contributing}

  ## Contact 
  Github: ${data.username}
  Email: ${data.email}


`;
}

module.exports = generateMarkdown;

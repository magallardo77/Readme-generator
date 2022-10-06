// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
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
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
let renderLicenseSection = (license) => license!=="none" ? "This uses a ${license}" : "N/A"
   
// switch (license) {
//     case "MIT":
//       return `MIT License`
//     case "Apache":
//       return `Apache License`
//     case "Mozilla":
//       return `Mozilla License`
//     default:
//       break;
//   }
// }

// TODO: Create a function to generate markdown for README
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

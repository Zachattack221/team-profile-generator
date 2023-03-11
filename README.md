# team-profile-generator

## Table of Contents
1. [Description](#description)
2. [Technology](#technology)
3. [Installation](#installation)
4. [Visuals](#visuals)
5. [Testing](#testing)
6. [License](#license)

## Description

This application is intended to serve as a resource through which a user can dynamically generate a team profile, containing multiple job roles with specific information pertaining to each. 

Via the use of the Jest and Inquirer modules, the user is first prompted for information, then that data is then populated onto a formatted HTML page. The finished product allows for quick, streamlined access to the team's individual emails, GitHub profiles, and role specific information. 
\
Using test-driven development, this application demonstrates a use case for Object Oriented Programming, employing classes and constructors to generate a team with interconnected information, and then testing the functionality of the constructed data through Jest. 

## Technology 
This application uses JavaScript, Node.js, [Inquirer](https://www.npmjs.com/package/inquirer) NPM package for user prompts, and [Jest](https://www.npmjs.com/package/inquirer) as a dev dependency to perform unit testing on class constructors. The 'FS module' is employed to control the generation of new files once the sufficient Inquirer prompts have been completed. 
## Installation
Run 'npm i' within the console, located at the root level of the directory. This will pull in the necessary node modules/packages (Inquirer, fs module, and Jest specifically).

From this point, enter "node index.js" to begin the inquirer prompt sequence and generate a team member. 
 
The user will be continually prompted to create new team members until they select exit from rawlist choices. 

At this point, the 'FS module' will generate a populated HTML page in the dist folder as team.html
## Visuals
[Link to video demonstration](https://drive.google.com/file/d/1_rXccN3kdwZF1hox7dYbxN725gbilm4F/view)
Tests Passing
![Tests Passing](./images/TestsPassing.png)
\
Sample Team
![Sample Team](./images/SampleTeam.png)
\

## Testing
Once user has pulled in required node modules, enter "npm test" in console to initiate tests (via Jest). This will initiate 4 test suites, with 17 tests in total written to check the functionality of the class constructors.

## License
This application is licensed with the MIT License.
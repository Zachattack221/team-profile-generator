# team-profile-generator

## Table of Contents
1. [Description](#description)
2. [Visuals](#visuals)
3. [Testing](#testing)
4. [License](#license)

## Description
[Link to HTML page in REPO](https://github.com/Zachattack221/team-profile-generator/blob/main/dist/team.html)
[Link to video submission](https://drive.google.com/file/d/1_rXccN3kdwZF1hox7dYbxN725gbilm4F/view)

This project is intended to serve as a resource through which a user can dynamically generate a team profile, containing multiple job roles with specific information pertaining to each. Via the use of the Jest and Inquirer modules, the user is prompted for information, where that information is then populated onto a formatted HTML page. 
The finished product allows for quick, streamlined access to the team's individual emails, GitHub profiles, and role specific information. 

## Visuals
![Tests Passing](./images/TestsPassing.png)
![Sample Team](./images/SampleTeam.png)

## Testing
Once user has pulled in required node modules, enter "npm test" in console to initiate tests (via Jest)

To initiate prompt sequence, enter 'node index.js' in console. 

User will be continually prompted to create new team memebers until user selects exit from rawlist choices. 
At this point a populated HTML page will generate in the dist folder as team.html

## License
This application is licensed with the MIT License.
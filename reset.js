// Removes the team.html file from the dist/ folder to reset team from scratch - used by running `npm run reset` script in terminal 

const fs = require('fs');
if (fs.existsSync('./dist/team.html')) {
  fs.unlinkSync('./dist/team.html');
  console.log('/dist/ folder reset!');
}

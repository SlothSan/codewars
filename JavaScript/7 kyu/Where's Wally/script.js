const wheresWally = (string) => (" " + string).search(/ Wally\b/);

console.log(wheresWally(`Where's Wally?`));
//8
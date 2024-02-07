// Simple js hello world
console.log("Hello World from main.js!");

while (true) {
    throw new Error("This is an error");
}

// Start application with pm2 (a server that runs code)
//  $ `pm2 start <file>.js`
//  $ pm2 list (show servers)
//  $ pm2 stop <app_name_or_id>     (stop server)
//  $ pm2 delete <app_name_or_id>   (delete server)

// Parse JSON with jq
//  $ brew install jq
//  $ echo '{"hello":123}' | jq

// Github CLI (way of interacting with github through the terminal)
//  $ brew install gh 
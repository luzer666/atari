var http = require('http');

http.createServer(function(request, response){
  response.writeHead(200, {'Content-type':'text/plan'});
  response.write('Hello Node JS Server Response');
  response.end( );

}).listen(8080);


var Discordie = require("discordie");
var client = new Discordie({autoReconnect: true});


// var game = {name: "FOnline 2"};
// var streamingGame = {type: 1, name: "something", url: ""};

// client.User.setGame(game);

client.connect({
    token: "MzQ5Nzk0NjE3MDQ0MTA3Mjc0.DH63cg.3NGhh1Tq5g3Tp1Ih10hJCS2dCWA"
});

client.Dispatcher.on("GATEWAY_READY", e => {
    console.log("Username: " + client.User.username);
});

client.Dispatcher.on("MESSAGE_CREATE", e => {



    if (e.message.content === "hello") {
        e.message.channel.sendMessage("Nice to see you " + e.message.author.nickMention + " !");
    
    } else if (e.message.content === "hi") {
        e.message.channel.sendMessage("Hello mighty " + e.message.author.nickMention + " !");
    
} else if (e.message.content === "yo") {
        e.message.channel.sendMessage("Hi " + e.message.author.nickMention + " , you old drunkman!");

} else if (e.message.content === "hola") {
        e.message.channel.sendMessage("Welcome to Vick's bar " + e.message.author.nickMention + " !");

} else if (e.message.content === "czesc") {
        e.message.channel.sendMessage("Hi " + e.message.author.nickMention + " !");

} else if (e.message.content === "Hi") {
        e.message.channel.sendMessage("You again? No brawl this time, " + e.message.author.nickMention + " !");

} else if (e.message.content === "Hello") {
        e.message.channel.sendMessage("Well, hello " + e.message.author.nickMention + " ! No vomits this time!");

} else if (e.message.content === "Yo") {
        e.message.channel.sendMessage("Yo yo " + e.message.author.nickMention + " !");

} else if (e.message.content === "Hola") {
        e.message.channel.sendMessage("Nice to see you " + e.message.author.nickMention + " ! How many raiders killed today?");

} else if (e.message.content === "Czesc") {
        e.message.channel.sendMessage("Welcome to Vick's bar " + e.message.author.nickMention + " ! Keep gun holstered!");

} else if (e.message.content === "good morning") {
        e.message.channel.sendMessage("Yo yo " + e.message.author.nickMention + " !");

} else if (e.message.content === "Good morning") {
        e.message.channel.sendMessage("Hello " + e.message.author.nickMention + " ! Have a seat!");
    
    } else if (e.message.content === "Hi all") {
        e.message.channel.sendMessage("Yo " + e.message.author.nickMention + " !");

} else if (e.message.content === "hi all") {
        e.message.channel.sendMessage("Yo " + e.message.author.nickMention + " !");
    
     } else if (e.message.content === "Hi guys") {
        e.message.channel.sendMessage("Welcome to Vick's bar " + e.message.author.nickMention + " Have a seat! ");

} else if (e.message.content === "hi guys") {
        e.message.channel.sendMessage("Welcome to Vick's bar " + e.message.author.nickMention + " Have a seat! ");
    
    } else if (e.message.content === "Hey") {
        e.message.channel.sendMessage("Welcome " + e.message.author.nickMention + " ! How things going?");

} else if (e.message.content === "hey") {
        e.message.channel.sendMessage("Welcome " + e.message.author.nickMention + " ! How things going?");
    
    } else if (e.message.content === "Ahoy") {
        e.message.channel.sendMessage("Yo yo " + e.message.author.nickMention + " !");
      
} else if (e.message.content === "ahoy") {
        e.message.channel.sendMessage("Yo yo " + e.message.author.nickMention + " !");

     } else if (e.message.content === "Ahoj") {
        e.message.channel.sendMessage("Hi " + e.message.author.nickMention + " !");

} else if (e.message.content === "ahoj") {
        e.message.channel.sendMessage("You again? No brawl this time, " + e.message.author.nickMention + " !");
  
    } else if (e.message.content === "Privet") {
        e.message.channel.sendMessage("You again? No brawl this time, " + e.message.author.nickMention + " !");

} else if (e.message.content === "privet") {
        e.message.channel.sendMessage("You again? No brawl this time, " + e.message.author.nickMention + " !");
    
} else if (e.message.content === "Greetings") {
        e.message.channel.sendMessage("Nice to see you " + e.message.author.nickMention + " ! How many raiders killed today?");

} else if (e.message.content === "greetings") {
        e.message.channel.sendMessage("Nice to see you " + e.message.author.nickMention + " ! How many raiders killed today?");


    




} else if (e.message.content === "cheers") {
        e.message.channel.sendMessage("<:TVMuUrt:333263734938140672>");

  } else if (e.message.content === "Cheers") {
        e.message.channel.sendMessage("<:TVMuUrt:333263734938140672>");  
      
      } else if (e.message.content === "shit") {
        e.message.channel.sendMessage("Watch your language, it is not some shit bar in Reno!");

  } else if (e.message.content === "Shit") {
        e.message.channel.sendMessage("Watch your language, it is not some shit bar in Reno!");
    
      } else if (e.message.content === "fuck") {
        e.message.channel.sendMessage("Watch your language, it is not some shit bar in Reno!");

  } else if (e.message.content === "Fuck") {
        e.message.channel.sendMessage("Watch your language, it is not some shit bar in Reno!");

} else if (e.message.content === "Hehe") {
        e.message.channel.sendMessage("<:7BQx50y:333263658983358479>");

  } else if (e.message.content === "Haha") {
        e.message.channel.sendMessage("<:z6h5LJC:333263706874183681>");

} else if (e.message.content === "He he") {
        e.message.channel.sendMessage("<:z6h5LJC:333263706874183681>");

  } else if (e.message.content === "Ha ha") {
        e.message.channel.sendMessage("<:z6h5LJC:333263706874183681>");

} else if (e.message.content === "hehe") {
        e.message.channel.sendMessage("<:z6h5LJC:333263706874183681>");

  } else if (e.message.content === "haha") {
        e.message.channel.sendMessage("<:z6h5LJC:333263706874183681>");

} else if (e.message.content === "he he") {
        e.message.channel.sendMessage("<:z6h5LJC:333263706874183681>");

  } else if (e.message.content === "ha ha") {
        e.message.channel.sendMessage("<:z6h5LJC:333263706874183681>");







});


var http = require('http');

http.createServer(function(request, response){
  response.writeHead(200, {'Content-type':'text/plan'});
  response.write('Hello Node JS Server Response');
  response.end( );

}).listen(8080);


var Discordie = require("discordie");
var client = new Discordie({autoReconnect: true});



client.connect({
    token: "MzMyNTMwODUyNDM5MzkyMjY4.DNCtjw.ZDgpGdeFQoQf-pSHpw7raKTmM3s"
});

client.Dispatcher.on("GATEWAY_READY", e => {
    console.log("Username: " + client.User.username);
});

client.Dispatcher.on("MESSAGE_CREATE", e => {



    if (e.message.content === "hello") {
        e.message.channel.sendMessage("Nice to see you " + e.message.author.nickMention + " ! Welcome to Broken Hills!");
    
    } else if (e.message.content === "hi") {
        e.message.channel.sendMessage("Nice to see you " + e.message.author.nickMention + " ! Welcome to Broken Hills!");
    
} else if (e.message.content === "yo") {
        e.message.channel.sendMessage("Nice to see you " + e.message.author.nickMention + " ! Welcome to Broken Hills!");

} else if (e.message.content === "hola") {
        e.message.channel.sendMessage("Nice to see you " + e.message.author.nickMention + " ! Welcome to Broken Hills!");

} else if (e.message.content === "czesc") {
        e.message.channel.sendMessage("Nice to see you " + e.message.author.nickMention + " ! Welcome to Broken Hills!");

} else if (e.message.content === "Hi") {
        e.message.channel.sendMessage("Nice to see you " + e.message.author.nickMention + " ! Welcome to Broken Hills!");

} else if (e.message.content === "Hello") {
        e.message.channel.sendMessage("Nice to see you " + e.message.author.nickMention + " ! Welcome to Broken Hills!");

} else if (e.message.content === "Yo") {
        e.message.channel.sendMessage("Nice to see you " + e.message.author.nickMention + " ! Welcome to Broken Hills!");

} else if (e.message.content === "Hola") {
        e.message.channel.sendMessage("Nice to see you " + e.message.author.nickMention + " ! Welcome to Broken Hills!");

} else if (e.message.content === "Czesc") {
        e.message.channel.sendMessage("Nice to see you " + e.message.author.nickMention + " ! Welcome to Broken Hills!");

} else if (e.message.content === "good morning") {
        e.message.channel.sendMessage("Nice to see you " + e.message.author.nickMention + " ! Welcome to Broken Hills!");

} else if (e.message.content === "Good morning") {
        e.message.channel.sendMessage("Nice to see you " + e.message.author.nickMention + " ! Welcome to Broken Hills!");
    
    } else if (e.message.content === "Hi all") {
        e.message.channel.sendMessage("Nice to see you " + e.message.author.nickMention + " ! Welcome to Broken Hills!");

} else if (e.message.content === "hi all") {
        e.message.channel.sendMessage("Nice to see you " + e.message.author.nickMention + " ! Welcome to Broken Hills!");
    
     } else if (e.message.content === "Hi guys") {
        e.message.channel.sendMessage("Nice to see you " + e.message.author.nickMention + " ! Welcome to Broken Hills!");

} else if (e.message.content === "hi guys") {
        e.message.channel.sendMessage("Nice to see you " + e.message.author.nickMention + " ! Welcome to Broken Hills!");
    
    } else if (e.message.content === "Hey") {
        e.message.channel.sendMessage("Nice to see you " + e.message.author.nickMention + " ! Welcome to Broken Hills!");

} else if (e.message.content === "hey") {
        e.message.channel.sendMessage("Nice to see you " + e.message.author.nickMention + " ! Welcome to Broken Hills!");
    
    } else if (e.message.content === "Ahoy") {
        e.message.channel.sendMessage("Nice to see you " + e.message.author.nickMention + " ! Welcome to Broken Hills!");

} else if (e.message.content === "ahoy") {
        e.message.channel.sendMessage("Nice to see you " + e.message.author.nickMention + " ! Welcome to Broken Hills!");

     } else if (e.message.content === "Ahoj") {
        e.message.channel.sendMessage("Nice to see you " + e.message.author.nickMention + " ! Welcome to Broken Hills!");

} else if (e.message.content === "ahoj") {
        e.message.channel.sendMessage("Nice to see you " + e.message.author.nickMention + " ! Welcome to Broken Hills!");
  
    } else if (e.message.content === "Privet") {
        e.message.channel.sendMessage("Nice to see you " + e.message.author.nickMention + " ! Welcome to Broken Hills!");

} else if (e.message.content === "privet") {
        e.message.channel.sendMessage("Nice to see you " + e.message.author.nickMention + " ! Welcome to Broken Hills!");
    
} else if (e.message.content === "Greetings") {
        e.message.channel.sendMessage("Nice to see you " + e.message.author.nickMention + " ! Welcome to Broken Hills!");

} else if (e.message.content === "greetings") {
        e.message.channel.sendMessage("Nice to see you " + e.message.author.nickMention + " ! Welcome to Broken Hills!");


     } else if (e.message.content === "Hi Marcus") {
        e.message.channel.sendMessage("Whats up " + e.message.author.nickMention + " !");

} else if (e.message.content === "Hi marcus") {
        e.message.channel.sendMessage("Whats up " + e.message.author.nickMention + " !");
  
    } else if (e.message.content === "hi marcus") {
        e.message.channel.sendMessage("Whats up " + e.message.author.nickMention + " !");

} else if (e.message.content === "hi Marcus") {
        e.message.channel.sendMessage("Whats up " + e.message.author.nickMention + " !");

    
 } else if (e.message.content === "Hello Marcus") {
        e.message.channel.sendMessage("Whats up " + e.message.author.nickMention + " !");

} else if (e.message.content === "Hello marcus") {
        e.message.channel.sendMessage("Whats up " + e.message.author.nickMention + " !");
  
    } else if (e.message.content === "hello marcus") {
        e.message.channel.sendMessage("Whats up " + e.message.author.nickMention + " !");

} else if (e.message.content === "hello Marcus") {
        e.message.channel.sendMessage("Whats up " + e.message.author.nickMention + " !");




} else if (e.message.content === "cheers") {
        e.message.channel.sendMessage("<:TVMuUrt:333263734938140672>");

  } else if (e.message.content === "Cheers") {
        e.message.channel.sendMessage("<:TVMuUrt:333263734938140672>");  
      
      } else if (e.message.content === "shit") {
        e.message.channel.sendMessage("<:cNMC4h3:333263734623698956>");

  } else if (e.message.content === "Shit") {
        e.message.channel.sendMessage("<:cNMC4h3:333263734623698956>");

      } else if (e.message.content === "fuck") {
        e.message.channel.sendMessage("<:azHInbg:333263707620769816>");

  } else if (e.message.content === "Fuck") {
        e.message.channel.sendMessage("<:azHInbg:333263707620769816>");

} else if (e.message.content === "Hehe") {
        e.message.channel.sendMessage("<:7BQx50y:333263658983358479>");

  } else if (e.message.content === "Haha") {
        e.message.channel.sendMessage("<:7BQx50y:333263658983358479>");

} else if (e.message.content === "He he") {
        e.message.channel.sendMessage("<:7BQx50y:333263658983358479>");

  } else if (e.message.content === "Ha ha") {
        e.message.channel.sendMessage("<:7BQx50y:333263658983358479>");

} else if (e.message.content === "hehe") {
        e.message.channel.sendMessage("<:7BQx50y:333263658983358479>");

  } else if (e.message.content === "haha") {
        e.message.channel.sendMessage("<:7BQx50y:333263658983358479>");

} else if (e.message.content === "he he") {
        e.message.channel.sendMessage("<:7BQx50y:333263658983358479>");

  } else if (e.message.content === "ha ha") {
        e.message.channel.sendMessage("<:7BQx50y:333263658983358479>");

    




    }

if (e.message.content === "blah"  || e.message.content === "bla"){
        var eightball = ["How many ghouls does it take to change a lightbulb? They don't need to, they just hudle around the glowing one!", "Why don't ghouls use bathrooms? Toilet paper makes them shed!", "A ghoul went to a doctor. Doctor, doctor, I have this horrible rash! - he said. The doctor replied: Son, that's called your face!", "There is one small joke hidden in your pants.", "Yo momma's so ugly deathclaws run away when they see her.", "You know your breath is bad when ghouls spawn in your mouth.", "You are so ugly, Angela Bishop became sterile when she looked at you.", "Your mama's so ugly, when she fell into a vat of FEV she came out looking exactly the same.", "How many NCR does it take to screw in a light bulb? 10. One to screw in the lightbulb and 9 to collect the illumination tax.", "Whats the difference between a Brotherhood knight and a mole? A mole comes out of the ground sometimes.", "Do I look like jester?", "A smoothskin and a ghoul are having a bite to eat, the ghoul buys the deathclaw steak and says - Hmm, tastes like chicken. The smoothskin looks over and asks - what's a chicken?", "The NCR sends out a scout to survey an irradiated area around Glow for possible safe houses. When he comes back, he says - I give it a glowing recommendation.", "What is Gecko's regional dish? Ghoulash.", "Yo momma's so ugly Necropolis ghouls run away when they see her.", "Yo momma's so fat she has less mobility than ghouls.", "Yo momma's so fat her gut could feed the whole Wasteland for a week.", "Look in the mirror." ];
        e.message.channel.sendMessage(eightball[Math.floor(Math.random()*18)]);
}
if (e.message.content === "!joke"){
        var eightball = ["How many ghouls does it take to change a lightbulb? They don't need to, they just hudle around the glowing one!", "Why don't ghouls use bathrooms? Toilet paper makes them shed!", "A ghoul went to a doctor. Doctor, doctor, I have this horrible rash! - he said. The doctor replied: Son, that's called your face!", "There is one small joke hidden in your pants.", "Yo momma's so ugly deathclaws run away when they see her.", "You know your breath is bad when ghouls spawn in your mouth.", "You are so ugly, Angela Bishop became sterile when she looked at you.", "Your mama's so ugly, when she fell into a vat of FEV she came out looking exactly the same.", "How many NCR does it take to screw in a light bulb? 10. One to screw in the lightbulb and 9 to collect the illumination tax.", "Whats the difference between a Brotherhood knight and a mole? A mole comes out of the ground sometimes.", "Do I look like jester?", "A smoothskin and a ghoul are having a bite to eat, the ghoul buys the deathclaw steak and says - Hmm, tastes like chicken. The smoothskin looks over and asks - what's a chicken?", "The NCR sends out a scout to survey an irradiated area around Glow for possible safe houses. When he comes back, he says - I give it a glowing recommendation.", "What is Gecko's regional dish? Ghoulash.", "Yo momma's so ugly Necropolis ghouls run away when they see her.", "Yo momma's so fat she has less mobility than ghouls.", "Yo momma's so fat her gut could feed the whole Wasteland for a week.", "Look in the mirror." ];
        e.message.channel.sendMessage(eightball[Math.floor(Math.random()*18)]);
}



});

$(document).ready(function() {
  console.log("ready!");

  function quizstart() {

    //QUIZ CONTENTS
    var quiz = [{
      "question": "Where does the line “Live Long and Prosper!” originate from?",
      "choices": ["Star Wars",
        "Space Balls",
        "Galaxy Quest",
        "Star Trek",
      ],
      "answer": "Star Trek",
      "image": ""
    }, {
      "question": "Who owns the TARDIS?",
      "choices": ["Doctor Manhattan",
        "Doctor Strange",
        "Doctor Strangelove",
        "Doctor Who"
      ],
      "answer": "Doctor Who",
      "image": ""
    }, {
      "question": "Who is this?",
      "choices": ["Eric Cartman",
        "Peter Griffin",
        "John Goodman",
        "Homer J. Simpson"
      ],
      "answer": "Homer J. Simpson",
      "image": "img/fatman.jpeg"
    }, {
      "question": "How many books are there in the Harry Potter series?",
      "choices": ["9", "6", "8", "7"],
      "answer": "7",
      "image": ""
    }, {
      "question": "Where is this guy from?",
      "choices": ["Killer Klowns from Outer Space",
        "Freaks",
        "My childhood nightmares!!!",
        "Stephen King’s It"
      ],
      "answer": "Stephen King’s It",
      "image": "img/clown.jpg"
    }, {
      "question": "What is this man’s most famous quote?",
      "choices": ["Sit. Stay.",
        "I know Kung Fu!",
        "I can see my house from here.",
        "You are already dead."
      ],
      "answer": "You are already dead.",
      "image": "img/fotns.jpg"
    }, {
      "question": "Which game contains the race called the Tyranids?",
      "choices": ["Starcraft",
        "Aliens",
        "XCOM",
        "Warhammer 40K"
      ],
      "answer": "Warhammer 40K",
      "image": ""
    }, {
      "question": "What is the Konami Code?",
      "choices": ["Up, Down, Left, Right, B, A, B, Start",
        "Right, Up, A, Down, Down, C, Left, Up, B",
        "A, B, A, C, A, B, B, Left, Right, Start",
        "Up, Up, Down, Down, Left, Right, Left, Right B, A"
      ],
      "answer": "Up, Up, Down, Down, Left, Right, Left, Right B, A",
      "image": ""
    }, {
      "question": "What is Cthulhu also known as?",
      "choices": ["The King in Yellow",
        "The Black Pharaoh",
        "The Black Goat of the Forest",
        "The Great Dreamer"
      ],
      "answer": "The Great Dreamer",
      "image": ""
    }, {
      "question": "What is the Answer to the Ultimate Question in Life?",
      "choices": ["You only live as long as you want",
        "Music is Life",
        "Don’t Forget your Towel",
        "42"
      ],
      "answer": "42",
      "image": ""
    }];
    var turns = 0;
    var ans;

    var choice = $(".choice");
    var startBtn = $("#startBtn");
    var p1Points = 0;
    var p2Points = 0;



    //Click listener for the start button
    //Initialize the game
    startBtn.click(function(){
      //Inc to turn 1
      turns = 1;

      //pick a random question
      var pick = Math.floor((Math.random() * quiz.length));

      // display the question
      $("#qno").text("Q." + (turns));
      $(".question").text(quiz[pick].question);
      $("img").attr("src", quiz[pick].image);

      //Removes the used question from the Array
      var quizPick = quiz.splice(pick, 1)[0];

      //Get the actual ans from question object
      ans = quizPick.answer;

      //display the options
      // Adds choices from the selected question into an array

      //Add choices to the dom
      choiceRandomizer(quizPick);
      $(".startBtn").css({height: "0",
                          width: "0", "font-size": "0",
                          transition: "width 0.6s ease, height 0.6s ease, font-size 0.4s ease"});
    });

    choice.click(function() {

      //Get choice player picked
      var playerpick = $(this).text();

      //right choice gets true, wrong gets false
      function scoring() {

        if (turns % 2 === 1 && playerpick === ans) {
          p1Points++;
          $("#p1Score").text(p1Points);

        } else if (turns % 2 === 0 && playerpick === ans) {
          p2Points++;
          $("#p2Score").text(p2Points);
        }
      }
      scoring();

      if (turns === 10) {
        if (p1Points < p2Points){
          alert("Player 2 is the Bigger Geek!");
        } else if (p1Points < p2Points) {
          alert("Player 1 is the Bigger Geek!");
        }else if (p1Points === p2Points) {
          alert("Draw Game!!! You are Both Big Geeks! Enjoy the Show!");
        }
        location.reload();
      }

      //player 1's turn 1,3,5 ..
      //player2's turn 2,4,6,8..
      turns++;

      //Changes Question number on click
      //Add Image if there is one

      //TODO: Check shrinking list logic not working
      var pick = Math.floor((Math.random() * quiz.length));
      //Removes the used question from the Array
      var quizPick = quiz.splice(pick, 1)[0];

      //Get the actual ans from question object
      if (turns > 10) {
        ans = " ";
      } else { ans = quizPick.answer;}

      //Display question ans image from turn 1 to 10
      if (turns <= 10) {
        $("#qno").text("Q." + (turns));
        $(".question").text(quizPick.question);
        $("img").attr("src", quizPick.image);
      } else {
        $("#qno").text("");
        $(".question").text("");
        $("img").attr("src", "");
      }

      //Add choices to the dom
      choiceRandomizer(quizPick);

    }); //end of choice button listener
    function choiceRandomizer(chosenQn) {
      var ranChoice = [
        [chosenQn.choices[0]],
        [chosenQn.choices[1]],
        [chosenQn.choices[2]],
        [chosenQn.choices[3]]
      ];

      //add random choice into choice div and removes selected choice
      for (var i = 4; i >= 0;  i--) {
        var k = Math.floor((Math.random() * i));
        $("#c" + [i]).text(ranChoice[k]);
        var l = ranChoice.splice(k, 1);
      }
    }

  }
quizstart();
});

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
      "image": "img/llap.jpg"
    }, {
      "question": "Who owns the TARDIS?",
      "choices": ["Doctor Manhattan",
        "Doctor Strange",
        "Doctor Strangelove",
        "Doctor Who"
      ],
      "answer": "Doctor Who",
      "image": "img/bluebox.jpg"
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
      "image": "img/HP.jpg"
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
        "Check yourself, before you wreck yourself.",
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
      "image": "img/tyranids.jpeg"
    }, {
      "question": "What is the Konami Code?",
      "choices": ["Up, Down, Left, Right, B, A, B, Start",
        "Right, Up, A, Down, Down, C, Left, Up, B",
        "A, B, A, C, A, B, B, Left, Right, Start",
        "Up, Up, Down, Down, Left, Right, Left, Right B, A"
      ],
      "answer": "Up, Up, Down, Down, Left, Right, Left, Right B, A",
      "image": "img/konami.jpg"
    }, {
      "question": "What is Cthulhu also known as?",
      "choices": ["The King in Yellow",
        "The Black Pharaoh",
        "The Black Goat of the Forest",
        "The Great Dreamer"
      ],
      "answer": "The Great Dreamer",
      "image": "img/cthulhu.jpg"
    }, {
      "question": "What is the Answer to the Ultimate Question in Life?",
      "choices": ["You only live as long as you want",
        "Music is Life",
        "Don’t Forget your Towel",
        "42"
      ],
      "answer": "42",
      "image": "img/ultimate.jpg"
    }];
    var turns = 0;
    var ans;

    var choice = $(".choice");
    var startBtn = $("#startBtn");
    var p1Points = 0;
    var p2Points = 0;



    //Click listener for the start button
    //Initialize the game
    startBtn.click(function() {
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
      $(".startBtn").css({
        height: "0",
        width: "0",
        "font-size": "0",
        opacity: "0",
        transition: "opacity 0.6s ease, font-size 0.1s linear 0.6s, width 0.1s linear 0.6s, height 0.1s linear 0.6s"
      });

      /*h1 original size is 65px .transition from larger size to that on click start*/
      $("h1").css({
        "font-size": "65px",
        transition: "font-size 0.6s ease"
      });

      $("img, .image").css({
        "height": "250px",
        transition: "height 0.6s ease"
      });

      $(".choice").css({
        "min-height": "75px",
        width:"95%",
        height: "45%",
        "font-size": "30px",
        opacity: "1",
        transition: "opacity 0.6s ease"
      });

      $(".p1, .p2").css({
        "font-size": "2em",
        transition: "font-size 0.6s ease"
      });

      $(".score").css({
        width: "30px",
        height: "30px",
        opacity: "1",
        transition: "opacity 0.6s ease 1s, width 0.6s ease 1s, height 0.6s ease 1s"
      });

      $(".qno").css({
        opacity: "1",
        transition: "opacity 0.6s ease"
      });

      $(".question").css({
        opacity: "1",
        transition: "opacity 0.6s ease"
      });

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

        $(".result").css({
          opacity: "1",
          width: "97.5%",
          height: "70%",
          "font-size": "5em",
          transition: "opacity 0.6s ease"
        });

        if (p1Points < p2Points) {
          $(".result").text("Player 2 is the Bigger Geek!");
        } else if (p1Points > p2Points) {
          $(".result").text("Player 1 is the Bigger Geek!");
        } else if (p1Points === p2Points) {
          $(".result").text("Draw Game!!! You are Both Big Geeks! Enjoy the Show!");
        }
        $(".result").click(function() {
          location.reload();
        });
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
      } else {
        ans = quizPick.answer;
      }

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
      for (var i = 4; i >= 0; i--) {
        var k = Math.floor((Math.random() * i));
        $("#c" + [i]).text(ranChoice[k]);
        var l = ranChoice.splice(k, 1);
      }
    }

  }
  quizstart();
});

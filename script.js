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
    var p1Points = 0;
    var p2Points = 0;


    $("#p1Score").text(p1Points);
    $("#p2Score").text(p2Points);




    choice.click(function() {

      var j = 10;
      var playerpick = $(this).text();

      turns++;

      console.log($(this).text());
      console.log(ans);


      //Changes Question number on click
      //Randomly picks out a question from a shrinking list.
      //Add Image if there is one

      var pick = Math.floor((Math.random() * j--));

      if (turns <= 10) {
        $("#qno").text("Q." + (turns + 1));
        $(".question").text(quiz[pick].question);
        $("img").attr("src", quiz[pick].image);
      } else {
        $("#qno").text("");
        $(".question").text("");
        $("img").attr("src", "");
      }


      // Adds choices from the selected question into an array
      var ranChoice = [
        [quiz[pick].choices[0]],
        [quiz[pick].choices[1]],
        [quiz[pick].choices[2]],
        [quiz[pick].choices[3]]
      ];

      function choiceRandomizer() {
        //add random choice into c4 div and removes selected choice
        // var a = Math.floor((Math.random() * 4));
        // $("#c4").text(ranChoice[a]);
        // var c4Choice = ranChoice.splice(a, 1);
        //
        // //add random choice into c3 div and removes selected choice
        // var b = Math.floor((Math.random() * 3));
        // $("#c3").text(ranChoice[b]);
        // var c3Choice = ranChoice.splice(b, 1);
        //
        // //add random choice into c2 div and removes selected choice
        // var c = Math.floor((Math.random() * 2));
        // $("#c2").text(ranChoice[c]);
        // var c2Choice = ranChoice.splice(c, 1);
        //
        // //add final choice into c1 div
        // $("#c1").text(ranChoice[0]);
        for (var i = 4; i >= 0;  i--) {
          var k = Math.floor((Math.random() * i));
          $("#c" + [i]).text(ranChoice[k]);
          var l = ranChoice.splice(k, 1);
        }
      }
      choiceRandomizer();

console.log(playerpick === ans);

      //Removes the used question from the Array
      var quizPick = quiz.splice(pick, 1);
      ans = quizPick[0].answer;
      return ans;



  //right choice gets true, wrong gets false
      function scoring() {
        if (turns % 2 === 1 && playerpick === ans) {
          p1Points++;
          return p1Points;
        } else if (turns % 2 === 0 && playerpick === ans) {
          p2Points++;
          return p2Points;
        }
      }
      scoring();

console.log(playerpick === ans);

    });
  }
quizstart();
});

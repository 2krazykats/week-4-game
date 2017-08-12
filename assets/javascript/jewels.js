$(document).ready(function() {


    //VARIABLES
    //------------------------------------------------------------------------------
    var randomNumberValue;
    var calculatedPoints = 0;   // The total points for the game
    var sapphirePoints = 0 ;
    var rubyPoints = 0 ;
    var amythestPoints = 0 ;
    var topazPoints = 0 ;
    var winsCount = 0;
    var lossesCount = 0;
    var staticSapphirePoints;
    var staticRubyPoints;

    //FUNCTIONS
    //------------------------------------------------------------------------------

    // Calculate a random number between 19-120
    function generateRandomPoints() {
        randomNumberValue = Math.floor((Math.random() * (121 - 19)) +19);
        $("#targetPoints").html(randomNumberValue);

        return randomNumberValue;
    }


        // Calculate a random number between 1-12 for each gem
    function generateRandomJewelPoints() {
        var randomJewelValue = Math.floor((Math.random() * (12 - 1)) +1);

        return randomJewelValue;
    }

    // Set the gem values to random values at the beginning of the game
    function setJewelPoints() {
        sapphirePoints = generateRandomJewelPoints();
        rubyPoints = generateRandomJewelPoints();
        amythestPoints = generateRandomJewelPoints();
        topazPoints = generateRandomJewelPoints();

        // if any of the values are the same, generate a new randomJewelValue
        switch(true) {
            case sapphirePoints === rubyPoints:
            sapphirePoints = generateRandomJewelPoints();
            break;
            case sapphirePoints === amythestPoints:
            sapphirePoints = generateRandomJewelPoints();
            break;
            case sapphirePoints === topazPoints:
            sapphirePoints = generateRandomJewelPoints();
            break;
            case rubyPoints === amythestPoints:
            rubyPoints = generateRandomJewelPoints();
            break;
            case rubyPoints === topazPoints:
            rubyPoints = generateRandomJewelPoints();
            break;
            case amythestPoints === topazPoints:
            amythestPoints = generateRandomJewelPoints();
            break;
        }

        console.log(sapphirePoints,rubyPoints,amythestPoints,topazPoints);
    }


    // Determine if the user wins or loses
    function winner() {
    if (randomNumberValue === calculatedPoints) {
        winsCount++;
        $("#wins").html(winsCount);
        alert("You win!");
        resetForNewGame();
        generateRandomPoints();
        setJewelPoints();
        }
    }

    function loser() {
    if (randomNumberValue < calculatedPoints) {
        lossesCount++;
        $("#losses").html(lossesCount);
        alert("You lose!");
        resetForNewGame();
        generateRandomPoints();
        setJewelPoints();
        }
    }


    function resetForNewGame() {
         sapphirePoints = 0 ;
         rubyPoints = 0 ;
         amythestPoints = 0 ;
         topazPoints = 0 ;
        calculatedPoints = 0;
        $("#totalScore").html(calculatedPoints);

    }

        function startGame() {
            $("#wins").html(winsCount);
            $("#losses").html(lossesCount);
            generateRandomPoints();
            setJewelPoints();
        }


    //MAIN CODE
    //------------------------------------------------------------------------------

        startGame();


        //  When user clicks a gem, set a point value to a variable for it
        //  and add it to the totalScore
        $("#sapphire").click(function() {
                calculatedPoints = sapphirePoints + calculatedPoints;
                console.log(calculatedPoints);
                $("#totalScore").html(calculatedPoints);
                winner();
                loser();
       });


         $("#ruby").click(function() {
                calculatedPoints = rubyPoints + calculatedPoints;
                 console.log(calculatedPoints);
                 $("#totalScore").html(calculatedPoints);
                 winner();
                 loser();
        });


         $("#amythest").click(function() {
                calculatedPoints = amythestPoints + calculatedPoints;
                console.log(calculatedPoints);
                $("#totalScore").html(calculatedPoints);
                winner();
                loser();
        });

         $("#topaz").click(function() {
                calculatedPoints = topazPoints + calculatedPoints;
                console.log(calculatedPoints);
                $("#totalScore").html(calculatedPoints);
                winner();
                loser();
        });

        console.log("My calculatedPoints is " + calculatedPoints);



});

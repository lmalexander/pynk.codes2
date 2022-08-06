/* >>> PYNK JSON
    This object stores all of the phrases used in the song "PYNK" to describe Pynk, organized by verse. */
    let pynk = {
        "verseOne" : [
            "the inside of your...baby", 
            "behind all of the doors...crazy",
            "the tongue that goes down...maybe",
            "the paradise found",
            "when you're blushing inside...baby",
            "the truth you can't hide...maybe",
            "the folds of your brain...crazy",
            "as we all go insane"
            ],
        "verseTwo" : [
            "the lips around your...maybe",
            "the skin that's under...baby",
            "where it's deepest inside...crazy",
            "beyond forest and thighs",
            "the secrets you hide...maybe",
            "the lid of your eye...baby",
            "where all of it starts...crazy",
            "the holes of your heart"
            ],
        "outro" : [
            "the inside of your...baby (we're all just pynk)",
            "the walls and the doors...maybe (deep inside, we're all just pynk)",
            "your fingers in my...maybe",
            "the truth you can't hide",
            "your tongue going round...baby",
            "the sun going down...maybe",
            "the holes in your heart...baby",
            "my favorite part"
        ]           
    };
    
/* >>> Variables
    Here, variables are created to store returns from the Pynk JSON object. */    
    let txtOne = "";
    let txtTwo = "";
    let txtOut = "";

/* >>> Interval
    This function sets the Pynk function to run every 1200 milliseconds. */
setInterval(pynkCodes, 2400);

/* >>> PYNK function
    This function will return a random phrase from the Pynk JSON object and store it to a variable. */
    function pynkCodes() {
// Verse 1 loop
    for (let index = 0; index < pynk.verseOne.length; index++) {
        txtOne = pynk.verseOne[Math.floor(Math.random() * 8)];
        console.log(txtOne);
    };
// Verse 2 loop
    for (let index = 0; index < pynk.verseTwo.length; index++) {
            txtTwo = pynk.verseTwo[Math.floor(Math.random() * 8)];
            console.log(txtTwo);
        };
// Outro loop
    for (let index = 0; index < pynk.outro.length; index++) {
            txtOut = pynk.outro[Math.floor(Math.random() * 8)];
            console.log(txtOut);
        };

/* // Browser Returns
    These functions will return the results stored in the variables above to the browser window. */
// Verse 1 Return
    document.getElementById("txtOne").innerHTML = txtOne;
// Verse 2 Return
    document.getElementById("txtTwo").innerHTML = txtTwo;
// Outro Return
    document.getElementById("txtOut").innerHTML = txtOut;
}
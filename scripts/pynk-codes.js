console.log("down in the valley where the girls get naked")

/* >>> dirty computer viewer
    returns a random dirty computer headshot to the viewer
    next - clears data narrative viewer on click */

    function dcViewer() {

        // array of dirty computer viewer gifs
        let dcViewSrc = [];
        let index = 0;
        dcViewSrc[0]="<img src='./assets/pynk-headshots/pynk-codes_jane-57821.gif' alt'Dirty Computer headshot - Jane 57821'>";
        dcViewSrc[1]="<img src='./assets/pynk-headshots/pynk-codes_mercedes.gif' alt='Dirty Computer headshot - Mercedes'>";
        dcViewSrc[2]="<img src='./assets/pynk-headshots/pynk-codes_miss-mississippi.gif' alt='Dirty Computer headshot - Miss Mississippi'>";
        dcViewSrc[3]="<img src='./assets/pynk-headshots/pynk-codes_zen.gif' alt='Dirty Computer headshot - Zen'>";
        dcViewSrc[4]="<img src='./assets/pynk-headshots/pynk-codes_uncle-clifford.gif' alt='Dirty Computer headshot - Uncle Clifford'>";
        dcViewSrc[5]="<img src='./assets/pynk-headshots/pynk-codes_che.gif' alt='Dirty Computer headshot - Che'>";

        // random index picker
        index = Math.floor(Math.random() * dcViewSrc.length);
        console.log(index);

        // location in html
        let dcViewerSrc="";
        
        // write selected img tag to dcViewerSrc
        dcViewerSrc = dcViewSrc[index];
        console.log(dcViewerSrc);

        // return dcViewerSrc to html
        document.getElementById("dcViewer").innerHTML = dcViewerSrc;
    };

/* >>> data
    This object stores all of the phrases used in the song "PYNK" to describe Pynk, organized by verse. */
    let pynk = {
        "pynk" : [
            "the inside of your...baby", 
            "behind all of the doors...crazy",
            "the tongue that goes down...maybe",
            "the paradise found",
            "when you're blushing inside...baby",
            "the truth you can't hide...maybe",
            "the folds of your brain...crazy",
            "as we all go insane",
            "the lips around your...maybe",
            "the skin that's under...baby",
            "where it's deepest inside...crazy",
            "beyond forest and thighs",
            "the secrets you hide...maybe",
            "the lid of your eye...baby",
            "where all of it starts...crazy",
            "the holes of your heart",
            "the inside of your...baby (we're all just pynk)",
            "the walls and the doors...maybe (deep inside, we're all just pynk)",
            "your fingers in my...maybe",
            "the truth you can't hide",
            "your tongue going round...baby",
            "the sun going down...maybe",
            "the holes in your heart...baby",
            "my favorite part"
        ],
        "valley" : [
            "down in the valley",
            "where the girls get naked",
            "if you throwin' bands",
            "then you know she gon shake it",
            "one, two, break 'em",
            "three, four, rake 'em",
            "these niggas grind hard",
            "but these bitches grind harder",
            "climbing up the pole",
            "just to get out the bottom",
            "the crowd, below",
            "stay ready for the show",
            "the pimps, the dough",
            "don't let it take your soul",
            "we make fallin' out the sky look easy",
            "look at my bitches",
            "gangsta walkin' on the ceiling",
            "green on the floor",
            "money talk, can you hear me?",
            "the world is addicting",
            "but dreams is expensive",
            "keep spending",
            "work hard for the top",
            "can't fall now",
            "but whatever goes up",
            "must fall down",
            "what you do",
            "when the power out",
            "kids hungry",
            "can't do nothing but scream shout",
            "we all choose to live",
            "but its different routes",
            "take the shit with the shine",
            "gotta make it count",
            "when you live and die",
            "by the paper route",
            "spend a dime",
            "just to make it out, yeah"
        ]           
    };

    /* data button function
    - returns seven lines of pynk json object as unprocessed data to the dataViewer container.
    - this function is connected to the first button on the page, #btn-data  */
    function dataBtn() {
        // check on-click event + function is working
        console.log("data-Btn onclick worked!")
    };

    /* pynk button function
    - returns seven lines of pynk json object structured as a seven line poetic stanza to the pynkViewer container.
    - this function is connected to the first button on the page, #btn-data  */
    function pynkBtn() {
        // check on-click event + function is working
        console.log("pynk-Btn onclick worked!")

    };

    /* blue button function
    - returns seven lines of pynk json object as a sentiment tagged dataset to the blueViewer container.
    - this function is connected to the first button on the page, #btn-data  */
    function blueBtn() {
        // check on-click event + function is working
        console.log("blue-Btn onclick worked!")

    };
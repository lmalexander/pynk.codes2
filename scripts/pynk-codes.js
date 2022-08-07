console.log("down in the valley where the girls get naked")

/* >>> dirty computer viewer
    returns a random dirty computer headshot to the viewer
    next - clears data narrative viewer on click */
    function dcViewer() {

        // dirty computer viewer gifs array
        let dcViewSrc = [
            "<img src='./assets/pynk-headshots/pynk-codes_jane-57821.gif' alt'Dirty Computer headshot - Jane 57821'>",
            "<img src='./assets/pynk-headshots/pynk-codes_mercedes.gif' alt='Dirty Computer headshot - Mercedes'>",
            "<img src='./assets/pynk-headshots/pynk-codes_miss-mississippi.gif' alt='Dirty Computer headshot - Miss Mississippi'>",
            "<img src='./assets/pynk-headshots/pynk-codes_zen.gif' alt='Dirty Computer headshot - Zen'>",
            "<img src='./assets/pynk-headshots/pynk-codes_uncle-clifford.gif' alt='Dirty Computer headshot - Uncle Clifford'>",
            "<img src='./assets/pynk-headshots/pynk-codes_che.gif' alt='Dirty Computer headshot - Che'>",
            ];

        // random array index picker
        index = Math.floor(Math.random() * dcViewSrc.length);

        // check index was selected
        console.log(index);

        // location in html
        let dcViewerSrc="";
        
        // write selected img tag to dcViewerSrc
        dcViewerSrc = dcViewSrc[index];

        // check img tag was written to dcViewerSrc
        console.log(dcViewerSrc);

        // return dcViewerSrc to html
        document.getElementById("dcViewer").innerHTML = dcViewerSrc;
    };

    /* data button function
    - returns seven lines of pynk json object as unprocessed data to the dataViewer container.
    - this function is connected to the first button on the page, #btn-data */
    function dataBtn() {

        // check on-click event + function is working
        console.log("data-Btn onclick worked!")

        // rawData json object
        let rawData = {
            "1" : {
                "songData" : {
                    "title" : "PYNK",
                    "artist" : "Janelle Monae ft. Grimes",
                    "album" : "'Dirty Computer'",
                    "year" : "2018",
                    "lyricsData" : [
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
                        "my favorite part",
                        ]
                    },
                },
            "2": {
                "songData" : {
                    "title": "Down In The Valley",
                    "artist": "Jucee Froot",
                    "album": "'P-Valley: Season 1 (Music from the Original TV Series)'",
                    "year" : "2020",
                    "lyricsData" : [
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
                        "but it's different routes",
                        "take the shit with the shine",
                        "gotta make it count",
                        "when you live and die",
                        "by the paper route",
                        "spend a dime",
                        "just to make it out, yeah",
                        ]
                    },
                }
            };

    /* rawDataTable -- table that will be dynamically appended to page on button click */

        // table title
        let rawDataTableTitle = "The Data"

        // assign table title id
        // rawDataTableTitle.setAttribute("id","raw-data-table-title")

        // return table title to page
        document.getElementById("raw-data-table-title").append(rawDataTableTitle)

        // table header array
        let rawDataTableHeaders = [ "Phrase", "Song Title", "Artist", "Album", "Year"]

        // check header array
        console.log(rawDataTableHeaders)

        // >>> 1. create table element
        // create table element
        let rawDataTable = document.createElement("table")

        // assign table class
        rawDataTable.className = "raw-data-table"

        // >>> 2. create table header
        // create table head element
        let rawDataTableHead = document.createElement("thead")

        // assign table head element class
        rawDataTableHead.className = "raw-data-table-head"

        // create table header row
        let rawDataTableHeaderRow = document.createElement("tr")

        // assign table header row class
        rawDataTableHeaderRow.className = "raw-data-table-header-row"

        // function to iterate through rawDataTableHeaders array and >
        rawDataTableHeaders.forEach(header => {

            //check headers in foreach
            console.log(header)

            // create header row cell
            let dataHeader = document.createElement("th")

            // write rawDataTableHeader string to header row cell
            rawDataTableHeaders.innerText = header

            // append header row cell to header row
            rawDataTableHeaderRow.append(dataHeader)
            
            })

        // append header row to table head element
        rawDataTableHead.append(rawDataTableHeaderRow)

        // append table head element to table element
        rawDataTable.append(rawDataTableHead)

        // >>> 3. create table body
        // create table body element
        let rawDataTableBody = document.createElement("tbody")
        
        // assign table body element class
        rawDataTableBody.className = "raw-data-table-body"

        // append table body element to table
        rawDataTable.append(rawDataTableBody)

        // return rawDataTable to page
        document.getElementById("dataViewer").append(rawDataTable)
    };

    /* pynk button function
    - returns seven lines of pynk json object structured as a seven line poetic stanza to the pynkViewer container.
    - this function is connected to the first button on the page, #btn-data  */
    function pynkBtn() {
        // check on-click event + function is working
        console.log("pynk-Btn onclick worked!")

        /* >>> data
    This object stores all of the phrases used in the song "PYNK" to describe Pynk, organized by verse. */
    let pynkData = {
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

    };

    /* blue button function
    - returns seven lines of pynk json object as a sentiment tagged dataset to the blueViewer container.
    - this function is connected to the first button on the page, #btn-data  */
    function blueBtn() {
        // check on-click event + function is working
        console.log("blue-Btn onclick worked!")

    };
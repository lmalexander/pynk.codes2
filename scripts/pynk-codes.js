console.log("down in the valley where the girls get naked")

// >>>>> ALL OF THE DATA.

// rawData JSON
let rawData = {
    "0" : {
        "songData" : {
            "title" : "'PYNK'",
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
    "1": {
        "songData" : {
            "title": "'Down In The Valley'",
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
        console.log("data-Btn onclick worked!");

    /* rawDataTable -- table that will be dynamically appended to page on button click */

        // >>>>> 1. TABLE BASICS

        // table title
        let rawDataTableTitle = "The Data";

        // return table title to page
        document.getElementById("raw-data-table-title").innerText = rawDataTableTitle;

        // >>>>> 2. CREATE TABLE HEADER

        // table header array
        let rawDataTableHeaders = [ "Lyric", "Song Title", "Artist", "Album", "Year"];

        // create table head element
        let rawDataTableHead = document.createElement("thead");

        // create table header row
        let rawDataTableHeaderRow = document.createElement("tr");

        // assign table header row class
        // rawDataTableHeaderRow.className = "raw-data-table-header-row";

        // check that header array is populated
        console.log(rawDataTableHeaders);

        // function to iterate through rawDataTableHeaders array and create a row of header cells>
        rawDataTableHeaders.forEach(header => {

            //check headers in foreach
            console.log(header);

            // create header row cell
            let dataHeader = document.createElement("th");

            // write header string to dataHeader row cell
            dataHeader.innerText = header;

            // check dataHeader cell
            console.log(dataHeader);

            // append header row cell to header row
            rawDataTableHeaderRow.append(dataHeader);
            
            });

            // check that header cells are populated with array data
            console.log(rawDataTableHeaderRow);

        // append header row to table head element
        rawDataTableHead.append(rawDataTableHeaderRow);

        // check that table head element is populated with table header row
        console.log(rawDataTableHead);

        // append table head element to table element on page
        document.getElementById("raw-data-table-head").append(rawDataTableHead); 
        
        // >>>>> 3. CREATE TABLE BODY

        // >>> 1. create table elements
        // create rawDataTable body element
        let rawDataTableBody = document.createElement("tbody");

        // return rawDataTable body element to page
        document.getElementById("raw-data-table-body").append(rawDataTableBody);

        // create rawDataTable row element
        let rawDataTableRow = document.createElement("tr");

        // create rawDataTableRow cell elements
        let rawDataTableLyricCell = document.createElement("td");
        let rawDataTableSongTitleCell = document.createElement("td");
        let rawDataTableArtistCell = document.createElement("td");
        let rawDataTableAlbumCell = document.createElement("td");
        let rawDataTableYearCell = document.createElement("td");

        // >>> 2. create table data variables
        // create rawDataTable variables
        let rawDataTableRowData = "";
        let rawDataTableLyric = "";
        let rawDataTableSongTitle = "";
        let rawDataTableArtist = "";
        let rawDataTableAlbum = "";
        let rawDataTableYear = ""

        // >>> 3. return data to variables
        // random rawData index number
        let rawDataIndex = Math.floor(Math.random() * 2);

        // check rawData index number
        console.log(rawDataIndex);

        // random rawData lyric index number
        let rawDataLyricIndex = Math.floor(Math.random() * rawData[0].songData.lyricsData.length);

        // check rawData lyric index number
        console.log(rawDataLyricIndex);

        // select lyric from rawData based on random index number
        rawDataTableLyric = rawData[rawDataIndex].songData.lyricsData[rawDataLyricIndex];

        // check rawDataTableLyric
        console.log(rawDataTableLyric);

        // insert rawDataTableLyric into rawDataTableLyricCell
        rawDataTableLyricCell.innerText = rawDataTableLyric;

        // check rawDataTableLyricCell
        console.log(rawDataTableLyricCell);

        // save song title of selected lyric to rawDataTableSongTitle
        rawDataTableSongTitle = rawData[rawDataIndex].songData.title;

        // check correct song title data was pulled
        console.log(rawDataTableSongTitle);

        // insert rawDataTableSongTitle into rawDataTableSongTitleCell
        rawDataTableSongTitleCell.innerText = rawDataTableSongTitle;
    
        // save artist of selected lyric to rawDataTableArtist
        rawDataTableArtist = rawData[rawDataIndex].songData.artist;

        // check correct song title data was pulled
        console.log(rawDataTableArtist);

        // insert rawDataTableArtist into rawDataTableSongArtistCell
        rawDataTableArtistCell.innerText = rawDataTableArtist;

        // save album of selected lyric to rawDataTableAlbum
        rawDataTableAlbum = rawData[rawDataIndex].songData.album;

        // check correct song title data was pulled
        console.log(rawDataTableAlbum);

        // insert rawDataTableYear into rawDataTableSongYearCell
        rawDataTableAlbumCell.innerText = rawDataTableAlbum;

        // save year of selected lyric to rawDataTableYear
        rawDataTableYear = rawData[rawDataIndex].songData.year;

        // check correct song title data was pulled
        console.log(rawDataTableYear);

        // insert rawDataTableYear into rawDataTableSongYearCell
        rawDataTableYearCell.innerText = rawDataTableYear;

        // append rawDataTable cells to rawDataTableRow
        rawDataTableRow.append(rawDataTableLyricCell, rawDataTableSongTitleCell, rawDataTableArtistCell, rawDataTableAlbumCell, rawDataTableYearCell);

        // check that row was populated
        console.log(rawDataTableRow);

        // add row to table body
        rawDataTableBody.appendChild(rawDataTableRow);



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
// Paste your answers for each question in the appropriate spot below. (Keep the number headings)
// #1

const shows = db.shows.find(
    {
        $or: [
            { artist: "The Supremes" },
            { artist: "The Temptations" }
        ]
    }
);

// #2
shows.forEach(show => {
    if (show.artist === "Aretha Franklin" && show.floor === "Main Floor") {
        printjson(show.number_sold);
    }
});

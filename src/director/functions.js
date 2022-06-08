const Director = require("./table");

xports.addDirector = async (movieObj) => {
    try {
        const newDirector = await Director.create(movieObj);
        console.log(`Succesfully added ${newDirector.dataValues.directorName} to the movie database`);
    } catch (error) {
        console.log(error)
    }
}
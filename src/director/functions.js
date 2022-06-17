const Director = require("./table");

exports.addDirector = async (movieObj) => {
    try {
        const newDirector = await Director.create(movieObj);
        console.log(`Succesfully added ${newDirector.dataValues.director} to the movie database`);
    } catch (error) {
        console.log(error)
    }
}
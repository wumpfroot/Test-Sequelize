const Movie = require("./table");

exports.addMovie = async (movieObj) => {
    try {
        const newMovie = await Movie.create(movieObj);
        console.log(`Succesfully added ${newMovie.dataValues.title} to the movie database`);
    } catch (error) {
        console.log(error)
    }
}

exports.listMovies = async () => {
    try {
        //find all movies
        const movies = await Movie.findAll();
        console.log("\n Movies ⬇️ \n")
        for (let i = 0; i < movies.length; i++) {
            console.log(movies[i].dataValues.title, movies[i].dataValues.actor);
        }
        // console.log(movies);
    } catch (error) {
        console.log(error)
    }
}

exports.updateMovie = async (updateObj, filterObj) => {
    try {
        const response = await Movie.update(updateObj, {where: filterObj});
        if (response[0] > 0) {
            console.log("Movie was succesfully updated");
        } else {
            console.log("Something went wrong");
        }
    } catch (error) {
        console.log(error)
    }
};

exports.deleteMovie = async (filterObj) => {
    try {
        const response = await Movie.destroy({ where: filterObj });
        if (response > 0) {
            console.log(`Succesfully deleted ${response.dataValues.title}`);
        } else {
            console.log("Something went wrong")
        }
    } catch (error) {
        
    }
}
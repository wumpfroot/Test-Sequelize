const yargs = require("yargs");
const { sequelize } = require("./db/connection");
const { addMovie, listMovies, updateMovie, deleteMovie } = require("./movie/functions");
const { addShow, listShows, updateShow, deleteShow } = require("./tv/functions");
const Movie = require("./movie/table");
const Director = require("./director/table")

const app = async (yargsObj) => {
    try {
        Movie.hasOne(Director);
        Director.belongsTo(Movie);
        await sequelize.sync({ alter: true });
        if (yargsObj.movie) {
            if (yargsObj.add) {
                //take movie key value pairs from yargsObj, send them to an add function and return movie
                await addMovie({title: yargsObj.title, actor: yargsObj.actor, directorName: yargsObj.directorName});
            } else if (yargsObj.list) {
                //list all movies in database
                await listMovies();
            } else if (yargsObj.update) {
                //take filter and update k/v pairs from yargsObj, send them to update function and return success/failure message
                await updateMovie({actor: yargsObj.actor}, {title: yargsObj.title});
            } else if (yargsObj.delete) {
                //take filter k/v parid from yargsObj and send to delete function, return success/failure message
                await deleteMovie({title: yargsObj.title});
            } else {
                console.log("Incorrect command")
            }
    } else if (yargsObj.tv) {
        if (yargsObj.add) {
            //take movie key value pairs from yargsObj, send them to an add function and return movie
            await addShow({title: yargsObj.title, actor: yargsObj.actor});
        } else if (yargsObj.list) {
            //list all movies in database
            await listShows();
        } else if (yargsObj.update) {
            //take filter and update k/v pairs from yargsObj, send them to update function and return success/failure message
            await updateShow({actor: yargsObj.actor}, {title: yargsObj.title});
        } else if (yargsObj.delete) {
            //take filter k/v parid from yargsObj and send to delete function, return success/failure message
            await deleteShow({title: yargsObj.title});
        } else {
            console.log("Incorrect command")
        }
    }
    } catch (error) {
        console.log(error)
    }
};

app(yargs.argv);
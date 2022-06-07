const Tv = require("./table");

exports.addShow = async (tvObj) => {
    try {
        const newShows = await Movie.create(tvObj);
        console.log(`Succesfully added ${newShows.dataValues.title} to the database`);
    } catch (error) {
        console.log(error)
    }
}

exports.listShows = async () => {
    try {
        //find all TV shows
        const shows = await Tv.findAll();
        for (let i = 0; i < shows.length; i++) {
            console.log(shows[i].dataValues.title, shows[i].dataValues.actor);
        }
        
    } catch (error) {
        console.log(error)
    }
}

exports.updateShow = async (updateObj, filterObj) => {
    try {
        const response = await Tv.update(updateObj, {where: filterObj});
        if (response[0] > 0) {
            console.log("Tv show was succesfully updated");
        } else {
            console.log("Something went wrong");
        }
    } catch (error) {
        console.log(error)
    }
};

exports.deleteShow = async (filterObj) => {
    try {
        const response = await Tv.destroy({ where: filterObj });
        if (response > 0) {
            console.log(`${response.dataValues.title}was succesfully deleted`);
        } else {
            console.log("Something went wrong")
        }
    } catch (error) {
        
    }
}
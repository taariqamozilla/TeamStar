const {DateTime} = require("luxon");

module.exports = function(eleventyConfig){

    eleventyConfig.addPassthroughCopy("./src/css")
    eleventyConfig.addWatchTarget("./src/css")

    eleventyConfig.addPassthroughCopy("./src/assets")
    eleventyConfig.addWatchTarget("./src/assets")

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.Date_MED);
    })

    return{
    dir:{
        input: "src",
        output: "build",
    },
    };
};
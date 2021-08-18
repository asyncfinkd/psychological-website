const router = require("express").Router();
const Events = require("../../../schema/events/EventsSchema");

router.route("/read/:id").get(async (req, res) => {
    Events.find({}).then((result) => {
        let data = [];
        result.map((type) => {
            if(type.route.toString() == req.params.id.toString()) {
                data.push({
                    title: type.title,
                    description: type.description,
                    route: type.route,
                    image: type.image,
                    date: type.date,
                });
                res.json(data);
            }
        })
    })
})

module.exports = router;
const router = require('express').Router()
const EventsSchema = require('../../../schema/events/EventsSchema')
const loginMiddleware = require('../../../middlewares/loginMiddleware')
const { cloudinary } = require('../../../utils/cloudinary')

router
  .route('/create')
  .all(loginMiddleware)
  .post(async (req, res) => {
    const image = req.body.image
    const images = req.body.images
    const title = req.body.title
    const date = req.body.date
    const description = req.body.description
    const titleEN = req.body.titleEN
    const descriptionEN = req.body.descriptionEN

    const events = await EventsSchema.find()
    let dataImage = ''

    if (image) {
      try {
        const uploadResponses = await cloudinary.uploader.upload(image)

        dataImage = uploadResponses.url
      } catch (error) {
        console.log(error)
      }
    }

    const promises = []
    if (images) {
      let imagesArr = []
      images.map((item, i) => {
        promises.push(
          new Promise(async (resolve, reject) => {
            const uploadResponses = await cloudinary.uploader.upload(item)

            imagesArr.push({
              url: uploadResponses.url,
            })

            resolve(imagesArr)
          }),
        )
      })
    }
    const imagesArrResult = await Promise.all(promises)

    if (!image) {
      dataImage = ''
    }

    const Events = new EventsSchema({
      en: [
        {
          title: titleEN,
          description: descriptionEN,
          route: events.length + 1,
          date: date,
          image: dataImage,
          images: imagesArrResult[0],
        },
      ],
      ge: [
        {
          title: title,
          description: description,
          route: events.length + 1,
          date: date,
          image: dataImage,
          images: imagesArrResult[0],
        },
      ],
    })
    Events.save()
    res.json({ success: true })
  })

module.exports = router

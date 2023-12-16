const { Purchase, MyLearnings, DeleteLearning } = require('../Controller/AddtoCart')

const MyLearningRoutes =require('express').Router()

MyLearningRoutes.post('/purchase',Purchase)
MyLearningRoutes.get('/courses/:email',MyLearnings)
MyLearningRoutes.delete('/delete',DeleteLearning)

module.exports=MyLearningRoutes
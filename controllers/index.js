import Question from '../models/index';

export const getIndex = (req, res, next) => {
    res.render("index");
}

export const getSurvey = (req, res, next) => {
    res.render("survey");
}

export const postSurvey = async(req, res, next) => {
    let createQuestion = await Question.create(req.body);
    res.redirect("/survey");
}
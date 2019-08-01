import Question from '../models/index';

export const getAdmin = async(req, res, next) => {
    let questions = await Question.find({});
    res.render("admin/index", {questions});
    }

export const getAdminShow = async(req, res, next) => {
    let showQuestion = await Question.findById(req.params.id);
    res.render("admin/show", {showQuestion});
    }

export const getEdit = async(req, res, next) => {
    let editQuestion = await Question.findById(req.params.id);
    res.render("admin/edit", { editQuestion });
}    

export const putAdmin = async(req, res, next) => {
    let updateQuestion = await Question.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/admin');
    }

export const deleteAdmin = async(req, res, next) => {
    let deleteQuestion = await Question.findByIdAndRemove(req.params.id);
    res.redirect('/admin');
    }
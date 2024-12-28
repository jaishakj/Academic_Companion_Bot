from flask import Blueprint, request, jsonify
from app.services import homework_helper, exam_preparation, plagiarism_checker, career_guidance, user_progress

bp = Blueprint('main', __name__)

@bp.route('/homework/help', methods=['POST'])
def get_homework_help():
    data = request.get_json()
    response = homework_helper.provide_assistance(data['question'])
    return jsonify(response)

@bp.route('/exam/generate', methods=['POST'])
def generate_quiz():
    data = request.get_json()
    quiz = exam_preparation.generate_quiz(data['subject'], data['topic'])
    return jsonify(quiz)

@bp.route('/check-plagiarism', methods=['POST'])
def check_plagiarism():
    data = request.get_json()
    result = plagiarism_checker.check_text(data['text'])
    return jsonify(result)

@bp.route('/career/guidance', methods=['POST'])
def get_career_guidance():
    data = request.get_json()
    guidance = career_guidance.provide_guidance(data['interests'], data['skills'])
    return jsonify(guidance)

@bp.route('/progress/<user_id>', methods=['GET'])
def get_user_progress(user_id):
    progress = user_progress.get_progress(user_id)
    return jsonify(progress) 

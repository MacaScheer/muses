class Api::QuestionsController < ApplicationController

    def index
        
        @questions = Question.all
        
            render :index
            

    end

    def create


        @question = Question.new(question_params)
     
        if @question.save
            @answers  = @question.answers
            @comments = @answers.map {|ans| ans.comments}.flatten
                question_user =  [@question.author]
                answers_users =  @answers.map {|ans| ans.answer_author}.flatten
                comments_users = @comments.map {|cmt| cmt.comment_author}.flatten
            @users    =  question_user + answers_users + comments_users
            @topics = Topic.all
            render :show
        else
            
            render json: @question.errors.full_messages, status: 422
        end
    end

    def show
        @question = Question.find_by(id: params[:id])
        @answers  = @question.answers
        @comments = @answers.map {|ans| ans.comments}.flatten
            question_user =  [@question.author]
            answers_users =  @answers.map {|ans| ans.answer_author}.flatten
            comments_users = @comments.map {|cmt| cmt.comment_author}.flatten
        @users    =  question_user + answers_users + comments_users
        @topics = Topic.all
    end

    def update
        
        @question = Question.find_by(id: params[:id])
        if @question.update(question_params)
            @answers  = @question.answers
            @comments = @answers.map {|ans| ans.comments}.flatten
                question_user =  [@question.author]
                answers_users =  @answers.map {|ans| ans.answer_author}.flatten
                comments_users = @comments.map {|cmt| cmt.comment_author}.flatten
            @users    =  question_user + answers_users + comments_users
            @topics = Topic.all
            render :show
        else
            render json: [@question.errors.full_messages], status: 401
        end

    end

    def destroy
        Question.find_by(id: params[:id]).destroy
    end

    def question_params
        params.require(:question).permit(:question, :question_author_id, :topics => [])
    end

end

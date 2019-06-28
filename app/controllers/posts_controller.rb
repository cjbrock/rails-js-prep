class PostsController < ApplicationController
  before_action :set_post, only: [:show, :edit, :update, :destroy]

  def index
    @posts = Post.all
    respond_to do |f|
      f.html {render :index}
      f.json {render json: @posts}
    end
  end

  def show
    respond_to do |f|
      f.html {render :show}
      f.json {render json: @post}
    end
  end

  def new
    @post = Post.new
  end

  def edit
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      respond_to do |f|
        f.html {redirect_to @post, notice: 'Post was successfully created.'}
        f.json {render json: @post}
      end
    else
      render :new
    end
  end
  


  def update
    if @post.update(post_params)
      respond_to do |f|
        f.html {redirect_to @post, notice: 'Post was successfully updated.'}
        f.json {render json: @post}
      end
    else
      render :edit
    end
  end


  def destroy
    @post.destroy
    respond_to do |f|
      f.html {redirect_to posts_url, notice: 'Post was successfully destroyed.'}
      f.json {head :no_content}
    end
  end

  private
    def set_post
      @post = Post.find(params[:id])
    end

    def post_params
      params.require(:post).permit(:title, :content)
    end
end
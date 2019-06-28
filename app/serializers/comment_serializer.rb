class CommentSerializer < ActiveModel::Serializer
  attributes :id, :post_id, :content
  
  belongs_to :post
end

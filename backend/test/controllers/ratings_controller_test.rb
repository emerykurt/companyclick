require 'test_helper'

class RatingsControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get ratings_new_url
    assert_response :success
  end

  test "should get create" do
    get ratings_create_url
    assert_response :success
  end

  test "should get index" do
    get ratings_index_url
    assert_response :success
  end

  test "should get edit" do
    get ratings_edit_url
    assert_response :success
  end

  test "should get update" do
    get ratings_update_url
    assert_response :success
  end

  test "should get show" do
    get ratings_show_url
    assert_response :success
  end

  test "should get destroy" do
    get ratings_destroy_url
    assert_response :success
  end

  test "should get top_review" do
    get ratings_top_review_url
    assert_response :success
  end

end

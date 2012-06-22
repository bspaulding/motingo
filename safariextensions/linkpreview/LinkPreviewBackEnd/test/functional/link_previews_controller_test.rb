require 'test_helper'

class LinkPreviewsControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:link_previews)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create link_preview" do
    assert_difference('LinkPreview.count') do
      post :create, :link_preview => { }
    end

    assert_redirected_to link_preview_path(assigns(:link_preview))
  end

  test "should show link_preview" do
    get :show, :id => link_previews(:one).to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => link_previews(:one).to_param
    assert_response :success
  end

  test "should update link_preview" do
    put :update, :id => link_previews(:one).to_param, :link_preview => { }
    assert_redirected_to link_preview_path(assigns(:link_preview))
  end

  test "should destroy link_preview" do
    assert_difference('LinkPreview.count', -1) do
      delete :destroy, :id => link_previews(:one).to_param
    end

    assert_redirected_to link_previews_path
  end
end

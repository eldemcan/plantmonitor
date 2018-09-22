require 'test_helper'

class RabbitwatchControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get rabbitwatch_index_url
    assert_response :success
  end

end

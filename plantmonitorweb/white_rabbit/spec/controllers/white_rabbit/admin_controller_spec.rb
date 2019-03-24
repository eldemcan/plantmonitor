require 'rails_helper'

SingleCov.covered!

RSpec.describe WhiteRabbit::AdminController, type: :controller do
  routes { WhiteRabbit::Engine.routes }

  describe 'GET index' do
    it 'returns successfull' do
      get :index

      expect(response.status).to eq(200)
      expect(response.content_type).to eq 'text/html'
    end

    it 'returns task_names' do
      allow_any_instance_of(WhiteRabbit::AdminController).to receive(:task_names).and_return('MyTask')

      get :task_types

      expect(response.status).to eq(200)
      expect(response.body).to eq('MyTask')
    end

    it 'creates task with given parameters' do
      params = { frequencyType: 'min', frequency: 1, jobParams: '', jobTypes: 'MyDummyTask' }
      post :create, params: params

      expect(WhiteRabbit::TaskModel.all.count).to eq(1)
    end

    it 'lists all the tasks' do
        require 'byebug';byebug
      task = FactoryBot.create(:task_model)

      get :fetch_jobs

      expect(response.status).to eq(200)
      require 'byebug'; byebug
      expect(JSON.parse(response.body)).to eq(task.id)
    end

  end
end
# frozen_string_literal: true

WhiteRabbit::Engine.routes.draw do
  get 'index', action: :index, controller: 'admin'
  # match 'index', via: [:get], action: 'index'
  # match 'tasks', via: [:get], action: 'tasks'
  # match 'create', via: [:post], action: 'create'
  # match 'fetch_jobs', via: [:get], action: 'fetch_jobs'
end

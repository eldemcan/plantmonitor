$:.push File.expand_path("lib", __dir__)

# Maintain your gem's version:
require "white_rabbit/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "white_rabbit"
  s.version     = WhiteRabbit::VERSION
  s.authors     = ["Can Eldem"]
  s.email       = ["eldemcan@gmail.com"]
  s.homepage    = ""
  s.summary     = " Summary of WhiteRabbit."
  s.description = " Description of WhiteRabbit."
  s.license     = "MIT"

  s.files = Dir["{app,config,db,lib}/**/*", "MIT-LICENSE", "Rakefile", "README.md"]

  s.add_dependency 'rails', '~> 5.2.1'
  s.add_dependency 'cronter'
  s.add_dependency 'rufus-scheduler'
  s.add_development_dependency 'sqlite3'
  s.add_development_dependency 'rspec-rails'
  s.add_development_dependency 'factory_bot_rails'
  s.add_development_dependency 'single_cov'
end

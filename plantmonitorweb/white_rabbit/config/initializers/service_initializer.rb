Rails.logger.info('Cleaning services')
WhiteRabbit::SchedulerService.clean_tasks

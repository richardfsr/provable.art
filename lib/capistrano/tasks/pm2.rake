require 'json'

namespace :pm2 do

  def app_status
    within current_path do
      ps = JSON.parse(capture :pm2, :jlist, fetch(:application))
      if ps.empty?
        return nil
      else
        # status: online, errored, stopped
        return ps[0]["pm2_env"]["status"]
      end
    end
  end

  def restart_app
    within current_path do
      execute :pm2, :restart, fetch(:application), "--update-env"
    end
  end
  
  def start_app
    within current_path do
      execute :pm2, :start, :yarn, "--name", fetch(:application), "--interpreter", :bash, "--", :start
    end
  end
  
  desc 'Restart app gracefully'
  task :restart do
    on roles(:app) do
      case app_status
      when nil
        info 'App is not registerd'
        start_app
      when 'stopped'
        info 'App is stopped'
        restart_app
      when 'errored'
        info 'App has errored'
        restart_app
      when 'online'
        info 'App is online'
        restart_app
      end
    end
  end
  
end
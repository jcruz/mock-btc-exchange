namespace :client do
  desc "Builds and bundles the client"
  task bundle: :environment do
    sh 'cd client && yarn build && cd ..'
    if File.directory?('public/static')
      FileUtils.rm_rf('public/static')
    end
    FileUtils.cp_r(Dir['client/build/*'], 'public')
  end

end

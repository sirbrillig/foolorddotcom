desc "build website"
task :build do
  system "rm -rf build/*"
  system "middleman build"
  puts "## Build complete"
  puts "To deploy, see the deploy task."
  puts <<-eos

  ## If this is your first deploy and the gh-pages branch does not exist, run the following:

  cd build && git init && git add . && git commit -m 'init' && git checkout -b gh-pages
  git remote add origin $(cd .. && git remote -v|grep origin|grep push|tail -1|ruby -ne 'puts $_.split[1]')
  git push -u origin gh-pages
  cd ..

  ## If this is your first deploy from a new clone and the gh-pages branch already exists, then use this instead:
  
  git clone $(cd .. && git remote -v|grep origin|grep push|tail -1|ruby -ne 'puts $_.split[1]') build
  cd build && git checkout gh-pages && cd ..

  eos
end

desc "deploy build directory to github pages (does not build)"
task :deploy do
  puts "## Deploying branch to Github Pages"
  cd "build" do
    system "git add ."
    system "git add -u"
    message = "Site updated at #{Time.now.utc}"
    puts "\n## Commiting: #{message}"
    system "git commit -m \"#{message}\""
    puts "\n## Pushing generated website"
    system "git push origin gh-pages"
    puts "\n## Github Pages deploy complete"
  end
end

desc "build website"
task :build do
  system "rm -rf build/*"
  system "middleman build"
end

desc "deploy build directory to github pages (does not build)"
task :deploy do
  puts "## Deploying branch to Github Pages"
  cp_r ".nojekyll", "build/"
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

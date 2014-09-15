#Michaelzoidis.com

Personal portfolio of Michael Zoidis
[@mikezoidis](https://twitter.com/mikezoidis "Follow me on twitter")


##Rules of the repo
* Please do not commit css, currently using sass as our pre-processor
* All js must past jshint
* Sass has been attempted to be written using [smacss](http://smacss.com/)

##Runing the development server
0. Install [node.js](http://nodejs.org/)
1. Run 'npm install' from the main directory
2. Run 'npm install -g grunt-cli'
3. Run 'grunt serve' from the root folder to:

* start a node.js server on http://localhost:3000
* watch for changes to js files in app/ and restart the node server
* watch for sass changes and recompile css

##Deploying
0. navigate to /var/www/michaelzoidis.com on the server
1. pull in you most resent changes using git,
2. run grunt compile
3. forever restartall
4  sudo service nginx restart

##Todo
* Introduce grunt tasks and minify js with uglifyjs
* Introduce requirejs
* Introduce feature branches

##Wireframes
Available [here](https://www.sendspace.com/file/5v0gmf)

![Michaelzoidis](https://s3.amazonaws.com/assets.svpply.com/large/1873650.jpg?1388011367)

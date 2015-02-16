App = window.App = Ember.Application.create();
App.set('appId', '1536032630009134');
App.set('title', 'West Connect');
Ember.ENV.RAISE_ON_DEPRECATION = false;
Ember.LOG_STACKTRACE_ON_DEPRECATION = false;

App.Router.map(function(){
	this.resource('index', { path: "/"});
  this.resource('projects', { path: "/projects"});
	// this.resource('blog', {path: '/blog'}, function(){
 //    this.route('flip');
 //    this.route('about');
 //  });
});

App.ProjectsRoute = Ember.Route.extend({
  model: function() {
    var objects = [];
    //to handle the array less thing with foreach, just add index as a property. Count is also valuable.
    var tuna = {
      bgurl: "img/tunadbo.jpg",
      title: "Tuna", 
      body: "Tuna is a music discovery application."
    };
    var greatest = {
      bgurl: "img/great.png", 
      title: "Greatest", 
      body: "You best believe"
    };
    var sus = {
      bgurl: "img/combatix.png",
      title: "Combatix", 
      body: "Small video game"
    }
    var trust = {
      bgurl: "img/great.png", 
      title: "The Trustiest of the trust", 
      body: "Ya know"
    }
    objects.pushObject(tuna);
    objects.pushObject(greatest);
    objects.pushObject(sus);
    objects.pushObject(trust);
    for(i = 0; i< objects.length; i++)
    {
      objects[i].lynk = "http://tunadbo.appspot.com";
      objects[i].image =  "background-image:url('"+objects[i].bgurl+"');";
      if(objects.length%3 == 0 || i < objects.length - objects.length%3)
        objects[i].sass = "col-lg-4 col-sm-12";
      else if(objects.length%3 == 1 && i >= objects.length - 1)
      {
        objects[i].sass= "col-lg-12";
        objects[i].body="touch it";
      }
      else if(objects.length%3 == 2 && i >= objects.length - 2)
        objects[i].sass = "col-lg-6";
      objects[i].sass += "heedthis hvr-grow";
  
    }
    return objects;
  }
});
App.BlogRoute = Ember.Route.extend({
  model: function(){
    return[{
      title: "The first blog post",
      text: "Since OG Mack Came Home. I was blood ready, joining gangs was no options it was a lifestyle"
    }, {
      title: "Questions reality", 
      text: "Approaching the world with a simplified understanding can prevent stress"
    }, {
      title: "Eyes bloody read",
      text: "When you question whether reality is as it seems: sus boi"
    }, {
      title: "Ratatat",
      text: "And you go see tha lord"
    }]
  }
});
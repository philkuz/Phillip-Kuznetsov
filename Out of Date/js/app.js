App = window.App = Ember.Application.create();
App.set('appId', '1536032630009134');
App.set('title', 'West Connect');
Ember.ENV.RAISE_ON_DEPRECATION = false;
Ember.LOG_STACKTRACE_ON_DEPRECATION = false;

App.Router.map(function(){
	this.resource('index', { path: "/"});
  this.resource('projects', { path: "/projects"});
});

App.ProjectsRoute = Ember.Route.extend({
  projects: [],
  actions: {
    expand: function(project) {
      console.log(this.projects.indexOf(project));

      Ember.set(project,'isExtended', true);
    },
    contract: function(project){
      Ember.set(project,'isExtended', false);
    }
  },
  model: function() {
    var objects = [];
    //to handle the array less thing with foreach, just add index as a property. Count is also valuable.
    var tuna = {
      bgurl: "img/tunadbo.jpg",
      title: "Tuna", 
      body: "Tuna is a music discovery application. But is it really? TONIGHT, we investigate. ",
      content: "This is the content"
    };
    var greatest = {
      bgurl: "img/great.png", 
      title: "Greatest", 
      body: "You best believe",
      content: "This is the content"
    };
    var sus = {
      bgurl: "img/combatix.png",
      title: "Combatix", 
      body: "Small video game\n",
      content: "This is the content"
    };
    var trust = {
      bgurl: "img/great.png", 
      title: "The Trustiest of the trust\n", 
      body: "Ya know",
      content: "This is the content"
    };
    objects.pushObject(tuna);
    objects.pushObject(greatest);
    objects.pushObject(sus);
    objects.pushObject(trust);

    //layout formatting plus complete formating.
    for(i = 0; i< objects.length; i++)
    {
      objects[i].lynk = "http://tunadbo.appspot.com";
      objects[i].image =  "background-image:url('"+objects[i].bgurl+"');";
      objects[i].isExtended = false;
      //Note: This is for a grid like layout, I'm wondering if we should just do full width.
      // if(objects.length%3 == 0 || i < objects.length - objects.length%3)
      //   objects[i].sass = "col-lg-4 col-sm-12";
      // else if(objects.length%3 == 1 && i >= objects.length - 1)
      // {
      //   objects[i].sass= "col-lg-12";
      //   objects[i].body="touch it";
      // }
      // else if(objects.length%3 == 2 && i >= objects.length - 2)
      //   objects[i].sass = "col-lg-6";
      objects[i].sass = "col-lg-12 col-sm-12 col-xs-12";
      objects[i].sass += " heedthis hvr-fade";
  
    }
    this.projects = objects;
    return objects;
  }
});
App.AdminRoute = Ember.Route.extend({

})

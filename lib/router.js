Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound'
});

Router.route('/', {
    name: 'homeIndex',
    data: function () {
        return {
            message: 'Welcome to The Rocket Shop'
        }
    }
});

Router.route('/contact', {
    name: 'contactIndex',
    data: function () {
        return {
            message: 'Contact Page'
        }
    }
});

Router.route('/about', {
    name: 'aboutIndex',
    data: function () {
        return {
            message: 'About Page'
        }
    }
});
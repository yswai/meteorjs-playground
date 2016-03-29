Template.homeIndex.helpers({
    featured : function(){
        return ProductService.getFeatured();
    }
});
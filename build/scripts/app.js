/*
 * dev-design-in
 * v. 0.0.2
 * Monday, February 23rd, 2015, 8:34:37 PM
 * 
 * 2015 Andrzej Dubiel | http://adubiel.me/
 */

 // create the module and name it scotchApp
 var app = angular.module('app', ['ui.router', 'ngResize']); 

  app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 'resizeProvider', 
    function($stateProvider, $urlRouterProvider, $locationProvider, resizeProvider) {
        
          $urlRouterProvider.otherwise('/');
    
          $stateProvider
              .state('root', {
        
                url: '/:slug?',
                templateUrl: 'views/grid.html',
                controller : 'MainCtrl',
                resolve: {
                  collectionData: function (dataService) {
                    return dataService.getData();
                  }
                }
              })
             .state('search', {
              url: '/search',
              templateUrl: 'views/grid.html',
              controller : 'NavCtrl'
            })

            $locationProvider.html5Mode(true);

            resizeProvider.throttle = 500;
            resizeProvider.initBind = true;
  }]);

  app.controller('MainCtrl', [ '$rootScope', '$scope', '$state', '$filter', 'collectionData', 
    function($rootScope, $scope, $state, $filter, collectionData){

      $scope.init = function() {
        //?
        $('body').removeClass('nav-opened');
        $rootScope.collection = collectionData;
        $rootScope.categories = $rootScope.collection.categories;
        $rootScope.current = $state.params.slug;
        $rootScope.limitAll = 5;
        $rootScope.tags = $filter('filter')($rootScope.collection.categories, { 'slug': $rootScope.current},true)[0].tags;

        $rootScope.currentTag = 'all';

        if($rootScope.current === '') {
          $rootScope.items = $rootScope.collection.items;
          $rootScope.limit = $rootScope.limitAll;
        }
        else { 
          $rootScope.items = $filter('filter')($rootScope.collection.items, { 'categories': {'slug': $rootScope.current} }, true); 
          $rootScope.limit = $rootScope.items.length;
        }


      }

      $scope.init();
  }]);

  app.controller('NavCtrl', [ '$scope', '$rootScope', '$filter', '$state', function($scope, $rootScope, $filter, $state){
        
        $scope.filterData = function() {  
          $rootScope.currentTag = this.tag.slug;

          if($rootScope.current === '') {
             $rootScope.items = $filter('filter')($rootScope.collection.items, {'tags': { 'slug': this.tag.slug } }, true);       
          }
          else {
            $rootScope.items = $filter('filter')($rootScope.collection.items, 
              { 'categories': {'slug': $rootScope.current}, 'tags': { 'slug': this.tag.slug } }, true); 
          }             
        }

        $scope.showAll = function(slug) { 
           $rootScope.currentTag = 'all'; 
           $scope.resetSearch();

          if($rootScope.current === '') {
             $rootScope.limit = $rootScope.limitAll;
             $rootScope.items = $rootScope.collection.items;
          }
          else { 
            $rootScope.items = $filter('filter')($rootScope.collection.items, { 'categories': {'slug': $rootScope.current} }, true); 
            $rootScope.limit = $rootScope.items.length;
          }
        };

        $scope.mobileNav = function() {
            $('body').toggleClass('nav-opened');
        }

        $scope.resetSearch = function() {
          $scope.search = undefined;
        }

        $scope.modal = function() {
          $('.about').toggleClass('modal-opened');
        }

        $scope.$watch('search', function(query){
          
          if(query) {
            $state.transitionTo('search');
            if(query.length >= 3) {
               
              var results = $filter('filter')($rootScope.collection.items, { 'keywords': query }, false); 
              if(results.length > 0) {
                $rootScope.items = results;
                $rootScope.limit = results.length;
                $scope.resultCount = results.length;
              }
              else {
                $rootScope.items = [];
                $scope.resultCount = 0; 
              }              
            }
            else {
              $scope.resultCount = 0;
              $rootScope.items = [];

            }
          }
          else {
            $scope.resultCount = 0;
            $state.transitionTo('root', {'slug': $rootScope.current });
      
          } 
        });

  }]);


  app.directive('resizeLayout', ['resize', function(resize){
    return{
      link: function($scope, $element, $attributes){
        $scope.$on('resize', function($event){
          var header = $('.header').outerHeight(true);
          var win = $(window).height();

          $element[0].style.height = win - header + 'px'   
        });
      }
    };
  }]);

  app.service('dataService', ['$http','myCache',function($http, myCache) {
    var requestPromise = $http.get('../data/collection.json').then(function(d) {
      return d.data;
    });

    this.getData = function() {
      var cache = myCache.get('myData');  
      if(cache) {
        return cache;
      }
      else {
         myCache.put('myData', requestPromise);
         return requestPromise; 
      }
    };
  }]);

  app.factory('myCache', ['$cacheFactory', function($cacheFactory){
    return $cacheFactory('myData');
  }]);

  app.directive('isotopeGrid', ['$timeout', '$rootScope', function ($timeout, $rootScope) {
    return {
        scope: {
            items: '=isotopeGrid'
        },
        link: function (scope, element, attrs) {
           
          var options = {
              itemSelector: '.cell',
              isotope: {
                columnWidth: '.grid-sizer'
              },   
              sortAscending: true,
              containerStyle: {
                position: 'relative'
              }
          };
          
          $(element).isotope(options);

          $rootScope.$watch('items', function(newVal, oldVal){
             $timeout(function(){
                  $(element).isotope( 'reloadItems' ).isotope({ sortBy: 'original-order' }); 
             });
          },true);    
        }
      };
    }]);


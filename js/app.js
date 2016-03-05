var app = angular.module('calc', []);

app.controller('myController', function($scope){
    
    $scope.caso1; // cálculo da média
    $scope.resultado;//mensagem resultado
    $scope.classe; // classe bootstrap
    $scope.maior;
    $scope.av1;
    $scope.av2;
    $scope.av3;
    $scope.result;
    
    //desabilitar;
    $scope.desabilitar; // ng-disabled
    $scope.esconder; ///ng-show ou ng-hide | não funciona agora!
    
    $scope.showModal = false;
    $scope.toggleModal = function(){
    $scope.showModal = !$scope.showModal;
    };
        
    //função para resetar formulário
    $scope.reset = function(){
      $('#notas').each (function(){
          
          /*
          alert($scope.av1);
          alert($scope.av2);
          alert($scope.av3);
          */
          
          this.reset();
      });
    }
    
    
    
    $scope.media = function(){
        
        $scope.caso1 = ($scope.av1 + $scope.av2) / 2;
        // || ou                    && e             > maior  == igual    >= maior igual    < menor    <= menor igual
        
        //aprovado
        if(($scope.caso1 >= 6) && ($scope.av1 >= 6 && $scope.av2 >=6)){
            
            $scope.resultado = "Aprovado!"; 
            $scope.classe = "label label-success";
            $scope.result = "img/passou.png";
         
        }
        // media igual a 6 av1 igual a 4 e av2 maior igual a 8
        else if(($scope.caso1 >= 6) && ($scope.av1 == 4 && $scope.av2 >=8)){
            $scope.resultado = "Aprovado!"; 
            $scope.classe = "label label-success";
            $scope.result = "img/passou.png";
        }
        
        // media igual a 6 av2 igual a 4 e av1 maior igual a 8
        else if(($scope.caso1 >= 6) && ($scope.av2 == 4 && $scope.av1 >=8)){
            $scope.resultado = "Aprovado!"; 
            $scope.classe = "label label-success";
            $scope.result = "img/passou.png";
        }
        
        
        
        // media menor que 6 e av1 menor que 4 e av2 igual a 4
        else if(($scope.caso1 < 6) && ($scope.av1 < 4 && $scope.av2 == 4)){
            alert('entrou aqui av1 menor que 4');
            $scope.resultado = "Faça Av3!";
            $scope.classe = "label label-warning";
            $scope.result = "img/av3.png";
            
            if($scope.av3 >= 8){
                alert('entrou aqui here');
                $scope.caso1 = 0;
                $scope.caso1 = ($scope.av3 + $scope.av2) / 2;
                $scope.resultado = "Aprovado!"; 
                $scope.classe = "label label-success";
                $scope.result = "img/passou.png";
            }
        }
        
        //media menor que 6 e av2 menor que 4 e av1 igual a 4
        else if(($scope.caso1 < 6) && ($scope.av2 < 4 && $scope.av1 == 4)){
            alert('entrou aqui av2 menor que 4');
            $scope.resultado = "Faça Av3!";
            $scope.classe = "label label-warning";
            $scope.result = "img/av3.png";
            
            if($scope.av3 >= 8){
                alert('entrou aqui here');
                $scope.caso1 = 0;
                $scope.caso1 = ($scope.av3 + $scope.av1) / 2;
                $scope.resultado = "Aprovado!"; 
                $scope.classe = "label label-success";
                $scope.result = "img/passou.png";
            }
            else if($scope.av3 < 8){
                alert('reprovado');
                $scope.caso1 = 0;
                $scope.caso1 = ($scope.av3 + $scope.av1) / 2;
                $scope.resultado = "Reprovado!"; 
                $scope.classe = "label label-danger";
                $scope.result = "img/reprovado.png";
            }
        }
        
        
        
        //av1 menor que 4 e média igual a 6
        else if(($scope.av1 < 4) && ($scope.caso1 == 6)){
            
            $scope.resultado = "Faça Av3!";
            $scope.classe = "label label-warning";
            $scope.result = "img/av3.png";
            
            //av3 maior igual a quatro e media maior igual a 6
            if(($scope.av3 >=4) && ($scope.caso1 >=6)){
            alert('entrou aqui');
            $scope.caso1 = 0;
            $scope.caso1 = ($scope.av3 + $scope.av2) / 2;
            $scope.resultado = "Aprovado!";
            $scope.classe = "label label-success";
            $scope.result = "img/passou.png";
            alert($scope.caso1);
            }
            // av3 menor que 4 e média maior ou igual a 6
            else if(($scope.av3 < 4) && ($scope.caso1 >= 6)){
            alert('entrou aqui 2');
            $scope.caso1 = 0;
            $scope.caso1 = ($scope.av3 + $scope.av2) / 2;
            $scope.resultado = "Reprovado!";
            $scope.classe = "label label-danger";
            $scope.result = "img/reprovado.png";
            alert($scope.caso1);
            }
            
           
        }
        
         //av2 menor que 4 e média igual a 6
        else if(($scope.av2 < 4) && ($scope.caso1 == 6)){
            
            $scope.resultado = "Faça Av3!";
            $scope.classe = "label label-warning";
            $scope.result = "img/av3.png";
            
            //av3 maior igual a quatro e media maior igual a 6
            if(($scope.av3 >=4) && ($scope.caso1 >=6)){
            alert('entrou aqui');
            $scope.caso1 = 0;
            $scope.caso1 = ($scope.av3 + $scope.av1) / 2;
            $scope.resultado = "Aprovado!";
            $scope.classe = "label label-success";
            $scope.result = "img/passou.png";
            alert($scope.caso1);
            }
            // av3 menor que 4 e média maior ou igual a 6
            else if(($scope.av3 < 4) && ($scope.caso1 >= 6)){
            alert('entrou aqui 2');
            $scope.caso1 = 0;
            $scope.caso1 = ($scope.av3 + $scope.av1) / 2;
            $scope.resultado = "Reprovado!";
            $scope.classe = "label label-danger";
            $scope.result = "img/reprovado.png";
            alert($scope.caso1);
            }
            
            
        }
        
        else if($scope.av1 >= 4 && ($scope.caso1 < 6)){
            alert('entrou aqui av1 maior igual a 4 e media menor que 6');
            $scope.resultado = "Faça Av3!";
            $scope.classe = "label label-warning";
            $scope.result = "img/av3.png";
            
       
        } 
        else if(($scope.av2 >= 4) && ($scope.caso1 < 6)){
            alert('entrou aqui av2 maior igual a 4 e media menor que 6');
            $scope.resultado = "Faça Av3!";
            $scope.classe = "label label-warning";
            $scope.result = "img/av3.png";
            
            
            if(($scope.av3 == 4 ) && ($scope.av2 >= 8)){
                alert('aprovado');
                $scope.caso1 = 0;
                $scope.caso1 = ($scope.av3 + $scope.av2) / 2;
                $scope.resultado = "Aprovado!";
                $scope.classe = "label label-success";
                $scope.result = "img/passou.png";
            }
            else if(($scope.av3 >= 4) && ($scope.av2 >= 8)){
                $scope.caso1 = 0;
                $scope.caso1 = ($scope.av3 + $scope.av2) / 2;
                $scope.resultado = "Aprovado!";
                $scope.classe = "label label-success";
                $scope.result = "img/passou.png";
            }
            
            else if(($scope.av3 >= 5) && ($scope.av2 >= 7)){
                $scope.caso1 = 0;
                $scope.caso1 = ($scope.av3 + $scope.av2) / 2;
                $scope.resultado = "Aprovado!";
                $scope.classe = "label label-success";
                $scope.result = "img/passou.png";
            }
            
            
            else if(($scope.av3 == 8 ) && ($scope.av2 >= 4)){
                alert('aprovado');
                $scope.caso1 = 0;
                $scope.caso1 = ($scope.av3 + $scope.av2) / 2;
                $scope.resultado = "Aprovado!";
                $scope.classe = "label label-success";
                $scope.result = "img/passou.png";
            }
            else if(($scope.av3 >= 8) && ($scope.av2 >= 4)){
                $scope.caso1 = 0;
                $scope.caso1 = ($scope.av3 + $scope.av2) / 2;
                $scope.resultado = "Aprovado!";
                $scope.classe = "label label-success";
                $scope.result = "img/passou.png";
            }
            
            else if(($scope.av3 >= 7) && ($scope.av2 >= 5)){
                $scope.caso1 = 0;
                $scope.caso1 = ($scope.av3 + $scope.av2) / 2;
                $scope.resultado = "Aprovado!";
                $scope.classe = "label label-success";
                $scope.result = "img/passou.png";
            }
            
            
            else if(($scope.av3 >= 6) && ($scope.av2 >= 6)){
                alert($scope.caso1);
                $scope.caso1 = 0;
                $scope.caso1 = ($scope.av3 + $scope.av2) / 2;
                $scope.resultado = "Aprovado!";
                $scope.classe = "label label-success";
                $scope.result = "img/passou.png";
                alert('aprovado!!!!!');
            }
            else if(($scope.av3 < 4 ) || ($scope.av3 <=4 && $scope.av2 <= 7.9)){
                alert('reprovado');
                $scope.caso1 = 0;
                $scope.caso1 = ($scope.av3 + $scope.av2) / 2;
                $scope.resultado = "Reprovado!";
                $scope.classe = "label label-danger";
                $scope.result = "img/reprovado.png";
            }
        }
    
        
        //reprovado
        else if($scope.caso1 <= 3.9 && $scope.av1 < 4 && $scope.av2 < 4){
            $scope.resultado = "Reprovado!";
            $scope.classe = "label label-danger";
            $scope.result = "img/reprovado.png";
        }
        
        
        return this.$scope.caso1;
    
          
    }


       
});
/*Chamada modal*/

app.directive('modal', function () {
    return {
      template: '<div class="modal fade">' + 
          '<div class="modal-dialog">' + 
            '<div class="modal-content">' + 
              '<div class="modal-header">' + 
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' + 
                '<h4 style="text-align: center; color: #03A9F4;" class="modal-title">{{ title }}</h4>' + 
              '</div>' + 
              '<div class="modal-body" ng-transclude></div>' + 
            '</div>' + 
          '</div>' + 
        '</div>',
      restrict: 'E',
      transclude: true,
      replace:true,
      scope:true,
      link: function postLink(scope, element, attrs) {
        scope.title = attrs.title;

        scope.$watch(attrs.visible, function(value){
          if(value == true)
            $(element).modal('show');
          else
            $(element).modal('hide');
        });

        $(element).on('shown.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = true;
          });
        });

        $(element).on('hidden.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = false;
          });
        });
      }
    };
  });




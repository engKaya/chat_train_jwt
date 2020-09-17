app.controller('kayitController', ['$scope','indexFactory',($scope,indexFactory)=>{
    indexFactory.connectSocket('http://localhost:3000').then((socket)=>{
      socket.emit('kayitController')

      $scope.kayitOl = () =>{
          const newUser = {
              username: $scope.kullaniciAdi,
              password: $scope.sifre
          }

          socket.emit('kullaniciKayit',newUser)
      }
    })
}])
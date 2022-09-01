 function highestrepeated(string) {
    var count = 0,
        result = '';
     string.split('').forEach(function(char){
       if(string.split(char).length > count) {
           count = string.split(char).length;
           result = char;
        }
     });
     return result;
   };
   console.log(highestrepeated("today is the greatest day"))
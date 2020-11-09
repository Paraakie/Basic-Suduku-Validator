/*Suduku validate logic*/


//Maybe use React?

var size = 9;
var sudokuField =   [   
                        [0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0 ]
                    ];


var prev = null;
sudokuField.sort();
for(var i = 0; i < size; i++){
	prev = "123456789";
	for(var j = 0; j < size; j++) {
		var num = sudokuField[i][j];
		if(num === 0) continue;
		if (prev.contains(num.toString())) { 
			// No duplicate
	      		console.log('No Duplicate');
			prev.replace(num, '')
      		} else {
        		//Found duplicate
        		console.log('Duplicate')      
		}
  		prev = sudokuField[i][j];
  	}
}

 
    
    
    

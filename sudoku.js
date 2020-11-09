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
	for(var j = 0; j < size; j++) {
		if ( sudokuField[i][j] !== prev) { 
			// No duplicate
	      		console.log('No Duplicate')
      		} else {
        		//Found duplicate
        		console.log('Duplicate')      
		}
  		prev = sudokuField[i][j];
  	}
}

 
    
    
    

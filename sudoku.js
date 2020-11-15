/*Suduku validate logic*/


//Maybe use React?

var size = 9;
var sudokuField =   [   
                        [1, 2, 3, 3, 3, 1, 0, 0, 0 ],
                        [4, 5, 6, 0, 0, 0, 0, 0, 0 ],
                        [7, 8, 9, 0, 0, 0, 0, 0, 0 ],
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
	
	//=== Use basic algorithm  for Rows / Colmns / Squares seperatly =====
	prev = "123456789";
	for(var j = 0; j < size; j++) {

		
		var num = sudokuField[i][j];
		if(num === 0) continue;
		if (prev.includes(num.toString())) { 
			// No duplicate
	      		console.log('No Duplicate');
				prev = prev.replace(num.toString(), '');
				console.log(prev)
      		} else {
        		//Found duplicate
				console.log('Duplicate - Number: ', num)      
				
		}

	}
	//=============================
}

console.log(sudokuField)
 
    
    
    

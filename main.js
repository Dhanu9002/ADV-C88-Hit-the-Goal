var canvas = new fabric.Canvas('myCanvas');
// Create canvas variable

//Set initial positions for ball and hole images.

ball_x=0;
ball_y=0;
hole_x=800;
hole_y=400;


block_image_width = 5;
block_image_height = 5;

function load_img(){
	// write code to Upload golf image on the canvas
	new_image();
}

function load_image(){
	fabric.Image.fromURL("golf-h.png",function(Img){

		hole.obj = Img;
		hole.obj.scaleToWidth(50);
		hole.obj.scaleToHeight(50);
		hole.obj.set({

			top:hole_y,
			left:hole_x
		});
		canvas.add(hole.obj);
	})
	new_image();
	// write code to Upload ball image on canvas
}

function new_image(){
	fabric.Image.fromURL("ball.png",function(Img){

		ball.obj = Img;
		ball.obj.scaleToWidth(50);
		ball.obj.scaleToHeight(50);
		ball.obj.set({

			top:hole_y,
			left:hole_x
		});
		canvas.add(ball.obj);
	})
	// write code to Upload ball image on canvas
}

if((ball_x==hole_x)&&(ball_y==hole_y)){
	canvas.remove(ball.obj);
	document.getElementById("hd3").innerHTML="You have Hit the Goal!!!";
	document.getElementById("myCanvas").style.borderColor="red";
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);

	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	
	
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	
	
	function up()
	{
		if(ball_y >=0){
			ball_y = ball_y - block_image_height;
			console.log("Block image height = "+block_image_height);
			console.log("When down arrow key is pressed, X = "+ ball_x+", Y = "+ball_y);
			canvas.remove(ball.obj);
			new_image();
		}
		// Write a code to move ball upward.
	}

	function down()
	{
		if(ball_y <=450){
			ball_y = ball_y + block_image_height;
			console.log("Block image height = "+block_image_height);
			console.log("When down arrow key is pressed, X = "+ ball_x+", Y = "+ball_y);
			canvas.remove(ball.obj);
			new_image();
		}
		 // Write a code to move ball downward.
	}

	function left()
	{
		if(ball_x >5)
		{
			ball_x = ball_x - block_image_height;
			console.log("Block image height = "+block_image_height);
			console.log("When down arrow key is pressed, X = "+ ball_x+", Y = "+ball_y);
			canvas.remove(ball.obj);
			new_image();

			// Write a code to move ball left side.
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x = ball_x + block_image_height;
			console.log("Block image height = "+block_image_height);
			console.log("When down arrow key is pressed, X = "+ ball_x+", Y = "+ball_y);
			canvas.remove(ball.obj);
			new_image();
			// Write a code to move ball right side.
		}
	}
	
}


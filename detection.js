function detect(carX,carY,carW,obsX,obsY,obsW,obsH){
	var collide;
	if(carY==obsY+obsH){
		if(((carX>=obsX)&&(carX<=obsX+obsW))||((carX+carW>=obsX)&&(carX+carW<=obsX+obsW))){
			collide=true;
		}
		if((obsX>=carX)&&(obsX+obsW<=carX+carW)){
			collide=true;
		}
		else{
			collide=false;
		}
	}
}

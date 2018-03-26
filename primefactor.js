function prime(num) {
	while(num%2===0) {
		document.write(2 + '<br>');
		num=num/2;
	};
	for(i=3;i<=Math.sqrt(num);i+=2) {
		while(num%i===0) {
			document.write(i + '<br>');
			num = num/i;
		};
	};
	if(num>2) {
		document.write(num);
	};
};
prime(prompt('Enter a number'));
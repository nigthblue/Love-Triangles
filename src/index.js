/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var c=0;
  for (i = 1; i <= preferences.length; i++) {
	if((preferences[i-1]==0)||((preferences[(preferences[i-1])-1])==0)||(preferences[i-1]==preferences[(preferences[i-1])-1])){
		continue;
	}
	if((true)&&i==(preferences[(preferences[(preferences[i-1])-1])-1])){
		c++;
	}
	}
  return c/3;
};

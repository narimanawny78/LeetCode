var maxArea = function(height) {
    let left = 0;
    let right = height.length -1;

    let maximum =0;

    while(left < right){
        let width = right - left;

        let area = Math.min(height[left] , height[right]) * width;

        maximum = Math.max(maximum, area);

        if(height[left] <= height[right]){
            left++;
        }else{
            right--
        }
    }

    return maximum;

    
};
// 11. Container With Most Water

// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.
// Notice that you may not slant the container.

// Example 1:
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1

var maxArea = function(height) {
    let l=0;
    let r=height.length-1;
    let max=0;
    while(l < r){
        let lh=height[l];
        let rh=height[r];

        let min_h=Math.min(lh,rh);
        let len= r-l
        let area=min_h * len
        
        max = Math.max(max,area)

        if(lh < rh){
            l++;
        }else{
            r--
        }
    }
    return max;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49
console.log(maxArea([1,1])); // 1
console.log(maxArea([0,1,0,2,1,0,1,3,2,1,2,1])); // 14
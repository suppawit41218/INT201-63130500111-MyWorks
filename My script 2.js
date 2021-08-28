function menu(choice){​​​​​​​​

switch(choice){​​​​​​​​
case 1 : let sum = 0;
 for(i =0;i<nums.length;i++){​​​​​​​​
sum += nums[i]
}​​​​​​​​
console.log(sum);break;


case 2 : let min = 101;
for(i=0;i<nums.length;i++){​​​​​​​​
if(nums[i] < min){​​​​​​​​
min = nums[i]
}​​​​​​​​
console.log(min);break;}

case 3 : let max = 0;
for(i=0;i<nums.length;i++){​​​​​​​​
if(max < nums[i]){​​​​​​​​
max = nums[i]
}​​​​​​​​
console.log(max);
}​​​​​​​​

} }


menu(1);

menu(2);

menu(3);

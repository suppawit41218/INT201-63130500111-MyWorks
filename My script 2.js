functionmenu(choice){​​​​​​​​

switch(choice){​​​​​​​​
case1 : letsum = 0;
 for(i =0;i<nums.length;i++){​​​​​​​​
sum += nums[i]
}​​​​​​​​
console.log(sum);break;


case2 : letmin = 101;
for(i=0;i<nums.length;i++){​​​​​​​​
if(nums[i] < min){​​​​​​​​
min = nums[i]
}​​​​​​​​
console.log(min);break;}

case3 : letmax = 0;
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

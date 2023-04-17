import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent {
divFlag = false
arr =[1,2]
num = 4
numArray = [1,2,3,4,5,6,7,8,9]
date = new Date() .getMonth();
month = ["January", "February", "March", "April","May","june","July","August","September","October","Nobembe","Decmner"]
classFlag = true
class1 ='bg-danger'
class2 = 'text-white'
textBlue = 'blue'
handleClick(){
  console.log('Angular')
}

arrr = [1,2,3]
}




import { Component } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
posts = [{
  title : 'post title 1 ',
  body : 'Posts 1  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti velit tempore reiciendis quod dolorum repellat dolore. Consectetur modi aliquid quidem dolore sed eaque ab, eveniet tempore molestiae iusto beatae dicta!'
},
{
  title : 'post title 2 ',
  body : 'Posts 2  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti velit tempore reiciendis quod dolorum repellat dolore. Consectetur modi aliquid quidem dolore sed eaque ab, eveniet tempore molestiae iusto beatae dicta!'
},

{
  title : 'post title 3 ',
  body : 'Posts 3  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti velit tempore reiciendis quod dolorum repellat dolore. Consectetur modi aliquid quidem dolore sed eaque ab, eveniet tempore molestiae iusto beatae dicta!'
},
{
  title : 'post title 4 ',
  body : 'Posts 4  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti velit tempore reiciendis quod dolorum repellat dolore. Consectetur modi aliquid quidem dolore sed eaque ab, eveniet tempore molestiae iusto beatae dicta!'
}]



}

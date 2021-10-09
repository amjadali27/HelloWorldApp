import{Component} from '@angular/core'

@Component({
    selector: 'test-app',
    templateUrl:'./test-app.component.html',
    styleUrls:['./test-app.component.css']
//     template: `
//         <h3> Angular Tutorial</h3>
//         <p>Learning Angular development from Angular official documentation</p>
//     `,
//     styles: ['h3{text-align:center;}','p{color:blue}p{text-align:center}']
})

export class TestAppComponent{
    title="Test App";
}
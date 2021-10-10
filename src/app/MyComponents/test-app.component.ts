import{AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit} from '@angular/core'

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

export class TestAppComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked
,AfterViewInit,AfterViewChecked,OnDestroy{

    @Input() num : number;
    
    constructor(){
        this.num = 0;
        alert('constructor invoked');
    }
    ngOnDestroy(): void {
        alert('On Destroy Hook Called');
    }
    ngAfterViewChecked(){
        alert('After View Checked Hook Called');
    }
    ngAfterViewInit(){
       alert('After View Init Hook Called');
    }
    ngAfterContentChecked(){
         alert('After Content Checked Hook Called');
    }
    ngAfterContentInit() {
        alert('After Content Init Hook Called');
    }
    ngDoCheck(){
       alert('Do Check Hook invoked');
    }
    ngOnChanges(){
        alert('OnChanges Hook invoked');
    }
    ngOnInit(){
        alert('OnInit Hook invoked');
    }
    title="Test App";
}
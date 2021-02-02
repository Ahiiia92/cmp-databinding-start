import {
  Component,
  OnInit,
  Input,
  OnChanges,
  DoCheck,
  SimpleChange,
  AfterContentChecked,
  AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() {
    console.log('constructor called')
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges called!");
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
    console.log('Test Content: ' + this.header.nativeElement.textContent);
    console.log('Test Content of Paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  // Whenever Angular checks for Changes
  ngDoCheck() {
    console.log('ngDoCheck is called!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit is called!');
    console.log('Test Content of Paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  // After ngAfterContentInit
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked is called!');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked is called!');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit is called!');
    console.log(this.header.nativeElement.textContent);

  }

  // Add a btn destroy in the App component, with a method #onDestroyFirst
  ngOnDestroy() {
    console.log('ngOnDestroy is called!')
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'xe-<%= name %>',
  template: require('./<%= name %>.html')
})
export class <%= upperCamelCaseFn(name) %>Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component } from '@angular/core';
import { NgbTabset, NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'app-tab-component',
  templateUrl: 'tab.component.html',
  styleUrls: ['tab.component.css'],
  providers: [NgbTabset, NgbTabsetConfig]
})
export class TabComponent { }

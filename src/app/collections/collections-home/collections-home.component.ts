import { Component } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  standalone: false,
  templateUrl: './collections-home.component.html',
  styleUrl: './collections-home.component.css',
})
export class CollectionsHomeComponent {
  data: any = [
    { name: 'James', age: 24, job: 'Designer', employed: true },
    { name: 'Jill', age: 26, job: 'Engineer', employed: false },
    { name: 'Elyse', age: 25, job: 'Engineer', employed: true },
  ];
  headers: any = [
    { key: 'employed', label: 'Is employed?' },
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
  ];
}

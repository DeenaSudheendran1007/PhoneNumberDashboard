import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: false,
  
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Output() filterChange = new EventEmitter<string>();

  onStatusChange(event: { value: any; }): void {
    this.filterChange.emit(event.value);
  }
}



import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NumbersService } from '../../services/numbers.service';

@Component({
  selector: 'app-phone-dashboard',
  standalone: false,
  
  templateUrl: './phone-dashboard.component.html',
  styleUrl: './phone-dashboard.component.css'
})
export class PhoneDashboardComponent {
  numbers: any[] = [];
  displayedColumns: string[] = ['number', 'status', 'messages'];
  dataSource = new MatTableDataSource([]);
  @ViewChild(MatSort,{ static: true }) sort!: MatSort;

  constructor(private numberService: NumbersService) {}

  ngOnInit(): void {
    this.numberService.getNumbers().subscribe((data: never[]) => {
      this.numbers = data;
      this.dataSource.data = data;
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  onFilterChange(filterValue: string): void {
    console.log("filter value: ", filterValue);
    this.dataSource.filterPredicate = (number: any , filter: string) => {
      return number.status ==  filter;
    };
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  filterResults(number: any){
    this.dataSource.filterPredicate = (number: any , filter: string) => {
      return number.number.includes(filter);
    };
    this.dataSource.filter = number;
  }

  onStatusChange(number: any, isActive: boolean): void {
    number.status = isActive ? 'active' : 'inactive';
    this.dataSource.data = [...this.dataSource.data];
  }
}

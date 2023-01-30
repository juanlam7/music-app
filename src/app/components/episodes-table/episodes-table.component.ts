import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  title: string;
  date: string;
  duration: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { title: 'Lorem Ipsum is simply dummy text', date: '1/3/2016', duration: '14:00' },
  { title: 'Lorem Ipsum is simply dummy text', date: '18/2/2016', duration: '15:03' },
  { title: 'Lorem Ipsum is simply dummy text', date: '23/11/2015', duration: '12:18' },
  { title: 'Lorem Ipsum is simply dummy text', date: '1/3/2016', duration: '14:00' },
  { title: 'Lorem Ipsum is simply dummy text', date: '18/2/2016', duration: '15:03' },
  { title: 'Lorem Ipsum is simply dummy text', date: '23/11/2015', duration: '12:18' },
  { title: 'Lorem Ipsum is simply dummy text', date: '1/3/2016', duration: '14:00' },
  { title: 'Lorem Ipsum is simply dummy text', date: '18/2/2016', duration: '15:03' },
  { title: 'Lorem Ipsum is simply dummy text', date: '23/11/2015', duration: '12:18' },
  { title: 'Lorem Ipsum is simply dummy text', date: '1/3/2016', duration: '14:00' },
  { title: 'Lorem Ipsum is simply dummy text', date: '18/2/2016', duration: '15:03' },
  { title: 'Lorem Ipsum is simply dummy text', date: '23/11/2015', duration: '12:18' },
  { title: 'Lorem Ipsum is simply dummy text', date: '1/3/2016', duration: '14:00' },
  { title: 'Lorem Ipsum is simply dummy text', date: '18/2/2016', duration: '15:03' },
  { title: 'Lorem Ipsum is simply dummy text', date: '23/11/2015', duration: '12:18' },
  { title: 'Lorem Ipsum is simply dummy text', date: '1/3/2016', duration: '14:00' },
  { title: 'Lorem Ipsum is simply dummy text', date: '18/2/2016', duration: '15:03' },
  { title: 'Lorem Ipsum is simply dummy text', date: '23/11/2015', duration: '12:18' },
  { title: 'Lorem Ipsum is simply dummy text', date: '1/3/2016', duration: '20:27' },
];

@Component({
  selector: 'app-episodes-table',
  templateUrl: './episodes-table.component.html',
  styleUrls: ['./episodes-table.component.scss'],
})
export class EpisodesTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['title', 'date', 'duration'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onSelectEpisode(item: PeriodicElement): void {
    alert(item.title);
  }
}

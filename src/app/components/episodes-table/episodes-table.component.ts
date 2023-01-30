import {
  Component,
  Input,
  AfterViewInit,
  ViewChild,
  OnInit,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTableDataSourcePaginator } from '@angular/material/table';
import { IGetEpiData } from 'src/app/shared/types';

@Component({
  selector: 'app-episodes-table',
  templateUrl: './episodes-table.component.html',
  styleUrls: ['./episodes-table.component.scss'],
})
export class EpisodesTableComponent implements OnInit, AfterViewInit {
  @Input() episodesData: IGetEpiData[] = [];

  displayedColumns: string[] = ['title', 'date', 'duration'];
  dataSource!: MatTableDataSource<IGetEpiData, MatTableDataSourcePaginator>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<IGetEpiData>(this.episodesData);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onSelectEpisode(item: IGetEpiData): void {
    alert(item.attributes.itunesTitle);
  }
}

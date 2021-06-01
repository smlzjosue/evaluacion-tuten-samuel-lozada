import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { GlobalService } from '../../core/services/global.service';
import { formatDate } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { SessionService } from '../../core/services/session.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
  loading = false;
  displayedColumns: string[] = ['BookingId', 'Cliente', 'Fecha de Creación', 'Dirección', 'Precio'];
  dataSource;

  constructor(private dataService: DataService, private  global: GlobalService, private sessionService: SessionService) {
    this.sessionService.getCredentials().timeLogin = new Date();
    this.sessionService.setCredentials(this.sessionService.getCredentials());
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.loading = true;
    this.dataService.getData().subscribe(
      (response: any[]) => {
        this.loading = false;
        this.fillData(response);
      },
      error => {
        const message = 'Ha ocurrido un error, intente más tarde';
        this.global.notification('Aviso', message);
      }
    );
  }

  fillData(data: any[]): void {
    let dataTable: DataTable = {
      bookingId: 0,
      name: '',
      bookingTime: '',
      streetAddress: '',
      bookingPrice: 0,
    };
    const list = [];
    data.forEach(element => {
      const firstName = element.tutenUserProfessional.tutenUser1.firstName;
      const lastName = element.tutenUserProfessional.tutenUser1.lastName;
      dataTable.name = `${firstName} ${lastName}`;
      dataTable.bookingId = element.bookingId;
      dataTable.streetAddress = element.tutenUserProfessional.streetAddress;
      dataTable.bookingPrice = element.bookingPrice;
      dataTable.bookingTime = this.formatDate(element.bookingTime);
      list.push(dataTable);
      dataTable = {
        bookingId: 0,
        name: '',
        bookingTime: '',
        streetAddress: '',
        bookingPrice: 0,
      };
    });
    this.dataSource = new MatTableDataSource(list);
  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  formatDate(dateNumber: number): string {
    return `${formatDate(dateNumber, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530').substring(0, 10)}`;
  }
}

export interface DataTable {
  bookingId: number;
  name: string;
  bookingTime: string;
  streetAddress: string;
  bookingPrice: number;
}


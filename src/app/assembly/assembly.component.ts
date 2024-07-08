import { Component, OnInit, ViewChild } from '@angular/core';
import { AssemblyDto } from '../dto/assembly-dto';
import { AssemblyService } from '../services/assembly.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog/dialog.component';

@Component({
  selector: 'app-assembly',
  templateUrl: './assembly.component.html',
  styleUrls: ['./assembly.component.css']
})
export class AssemblyComponent implements OnInit {

  constructor(
    private assemblyService: AssemblyService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    
  }

  private assembly = [];

    ASSEMBLY_DATA: AssemblyDto[] = [
      new AssemblyDto(1, 'Point A', 40.7128, -74.0060, 12345, 'Type 1', 'Active'),
      new AssemblyDto(2, 'Point B', 34.0522, -118.2437, 67890, 'Type 2', 'Inactive'),
      new AssemblyDto(3, 'Point C', 51.5074, -0.1278, 11223, 'Type 3', 'Active')
    ];

    displayedColumns: string[] = ['no', 'assemblyPoint', 'lat', 'long', 'ipAddress', 'deviceType', 'status', 'actions'];

    dataSource = new MatTableDataSource<AssemblyDto>(
      this.ASSEMBLY_DATA
    );
  
    @ViewChild(MatPaginator) paginator: MatPaginator | any;
  
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
    }
  
    getAssembly() {
      this.assemblyService
        .getAssembly('')
        .subscribe((response) => {
          this.assembly = response;
        });
    }
  
    onDelete(assemblyPoint: string): void {
      const dialogRef = this.dialog.open(DialogComponent, {
        width: '300px',
        data: {
          title: 'Delete Assembly',
          message: `Are you sure you want to delete ${assemblyPoint}?`,
          action: 'delete',
          assemblyPoint: assemblyPoint,
        }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          // Handle the result from the dialog
          console.log('Delete result:', result);
        }
      });
    }
  
    onEdit(id: string, element: any): void {
      const dialogRef = this.dialog.open(DialogComponent, {
        width: '400px',
        data: {
          title: 'Edit Assembly',
          message: 'Edit the item details below:',
          action: 'edit',
          assemblyPoint: element.assemblyPoint,
          lat: element.lat,
          long: element.long,
          ipAddress: element.ipAddress,
          deviceType: element.deviceType,
          status: element.status
        },
      });
  
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          // Handle the result from the dialog
          console.log('Edit result:', result);
        }
      });
    }
}
